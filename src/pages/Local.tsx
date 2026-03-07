import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { SITE_URL } from "@/lib/seo";

const pricingModels = [
  {
    name: "Launch Plan",
    price: "GBP79/month",
    description: "Low-friction option for local businesses.",
    includes: [
      "Professional website",
      "Mobile responsive layout",
      "Hosting",
      "Security",
      "Contact/enquiry form",
      "Basic updates",
      "Maintenance",
    ],
  },
  {
    name: "Ownership Plan",
    price: "GBP499 upfront + GBP49/month",
    description: "Upfront build with lower ongoing maintenance.",
    includes: [
      "Website build",
      "Hosting",
      "Security",
      "Maintenance",
      "Ongoing support for minor updates",
    ],
  },
];

const Local = () => {
  return (
    <Layout>
      <Seo
        title="Websites and Automation"
        description="Novara builds modern business websites and adds optional automation to support lead handling, booking, and growth systems."
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
            <h1 className="headline-hero mb-6 text-center">Modern websites with room to grow.</h1>
            <p className="body-large">
              We build reliable business websites first, then enhance them with automation and growth
              systems when the timing is right.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="label-small mb-4">Pricing</p>
            <h2 className="headline-primary">Two clear options.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {pricingModels.map((model) => (
              <article key={model.name} className="rounded-lg p-8 md:p-10 border border-border/60 bg-card/50">
                <h3 className="headline-secondary mb-2">{model.name}</h3>
                <p className="text-lg font-light mb-3">{model.price}</p>
                <p className="body-refined mb-6">{model.description}</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
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

      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto rounded-lg border border-border/60 p-8 md:p-10 text-center bg-background/50">
            <p className="label-small mb-4">Optional Growth Add-Ons</p>
            <h2 className="headline-secondary mb-4">Automation and growth systems when needed.</h2>
            <ul className="space-y-3 text-sm text-muted-foreground max-w-xl mx-auto text-left mb-6">
              <li className="flex items-start gap-3"><span className="text-accent mt-0.5">+</span>Booking systems</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-0.5">+</span>CRM integration</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-0.5">+</span>AI enquiry response</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-0.5">+</span>Lead follow-up automation</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-0.5">+</span>Review automation</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-0.5">+</span>Analytics dashboards</li>
            </ul>
            <p className="body-refined mb-7">
              Growth add-ons and automation available from GBP30 to GBP120 per month depending on requirements.
            </p>
            <Link to="/automation" className="btn-secondary rounded-full px-6 py-2">
              Explore Automation Options
            </Link>
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
