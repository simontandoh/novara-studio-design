import { useState } from "react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link, useNavigate } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";
import BookCallButton from "@/components/BookCallButton";

const initialFormState = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: "",
  consent: false,
};
const CONTACT_PHONE_DISPLAY = "+44 7456 849035";
const CONTACT_PHONE_LINK = "+447456849035";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const [formStartedAt] = useState(() => Date.now());

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.businessName.trim()) nextErrors.businessName = "Business name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.serviceInterest.trim()) nextErrors.serviceInterest = "Select a service path.";
    if (!formData.message.trim()) nextErrors.message = "Please include a short summary of what you need.";
    if (!formData.consent) nextErrors.consent = "Consent is required.";
    return nextErrors;
  };

  const updateField = (name: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitStatus("idle");
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (honeypot) return;

    setIsSubmitting(true);

    const payload = {
      fullName: formData.fullName,
      businessName: formData.businessName,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.serviceInterest,
      primaryGoal: formData.message,
      submittedAt: new Date().toISOString(),
      formDurationMs: Date.now() - formStartedAt,
      honeypot,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      trackEvent("form_submit_success", { form: "contact" });
      navigate("/submitted", { state: payload });
    } catch (error) {
      console.warn("Lead submission failed", error);
      trackEvent("form_submit_error", { form: "contact" });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Seo
        title="Contact Novara"
        description="Get in touch with Novara for website services, automation planning, and business IT support."
        path="/contact"
      />

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-small mb-4">Contact</p>
            <h1 className="headline-hero mb-6 text-center">Start your next step.</h1>
            <p className="body-large">
              Call us, schedule a quick introduction, or share a short brief and we&apos;ll respond
              with a clear next step.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-lg border border-border/60 bg-card/40 p-8 md:p-10">
              <h2 className="headline-secondary mb-6">Speak with us directly</h2>
              <div className="space-y-4 text-left">
                <p className="body-refined">
                  Email: <a href="mailto:hello@novarastudios.co.uk" className="underline">hello@novarastudios.co.uk</a>
                </p>
                <p className="body-refined">
                  Phone: <a href={`tel:${CONTACT_PHONE_LINK}`} className="underline">{CONTACT_PHONE_DISPLAY}</a>
                </p>
              </div>
              <div className="mt-8">
                <BookCallButton
                  location="contact_direct_card"
                  className="btn-secondary rounded-full px-6 py-2 inline-flex"
                />
                <p className="text-xs text-muted-foreground mt-3">15-minute discovery call</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-lg border border-border/60 bg-card/40 p-8 md:p-10 space-y-5" noValidate>
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="companyWebsite">Company website</label>
                <input
                  id="companyWebsite"
                  name="companyWebsite"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="fullName" className="block label-small mb-2">Full name</label>
                <input id="fullName" value={formData.fullName} onChange={(event) => updateField("fullName", event.target.value)} className="w-full bg-transparent border border-border/60 rounded-xl p-3" />
                {errors.fullName && <p className="text-xs text-accent mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="businessName" className="block label-small mb-2">Business name</label>
                <input id="businessName" value={formData.businessName} onChange={(event) => updateField("businessName", event.target.value)} className="w-full bg-transparent border border-border/60 rounded-xl p-3" />
                {errors.businessName && <p className="text-xs text-accent mt-1">{errors.businessName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block label-small mb-2">Email</label>
                <input id="email" type="email" value={formData.email} onChange={(event) => updateField("email", event.target.value)} className="w-full bg-transparent border border-border/60 rounded-xl p-3" />
                {errors.email && <p className="text-xs text-accent mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block label-small mb-2">Phone (optional)</label>
                <input id="phone" type="tel" value={formData.phone} onChange={(event) => updateField("phone", event.target.value)} className="w-full bg-transparent border border-border/60 rounded-xl p-3" />
              </div>

              <div>
                <label htmlFor="serviceInterest" className="block label-small mb-2">Service path</label>
                <select id="serviceInterest" value={formData.serviceInterest} onChange={(event) => updateField("serviceInterest", event.target.value)} className="w-full bg-card border border-border/60 rounded-xl p-3 text-foreground appearance-none cursor-pointer [&>option]:bg-card [&>option]:text-foreground" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23788CA0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                  <option value="">Select service</option>
                  <option value="Websites & Automation">Websites &amp; Automation</option>
                  <option value="IT Support">IT Support</option>
                </select>
                {errors.serviceInterest && <p className="text-xs text-accent mt-1">{errors.serviceInterest}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block label-small mb-2">What are you looking to solve?</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="w-full bg-transparent border border-border/60 rounded-xl p-3 min-h-[120px]"
                  placeholder="Briefly tell us what you need, what stage you are at, and any deadline."
                />
                {errors.message && <p className="text-xs text-accent mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <input id="consent" type="checkbox" checked={formData.consent} onChange={(event) => updateField("consent", event.target.checked)} />
                <label htmlFor="consent" className="text-sm text-muted-foreground">I consent to Novara contacting me about this enquiry.</label>
              </div>
              {errors.consent && <p className="text-xs text-accent">{errors.consent}</p>}

              <button type="submit" disabled={isSubmitting} className="btn-primary rounded-full px-7 py-3 disabled:opacity-70">
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              <p className="text-xs text-muted-foreground">
                We aim to respond within one working day with a clear next step.
              </p>

              <p className="text-xs text-muted-foreground">
                By continuing, you agree to our <Link className="underline" to="/privacy-policy">Privacy Policy</Link>.
              </p>

              {submitStatus === "error" && (
                <p className="text-sm text-accent" role="alert">
                  We could not send that right now. Please email hello@novarastudios.co.uk.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
