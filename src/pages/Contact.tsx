import "react-phone-number-input/style.css";
import { useEffect, useRef, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

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
  "Other",
  "Professional Services",
  "Real Estate",
  "Retail (In-store)",
  "Technology/SaaS",
];

const budgetOptions = [
  "£1,000–£1,999",
  "£10,000+",
  "£2,000–£4,999",
  "£5,000–£9,999",
  "£500–£999",
  "Not sure yet",
];

declare global {
  interface Window {
    google?: any;
    initGooglePlaces?: () => void;
  }
}

const Contact = () => {
  const navigate = useNavigate();
  const locationRef = useRef<HTMLInputElement | null>(null);
  const locationContainerRef = useRef<HTMLDivElement | null>(null);
  const autocompleteRef = useRef<any>(null);
  const [placesReady, setPlacesReady] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
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
    timelineUnit: "weeks" as "weeks" | "days",
    timelineValue: 4,
    budgetRange: "",
    maintenanceTier: "",
    consent: false,
  });
  const [pagesInput, setPagesInput] = useState("");
  const [coreServicesInput, setCoreServicesInput] = useState("");
  const [styleRefInput, setStyleRefInput] = useState("");
  const [styleRefError, setStyleRefError] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("novaraContactDraft");
    if (saved) {
      setFormData((prev) => ({ ...prev, ...(JSON.parse(saved) as typeof prev) }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("novaraContactDraft", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (autocompleteRef.current || !locationContainerRef.current) return;
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.warn("Missing VITE_GOOGLE_MAPS_API_KEY for Places autocomplete.");
      return;
    }

    const initAutocomplete = () => {
      if (!locationContainerRef.current || autocompleteRef.current) return;
      if (!window.google?.maps?.places?.PlaceAutocompleteElement) return;

      const element = document.createElement("gmp-place-autocomplete");
      element.setAttribute("placeholder", "Start typing a city");
      element.setAttribute(
        "includedPrimaryTypes",
        "locality,postal_town,administrative_area_level_1,country"
      );
      element.className = "select-pill gmp-place";
      element.setAttribute("style", "width: 100%; max-width: 100%; display: block;");
      locationContainerRef.current.innerHTML = "";
      locationContainerRef.current.appendChild(element);
      autocompleteRef.current = element;
      requestAnimationFrame(() => setPlacesReady(true));

      element.addEventListener("gmp-placeselect", async (event: any) => {
        const place = event.place || event.detail?.place;
        if (!place) return;
        if (place.fetchFields) {
          await place.fetchFields({ fields: ["formattedAddress", "displayName", "addressComponents"] });
        }
        const value =
          place.formattedAddress ||
          place.displayName ||
          (place.addressComponents || [])
            .map((component: any) => component.longText)
            .filter(Boolean)
            .join(", ");
        updateField("location", value);
        setErrors((prev) => ({ ...prev, location: "" }));
      });
    };

    window.initGooglePlaces = () => {
      initAutocomplete();
    };

    if (window.google?.maps?.places) {
      initAutocomplete();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-google-places="true"]'
    );
    if (existingScript) {
      existingScript.addEventListener("load", initAutocomplete);
      return () => existingScript.removeEventListener("load", initAutocomplete);
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&v=beta&loading=async&callback=initGooglePlaces`;
    script.async = true;
    script.defer = true;
    script.dataset.googlePlaces = "true";
    document.head.appendChild(script);

    return () => {
      if (window.initGooglePlaces) {
        delete window.initGooglePlaces;
      }
    };
  }, []);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validatePhone = (value: string) => {
    if (!value) return false;
    return isValidPhoneNumber(value);
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
    if (!formData.timelineValue) nextErrors.timeline = "Timeline is required.";
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
      timelineUnit: formData.timelineUnit,
      timelineValue: formData.timelineValue,
      styleRefs: formData.styleRefs,
      budgetRange: formData.budgetRange,
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

  const updateField = (name: string, value: string | boolean | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  const setTimelineUnit = (unit: "weeks" | "days") => {
    const nextValue = unit === "weeks" ? 4 : 14;
    updateField("timelineUnit", unit);
    updateField("timelineValue", nextValue);
  };

  const timelineConfig =
    formData.timelineUnit === "weeks"
      ? { min: 1, max: 24, step: 1, label: "weeks" }
      : { min: 7, max: 90, step: 1, label: "days" };

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
                    Full name<span className="text-accent"> *</span>
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
                    Business name<span className="text-accent"> *</span>
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
                    Email<span className="text-accent"> *</span>
                  </label>
                  <input
                    id="email"
                    type="email"
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
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                  {errors.email && (
                    <p className="text-xs text-accent mt-2">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block label-small mb-3">
                    Phone<span className="text-accent"> *</span>
                  </label>
                    <PhoneInput
                      id="phone"
                      defaultCountry="GB"
                      international
                      countryCallingCodeEditable={false}
                      value={formData.phone}
                      onChange={(value) => updateField("phone", value ?? "")}
                      onBlur={() => {
                        if (formData.phone && !validatePhone(formData.phone)) {
                          setErrors((prev) => ({
                            ...prev,
                            phone: "Enter a valid phone number",
                          }));
                        }
                      }}
                      className="phone-input flex gap-3"
                      inputClassName="select-pill"
                      countrySelectProps={{
                        className: "select-pill w-[120px]",
                      }}
                    />
                  {errors.phone && (
                    <p className="text-xs text-accent mt-2">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="location" className="block label-small mb-3">
                    Business location (city/region)<span className="text-accent"> *</span>
                  </label>
                  <div ref={locationContainerRef} />
                  <input type="hidden" value={formData.location} readOnly />
                  {!placesReady && (
                    <input
                      id="location"
                      type="text"
                      ref={locationRef}
                      value={formData.location}
                      onChange={(event) => {
                        updateField("location", event.target.value);
                        if (errors.location) {
                          setErrors((prev) => ({ ...prev, location: "" }));
                        }
                      }}
                      className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                      placeholder="Start typing a city"
                    />
                  )}
                  {errors.location && (
                    <p className="text-xs text-accent mt-2">{errors.location}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="industry" className="block label-small mb-3">
                    Industry<span className="text-accent"> *</span>
                  </label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={(event) => updateField("industry", event.target.value)}
                    className="select-pill"
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
                    <p className="text-xs text-accent mt-2">{errors.industry}</p>
                  )}
                </div>
                {formData.industry === "Other" && (
                  <div>
                    <label htmlFor="industryOther" className="block label-small mb-3">
                      Industry (Other)<span className="text-accent"> *</span>
                    </label>
                    <input
                      id="industryOther"
                      type="text"
                      value={formData.industryOther}
                      onChange={(event) => updateField("industryOther", event.target.value)}
                      className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                    />
                    {errors.industryOther && (
                      <p className="text-xs text-accent mt-2">{errors.industryOther}</p>
                    )}
                  </div>
                )}
                <div>
                  <label htmlFor="website" className="block label-small mb-3">
                    Current website (optional)
                  </label>
                  <input
                    id="website"
                    type="url"
                    placeholder="www.example.co.uk"
                    value={formData.website}
                    onChange={(event) => updateField("website", event.target.value)}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block label-small mb-3">
                    What do you need?<span className="text-accent"> *</span>
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(event) => updateField("projectType", event.target.value)}
                    className="select-pill"
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
                    <option value="other" className="bg-background text-foreground">
                      Other
                    </option>
                    <option value="redesign" className="bg-background text-foreground">
                      Redesign
                    </option>
                    <option value="website" className="bg-background text-foreground">
                      Website
                    </option>
                  </select>
                  {errors.projectType && (
                    <p className="text-xs text-accent mt-2">{errors.projectType}</p>
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
                          ×
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
                          ×
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
                    value={formData.primaryGoal}
                    onChange={(event) => updateField("primaryGoal", event.target.value)}
                    className="select-pill"
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
                    <option value="other" className="bg-background text-foreground">
                      Other
                    </option>
                    <option value="sales" className="bg-background text-foreground">
                      Sales
                    </option>
                  </select>
                  {errors.primaryGoal && (
                    <p className="text-xs text-accent mt-2">{errors.primaryGoal}</p>
                  )}
                </div>
                <div className="space-y-3">
                  <label htmlFor="timeline" className="block label-small">
                    Timeline<span className="text-accent"> *</span>
                  </label>
                  <div className="inline-flex rounded-full border border-border bg-card/60 p-1">
                    <button
                      type="button"
                      onClick={() => setTimelineUnit("weeks")}
                      className={`rounded-full px-4 py-1 text-xs transition-colors ${
                        formData.timelineUnit === "weeks"
                          ? "bg-accent/20 text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      Weeks
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimelineUnit("days")}
                      className={`rounded-full px-4 py-1 text-xs transition-colors ${
                        formData.timelineUnit === "days"
                          ? "bg-accent/20 text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      Days
                    </button>
                  </div>
                  <div className="space-y-2">
                    <input
                      id="timeline"
                      type="range"
                      min={timelineConfig.min}
                      max={timelineConfig.max}
                      step={timelineConfig.step}
                      value={formData.timelineValue}
                      onChange={(event) =>
                        updateField("timelineValue", Number(event.target.value))
                      }
                      className="w-full accent-accent"
                    />
                    <p className="text-sm text-muted-foreground">
                      {formData.timelineValue} {timelineConfig.label}
                    </p>
                    {errors.timeline && (
                      <p className="text-xs text-accent">{errors.timeline}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="styleRefs" className="block label-small mb-3">
                    Style references (URLs) (optional)
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <input
                      id="styleRefs"
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
                    <p className="text-xs text-accent mt-2">{styleRefError}</p>
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
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="budgetRange" className="block label-small mb-3">
                    Budget range (optional)
                  </label>
                  <select
                    id="budgetRange"
                    value={formData.budgetRange}
                    onChange={(event) => updateField("budgetRange", event.target.value)}
                    className="select-pill"
                  >
                    <option value="" className="bg-background text-foreground">
                      Select
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option} className="bg-background text-foreground">
                        {option}
                      </option>
                    ))}
                  </select>
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
                    value={formData.domainStatus}
                    onChange={(event) => updateField("domainStatus", event.target.value)}
                    className="select-pill"
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
                    <p className="text-xs text-accent mt-2">{errors.domainStatus}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="hostingStatus" className="block label-small mb-3">
                    Hosting status<span className="text-accent"> *</span>
                  </label>
                  <select
                    id="hostingStatus"
                    value={formData.hostingStatus}
                    onChange={(event) => updateField("hostingStatus", event.target.value)}
                    className="select-pill"
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
                    <p className="text-xs text-accent mt-2">{errors.hostingStatus}</p>
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
                    value={formData.maintenanceTier}
                    onChange={(event) => updateField("maintenanceTier", event.target.value)}
                    className="select-pill"
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
                    <p className="text-xs text-accent mt-2">{errors.maintenanceTier}</p>
                  )}
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
              <p className="text-xs text-muted-foreground">* Required fields</p>

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
