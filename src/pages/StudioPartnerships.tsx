import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const StudioPartnerships = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-6">Studio Partnerships</p>
            <h1 className="headline-hero mb-8">Studio Partnerships</h1>
            <p className="body-large">
              Long-term website care and system evolution.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-16">
            <p className="label-small mb-6">Service tiers</p>
            <h2 className="headline-primary">
              Choose the level of partnership that fits your needs.
            </h2>
          </div>

          <div className="space-y-px bg-border">
            <div className="bg-background p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div>
                  <p className="label-small text-accent mb-4">Foundation</p>
                  <h3 className="headline-secondary mb-4">Reliable foundations</h3>
                  <p className="body-large">
                    For businesses that need a reliable, modern website built or rebuilt
                    professionally. The starting point for a long-term partnership.
                  </p>
                </div>
                <div>
                  <p className="label-small mb-4">Includes</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      New build or complete rebuild of your website
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Secure, reliable hosting infrastructure
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Regular updates and maintenance
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Basic monitoring and performance tracking
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Long-term care mindset from day one
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div>
                  <p className="label-small text-accent mb-4">Growth</p>
                  <h3 className="headline-secondary mb-4">Continuous evolution</h3>
                  <p className="body-large">
                    For businesses that expect their website and systems to evolve.
                    Designed for teams that want to improve continuously.
                  </p>
                </div>
                <div>
                  <p className="label-small mb-4">Everything in Foundation, plus</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Ongoing improvements and refinements
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Automation and system integrations
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Performance optimisation and analytics
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Priority support and faster response times
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Quarterly strategy reviews
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div>
                  <p className="label-small text-accent mb-4">Continuity</p>
                  <h3 className="headline-secondary mb-4">Always-on reliability</h3>
                  <p className="body-large">
                    For businesses where uptime and responsiveness matter beyond standard hours.
                    Designed for continuity, not emergencies.
                  </p>
                </div>
                <div>
                  <p className="label-small mb-4">Everything in Growth, plus</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Enhanced monitoring and operational oversight
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Proactive system care and issue prevention
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Out-of-hours IT and system support
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Evening and weekend availability
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">ƒ?"</span>
                      Incident response and resolution
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-card border border-border">
            <p className="body-refined text-center">
              All tiers are subscription-based and built around long-term partnership.
              No lock-ins, no hidden fees - just ongoing care for systems that matter.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-8">Let's discuss what you need.</h2>
          <p className="body-large mb-10">
            Every engagement starts with a conversation. Tell us about your situation,
            and we'll let you know how we can help.
          </p>
          <Link
            to="/contact?subject=Studio%20Partnership"
            className="inline-flex items-center gap-3 text-base font-light group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="link-underline">Contact</span>
            <span className="text-accent group-hover:translate-x-1 transition-transform">ƒ+'</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default StudioPartnerships;
