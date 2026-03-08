import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, ChevronRight, ChevronLeft, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { ALGERIAN_WILAYAS, GENDER_OPTIONS, REGISTRATION_ENDPOINT } from '../content/registration-options';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './language-switcher';

interface RegistrationFormFullpageProps {
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

export function RegistrationFormFullpage({ isOpen, onClose }: RegistrationFormFullpageProps) {
  const { t, isRTL } = useLanguage();
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
    { value: 'trailblazer', emoji: '🚀' },
    { value: 'architect', emoji: '🏗️' },
    { value: 'catalyst', emoji: '⚡' },
    { value: 'navigator', emoji: '🧭' }
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
    if (!value) return 'Please enter your birthdate';
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
      setSubmitError(t.registration.submitError);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-black/10 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="text-sm sm:text-lg font-medium truncate">{t.registration.registrationFor} <img src="/logos/sahra-tech.svg" alt="Sahra Tech" className="inline-block w-8 h-8 mb-2 ml-2" /> </div>
            {!isSuccess && (
              <div className="flex sm:hidden items-center gap-2 text-xs text-muted-foreground flex-shrink-0">
                <span>{currentStep}/3</span>
              </div>
            )}
            {!isSuccess && (
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <span>{t.registration.step} {currentStep} {t.registration.of} 3</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <LanguageSwitcher />
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 hover:bg-black/5 rounded-lg transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        {!isSuccess && (
          <div className="h-1 bg-black/5">
            <div 
              className="h-full bg-black transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="h-full pt-[57px] sm:pt-[73px] overflow-y-auto">
        <div className="min-h-[calc(100vh-57px)] sm:min-h-[calc(100vh-73px)] flex items-center justify-center px-4 py-8 sm:py-12">
          <div className="w-full max-w-2xl">
            {isSuccess ? (
              <div className="text-center py-12 sm:py-20 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl px-4">{t.registration.successTitle}</h1>
                <p className="text-muted-foreground text-base sm:text-lg mb-2 px-4">
                  {t.registration.successMessage}
                </p>
                <p className="text-muted-foreground text-sm sm:text-base px-4">
                  {t.registration.successNote}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <input
                  type="hidden"
                  {...register('fieldOfInterest', {
                    validate: (value) => value.length > 0 || t.registration.interestsError,
                  })}
                />
                <input
                  type="hidden"
                  {...register('sessions', {
                    validate: (value) => value.length > 0 || t.registration.sessionsError,
                  })}
                />
                {/* Step 1: Who are you? */}
                {currentStep === 1 && (
                  <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div>
                      <h1 className="mb-2 text-2xl sm:text-3xl">{t.registration.step1Title}</h1>
                      <p className="text-muted-foreground text-sm sm:text-base">{t.registration.step1Subtitle}</p>
                    </div>

                    <div className="space-y-5 sm:space-y-6">
                      <div>
                        <Label htmlFor="fullName" className="text-sm sm:text-base">{t.registration.fullName}</Label>
                        <Input
                          id="fullName"
                          {...register('fullName', {
                            required: t.registration.fullNameError,
                            pattern: {
                              value: fullNamePattern,
                              message: t.registration.fullNameInvalid,
                            },
                          })}
                          placeholder={t.registration.fullNamePlaceholder}
                          className="mt-2 h-11 sm:h-12 text-base sm:text-lg"
                          autoFocus
                        />
                        {errors.fullName && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.fullName.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-sm sm:text-base">{t.registration.phone}</Label>
                        <Input
                          id="phone"
                          {...register('phone', {
                            required: t.registration.phoneError,
                            pattern: {
                              value: phonePattern,
                              message: t.registration.phoneInvalid,
                            },
                          })}
                          placeholder={t.registration.phonePlaceholder}
                          className="mt-2 h-11 sm:h-12 text-base sm:text-lg"
                        />
                        {errors.phone && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm sm:text-base">{t.registration.emailLabel}</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email', {
                            required: t.registration.emailError,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: t.registration.emailInvalid
                            }
                          })}
                          placeholder={t.registration.emailPlaceholder}
                          className="mt-2 h-11 sm:h-12 text-base sm:text-lg"
                        />
                        {errors.email && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="birthdate" className="text-sm sm:text-base">{t.registration.birthdate}</Label>
                        {isRTL && (
                          <style>{`
                            #birthdate {
                              display: flex !important;
                              flex-direction: row-reverse !important;
                              justify-content: space-between !important;
                              align-items: center !important;
                              width: 100% !important;
                            }
                            #birthdate::-webkit-datetime-edit {
                              text-align: right !important;
                            }
                            #birthdate::-webkit-calendar-picker-indicator {
                              margin: 0 !important;
                            }
                          `}</style>
                        )}
                        <Input
                          id="birthdate"
                          type="date"
                          {...register('birthdate', { validate: validateBirthdate })}
                          className="mt-2 h-11 sm:h-12 text-base sm:text-lg"
                        />
                        {errors.birthdate && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.birthdate.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="gender" className="text-sm sm:text-base">{t.registration.gender}</Label>
                        <select
                          id="gender"
                          {...register('gender', { required: t.registration.genderError })}
                          className="w-full mt-2 h-11 sm:h-12 px-3 sm:px-4 text-base sm:text-lg border-2 border-black/10 rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all"
                        >
                          <option value="">{t.registration.genderPlaceholder}</option>
                          {GENDER_OPTIONS.map((gender) => (
                            <option key={gender} value={gender}>
                              {gender}
                            </option>
                          ))}
                        </select>
                        {errors.gender && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.gender.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="wilaya" className="text-sm sm:text-base">{t.registration.wilaya}</Label>
                        <select
                          id="wilaya"
                          {...register('wilaya', { required: t.registration.wilayaError })}
                          className="w-full mt-2 h-11 sm:h-12 px-3 sm:px-4 text-base sm:text-lg border-2 border-black/10 rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all"
                        >
                          <option value="">{t.registration.wilayaPlaceholder}</option>
                          {ALGERIAN_WILAYAS.map((wilaya) => (
                            <option key={wilaya} value={wilaya}>
                              {wilaya}
                            </option>
                          ))}
                        </select>
                        {errors.wilaya && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.wilaya.message}</p>
                        )}
                      </div>

                      <div>
                        <Label className="text-sm sm:text-base">{t.registration.status}</Label>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3">
                          {t.registration.statusOptions.map((status) => (
                            <label
                              key={status}
                              className={`border-2 rounded-xl p-3 sm:p-4 cursor-pointer transition-all hover:border-black/30 ${
                                watch('status') === status
                                  ? 'border-black bg-black text-white'
                                  : 'border-black/10'
                              }`}
                            >
                              <input
                                type="radio"
                                {...register('status', { required: t.registration.statusError })}
                                value={status}
                                className="sr-only"
                              />
                              <span className="font-medium text-sm sm:text-base">{status}</span>
                            </label>
                          ))}
                        </div>
                        {errors.status && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.status.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Your Path */}
                {currentStep === 2 && (
                  <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div>
                      <h1 className="mb-2 text-2xl sm:text-3xl">{t.registration.step2Title}</h1>
                      <p className="text-muted-foreground text-sm sm:text-base">{t.registration.step2Subtitle}</p>
                    </div>

                    <div className="space-y-5 sm:space-y-6">
                      <div>
                        <Label className="text-sm sm:text-base">{t.registration.pathway}</Label>
                        <div className="grid gap-2 sm:gap-3 mt-3">
                          {pathwayOptions.map((pathway, index) => (
                            <label
                              key={pathway.value}
                              className={`border-2 rounded-xl p-4 sm:p-5 cursor-pointer transition-all hover:border-black/30 ${
                                watch('pathway') === pathway.value
                                  ? 'border-black bg-black/5'
                                  : 'border-black/10'
                              }`}
                            >
                              <input
                                type="radio"
                                {...register('pathway', { required: t.registration.pathwayError })}
                                value={pathway.value}
                                className="sr-only"
                              />
                              <div className="flex items-start gap-2 sm:gap-3">
                                <span className="text-xl sm:text-2xl">{pathway.emoji}</span>
                                <div>
                                  <div className="font-medium mb-1 text-sm sm:text-base">{t.registration.pathwayOptions[index].label}</div>
                                  <div className="text-xs sm:text-sm text-muted-foreground">{t.registration.pathwayOptions[index].description}</div>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.pathway && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.pathway.message}</p>
                        )}
                      </div>

                      <div>
                        <Label className="text-sm sm:text-base">{t.registration.interests}</Label>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {interestOptions.map((interest) => (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggleArrayValue(fieldOfInterest, interest, setValue, 'fieldOfInterest')}
                              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 transition-all text-sm sm:text-base ${
                                fieldOfInterest.includes(interest)
                                  ? 'bg-black text-white border-black'
                                  : 'border-black/10 hover:border-black/30'
                              }`}
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                        {errors.fieldOfInterest && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.fieldOfInterest.message}</p>
                        )}
                      </div>

                      <div>
                        <Label className="text-sm sm:text-base">{t.registration.sessions}</Label>
                        <div className="space-y-2 mt-3">
                          {sessionOptions.map((session) => (
                            <label
                              key={session}
                              className="flex items-center gap-3 p-3 sm:p-4 border-2 border-black/10 rounded-xl hover:border-black/30 cursor-pointer transition-all"
                            >
                              <Checkbox
                                checked={sessions.includes(session)}
                                onCheckedChange={() => toggleArrayValue(sessions, session, setValue, 'sessions')}
                              />
                              <span className="text-sm sm:text-base">{session}</span>
                            </label>
                          ))}
                        </div>
                        {errors.sessions && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.sessions.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Your Proof */}
                {currentStep === 3 && (
                  <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div>
                      <h1 className="mb-2 text-2xl sm:text-3xl">{t.registration.step3Title}</h1>
                      <p className="text-muted-foreground text-sm sm:text-base">{t.registration.step3Subtitle}</p>
                    </div>

                    <div className="space-y-5 sm:space-y-6">
                      <div>
                        <Label htmlFor="affiliation" className="text-sm sm:text-base">
                          {t.registration.affiliation}
                        </Label>
                        <Input
                          id="affiliation"
                          {...register('affiliation')}
                          placeholder={t.registration.affiliationPlaceholder}
                          className="mt-2 h-11 sm:h-12 text-base sm:text-lg"
                        />
                        <p className="text-xs text-muted-foreground mt-2">{t.registration.optional}</p>
                      </div>

                      <div>
                        <Label htmlFor="portfolioLink" className="text-sm sm:text-base">
                          {t.registration.portfolio}
                        </Label>
                        <Input
                          id="portfolioLink"
                          {...register('portfolioLink', {
                            pattern: {
                              value: /^https?:\/\/.+/i,
                              message: t.registration.portfolioError,
                            },
                          })}
                          placeholder={t.registration.portfolioPlaceholder}
                          className="mt-2 h-11 sm:h-12 text-base sm:text-lg"
                        />
                        <p className="text-xs text-muted-foreground mt-2">{t.registration.optional}</p>
                        {errors.portfolioLink && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.portfolioLink.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="hearAbout" className="text-sm sm:text-base">{t.registration.hearAbout}</Label>
                        <select
                          id="hearAbout"
                          {...register('hearAbout', { required: t.registration.hearAboutError })}
                          className="w-full mt-2 h-11 sm:h-12 px-3 sm:px-4 text-base sm:text-lg border-2 border-black/10 rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all"
                        >
                          <option value="">{t.registration.hearAboutPlaceholder}</option>
                          {t.registration.hearAboutOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.hearAbout && (
                          <p className="text-xs sm:text-sm text-[#FF5722] mt-2">{errors.hearAbout.message}</p>
                        )}
                      </div>

                      <div className="bg-[#F5F3F0] rounded-xl p-4 sm:p-5 mt-6 sm:mt-8">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {t.registration.consent}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 sm:pt-8 border-t border-black/10">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-black/10 rounded-xl hover:border-black/30 transition-all flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                    >
                      {isRTL ? <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />}
                      <span className="font-medium">{t.registration.back}</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-4 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-all flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                    >
                      <span className="font-medium">{t.registration.continue}</span>
                      {isRTL ? <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> : <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </button>
                  ) : (
                      <div className="flex flex-col items-end gap-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-5 sm:px-8 py-2.5 sm:py-3 bg-[#FF5722] text-white rounded-xl hover:bg-[#E64A19] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                        >
                          <span className="font-medium">
                            {isSubmitting ? t.registration.submitting : t.registration.completeRegistration}
                          </span>
                          {!isSubmitting && <Check className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </button>
                      </div>
                  )}
                </div>
                {submitError && (
                  <p className="text-xs sm:text-sm text-[#FF5722] text-end mt-2">{submitError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
