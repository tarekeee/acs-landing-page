import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, Check } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { REGISTRATION_ENDPOINT } from '../content/registration-options';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './language-switcher';

interface RegistrationFormFullpageProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  birthdate: string;
  sessions: string[];
  hearAbout: string;
  needsAccommodation: boolean;
};

export function RegistrationFormFullpage({ isOpen, onClose }: RegistrationFormFullpageProps) {
  const { t, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      sessions: [],
      needsAccommodation: false,
    }
  });

  const sessions = watch('sessions') || [];

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
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        birthdate: data.birthdate,
        gender: '',
        wilaya: '',
        status: '',
        pathway: data.needsAccommodation ? 'requires accommodation' : "doesn't require accommodation",
        fieldOfInterest: '',
        sessions: data.sessions.join(', '),
        affiliation: '',
        portfolioLink: '',
        hearAbout: data.hearAbout,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (result.result === 'error') {
         throw new Error(result.message);
      }

      setIsSuccess(true);
      reset({ sessions: [] });

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);

    } catch (error) {
      console.error(error);
      setSubmitError(t.registration.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-black/10 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="text-sm sm:text-lg font-medium truncate">{t.registration.registrationFor} <img src="/logos/sahra-tech.svg" alt="Sahra Tech" className="inline-block w-8 h-8 mb-2 ml-2" /> </div>
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
      </div>

      {/* Content */}
      <div className="h-full pt-[57px] sm:pt-[73px] overflow-y-auto">
        <div className="px-4 py-8 sm:py-12">
          <div className="w-full max-w-2xl mx-auto">
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
                  {...register('sessions', {
                    validate: (value) => value.length > 0 || t.registration.sessionsError,
                  })}
                />

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

                  <div>
                    <label className="flex items-center gap-3 p-3 sm:p-4 border-2 border-black/10 rounded-xl hover:border-black/30 cursor-pointer transition-all">
                      <Checkbox
                        checked={watch('needsAccommodation')}
                        onCheckedChange={(checked) => setValue('needsAccommodation', !!checked)}
                      />
                      <span className="text-sm sm:text-base">{t.registration.needsAccommodation}</span>
                    </label>
                  </div>

                  <div className="bg-[#F5F3F0] rounded-xl p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {t.registration.consent}
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex items-center justify-end pt-6 sm:pt-8 border-t border-black/10">
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
