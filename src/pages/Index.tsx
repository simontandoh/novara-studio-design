import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { trackEvent } from "@/lib/analytics";

const servicePaths = [
  {
    title: "Websites & Automation",
    description:
      "Professional websites with structured maintenance, SEO foundations, and optional automation upgrades.",
    href: "/websites",
    cta: "Explore Websites & Automation",
  },
  {
    title: "IT Support",
    description:
      "Practical business IT support for devices, accounts, Microsoft 365, backups, and network reliability.",
    href: "/it-support",
    cta: "Explore IT Support",
  },
];

const process = [
  {
    title: "Launch",
    detail: "Define priorities, build the essentials, and launch with dependable setup.",
  },
  {
    title: "Support",
    detail: "Maintain stability with ongoing technical support and practical oversight.",
  },
  {
    title: "Grow",
    detail: "Add automation and improvements that save time and strengthen conversion flow.",
  },
];

const portfolioPreview = [
  {
    name: "Coastal Dental Care",
    category: "Websites & Automation",
    summary: "Reworked service structure and enquiry flow to improve qualified appointment requests.",
  },
  {
    name: "Briarfield Electrical",
    category: "Websites",
    summary: "Modernized website with clear service pathways and stronger quote conversion journeys.",
  },
  {
    name: "Northline Advisory",
    category: "Business IT Support",
    summary: "Introduced support workflows and Microsoft 365 account controls for smoother operations.",
  },
];

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Novara | Websites, Automation, and IT Support"
        description="Novara helps small businesses launch, maintain, and improve technology through websites, automation, and practical business IT support."
        path="/"
      />

      <section className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20 pb-20 md:pb-0">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-35"
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
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.42em] mb-3">NOVARA</h1>
          <p className="text-xl md:text-3xl font-light tracking-[0.16em] text-muted-foreground mb-6">Born From Light.</p>
          <p className="headline-secondary max-w-4xl mx-auto mb-4">
            Websites, automation, and business IT support for companies that need systems that work.
          </p>
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
            <Link to="/services" className="btn-secondary rounded-full px-7 py-3">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section id="service-paths" className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <p className="label-small mb-4">Service Paths</p>
            <h2 className="headline-primary">Choose the right support track.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {servicePaths.map((path) => (
              <article
                key={path.title}
                className="rounded-2xl p-8 md:p-10 border border-border/60 bg-card/40 backdrop-blur-sm"
                style={{
                  background:
                    "radial-gradient(120% 120% at 15% 0%, rgba(180, 200, 235, 0.14), transparent 56%), radial-gradient(120% 120% at 100% 100%, rgba(86, 108, 150, 0.16), transparent 62%)",
                }}
              >
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
              <div key={step.title} className="border border-border/60 rounded-xl p-6 md:p-8 bg-background/50">
                <h3 className="headline-secondary mb-3">{step.title}</h3>
                <p className="body-refined">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="label-small mb-4">Portfolio Preview</p>
            <h2 className="headline-primary">Selected project outcomes.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioPreview.map((project) => (
              <article key={project.name} className="rounded-xl border border-border/60 bg-card/40 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.16em] text-accent mb-3">{project.category}</p>
                <h3 className="headline-secondary mb-3">{project.name}</h3>
                <p className="body-refined">{project.summary}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/portfolio" className="btn-secondary rounded-full px-7 py-3">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-4">Ready to strengthen your systems?</h2>
          <p className="body-large mb-8">Start with a short call and a clear recommendation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary rounded-full px-7 py-3">
              Book a Call
            </Link>
            <Link to="/services" className="btn-secondary rounded-full px-7 py-3">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
