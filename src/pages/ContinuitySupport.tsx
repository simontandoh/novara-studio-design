import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { SITE_URL } from "@/lib/seo";
import BookCallButton from "@/components/BookCallButton";

const supportTiers = [
  {
    name: "Starter Support",
    price: "\u00A359/month",
    includes: [
      "Remote IT support",
      "Email and account assistance",
      "Password and login support",
      "Basic device troubleshooting",
      "Software issue support",
      "General business technology assistance",
    ],
  },
  {
    name: "Business Support",
    price: "\u00A3119/month",
    includes: [
      "Priority remote support",
      "Microsoft 365 admin and user support",
      "Device setup assistance",
      "Workstation and printer support",
      "Backup guidance",
      "Network and connectivity troubleshooting",
      "User account support",
      "Systems maintenance guidance",
    ],
  },
  {
    name: "Infrastructure Support",
    price: "\u00A3199+/month",
    includes: [
      "Proactive IT support",
      "Microsoft 365 and cloud support",
      "Backup and recovery guidance",
      "Network and infrastructure troubleshooting",
      "Security hardening guidance",
      "Environment and device support",
      "Business continuity-focused technical support",
      "Higher-touch ongoing assistance",
    ],
  },
];

const ContinuitySupport = () => {
  return (
    <Layout>
      <Seo
        title="Business IT Support"
        description="Practical IT support for small businesses covering accounts, devices, Microsoft 365, troubleshooting, backups, and networking."
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
            <h1 className="headline-hero mb-6 text-center">Practical IT support for day-to-day business operations.</h1>
            <p className="body-large">
              Novara supports small businesses with practical IT needs including accounts, devices,
              Microsoft 365, troubleshooting, backups, and networking support.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="label-small mb-4">Plans</p>
            <h2 className="headline-primary">Three support tiers.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {supportTiers.map((tier) => (
              <article
                key={tier.name}
                className="rounded-3xl border border-border/60 bg-card/50 p-8 md:p-10 backdrop-blur-sm"
                style={{
                  background:
                    "radial-gradient(130% 140% at 15% -15%, rgba(190, 210, 242, 0.18), transparent 54%), radial-gradient(120% 120% at 100% 100%, rgba(89, 110, 151, 0.15), transparent 62%)",
                }}
              >
                <h3 className="headline-secondary mb-2 text-center">{tier.name}</h3>
                <p className="text-2xl font-light mb-6 text-center">{tier.price}</p>
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
          <h2 className="headline-primary mb-4">Need ongoing IT support?</h2>
          <p className="body-large mb-8">Share your setup and we will recommend the right tier.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary rounded-full px-7 py-3">
              Request IT Support
            </Link>
            <BookCallButton
              location="it_support_final_cta"
              className="btn-secondary rounded-full px-7 py-3"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContinuitySupport;
