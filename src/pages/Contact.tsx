import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { trackEvent } from "@/lib/analytics";

const whatsappNumber = "447456849035";

const industryOptions = [
  "Automotive",
  "Beauty & Wellness",
  "Construction/Trades",
  "E-commerce",
  "Education/Training",
  "Entertainment/Media",
  "Fitness",
  "Healthcare",
  "Hospitality/Food",
  "Manufacturing",
  "Non-profit",
  "Professional Services",
  "Real Estate",
  "Retail (In-store)",
  "Technology/SaaS",
  "Other",
];

const initialFormState = {
  fullName: "",
  businessName: "",
  email: "",
  industry: "",
  primaryObjective: "",
  brandIntention: "",
  corePages: "",
  designReferences: "",
  brandAssetsLogo: false,
  brandAssetsPhotos: false,
  brandAssetsVideos: false,
  consent: false,
};

const Contact = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState(initialFormState);
  const [honeypot, setHoneypot] = useState("");
  const [formStartedAt] = useState(() => Date.now());

  useEffect(() => {
    const saved = localStorage.getItem("novaraContactDraft");
    if (saved) {
      setFormData((prev) => ({ ...prev, ...(JSON.parse(saved) as typeof prev) }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("novaraContactDraft", JSON.stringify(formData));
  }, [formData]);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.businessName.trim()) nextErrors.businessName = "Business name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!formData.industry.trim()) nextErrors.industry = "Industry is required.";
    if (!formData.primaryObjective.trim()) nextErrors.primaryObjective = "Primary objective is required.";
    if (!formData.brandIntention.trim()) nextErrors.brandIntention = "Brand intention is required.";
    if (!formData.corePages.trim()) nextErrors.corePages = "Core pages are required.";
    if (!formData.designReferences.trim()) nextErrors.designReferences = "Design references are required.";
    if (!formData.consent) nextErrors.consent = "Consent is required.";
    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitStatus("idle");
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }
    if (honeypot) {
      setSubmitStatus("success");
      return;
    }
    setIsSubmitting(true);
    const payload = {
      fullName: formData.fullName,
      businessName: formData.businessName,
      email: formData.email,
      industry: formData.industry,
      primaryGoal: formData.primaryObjective,
      brandIntention: formData.brandIntention,
      pagesNeeded: formData.corePages,
      styleRefs: formData.designReferences,
      brandAssets: {
        logo: formData.brandAssetsLogo,
        photos: formData.brandAssetsPhotos,
        videos: formData.brandAssetsVideos,
      },
      submittedAt: new Date().toISOString(),
      formDurationMs: Date.now() - formStartedAt,
      honeypot,
    };
    localStorage.setItem("novaraContactSubmission", JSON.stringify(payload, null, 2));
    localStorage.removeItem("novaraContactDraft");
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
      setSubmitStatus("success");
      setSubmitted(true);
      navigate("/submitted", { state: payload });
    } catch (error) {
      console.warn("Lead submission failed", error);
      trackEvent("form_submit_error", { form: "contact" });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (name: string, value: string | boolean | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <Seo
        title="Contact"
        description="Begin a private consultation with Novara Studios."
        path="/contact"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto">
            <p className="label-small mb-4">Contact</p>
            <h1 className="headline-hero mb-6">Private intake.</h1>
            <p className="body-large">A quiet first step. We respond with clarity.</p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-editorial grid lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block label-small mb-3">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground text-center"
                    placeholder="Your name"
                    required
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="businessName" className="block label-small mb-3">
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    autoComplete="organization"
                    value={formData.businessName}
                    onChange={(event) => updateField("businessName", event.target.value)}
                    aria-invalid={Boolean(errors.businessName)}
                    aria-describedby={errors.businessName ? "businessName-error" : undefined}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground text-center"
                    placeholder="Brand or company"
                    required
                  />
                  {errors.businessName && (
                    <p id="businessName-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.businessName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block label-small mb-3">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onBlur={() => {
                      if (formData.email && !isValidEmail(formData.email)) {
                        setErrors((prev) => ({
                          ...prev,
                          email: "Enter a valid email address",
                        }));
                      }
                    }}
                    onChange={(event) => {
                      updateField("email", event.target.value);
                      if (errors.email) {
                        setErrors((prev) => ({ ...prev, email: "" }));
                      }
                    }}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground text-center"
                    placeholder="Primary contact email"
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="industry" className="block label-small mb-3">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={(event) => updateField("industry", event.target.value)}
                    aria-invalid={Boolean(errors.industry)}
                    aria-describedby={errors.industry ? "industry-error" : undefined}
                    className="select-pill text-center"
                    required
                  >
                    <option value="" className="bg-background text-foreground">
                      Choose your industry
                    </option>
                    {industryOptions.map((option) => (
                      <option key={option} value={option} className="bg-background text-foreground">
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p id="industry-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.industry}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="primaryObjective" className="block label-small mb-3">
                    Primary Objective
                  </label>
                  <textarea
                    id="primaryObjective"
                    name="primaryObjective"
                    value={formData.primaryObjective}
                    onChange={(event) => updateField("primaryObjective", event.target.value)}
                    aria-invalid={Boolean(errors.primaryObjective)}
                    aria-describedby={errors.primaryObjective ? "primaryObjective-error" : undefined}
                    className="w-full bg-transparent border border-border/60 rounded-2xl p-4 focus:border-foreground focus:outline-none transition-colors text-foreground text-center min-h-[120px]"
                    placeholder="What are you looking to achieve?"
                    required
                  />
                  {errors.primaryObjective && (
                    <p id="primaryObjective-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.primaryObjective}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="brandIntention" className="block label-small mb-3">
                    Brand Intention
                  </label>
                  <textarea
                    id="brandIntention"
                    name="brandIntention"
                    value={formData.brandIntention}
                    onChange={(event) => updateField("brandIntention", event.target.value)}
                    aria-invalid={Boolean(errors.brandIntention)}
                    aria-describedby={errors.brandIntention ? "brandIntention-error" : undefined}
                    className="w-full bg-transparent border border-border/60 rounded-2xl p-4 focus:border-foreground focus:outline-none transition-colors text-foreground text-center min-h-[120px]"
                    placeholder="Describe the feeling your brand should evoke"
                    required
                  />
                  {errors.brandIntention && (
                    <p id="brandIntention-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.brandIntention}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="corePages" className="block label-small mb-3">
                    Core Pages
                  </label>
                  <textarea
                    id="corePages"
                    name="corePages"
                    value={formData.corePages}
                    onChange={(event) => updateField("corePages", event.target.value)}
                    aria-invalid={Boolean(errors.corePages)}
                    aria-describedby={errors.corePages ? "corePages-error" : undefined}
                    className="w-full bg-transparent border border-border/60 rounded-2xl p-4 focus:border-foreground focus:outline-none transition-colors text-foreground text-center min-h-[110px]"
                    placeholder="Pages you believe you’ll need (e.g. Home, About, Services)"
                    required
                  />
                  {errors.corePages && (
                    <p id="corePages-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.corePages}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="designReferences" className="block label-small mb-3">
                    Design References
                  </label>
                  <textarea
                    id="designReferences"
                    name="designReferences"
                    value={formData.designReferences}
                    onChange={(event) => updateField("designReferences", event.target.value)}
                    aria-invalid={Boolean(errors.designReferences)}
                    aria-describedby={errors.designReferences ? "designReferences-error" : undefined}
                    className="w-full bg-transparent border border-border/60 rounded-2xl p-4 focus:border-foreground focus:outline-none transition-colors text-foreground text-center min-h-[110px]"
                    placeholder="Websites, visuals, or brands you admire"
                    required
                  />
                  {errors.designReferences && (
                    <p id="designReferences-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.designReferences}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <p className="label-small mb-3">Existing Brand Assets</p>
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center">
                  <label className="flex items-center gap-2">
                    <input
                      name="brandAssetsLogo"
                      type="checkbox"
                      checked={formData.brandAssetsLogo}
                      onChange={(event) => updateField("brandAssetsLogo", event.target.checked)}
                    />
                    Logo
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      name="brandAssetsPhotos"
                      type="checkbox"
                      checked={formData.brandAssetsPhotos}
                      onChange={(event) => updateField("brandAssetsPhotos", event.target.checked)}
                    />
                    Photography
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      name="brandAssetsVideos"
                      type="checkbox"
                      checked={formData.brandAssetsVideos}
                      onChange={(event) => updateField("brandAssetsVideos", event.target.checked)}
                    />
                    Video
                  </label>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(event) => updateField("consent", event.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                  required
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I consent to Novara contacting me regarding this enquiry
                </label>
              </div>
              {errors.consent && (
                <p id="consent-error" className="text-xs text-accent" role="alert">
                  {errors.consent}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="btn-primary rounded-full px-7 py-3 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 animate-spin text-background"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v2.5a5.5 5.5 0 00-5.5 5.5H4z"
                      />
                    </svg>
                  ) : (
                    "Request Private Consultation"
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                By continuing, you agree to our{" "}
                <Link className="underline" to="/privacy-policy">
                  Privacy Policy
                </Link>
                .
              </p>

              {submitted && (
                <p className="text-sm text-muted-foreground" role="status">
                  Received. We will reply.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-accent" role="alert">
                  We could not send that right now. Please email hello@novarastudios.co.uk.
                </p>
              )}
            </form>
          </div>
          <aside className="surface-panel noise-overlay rounded-lg p-6 md:p-8 h-fit">
            <p className="label-small mb-4">Contact</p>
            <p className="body-refined mb-6">Direct line. Email.</p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="btn-secondary rounded-full px-6 py-2 w-full text-center mb-4"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="mailto:hello@novarastudios.co.uk"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@novarastudios.co.uk
            </a>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
