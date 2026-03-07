import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { trackEvent } from "@/lib/analytics";

const servicePaths = [
  {
    title: "Websites & Automation",
    description:
      "Professional websites with optional growth systems as your business needs evolve.",
    href: "/websites",
    cta: "Explore Websites & Automation",
  },
  {
    title: "IT Support",
    description:
      "Business IT support for devices, Microsoft 365, networking, backups, and day-to-day issues.",
    href: "/it-support",
    cta: "Explore IT Support",
  },
];

const process = [
  {
    title: "Launch",
    detail: "We define the essentials and deliver a stable setup that is ready for business use.",
  },
  {
    title: "Support",
    detail: "You get dependable ongoing support to keep systems, accounts, and operations running.",
  },
  {
    title: "Grow",
    detail: "When ready, we add automation and improvements that save time and increase conversions.",
  },
];

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Websites, Automation, and Business IT Support"
        description="Novara helps small businesses build and run technology that works with clear website services, practical automation, and business IT support."
        path="/"
      />

      <section className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20 pb-20 md:pb-0">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="container-editorial relative z-10 text-center">
          <p className="label-small mb-4">Business Technology Partner</p>
          <h1 className="headline-hero mb-6 text-center">
            Websites, automation, and business IT support for companies that need systems that work.
          </h1>
          <p className="body-large max-w-3xl mx-auto mb-8">
            Novara helps small businesses launch, maintain, and improve the technology behind growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => trackEvent("cta_click", { label: "Book a Call", location: "home_hero" })}
              className="btn-primary rounded-full px-7 py-3"
            >
              Book a Call
            </Link>
            <a href="#service-paths" className="btn-secondary rounded-full px-7 py-3">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section id="service-paths" className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <p className="label-small mb-4">Choose a Service Path</p>
            <h2 className="headline-primary">Clear support for the right need.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {servicePaths.map((path) => (
              <article key={path.title} className="rounded-lg p-8 md:p-10 border border-border/60 bg-card/40">
                <h3 className="headline-secondary mb-4">{path.title}</h3>
                <p className="body-refined mb-7">{path.description}</p>
                <Link to={path.href} className="btn-secondary rounded-full px-6 py-2">
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <p className="label-small mb-4">How It Works</p>
            <h2 className="headline-primary">Launch. Support. Grow.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((step) => (
              <div key={step.title} className="border border-border/60 rounded-lg p-6 md:p-8 bg-background/50">
                <h3 className="headline-secondary mb-3">{step.title}</h3>
                <p className="body-refined">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto rounded-lg border border-border/60 bg-card/50 p-8 md:p-10 text-center">
            <p className="label-small mb-4">Optional Automation</p>
            <h2 className="headline-secondary mb-4">Automate lead capture, follow-up, and admin tasks.</h2>
            <p className="body-refined mb-7">
              Add practical automation when you are ready: enquiry routing, booking flows, reminders,
              and operational workflows that reduce manual work.
            </p>
            <Link to="/automation" className="btn-secondary rounded-full px-6 py-2">
              Explore Automation
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-4">Ready to improve your business systems?</h2>
          <p className="body-large mb-8">Start with a short call and a clear recommendation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary rounded-full px-7 py-3">
              Book a Call
            </Link>
            <Link to="/contact" className="btn-secondary rounded-full px-7 py-3">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
