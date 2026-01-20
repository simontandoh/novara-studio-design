import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const whatsappNumber = "447456849035";

const Contact = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    whatsapp: "",
    location: "",
    industry: "",
    website: "",
    projectType: "",
    pagesNeeded: "",
    coreServices: "",
    primaryGoal: "",
    styleRefs: "",
    brandAssetsLogo: false,
    brandAssetsPhotos: false,
    brandAssetsCopy: false,
    domainStatus: "",
    hostingStatus: "",
    integrations: "",
    timeline: "",
    budget: "",
    maintenanceTier: "",
    itSupportNeeds: "",
    consent: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("novaraContactDraft");
    if (saved) {
      setFormData((prev) => ({ ...prev, ...(JSON.parse(saved) as typeof prev) }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("novaraContactDraft", JSON.stringify(formData));
  }, [formData]);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.businessName.trim()) nextErrors.businessName = "Business name is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!formData.location.trim()) nextErrors.location = "Location is required.";
    if (!formData.industry.trim()) nextErrors.industry = "Industry is required.";
    if (!formData.projectType) nextErrors.projectType = "Select a project type.";
    if (!formData.coreServices.trim()) nextErrors.coreServices = "List your core services.";
    if (!formData.primaryGoal) nextErrors.primaryGoal = "Select a primary goal.";
    if (!formData.timeline.trim()) nextErrors.timeline = "Timeline is required.";
    if (!formData.maintenanceTier) nextErrors.maintenanceTier = "Select a maintenance tier.";
    if (!formData.consent) nextErrors.consent = "Consent is required.";
    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }
    setSubmitted(true);
    setIsSubmitting(true);
    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };
    localStorage.setItem("novaraContactSubmission", JSON.stringify(payload, null, 2));
    localStorage.removeItem("novaraContactDraft");
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.warn("Lead submission failed", error);
    }
    navigate("/submitted", { state: payload });
  };

  const updateField = (name: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="label-small mb-4">Contact</p>
            <h1 className="headline-hero mb-6">Website request / consultation.</h1>
            <p className="body-large">
              Tell us what you do and where you operate. We'll respond with next
              steps and clarify the right tier after consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-editorial grid lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block label-small mb-3">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-accent mt-2">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="businessName" className="block label-small mb-3">
                    Business name
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(event) => updateField("businessName", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                  {errors.businessName && (
                    <p className="text-xs text-accent mt-2">{errors.businessName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block label-small mb-3">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                  {errors.email && (
                    <p className="text-xs text-accent mt-2">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block label-small mb-3">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                  {errors.phone && (
                    <p className="text-xs text-accent mt-2">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block label-small mb-3">
                    WhatsApp (optional)
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(event) => updateField("whatsapp", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block label-small mb-3">
                    Business location (city/region)
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={(event) => updateField("location", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                  {errors.location && (
                    <p className="text-xs text-accent mt-2">{errors.location}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="industry" className="block label-small mb-3">
                    Industry
                  </label>
                  <input
                    id="industry"
                    type="text"
                    value={formData.industry}
                    onChange={(event) => updateField("industry", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                  {errors.industry && (
                    <p className="text-xs text-accent mt-2">{errors.industry}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="website" className="block label-small mb-3">
                    Current website (optional)
                  </label>
                  <input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(event) => updateField("website", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block label-small mb-3">
                    What do you need?
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(event) => updateField("projectType", event.target.value)}
                    className="w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-foreground backdrop-blur focus:border-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
                  >
                    <option value="" className="bg-background text-foreground">
                      Select
                    </option>
                    <option value="website" className="bg-background text-foreground">
                      Website
                    </option>
                    <option value="redesign" className="bg-background text-foreground">
                      Redesign
                    </option>
                    <option value="landing" className="bg-background text-foreground">
                      Landing page
                    </option>
                    <option value="ecommerce" className="bg-background text-foreground">
                      Ecommerce
                    </option>
                    <option value="other" className="bg-background text-foreground">
                      Other
                    </option>
                  </select>
                  {errors.projectType && (
                    <p className="text-xs text-accent mt-2">{errors.projectType}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="pagesNeeded" className="block label-small mb-3">
                  Pages needed (list or describe)
                </label>
                <input
                  id="pagesNeeded"
                  type="text"
                  value={formData.pagesNeeded}
                  onChange={(event) => updateField("pagesNeeded", event.target.value)}
                  className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                />
              </div>

              <div>
                <label htmlFor="coreServices" className="block label-small mb-3">
                  Core services/products
                </label>
                <textarea
                  id="coreServices"
                  rows={3}
                  value={formData.coreServices}
                  onChange={(event) => updateField("coreServices", event.target.value)}
                  className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors resize-none text-foreground"
                />
                {errors.coreServices && (
                  <p className="text-xs text-accent mt-2">{errors.coreServices}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="primaryGoal" className="block label-small mb-3">
                    Primary goal
                  </label>
                  <select
                    id="primaryGoal"
                    value={formData.primaryGoal}
                    onChange={(event) => updateField("primaryGoal", event.target.value)}
                    className="w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-foreground backdrop-blur focus:border-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
                  >
                    <option value="" className="bg-background text-foreground">
                      Select
                    </option>
                    <option value="leads" className="bg-background text-foreground">
                      Leads
                    </option>
                    <option value="bookings" className="bg-background text-foreground">
                      Bookings
                    </option>
                    <option value="sales" className="bg-background text-foreground">
                      Sales
                    </option>
                    <option value="credibility" className="bg-background text-foreground">
                      Credibility
                    </option>
                    <option value="other" className="bg-background text-foreground">
                      Other
                    </option>
                  </select>
                  {errors.primaryGoal && (
                    <p className="text-xs text-accent mt-2">{errors.primaryGoal}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="timeline" className="block label-small mb-3">
                    Timeline
                  </label>
                  <input
                    id="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={(event) => updateField("timeline", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                  {errors.timeline && (
                    <p className="text-xs text-accent mt-2">{errors.timeline}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="styleRefs" className="block label-small mb-3">
                    Style references (URLs)
                  </label>
                  <input
                    id="styleRefs"
                    type="text"
                    value={formData.styleRefs}
                    onChange={(event) => updateField("styleRefs", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block label-small mb-3">
                    Budget range (optional)
                  </label>
                  <input
                    id="budget"
                    type="text"
                    value={formData.budget}
                    onChange={(event) => updateField("budget", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                </div>
              </div>

              <div>
                <p className="label-small mb-3">Brand assets available?</p>
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.brandAssetsLogo}
                      onChange={(event) => updateField("brandAssetsLogo", event.target.checked)}
                    />
                    Logo
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.brandAssetsPhotos}
                      onChange={(event) =>
                        updateField("brandAssetsPhotos", event.target.checked)
                      }
                    />
                    Photos
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.brandAssetsCopy}
                      onChange={(event) => updateField("brandAssetsCopy", event.target.checked)}
                    />
                    Copy
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="domainStatus" className="block label-small mb-3">
                    Domain status
                  </label>
                  <select
                    id="domainStatus"
                    value={formData.domainStatus}
                    onChange={(event) => updateField("domainStatus", event.target.value)}
                    className="w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-foreground backdrop-blur focus:border-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
                  >
                    <option value="" className="bg-background text-foreground">
                      Select
                    </option>
                    <option value="have-domain" className="bg-background text-foreground">
                      Already have a domain
                    </option>
                    <option value="need-domain" className="bg-background text-foreground">
                      Need a domain
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="hostingStatus" className="block label-small mb-3">
                    Hosting status
                  </label>
                  <select
                    id="hostingStatus"
                    value={formData.hostingStatus}
                    onChange={(event) => updateField("hostingStatus", event.target.value)}
                    className="w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-foreground backdrop-blur focus:border-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
                  >
                    <option value="" className="bg-background text-foreground">
                      Select
                    </option>
                    <option value="have-hosting" className="bg-background text-foreground">
                      Already have hosting
                    </option>
                    <option value="need-hosting" className="bg-background text-foreground">
                      Need hosting
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="integrations" className="block label-small mb-3">
                  Integrations needed
                </label>
                <input
                  id="integrations"
                  type="text"
                  value={formData.integrations}
                  onChange={(event) => updateField("integrations", event.target.value)}
                  className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="maintenanceTier" className="block label-small mb-3">
                    Maintenance tier interest
                  </label>
                  <select
                    id="maintenanceTier"
                    value={formData.maintenanceTier}
                    onChange={(event) => updateField("maintenanceTier", event.target.value)}
                    className="w-full rounded-xl border border-border bg-card/70 px-4 py-3 text-foreground backdrop-blur focus:border-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
                  >
                    <option value="" className="bg-background text-foreground">
                      Select
                    </option>
                    <option value="care" className="bg-background text-foreground">
                      Care
                    </option>
                    <option value="priority" className="bg-background text-foreground">
                      Priority
                    </option>
                    <option value="continuity" className="bg-background text-foreground">
                      Continuity
                    </option>
                  </select>
                  {errors.maintenanceTier && (
                    <p className="text-xs text-accent mt-2">{errors.maintenanceTier}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="itSupportNeeds" className="block label-small mb-3">
                    IT support needs
                  </label>
                  <input
                    id="itSupportNeeds"
                    type="text"
                    value={formData.itSupportNeeds}
                    onChange={(event) => updateField("itSupportNeeds", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(event) => updateField("consent", event.target.checked)}
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I consent to Novara contacting me about this request.
                </label>
              </div>
              {errors.consent && <p className="text-xs text-accent">{errors.consent}</p>}

              <div className="flex flex-col sm:flex-row gap-4">
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
                    "Submit"
                  )}
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="btn-secondary rounded-full px-7 py-3 text-center"
                >
                  WhatsApp
                </a>
              </div>

              {submitted && (
                <p className="text-sm text-muted-foreground">
                  Thanks for the detail. We will review this and reply shortly. If
                  you need a faster response, WhatsApp us.
                </p>
              )}
            </form>
          </div>
          <aside className="surface-panel noise-overlay rounded-lg p-6 md:p-8 h-fit">
            <p className="label-small mb-4">Contact</p>
            <p className="body-refined mb-6">
              Prefer a direct message? You can reach us on WhatsApp or email.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="btn-secondary rounded-full px-6 py-2 w-full text-center mb-4"
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
