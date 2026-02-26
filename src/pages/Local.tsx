import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { SITE_URL } from "@/lib/seo";

const maintenanceTiers = [
  {
    name: "Continuity",
    price: "\u00A349/month",
    description:
      "Keeps your site stable, secure, and up to date - without you needing to think about it.",
    includes: [
      "Domain & DNS management",
      "Hosting management",
      "Core updates & security patching",
      "Basic uptime monitoring",
      "Small content or configuration updates",
      "Monthly health check (lightweight)",
    ],
  },
  {
    name: "Managed Presence",
    price: "\u00A399/month",
    description: "Ongoing oversight where the website supports growth - not just maintenance.",
    includes: [
      "Everything in Continuity",
      "Performance monitoring and review",
      "Google Analytics & Search Console setup/oversight",
      "Technical SEO (indexing, crawl health, metadata)",
      "Proactive fixes and improvements",
      "Faster response times and priority support",
    ],
    featured: true,
  },
  {
    name: "Operations Support",
    price: "\u00A3199/month",
    description:
      "For businesses where downtime, performance issues, or missed enquiries carry real risk.",
    includes: [
      "Everything in Managed Presence",
      "Enhanced monitoring and incident triage",
      "Deeper technical oversight (infrastructure/integrations)",
      "Greater support allocation",
      "Continuity-focused response expectations",
      "Best-effort reliability expectations",
    ],
  },
];

const Local = () => {
  return (
    <Layout>
      <Seo
        title="Website Builds and Ongoing Care Plans"
        description="Premium website builds and structured care plans for stable performance, clear structure, and long-term continuity."
        path="/websites"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Website Builds and Ongoing Care",
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
          <div className="max-w-3xl mx-auto mb-12 text-center p-8 md:p-10">
            <p className="label-small mb-4">Services</p>
            <h1 className="headline-hero mb-6 text-center">Websites</h1>
            <p className="body-large">
              Structured builds and maintenance plans designed for calm delivery and reliable performance.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 p-6 md:p-8">
            <div className="max-w-2xl mb-10 mx-auto">
              <p className="label-small mb-4">Builds</p>
              <h2 className="headline-primary">Three build tiers.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Foundation",
                  detail: "A focused, well-structured website for early-stage businesses or individuals who need a clear, credible online presence with essential pages and clean execution.",
                },
                {
                  name: "Growth",
                  detail: "A deeper, more flexible build for established businesses that need clearer service structure, stronger user flows, and a website designed to evolve over time.",
                },
                {
                  name: "Premium",
                  detail: "Larger, more complex builds for organisations where the website is business-critical, with advanced content, integrations, and long-term technical oversight.",
                },
              ].map((tier) => (
                <div key={tier.name} className="rounded-lg p-6 md:p-8 border border-border/60 bg-transparent noise-overlay">
                  <h3 className="headline-secondary mb-3">{tier.name}</h3>
                  <p className="body-refined">{tier.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10 mx-auto text-center">
            <p className="label-small mb-4">Maintenance plans</p>
            <h2 className="headline-primary">Ongoing care.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {maintenanceTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-lg p-8 md:p-10 border border-border/60 bg-card/80 noise-overlay transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-card hover:border-accent/60 hover:shadow-xl flex h-full flex-col text-center ${
                  tier.featured ? "relative overflow-hidden shadow-lg shadow-accent/20 border-accent/50" : ""
                }`}
              >
                {tier.featured && (
                  <>
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(120% 90% at 20% 0%, rgba(135, 170, 220, 0.2), transparent 58%), radial-gradient(110% 80% at 100% 100%, rgba(95, 125, 180, 0.14), transparent 62%)",
                      }}
                    />
                    <span
                      className="absolute top-4 left-4 text-accent/90"
                      aria-label="Featured plan"
                      role="img"
                    >
                      ★
                    </span>
                  </>
                )}
                {tier.featured && (
                  <div className="h-4" aria-hidden="true" />
                )}
                <h3 className="headline-secondary mb-3">{tier.name}</h3>
                <p className="text-lg font-light text-foreground mb-2">{tier.price}</p>
                <p className="body-refined mb-6">{tier.description}</p>
                <ul className="space-y-3 text-sm text-muted-foreground w-full max-w-[290px] mx-auto text-left">
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
          <div className="max-w-3xl mx-auto mt-10 rounded-lg border border-border/60 bg-card/50 p-6 md:p-8 text-center">
            <p className="label-small mb-3">Optional automation</p>
            <p className="body-refined mb-6">
              Automation can be added as operational enhancements such as after-hours
              responses, enquiry routing, quote follow-ups, and review requests. Pricing is
              assessed per business based on enquiry volume and setup complexity.
            </p>
            <a href="/contact" className="btn-secondary rounded-full px-6 py-2">
              Discuss automation
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Local;
