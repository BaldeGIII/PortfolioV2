import { useState, useEffect, useRef } from "react";
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
    <section className="py-32 md:py-40 bg-slate-950 -mt-16 pt-32" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-base font-mono text-slate-500 uppercase tracking-widest mb-12 text-center">
          Contact
        </h2>

        <div className="max-w-xl mx-auto">
          {submitStatus === "success" && (
            <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
              Message sent successfully!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
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
                className="w-full bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2
                          focus:outline-none focus:border-blue-500 transition-colors"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">
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
                className="w-full bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2
                          focus:outline-none focus:border-blue-500 transition-colors"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">
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
                className="w-full bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2
                          focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">
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
                        hover:border-blue-500 hover:text-blue-400 disabled:opacity-50 
                        disabled:hover:border-slate-700 disabled:hover:text-slate-300
                        transition-colors text-base"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
