import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { ALGERIAN_WILAYAS, GENDER_OPTIONS, REGISTRATION_ENDPOINT } from '../content/registration-options';

interface RegistrationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  // Step 1
  fullName: string;
  phone: string;
  email: string;
  birthdate: string;
  gender: string;
  wilaya: string;
  status: string;
  // Step 2
  pathway: string;
  fieldOfInterest: string[];
  sessions: string[];
  // Step 3
  affiliation: string;
  portfolioLink: string;
  hearAbout: string;
};

export function RegistrationFormModal({ isOpen, onClose }: RegistrationFormModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const { register, handleSubmit, watch, setValue, reset, trigger, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      fieldOfInterest: [],
      sessions: [],
      gender: '',
      wilaya: '',
    }
  });

  const fieldOfInterest = watch('fieldOfInterest') || [];
  const sessions = watch('sessions') || [];

  const statusOptions = ['Student', 'Freelancer', 'Entrepreneur', 'Professional'];
  const pathwayOptions = [
    { value: 'trailblazer', label: 'Trailblazer', description: 'Pioneer new paths in technology' },
    { value: 'architect', label: 'Architect', description: 'Design and build systems' },
    { value: 'catalyst', label: 'Catalyst', description: 'Drive change and innovation' },
    { value: 'navigator', label: 'Navigator', description: 'Guide teams and projects' }
  ];
  const interestOptions = ['AI', 'Cybersecurity', 'Robotics', 'Entrepreneurship', 'Community'];
  const sessionOptions = [
    'AI Fundamentals in Business Workshop',
    'Web Security Essentials',
    'Reversing Mobile applications for fun and profits',
    'Forensic Memory Analysis: Uncovering Digital Footprints in RAM',
    'Gaming Demo & Hands-on',
    'Robotics Foundations Workshop',
    'Robotics & Intelligent Systems Workshop',
    'Community Building Strategies',
    'Panel Discussions',
    'Speed Networking Session'
  ];

  const hearAboutOptions = [
    'Social Media',
    'Friend/Colleague',
    'University/School',
    'Previous ACS Event',
    'Website',
    'Other'
  ];

  const phonePattern = /^\s*(?:\+213|0)(?:[\s-]?[5-7])(?:[\s-]?\d){8}\s*$/;
  const fullNamePattern = /^[A-Za-z\s'-]{3,}$/;
  const validateBirthdate = (value: string) => {
    if (!value) return 'Birthdate is required';
    const birthDate = new Date(value);
    const today = new Date();
    if (birthDate > today) return 'Birthdate cannot be in the future';

    const age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthday =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    const finalAge = hasHadBirthday ? age : age - 1;

    return finalAge >= 12 || 'You must be at least 12 years old';
  };

  const toggleArrayValue = (array: string[], value: string, setValue: any, fieldName: keyof FormData) => {
    const newArray = array.includes(value)
      ? array.filter(v => v !== value)
      : [...array, value];
    setValue(fieldName, newArray, { shouldValidate: true, shouldDirty: true });
  };

      const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        // ... your existing payload mapping ...
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        birthdate: data.birthdate,
        gender: data.gender,
        wilaya: data.wilaya,
        status: data.status,
        pathway: data.pathway,
        fieldOfInterest: data.fieldOfInterest.join(', '),
        sessions: data.sessions.join(', '),
        affiliation: data.affiliation,
        portfolioLink: data.portfolioLink,
        hearAbout: data.hearAbout,
        submittedAt: new Date().toISOString(),
      };

      // CHANGE IS HERE: Prepend the proxy URL
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // You can now actually check the response because CORS is gone!
      const result = await response.json();
      
      if (result.result === 'error') {
         throw new Error(result.message);
      }

      setIsSuccess(true);
      reset({ fieldOfInterest: [], sessions: [], gender: '', wilaya: '' });

      setTimeout(() => {
        setIsSuccess(false);
        setCurrentStep(1);
        onClose();
      }, 2000);

    } catch (error) {
      console.error(error);
      setSubmitError('Could not submit your registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fieldsByStep: Record<number, Array<keyof FormData>> = {
      1: ['fullName', 'phone', 'email', 'birthdate', 'gender', 'wilaya', 'status'],
      2: ['pathway', 'fieldOfInterest', 'sessions'],
      3: ['hearAbout'],
    };

    const isStepValid = await trigger(fieldsByStep[currentStep]);
    if (isStepValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleClose = () => {
    setCurrentStep(1);
    setIsSuccess(false);
    setSubmitError(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="mb-2">Registration Successful! 🎉</h3>
            <p className="text-muted-foreground">
              We've received your registration. Check your email for confirmation details.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>Event Registration</span>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </DialogTitle>
              <DialogDescription>
                Register for ACS Sahra Tech 2026 - March 12th at the Youth House Abderehman Lalaa
              </DialogDescription>
            </DialogHeader>

            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                        currentStep >= step
                          ? 'bg-[#FF5722] border-[#FF5722] text-white'
                          : 'border-gray-300 text-gray-400'
                      }`}
                    >
                      {step}
                    </div>
                    <div className={`mt-2 text-xs ${currentStep >= step ? 'text-[#FF5722]' : 'text-gray-400'}`}>
                      {step === 1 ? 'Who are you?' : step === 2 ? 'Your Path' : 'Your Proof'}
                    </div>
                  </div>
                  {step < 3 && (
                    <div
                      className={`h-0.5 flex-1 transition-colors ${
                        currentStep > step ? 'bg-[#FF5722]' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="hidden"
                {...register('fieldOfInterest', {
                  validate: (value) => value.length > 0 || 'Select at least one field of interest',
                })}
              />
              <input
                type="hidden"
                {...register('sessions', {
                  validate: (value) => value.length > 0 || 'Select at least one session',
                })}
              />
              {/* Step 1: Who are you? */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      {...register('fullName', {
                        required: 'Full name is required',
                      })}
                      placeholder="Enter your full name"
                      className="mt-1.5"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone (WhatsApp) *</Label>
                    <Input
                      id="phone"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: phonePattern,
                          message: 'Use a valid Algerian phone number (e.g., +213 5XX XXX XXX)',
                        },
                      })}
                      placeholder="+213 XXX XXX XXX"
                      className="mt-1.5"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      placeholder="your.email@example.com"
                      className="mt-1.5"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="birthdate">Birthdate *</Label>
                    <Input
                      id="birthdate"
                      type="date"
                      {...register('birthdate', { validate: validateBirthdate })}
                      className="mt-1.5"
                    />
                    {errors.birthdate && (
                      <p className="text-sm text-red-500 mt-1">{errors.birthdate.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <select
                      id="gender"
                      {...register('gender', { required: 'Gender is required' })}
                      className="w-full mt-1.5 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722]/20 focus:border-[#FF5722]"
                    >
                      <option value="">Select gender</option>
                      {GENDER_OPTIONS.map((gender) => (
                        <option key={gender} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </select>
                    {errors.gender && (
                      <p className="text-sm text-red-500 mt-1">{errors.gender.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="wilaya">Wilaya *</Label>
                    <select
                      id="wilaya"
                      {...register('wilaya', { required: 'Wilaya is required' })}
                      className="w-full mt-1.5 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722]/20 focus:border-[#FF5722]"
                    >
                      <option value="">Select your wilaya</option>
                      {ALGERIAN_WILAYAS.map((wilaya) => (
                        <option key={wilaya} value={wilaya}>
                          {wilaya}
                        </option>
                      ))}
                    </select>
                    {errors.wilaya && (
                      <p className="text-sm text-red-500 mt-1">{errors.wilaya.message}</p>
                    )}
                  </div>

                  <div>
                    <Label>Status *</Label>
                    <div className="grid grid-cols-2 gap-3 mt-1.5">
                      {statusOptions.map((status) => (
                        <label
                          key={status}
                          className={`border rounded-lg p-3 cursor-pointer transition-all ${
                            watch('status') === status
                              ? 'border-[#FF5722] bg-[#FF5722]/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            {...register('status', { required: 'Status is required' })}
                            value={status}
                            className="sr-only"
                          />
                          <span className="font-medium">{status}</span>
                        </label>
                      ))}
                    </div>
                    {errors.status && (
                      <p className="text-sm text-red-500 mt-1">{errors.status.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Your Path */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label>Which pathway fits you? *</Label>
                    <div className="grid gap-3 mt-1.5">
                      {pathwayOptions.map((pathway) => (
                        <label
                          key={pathway.value}
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            watch('pathway') === pathway.value
                              ? 'border-[#FF5722] bg-[#FF5722]/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            {...register('pathway', { required: 'Pathway is required' })}
                            value={pathway.value}
                            className="sr-only"
                          />
                          <div className="font-medium mb-1">{pathway.label}</div>
                          <div className="text-sm text-muted-foreground">{pathway.description}</div>
                        </label>
                      ))}
                    </div>
                    {errors.pathway && (
                      <p className="text-sm text-red-500 mt-1">{errors.pathway.message}</p>
                    )}
                  </div>

                  <div>
                    <Label>Field of Interest *</Label>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {interestOptions.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleArrayValue(fieldOfInterest, interest, setValue, 'fieldOfInterest')}
                          className={`px-4 py-2 rounded-full border transition-all ${
                            fieldOfInterest.includes(interest)
                              ? 'bg-[#FF5722] text-white border-[#FF5722]'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                    {errors.fieldOfInterest && (
                      <p className="text-sm text-red-500 mt-1">{errors.fieldOfInterest.message}</p>
                    )}
                  </div>

                  <div>
                    <Label>Sessions you want to attend *</Label>
                    <div className="space-y-2 mt-1.5">
                      {sessionOptions.map((session) => (
                        <label
                          key={session}
                          className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                        >
                          <Checkbox
                            checked={sessions.includes(session)}
                            onCheckedChange={() => toggleArrayValue(sessions, session, setValue, 'sessions')}
                          />
                          <span>{session}</span>
                        </label>
                      ))}
                    </div>
                    {errors.sessions && (
                      <p className="text-sm text-red-500 mt-1">{errors.sessions.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Your Proof */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="affiliation">Club or Organization Affiliation</Label>
                    <Input
                      id="affiliation"
                      {...register('affiliation')}
                      placeholder="e.g., Google Developer Group, IEEE Student Branch"
                      className="mt-1.5"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Optional</p>
                  </div>

                  <div>
                    <Label htmlFor="portfolioLink">LinkedIn / Portfolio Link</Label>
                    <Input
                      id="portfolioLink"
                      {...register('portfolioLink', {
                        pattern: {
                          value: /^https?:\/\/.+/i,
                          message: 'Please enter a valid URL starting with http:// or https://',
                        },
                      })}
                      placeholder="https://linkedin.com/in/yourprofile or https://yourportfolio.com"
                      className="mt-1.5"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Optional</p>
                    {errors.portfolioLink && (
                      <p className="text-sm text-red-500 mt-1">{errors.portfolioLink.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="hearAbout">How did you hear about this event? *</Label>
                    <select
                      id="hearAbout"
                      {...register('hearAbout', { required: 'Please tell us how you heard about this' })}
                      className="w-full mt-1.5 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722]/20 focus:border-[#FF5722]"
                    >
                      <option value="">Select an option</option>
                      {hearAboutOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.hearAbout && (
                      <p className="text-sm text-red-500 mt-1">{errors.hearAbout.message}</p>
                    )}
                  </div>

                  <div className="bg-[#F5F3F0] rounded-lg p-4 mt-6">
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you agree to receive event updates and communications from ACS.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-muted transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-[#FF5722] text-white rounded-lg hover:bg-[#E64A19] transition-colors flex items-center gap-2 ml-auto"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="ml-auto flex flex-col items-end gap-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-2 bg-[#FF5722] text-white rounded-lg hover:bg-[#E64A19] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                    </button>
                    {submitError && <p className="text-sm text-red-500">{submitError}</p>}
                  </div>
                )}
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
