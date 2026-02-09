import "react-phone-number-input/style.css";
import { useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
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
  phone: "",
  location: "",
  industry: "",
  industryOther: "",
  website: "",
  projectType: "",
  pagesNeeded: [] as string[],
  coreServicesProducts: [] as string[],
  primaryGoal: "",
  styleRefs: [] as string[],
  brandAssetsLogo: false,
  brandAssetsPhotos: false,
  brandAssetsVideos: false,
  domainStatus: "",
  hostingStatus: "",
  maintenanceTier: "",
  consent: false,
};

const cityOptions = [
  "London, UK",
  "Manchester, UK",
  "Birmingham, UK",
  "Leeds, UK",
  "Edinburgh, UK",
  "Dublin, IE",
  "Paris, FR",
  "Berlin, DE",
  "Amsterdam, NL",
  "New York, US",
  "Los Angeles, US",
  "Toronto, CA",
  "Sydney, AU",
  "Dubai, AE",
  "Singapore, SG",
];

const Contact = () => {
  const navigate = useNavigate();
  const [phoneCountry, setPhoneCountry] = useState("GB");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState(initialFormState);
  const [pagesInput, setPagesInput] = useState("");
  const [coreServicesInput, setCoreServicesInput] = useState("");
  const [styleRefInput, setStyleRefInput] = useState("");
  const [styleRefError, setStyleRefError] = useState("");
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

  const validatePhone = (value: string) => {
    if (!value) return false;
    return isValidPhoneNumber(value);
  };

  const handlePhoneChange = (value: string) => {
    if (!value) {
      updateField("phone", "");
      return;
    }

    if (!value.startsWith("+") && /^\d{3,}/.test(value)) {
      const parsed = parsePhoneNumberFromString(value, phoneCountry);
      if (parsed?.country) {
        setPhoneCountry(parsed.country);
        updateField("phone", parsed.number);
        return;
      }
    }

    const parsed = parsePhoneNumberFromString(value);
    if (parsed?.country) {
      setPhoneCountry(parsed.country);
    }
    updateField("phone", value);
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.businessName.trim()) nextErrors.businessName = "Business name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!formData.phone || !validatePhone(formData.phone)) {
      nextErrors.phone = "Enter a valid phone number";
    }
    if (!formData.location.trim()) nextErrors.location = "Location is required.";
    if (!formData.industry.trim()) nextErrors.industry = "Industry is required.";
    if (formData.industry === "Other" && !formData.industryOther.trim()) {
      nextErrors.industryOther = "Industry (Other) is required.";
    }
    if (!formData.projectType) nextErrors.projectType = "Select a project type.";
    if (!formData.primaryGoal) nextErrors.primaryGoal = "Select a primary goal.";
    if (!formData.domainStatus) nextErrors.domainStatus = "Select a domain status.";
    if (!formData.hostingStatus) nextErrors.hostingStatus = "Select a hosting status.";
    if (!formData.maintenanceTier) nextErrors.maintenanceTier = "Select a maintenance tier.";
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
      phone: formData.phone,
      location: formData.location,
      industry: formData.industry,
      industryOther: formData.industry === "Other" ? formData.industryOther : "",
      whatNeed: formData.projectType,
      projectType: formData.projectType,
      pagesNeeded: formData.pagesNeeded,
      coreServicesProducts: formData.coreServicesProducts,
      primaryGoal: formData.primaryGoal,
      styleRefs: formData.styleRefs,
      brandAssets: {
        logo: formData.brandAssetsLogo,
        photos: formData.brandAssetsPhotos,
        videos: formData.brandAssetsVideos,
      },
      domainStatus: formData.domainStatus,
      hostingStatus: formData.hostingStatus,
      maintenanceTierInterest: formData.maintenanceTier,
      website: formData.website,
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

  const clearForm = () => {
    setFormData(initialFormState);
    setPagesInput("");
    setCoreServicesInput("");
    setStyleRefInput("");
    setStyleRefError("");
    setErrors({});
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmitStatus("idle");
    localStorage.removeItem("novaraContactDraft");
  };

  const addToList = (
    value: string,
    key: "pagesNeeded" | "coreServicesProducts",
    setter: (next: string) => void
  ) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    if (formData[key].includes(trimmed)) {
      setter("");
      return;
    }
    updateField(key, [...formData[key], trimmed]);
    setter("");
  };

  const removeFromList = (value: string, key: "pagesNeeded" | "coreServicesProducts") => {
    updateField(
      key,
      formData[key].filter((item) => item !== value)
    );
  };

  const addStyleRef = () => {
    const trimmed = styleRefInput.trim();
    if (!trimmed) return;
    if (!/^https?:\/\//i.test(trimmed)) {
      setStyleRefError("Enter a valid URL starting with http:// or https://");
      return;
    }
    if (formData.styleRefs.includes(trimmed)) {
      setStyleRefInput("");
      setStyleRefError("");
      return;
    }
    updateField("styleRefs", [...formData.styleRefs, trimmed]);
    setStyleRefInput("");
    setStyleRefError("");
  };

  const removeStyleRef = (value: string) => {
    updateField(
      "styleRefs",
      formData.styleRefs.filter((item) => item !== value)
    );
  };

  return (
    <Layout>
      <Seo
        title="Contact"
        description="Share your project details and get a clear response from Novara Studios."
        path="/contact"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="label-small mb-4">Contact</p>
            <h1 className="headline-hero mb-6">Project intake.</h1>
            <p className="body-large">
              Share the essentials. We reply with next steps and a clear plan.
            </p>
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
                    Full name<span className="text-accent"> *</span>
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
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
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
                    Business name<span className="text-accent"> *</span>
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
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
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
                    Email<span className="text-accent"> *</span>
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
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block label-small mb-3">
                    Phone<span className="text-accent"> *</span>
                  </label>
                  <PhoneInput
                    id="phone"
                    name="phone"
                    defaultCountry="GB"
                    country={phoneCountry}
                    onCountryChange={(value) => setPhoneCountry(value || "GB")}
                    international={false}
                    withCountryCallingCode
                    countryCallingCodeEditable={false}
                    value={formData.phone}
                    onChange={(value) => handlePhoneChange(value ?? "")}
                    onBlur={() => {
                      if (formData.phone && !validatePhone(formData.phone)) {
                        setErrors((prev) => ({
                          ...prev,
                          phone: "Enter a valid phone number",
                        }));
                      }
                    }}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="phone-input flex gap-3 rounded-full border border-border/60 bg-card/40 p-1"
                    inputClassName="select-pill phone-number"
                    countrySelectProps={{
                      className: "select-pill phone-country",
                    }}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="location" className="block label-small mb-3">
                    Business location (city/region/country)<span className="text-accent"> *</span>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    list="city-options"
                    value={formData.location}
                    onChange={(event) => {
                      updateField("location", event.target.value);
                      if (errors.location) {
                        setErrors((prev) => ({ ...prev, location: "" }));
                      }
                    }}
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={errors.location ? "location-error" : undefined}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                    placeholder="Start typing a city"
                    required
                  />
                  <datalist id="city-options">
                    {cityOptions.map((option) => (
                      <option key={option} value={option} />
                    ))}
                  </datalist>
                  {errors.location && (
                    <p id="location-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.location}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="industry" className="block label-small mb-3">
                    Industry<span className="text-accent"> *</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={(event) => updateField("industry", event.target.value)}
                    aria-invalid={Boolean(errors.industry)}
                    aria-describedby={errors.industry ? "industry-error" : undefined}
                    className="select-pill"
                    required
                  >
                    <option value="" className="bg-background text-foreground">
                      Select
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
                {formData.industry === "Other" && (
                  <div>
                    <label htmlFor="industryOther" className="block label-small mb-3">
                      Industry (Other)<span className="text-accent"> *</span>
                    </label>
                    <input
                      id="industryOther"
                      name="industryOther"
                      type="text"
                      value={formData.industryOther}
                      onChange={(event) => updateField("industryOther", event.target.value)}
                      aria-invalid={Boolean(errors.industryOther)}
                      aria-describedby={errors.industryOther ? "industryOther-error" : undefined}
                      className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                      required
                    />
                    {errors.industryOther && (
                      <p id="industryOther-error" className="text-xs text-accent mt-2" role="alert">
                        {errors.industryOther}
                      </p>
                    )}
                  </div>
                )}
                <div>
                  <label htmlFor="website" className="block label-small mb-3">
                    Current website (optional)
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="www.example.co.uk"
                    value={formData.website}
                    onChange={(event) => updateField("website", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                    autoComplete="url"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block label-small mb-3">
                    What do you need<span className="text-accent"> *</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(event) => updateField("projectType", event.target.value)}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? "projectType-error" : undefined}
                    className="select-pill"
                    required
                  >
                    <option value="" className="bg-background text-foreground">
                      Select
                    </option>
                    <option value="ecommerce" className="bg-background text-foreground">
                      Ecommerce
                    </option>
                    <option value="landing" className="bg-background text-foreground">
                      Landing page
                    </option>
                    <option value="redesign" className="bg-background text-foreground">
                      Redesign
                    </option>
                    <option value="website" className="bg-background text-foreground">
                      Website
                    </option>
                    <option value="other" className="bg-background text-foreground">
                      Other
                    </option>
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.projectType}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="pagesNeeded" className="block label-small">
                  Pages needed (optional)
                </label>
                <div className="flex flex-wrap gap-3">
                  <input
                    id="pagesNeeded"
                    name="pagesNeeded"
                    type="text"
                    value={pagesInput}
                    onChange={(event) => setPagesInput(event.target.value)}
                    placeholder="Home, About, Services"
                    className="flex-1 bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                  <button
                    type="button"
                    onClick={() => addToList(pagesInput, "pagesNeeded", setPagesInput)}
                    className="btn-secondary rounded-full px-4 py-2"
                    aria-label="Add page"
                  >
                    +
                  </button>
                </div>
                {formData.pagesNeeded.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.pagesNeeded.map((page) => (
                      <span
                        key={page}
                        className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs text-muted-foreground"
                      >
                        {page}
                        <button
                          type="button"
                          onClick={() => removeFromList(page, "pagesNeeded")}
                          className="text-muted-foreground hover:text-foreground"
                          aria-label={`Remove ${page}`}
                        >
                          x
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <label htmlFor="coreServices" className="block label-small">
                  Core services/products (optional)
                </label>
                <div className="flex flex-wrap gap-3">
                  <input
                    id="coreServices"
                    name="coreServices"
                    type="text"
                    value={coreServicesInput}
                    onChange={(event) => setCoreServicesInput(event.target.value)}
                    placeholder="Service name"
                    className="flex-1 bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      addToList(coreServicesInput, "coreServicesProducts", setCoreServicesInput)
                    }
                    className="btn-secondary rounded-full px-4 py-2"
                    aria-label="Add service"
                  >
                    +
                  </button>
                </div>
                {formData.coreServicesProducts.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.coreServicesProducts.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs text-muted-foreground"
                      >
                        {service}
                        <button
                          type="button"
                          onClick={() => removeFromList(service, "coreServicesProducts")}
                          className="text-muted-foreground hover:text-foreground"
                          aria-label={`Remove ${service}`}
                        >
                          x
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="primaryGoal" className="block label-small mb-3">
                    Primary goal<span className="text-accent"> *</span>
                  </label>
                  <select
                    id="primaryGoal"
                    name="primaryGoal"
                    value={formData.primaryGoal}
                    onChange={(event) => updateField("primaryGoal", event.target.value)}
                    aria-invalid={Boolean(errors.primaryGoal)}
                    aria-describedby={errors.primaryGoal ? "primaryGoal-error" : undefined}
                    className="select-pill"
                    required
                  >
                    <option value="" className="bg-background text-foreground">
                      Select
                    </option>
                    <option value="bookings" className="bg-background text-foreground">
                      Bookings
                    </option>
                    <option value="credibility" className="bg-background text-foreground">
                      Credibility
                    </option>
                    <option value="leads" className="bg-background text-foreground">
                      Leads
                    </option>
                    <option value="sales" className="bg-background text-foreground">
                      Sales
                    </option>
                    <option value="other" className="bg-background text-foreground">
                      Other
                    </option>
                  </select>
                  {errors.primaryGoal && (
                    <p id="primaryGoal-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.primaryGoal}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="styleRefs" className="block label-small mb-3">
                    Style references (URLs) (optional)
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <input
                      id="styleRefs"
                      name="styleRefs"
                      type="url"
                      value={styleRefInput}
                      onChange={(event) => {
                        setStyleRefInput(event.target.value);
                        setStyleRefError("");
                      }}
                      placeholder="www.example.com"
                      className="flex-1 bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                    />
                    <button
                      type="button"
                      onClick={addStyleRef}
                      className="btn-secondary rounded-full px-4 py-2"
                      aria-label="Add style reference"
                    >
                      +
                    </button>
                  </div>
                  {styleRefError && (
                    <p className="text-xs text-accent mt-2" role="alert">
                      {styleRefError}
                    </p>
                  )}
                  {formData.styleRefs.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {formData.styleRefs.map((ref) => (
                        <span
                          key={ref}
                          className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs text-muted-foreground"
                        >
                          {ref}
                          <button
                            type="button"
                            onClick={() => removeStyleRef(ref)}
                            className="text-muted-foreground hover:text-foreground"
                            aria-label={`Remove ${ref}`}
                          >
                            x
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <p className="label-small mb-3">Brand assets available</p>
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
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
                      onChange={(event) =>
                        updateField("brandAssetsPhotos", event.target.checked)
                      }
                    />
                    Photos
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      name="brandAssetsVideos"
                      type="checkbox"
                      checked={formData.brandAssetsVideos}
                      onChange={(event) => updateField("brandAssetsVideos", event.target.checked)}
                    />
                    Videos
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="domainStatus" className="block label-small mb-3">
                    Domain status<span className="text-accent"> *</span>
                  </label>
                  <select
                    id="domainStatus"
                    name="domainStatus"
                    value={formData.domainStatus}
                    onChange={(event) => updateField("domainStatus", event.target.value)}
                    aria-invalid={Boolean(errors.domainStatus)}
                    aria-describedby={errors.domainStatus ? "domainStatus-error" : undefined}
                    className="select-pill"
                    required
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
                  {errors.domainStatus && (
                    <p id="domainStatus-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.domainStatus}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="hostingStatus" className="block label-small mb-3">
                    Hosting status<span className="text-accent"> *</span>
                  </label>
                  <select
                    id="hostingStatus"
                    name="hostingStatus"
                    value={formData.hostingStatus}
                    onChange={(event) => updateField("hostingStatus", event.target.value)}
                    aria-invalid={Boolean(errors.hostingStatus)}
                    aria-describedby={errors.hostingStatus ? "hostingStatus-error" : undefined}
                    className="select-pill"
                    required
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
                  {errors.hostingStatus && (
                    <p id="hostingStatus-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.hostingStatus}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="maintenanceTier" className="block label-small mb-3">
                    Maintenance tier interest<span className="text-accent"> *</span>
                  </label>
                  <select
                    id="maintenanceTier"
                    name="maintenanceTier"
                    value={formData.maintenanceTier}
                    onChange={(event) => updateField("maintenanceTier", event.target.value)}
                    aria-invalid={Boolean(errors.maintenanceTier)}
                    aria-describedby={errors.maintenanceTier ? "maintenanceTier-error" : undefined}
                    className="select-pill"
                    required
                  >
                    <option value="" className="bg-background text-foreground">
                      Select
                    </option>
                    <option value="care" className="bg-background text-foreground">
                      Care
                    </option>
                    <option value="continuity" className="bg-background text-foreground">
                      Continuity
                    </option>
                    <option value="priority" className="bg-background text-foreground">
                      Priority
                    </option>
                  </select>
                  {errors.maintenanceTier && (
                    <p id="maintenanceTier-error" className="text-xs text-accent mt-2" role="alert">
                      {errors.maintenanceTier}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
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
                  I consent to Novara contacting me about this request.
                </label>
              </div>
              {errors.consent && (
                <p id="consent-error" className="text-xs text-accent" role="alert">
                  {errors.consent}
                </p>
              )}

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
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm("Clear all form fields?")) {
                      clearForm();
                    }
                  }}
                  className="btn-secondary rounded-full px-7 py-3 text-center"
                >
                  Clear
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                * Required fields. By submitting, you agree to our{" "}
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
            <p className="body-refined mb-6">
              Direct line. Email.
            </p>
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





