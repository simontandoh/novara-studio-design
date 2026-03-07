import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { SITE_URL } from "@/lib/seo";

const pricingModels = [
  {
    name: "Launch Plan",
    price: "£79/month",
    description: "Low-friction option for local businesses.",
    includes: [
      "Professional business website",
      "Mobile-responsive design",
      "Hosting",
      "Domain connection and launch support",
      "SSL certificate and secure setup",
      "Contact or enquiry forms",
      "Basic on-page SEO setup",
      "Google indexing support",
      "Basic maintenance",
      "Core content edits",
      "Security and stability oversight",
    ],
  },
  {
    name: "Ownership Plan",
    price: "£499 upfront + £49/month",
    description: "Upfront build with lower ongoing maintenance.",
    includes: [
      "Website build",
      "Mobile-responsive implementation",
      "Domain connection support",
      "Hosting",
      "SSL and security setup",
      "Contact forms",
      "Basic on-page SEO",
      "Google indexing support",
      "Ongoing maintenance",
      "Backups",
      "Minor support updates",
    ],
  },
];

const growthAddOns = [
  "Booking system setup",
  "CRM integrations",
  "AI enquiry handling",
  "Lead routing workflows",
  "Review request automation",
  "Email automation",
  "Quote and lead workflows",
  "Analytics dashboards",
];

const Local = () => {
  return (
    <Layout>
      <Seo
        title="Websites & Automation"
        description="Modern websites with maintenance, SEO foundations, technical oversight, and optional automation improvements for small businesses."
        path="/websites"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Websites and Automation",
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
            <p className="label-small mb-4">Websites & Automation</p>
            <h1 className="headline-hero mb-6 text-center">Modern website systems for business growth.</h1>
            <p className="body-large">
              Novara builds modern websites and supports ongoing growth through maintenance, SEO
              foundations, technical oversight, and automation improvements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="label-small mb-4">Pricing</p>
            <h2 className="headline-primary">Two clear plan models.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {pricingModels.map((model) => (
              <article
                key={model.name}
                className="rounded-3xl p-8 md:p-10 border border-border/60 bg-card/50 text-center backdrop-blur-sm"
                style={{
                  background:
                    "radial-gradient(125% 130% at 10% -10%, rgba(188, 208, 240, 0.2), transparent 52%), radial-gradient(125% 130% at 100% 100%, rgba(88, 110, 150, 0.18), transparent 60%)",
                }}
              >
                <h3 className="headline-secondary mb-2">{model.name}</h3>
                <p className="text-2xl font-light mb-4">{model.price}</p>
                <p className="body-refined mb-7">{model.description}</p>
                <ul className="space-y-3 text-sm text-muted-foreground text-left max-w-sm mx-auto">
                  {model.includes.map((item) => (
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

      <section id="growth-addons" className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto rounded-3xl border border-border/60 p-8 md:p-10 text-center bg-background/50 backdrop-blur-sm">
            <p className="label-small mb-4">Growth Add-Ons</p>
            <h2 className="headline-secondary mb-4">Optional upgrades for higher efficiency and lead quality.</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground max-w-3xl mx-auto text-left mb-6">
              {growthAddOns.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="body-refined mb-7">
              Add-ons and automation from £30 to £120/month depending on setup and complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-4">Start your website project.</h2>
          <p className="body-large mb-8">Book a call or request a tailored website quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary rounded-full px-7 py-3">
              Book a Call
            </Link>
            <Link to="/contact" className="btn-secondary rounded-full px-7 py-3">
              Request Website Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Local;
