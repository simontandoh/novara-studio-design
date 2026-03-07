import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { SITE_URL } from "@/lib/seo";

const supportTiers = [
  {
    name: "Starter Support",
    price: "GBP59/month",
    includes: [
      "Remote support",
      "Email/account support",
      "Basic troubleshooting",
      "General technical assistance",
    ],
  },
  {
    name: "Business Support",
    price: "GBP119/month",
    includes: [
      "Priority support",
      "Microsoft 365 support",
      "Device setup help",
      "Backup guidance",
      "Network troubleshooting",
    ],
  },
  {
    name: "Infrastructure Support",
    price: "GBP199+/month",
    includes: [
      "Proactive support",
      "Security hardening",
      "Backup systems",
      "Cloud support",
      "Network/infrastructure assistance",
    ],
  },
];

const ContinuitySupport = () => {
  return (
    <Layout>
      <Seo
        title="Business IT Support"
        description="Business IT support plans from Novara including Microsoft 365 help, troubleshooting, backups, network support, and infrastructure assistance."
        path="/it-support"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Business IT Support",
          provider: {
            "@type": "Organization",
            name: "Novara Studios",
            url: SITE_URL,
          },
          areaServed: "United Kingdom",
        }}
      />

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-small mb-4">IT Support</p>
            <h1 className="headline-hero mb-6 text-center">Business IT support that keeps operations moving.</h1>
            <p className="body-large">
              Novara supports day-to-day IT issues, account support, troubleshooting, backups,
              security, and infrastructure so your team can focus on running the business.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="label-small mb-4">Plans</p>
            <h2 className="headline-primary">Simple support tiers.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {supportTiers.map((tier) => (
              <article key={tier.name} className="rounded-lg border border-border/60 bg-card/50 p-8 md:p-10">
                <h3 className="headline-secondary mb-2">{tier.name}</h3>
                <p className="text-lg font-light mb-6">{tier.price}</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-4">Need IT support for your business?</h2>
          <p className="body-large mb-8">Tell us your setup and we will recommend the right tier.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary rounded-full px-7 py-3">
              Request IT Support
            </Link>
            <Link to="/contact" className="btn-secondary rounded-full px-7 py-3">
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContinuitySupport;
