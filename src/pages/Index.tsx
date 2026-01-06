import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

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
            className="w-full h-full object-cover opacity-40"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-33901-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container-editorial relative z-10">
          <div className="max-w-3xl">
            <h1 className="headline-hero mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Digital systems that run quietly and reliably.
            </h1>
            <p className="body-large max-w-xl mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Websites and operational support built to last — even when everyone else is offline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center text-sm font-light tracking-wide bg-foreground text-background px-7 py-3 hover:bg-accent transition-colors"
              >
                Start a conversation
              </Link>
              <Link
                to="/studio"
                className="inline-flex items-center justify-center text-sm font-light tracking-wide border border-border px-7 py-3 hover:bg-secondary transition-colors"
              >
                How it works
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
                A long-term systems partner, not a one-off web agency.
              </h2>
              <p className="body-large">
                We design, build, rebuild, and run modern websites and digital systems 
                for businesses that value reliability, clarity, and long-term performance.
              </p>
            </div>
            <div className="flex flex-col gap-8 lg:pt-4">
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">New website builds</h3>
                <p className="body-refined">
                  Modern websites designed and built for businesses ready to present themselves with clarity.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Rebuilds and upgrades</h3>
                <p className="body-refined">
                  Existing websites and platforms brought up to current standards and expectations.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Ongoing care and hosting</h3>
                <p className="body-refined">
                  Monitoring, maintenance, and optimisation so your systems stay reliable over time.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Automation and integrations</h3>
                <p className="body-refined">
                  Systems that work together, reducing manual effort and improving operational flow.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Out-of-hours support</h3>
                <p className="body-refined">
                  Operational and IT support during evenings and weekends — when you need it most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-16">
            <p className="label-small mb-6">Service tiers</p>
            <h2 className="headline-primary">
              Partnership built around long-term care, not one-off delivery.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {/* Foundation */}
            <div className="bg-background p-8 md:p-10">
              <p className="label-small text-accent mb-6">Foundation</p>
              <h3 className="headline-secondary mb-4">Reliable foundations</h3>
              <p className="body-refined mb-8">
                For businesses that need a reliable, modern website built or rebuilt professionally.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  New build or rebuild
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Hosting and maintenance
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Updates and basic monitoring
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Long-term care mindset from day one
                </li>
              </ul>
            </div>

            {/* Growth */}
            <div className="bg-card p-8 md:p-10">
              <p className="label-small text-accent mb-6">Growth</p>
              <h3 className="headline-secondary mb-4">Continuous evolution</h3>
              <p className="body-refined mb-8">
                For businesses that expect their website and systems to evolve over time.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Everything in Foundation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Ongoing improvements and refinements
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Automation and integrations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Performance optimisation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Priority support
                </li>
              </ul>
            </div>

            {/* Continuity */}
            <div className="bg-background p-8 md:p-10">
              <p className="label-small text-accent mb-6">Continuity</p>
              <h3 className="headline-secondary mb-4">Always-on reliability</h3>
              <p className="body-refined mb-8">
                For businesses where uptime and responsiveness matter beyond standard hours.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Everything in Growth
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Enhanced monitoring and oversight
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Proactive system care
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Out-of-hours IT support
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  Designed for continuity, not emergencies
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            All tiers are subscription-based, built around long-term partnership rather than one-off delivery.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <p className="label-small mb-6">Who it's for</p>
              <h2 className="headline-primary">
                Businesses that need stability beyond standard working hours.
              </h2>
            </div>
            <div className="flex flex-col gap-6 lg:pt-2">
              <div className="flex gap-4">
                <span className="text-accent shrink-0">—</span>
                <p className="body-large">
                  <span className="text-foreground">Founders and operators</span> who want their digital presence 
                  to work as reliably as their business does.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent shrink-0">—</span>
                <p className="body-large">
                  <span className="text-foreground">Growing businesses</span> that need systems that scale 
                  without constant intervention.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent shrink-0">—</span>
                <p className="body-large">
                  <span className="text-foreground">Teams that need continuity</span> — support that extends 
                  into evenings and weekends when problems don't wait.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding border-t border-border bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-8">
            Reliability, not promises.
          </h2>
          <p className="body-large max-w-2xl mx-auto mb-4">
            We focus on outcomes over claims. Systems that work. Support that's there when needed. 
            A partnership built on doing the work properly, not on selling the idea of it.
          </p>
          <p className="body-refined max-w-xl mx-auto">
            No exaggerated claims. No hype. Just quiet, professional work that speaks for itself.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-primary mb-6">
                Ready to work with a partner who stays around?
              </h2>
              <p className="body-large">
                Let's talk about what you need — whether it's a new build, a rebuild, 
                or ongoing care for systems that matter.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-base font-light group"
              >
                <span className="link-underline">Start a conversation</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;