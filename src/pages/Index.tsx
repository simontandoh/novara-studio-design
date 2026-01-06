import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import TierCard from "@/components/TierCard";
import ProcessStep from "@/components/ProcessStep";
import CTASection from "@/components/CTASection";

const tiers = [
  {
    title: "Reliable foundations",
    subtitle: "Foundation",
    description: "For businesses that need a reliable, modern website built or rebuilt professionally.",
    designedFor: "Small teams needing a reliable modern website",
    includes: [
      "New build or rebuild",
      "Hosting and maintenance",
      "Core updates and basic monitoring",
      "Clean handover and documentation",
    ],
    supportLevel: "Standard business hours",
  },
  {
    title: "Continuous evolution",
    subtitle: "Growth",
    description: "For businesses that expect their website and systems to evolve over time.",
    designedFor: "Businesses that need the website to evolve",
    includes: [
      "Everything in Foundation",
      "Ongoing improvements and refinements",
      "Analytics and performance optimisation",
      "Automation and integrations",
      "Priority support",
    ],
    supportLevel: "Priority response during business hours",
    featured: true,
  },
  {
    title: "Always-on reliability",
    subtitle: "Continuity",
    description: "For businesses where uptime and responsiveness matter beyond standard hours.",
    designedFor: "Businesses where uptime and responsiveness matter",
    includes: [
      "Everything in Growth",
      "Enhanced monitoring and oversight",
      "Proactive system care",
      "Evening and weekend support",
      "Operational continuity",
    ],
    supportLevel: "Extended hours including evenings and weekends",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Clarify goals, scope, and what success looks like for your project.",
  },
  {
    number: "02",
    title: "Build or rebuild",
    description: "Deliver quickly, then refine based on real feedback.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Thorough testing, clean handover, and careful monitoring.",
  },
  {
    number: "04",
    title: "Ongoing care",
    description: "Maintenance, improvements, and support over time.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-33901-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-background/70" />
        </div>

        {/* Hero Content */}
        <div className="container-editorial relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground border border-border px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Evening & weekend support available
              </span>
            </div>

            <h1 className="headline-hero mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Digital systems that run quietly and reliably.
            </h1>
            <p className="body-large max-w-xl mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              We build, rebuild, and maintain websites — with continuity support 
              beyond standard hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <Link
                to="/services"
                className="inline-flex items-center justify-center text-sm font-light tracking-wide bg-foreground text-background px-7 py-3 hover:bg-accent transition-colors"
              >
                View services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center text-sm font-light tracking-wide border border-border px-7 py-3 hover:bg-secondary hover:border-accent/50 transition-all"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Novara Does */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="label-small mb-6">What we do</p>
              <h2 className="headline-primary mb-6">
                Build. Rebuild. Ongoing care.
              </h2>
              <p className="body-large">
                We design, build, and maintain modern websites and digital systems 
                for businesses that value reliability over novelty.
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:pt-4">
              <div className="border-l border-border pl-6 hover:border-accent/50 transition-colors">
                <h3 className="text-base font-normal mb-2">New builds</h3>
                <p className="body-refined">
                  Modern websites and ecommerce stores built from the ground up.
                </p>
              </div>
              <div className="border-l border-border pl-6 hover:border-accent/50 transition-colors">
                <h3 className="text-base font-normal mb-2">Rebuilds</h3>
                <p className="body-refined">
                  Upgrade or replace existing websites that no longer serve you.
                </p>
              </div>
              <div className="border-l border-border pl-6 hover:border-accent/50 transition-colors">
                <h3 className="text-base font-normal mb-2">Ongoing care</h3>
                <p className="body-refined">
                  Maintenance, hosting, monitoring, and improvements over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers Preview */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="label-small mb-6">Service tiers</p>
              <h2 className="headline-primary">
                Partnership built around long-term care.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-light group shrink-0"
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:h-px after:bottom-0 after:left-0 after:bg-accent after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                Compare tiers
              </span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {tiers.map((tier) => (
              <TierCard key={tier.subtitle} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding border-t border-border bg-card">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="label-small mb-6">Our approach</p>
              <h2 className="headline-primary mb-6">
                Reliability over novelty. Clarity over complexity.
              </h2>
              <p className="body-large">
                We focus on outcomes, not outputs. Websites that work well, stay secure, 
                and get better over time — without constant attention from you.
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:pt-4">
              <div className="flex gap-4">
                <span className="text-accent shrink-0">—</span>
                <p className="body-large">
                  <span className="text-foreground">Long-term thinking.</span> Every decision 
                  considers not just today, but two years from now.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent shrink-0">—</span>
                <p className="body-large">
                  <span className="text-foreground">Direct communication.</span> No account 
                  managers. You work with the people building your site.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent shrink-0">—</span>
                <p className="body-large">
                  <span className="text-foreground">Honest timelines.</span> We estimate 
                  conservatively and deliver on our commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Preview */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="label-small mb-6">How it works</p>
              <h2 className="headline-primary">
                A calm, structured process.
              </h2>
            </div>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-light group shrink-0"
            >
              <span className="relative after:content-[''] after:absolute after:w-full after:h-px after:bottom-0 after:left-0 after:bg-accent after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                Learn more
              </span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="border-l border-border pl-6">
                <span className="label-small text-accent">{step.number}</span>
                <h3 className="text-lg font-light mt-2 mb-2">{step.title}</h3>
                <p className="body-refined">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to work with a partner who stays around?"
        description="Let's talk about what you need — whether it's a new build, a rebuild, or ongoing care for systems that matter."
        primaryLabel="Start a conversation"
        secondaryLabel="View services"
        secondaryTo="/services"
      />
    </Layout>
  );
};

export default Index;
