import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const maintenanceTiers = [
  {
    name: "Care",
    price: "GBP 49/month",
    description: "Baseline care for stable, well-run sites.",
    includes: [
      "Core updates and security patching",
      "Uptime monitoring and backup checks",
      "Email support",
      "Best-effort assistance (1 hour/month)",
    ],
  },
  {
    name: "Priority",
    price: "GBP 99/month",
    description: "Proactive care with priority response.",
    includes: [
      "Everything in Care",
      "Performance reviews and proactive fixes",
      "Priority email support",
      "Remote assistance (2 hours/month)",
      "Response targets during business hours",
    ],
    featured: true,
  },
  {
    name: "Continuity",
    price: "GBP 199/month",
    description: "Highest priority with deeper continuity support.",
    includes: [
      "Everything in Priority",
      "Enhanced monitoring and incident triage",
      "Priority response with continuity coverage",
      "Remote assistance (4 hours/month)",
      "SLA-style expectations (best-effort)",
    ],
  },
];

const Local = () => {
  return (
    <Layout>
      <Seo
        title="Websites"
        description="Calm, high-performing websites with ongoing care plans built for long-term continuity."
        path="/websites"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-4">Websites</p>
            <h1 className="headline-hero mb-6">Calm websites. Proper care.</h1>
            <p className="body-large mb-8">Built for clarity. Maintained for continuity.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact?subject=Websites"
                className="btn-primary rounded-full px-7 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Contact
              </Link>
              <Link
                to="/contact?subject=WhatsApp%20Websites"
                className="btn-secondary rounded-full px-6 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10">
            <p className="label-small mb-4">Website builds</p>
            <h2 className="headline-primary">Three build tiers.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Foundation",
                detail: "One-page or compact multi-section site.",
              },
              {
                name: "Growth",
                detail: "Expanded pages and deeper service structure.",
              },
              {
                name: "Premium",
                detail: "Larger builds with advanced content.",
              },
            ].map((tier) => (
              <div key={tier.name} className="surface-panel noise-overlay rounded-lg p-6 md:p-8">
                <h3 className="headline-secondary mb-3">{tier.name}</h3>
                <p className="body-refined">{tier.detail}</p>
              </div>
            ))}
          </div>
          <p className="body-refined text-center mt-8">
            Pricing is set after consultation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10">
            <p className="label-small mb-4">Maintenance plans</p>
            <h2 className="headline-primary">Ongoing care.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {maintenanceTiers.map((tier) => (
              <div
                key={tier.name}
                className={`surface-panel noise-overlay rounded-lg p-8 md:p-10 transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${
                  tier.featured
                    ? "border border-accent/60 shadow-lg shadow-accent/10"
                    : "border border-border"
                }`}
              >
                {tier.featured && (
                  <span className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-accent mb-6">
                    Most Popular
                  </span>
                )}
                <h3 className="headline-secondary mb-3">{tier.name}</h3>
                <p className="text-lg font-light text-foreground mb-2">{tier.price}</p>
                <p className="body-refined mb-6">{tier.description}</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="body-refined text-center mt-10">
            Maintenance is the standard for continuity.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Local;
