import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Auto-hide success/error messages after 5 seconds
  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const onSubmit = async (data: FormData) => {
    if (!captchaToken) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          "g-recaptcha-response": captchaToken,
        },
        import.meta.env.VITE_EMAILJS_USER_ID!
      );
      setSubmitStatus("success");
      reset();
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (submitStatus === "error") {
      setSubmitStatus("idle");
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`py-32 md:py-40 bg-slate-950 -mt-16 pt-32 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      id="contact"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-base font-mono text-slate-500 uppercase tracking-widest mb-12 text-center transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          Contact
        </h2>

        <div className="max-w-xl mx-auto">
          {submitStatus === "success" && (
            <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm animate-slide-down flex items-center gap-2">
              <svg className="w-5 h-5 animate-scale-in" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Message sent successfully!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-shake flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {!captchaToken
                ? "Please complete the CAPTCHA verification."
                : "Failed to send message. Please try again."}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-slate-400 mb-2"
              >
                Name
              </label>
              <input
                {...register("name")}
                id="name"
                className={`w-full bg-slate-900 border text-slate-300 px-4 py-2
                          focus:outline-none focus:border-blue-500 transition-colors ${
                            errors.name ? 'border-red-500 animate-shake' : 'border-slate-800'
                          }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400 animate-slide-down">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-slate-400 mb-2"
              >
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className={`w-full bg-slate-900 border text-slate-300 px-4 py-2
                          focus:outline-none focus:border-blue-500 transition-colors ${
                            errors.email ? 'border-red-500 animate-shake' : 'border-slate-800'
                          }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 animate-slide-down">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-slate-400 mb-2"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                className={`w-full bg-slate-900 border text-slate-300 px-4 py-2
                          focus:outline-none focus:border-blue-500 transition-colors resize-none ${
                            errors.message ? 'border-red-500 animate-shake' : 'border-slate-800'
                          }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400 animate-slide-down">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex justify-center my-6">
              <div className="transform scale-100">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY!}
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !captchaToken}
              className="w-full py-3 bg-slate-900 border border-slate-700 text-slate-300
                        hover:border-blue-500 hover:text-blue-400 hover:scale-[1.02] disabled:opacity-50
                        disabled:hover:border-slate-700 disabled:hover:text-slate-300 disabled:hover:scale-100
                        transition-all duration-200 text-base flex items-center justify-center gap-2"
            >
              {isSubmitting && (
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
