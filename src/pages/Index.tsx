import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HomeHero from "@/components/home/HomeHero";
import Seo from "@/components/Seo";
import { SITE_URL } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";

const proofItems = [
  {
    title: "Hospitality group website rebuild",
    outcome: "34% increase in direct booking enquiries in 8 weeks",
    focus: "Rebuilt the site structure, improved page speed, and simplified the booking path.",
  },
  {
    title: "B2B service firm lead flow",
    outcome: "2.1x more qualified leads after launch",
    focus: "Clarified services, added proof blocks, and optimized form flow.",
  },
  {
    title: "Retail brand relaunch",
    outcome: "28% higher conversion on core landing pages",
    focus: "Refined messaging, improved imagery layout, and tightened CTA placement.",
  },
];

const workSteps = [
  {
    number: "01",
    title: "Brief and goals",
    detail: "We align on outcomes, pages, and constraints in one focused session.",
  },
  {
    number: "02",
    title: "Build and review",
    detail: "We ship a working version fast, then refine with real feedback.",
  },
  {
    number: "03",
    title: "Launch and polish",
    detail: "We QA, optimize performance, and go live with clean handover.",
  },
  {
    number: "04",
    title: "Care and continuity",
    detail: "We monitor, maintain, and improve so the site stays sharp.",
  },
];

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Digital Systems Studio"
        description="Novara Studios designs, builds, and maintains high-performing websites and digital systems with calm delivery and measurable outcomes."
        path="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Novara Studios",
            url: SITE_URL,
            logo: `${SITE_URL}/favicon.png`,
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: "hello@novarastudios.co.uk",
                contactType: "sales",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Novara Studios",
            url: SITE_URL,
          },
        ]}
      />
      <HomeHero />

      <section id="home-next" className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="surface-panel noise-overlay rounded-lg p-8 md:p-10">
              <p className="label-small mb-4">Websites</p>
              <h2 className="headline-secondary mb-4">Websites built to last.</h2>
              <p className="body-refined mb-6">
                Strategy, design, and build with ongoing care built in.
              </p>
              <Link
                to="/websites"
                onClick={() => trackEvent("cta_click", { label: "See services", location: "home_cards" })}
                className="btn-secondary rounded-full px-6 py-2"
              >
                See services
              </Link>
            </div>
            <div className="surface-panel noise-overlay rounded-lg p-8 md:p-10">
              <p className="label-small mb-4">Beyond Local</p>
              <h2 className="headline-secondary mb-4">Systems that scale quietly.</h2>
              <p className="body-refined mb-6">
                Stable infrastructure, reliable flows, and steady improvements.
              </p>
              <Link
                to="/contact"
                onClick={() => trackEvent("cta_click", { label: "Contact", location: "home_cards" })}
                className="btn-secondary rounded-full px-6 py-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="label-small mb-4">Proof</p>
            <h2 className="headline-primary">Outcomes that stay measurable.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {proofItems.map((item) => (
              <div key={item.title} className="surface-panel noise-overlay rounded-lg p-6 md:p-8">
                <h3 className="text-base font-normal mb-3">{item.title}</h3>
                <p className="text-sm text-foreground mb-4">{item.outcome}</p>
                <p className="body-refined">{item.focus}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Outcomes shown are representative. Case studies are anonymized.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="label-small mb-4">How we work</p>
              <h2 className="headline-primary mb-6">Structured, quiet delivery.</h2>
              <p className="body-large">
                A clear 4-step process that keeps momentum and avoids surprises.
              </p>
              <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div className="border border-border/60 rounded-lg p-5">
                  <p className="text-foreground mb-2">You provide</p>
                  <p>Goals, key content, and approvals on milestones.</p>
                </div>
                <div className="border border-border/60 rounded-lg p-5">
                  <p className="text-foreground mb-2">We deliver</p>
                  <p>Strategy, design, build, QA, and ongoing care.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {workSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <span className="text-xs tracking-[0.3em] text-muted-foreground">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base font-normal mb-2">{step.title}</h3>
                    <p className="body-refined">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
