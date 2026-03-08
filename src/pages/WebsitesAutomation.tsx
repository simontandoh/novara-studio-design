import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { SITE_URL } from "@/lib/seo";
import BookCallButton from "@/components/BookCallButton";

const pricingModels = [
  {
    name: "Launch Plan",
    price: "\u00A379/month",
    description:
      "Low-friction option for local businesses. Website managed by Novara under the active plan.",
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
      "Minimum 12-month term applies",
      "Ownership transfer available later by agreement",
    ],
  },
  {
    name: "Ownership Plan",
    price: "\u00A3499 upfront + \u00A349/month",
    description:
      "Upfront build with lower ongoing maintenance. You own the website from launch.",
    includes: [
      "Professional business website",
      "Mobile-responsive design",
      "Hosting",
      "Domain connection and launch support",
      "SSL certificate and secure setup",
      "Contact or enquiry forms",
      "Basic on-page SEO setup",
      "Google indexing support",
      "Ongoing maintenance",
      "Backups",
      "Minor support updates",
      "Website ownership from launch",
      "Maintenance can be cancelled anytime",
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

const WebsitesAutomation = () => {
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
            <p className="body-refined mt-4">
              Choose between a managed monthly plan or full ownership from launch.
            </p>
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
              Add-ons and automation from {"\u00A3"}30 to {"\u00A3"}120/month depending on setup and complexity.
            </p>
            <Link to="/automation" className="btn-secondary rounded-full px-6 py-2">
              Explore Automation
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-4">Start your website project.</h2>
          <p className="body-large mb-8">Book a call or request a tailored website quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton
              location="websites_final_cta"
              className="btn-primary rounded-full px-7 py-3"
            />
            <Link to="/contact" className="btn-secondary rounded-full px-7 py-3">
              Request Website Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebsitesAutomation;
