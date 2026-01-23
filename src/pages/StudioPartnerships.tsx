import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const StudioPartnerships = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-6">Studio Partnerships</p>
            <h1 className="headline-hero mb-8">Long-term care.</h1>
            <p className="body-large">Ongoing maintenance and system evolution.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-16">
            <p className="label-small mb-6">Service tiers</p>
            <h2 className="headline-primary">Choose the level of care.</h2>
          </div>

          <div className="space-y-px bg-border">
            <div className="bg-background p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div>
                  <p className="label-small text-accent mb-4">Foundation</p>
                  <h3 className="headline-secondary mb-4">Reliable foundations</h3>
                  <p className="body-large">
                    A modern build or rebuild, with long-term care.
                  </p>
                </div>
                <div>
                  <p className="label-small mb-4">Includes</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      New build or complete rebuild
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Secure hosting infrastructure
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Regular updates and maintenance
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Monitoring and performance tracking
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Long-term care mindset
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
                  <p className="body-large">Ongoing improvement and refinement.</p>
                </div>
                <div>
                  <p className="label-small mb-4">Everything in Foundation, plus</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Ongoing improvements
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Automation and integrations
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Performance optimization
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Priority support
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Quarterly reviews
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
                  <p className="body-large">Coverage beyond standard hours.</p>
                </div>
                <div>
                  <p className="label-small mb-4">Everything in Growth, plus</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Enhanced monitoring
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Proactive system care
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Out-of-hours support
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Evening and weekend availability
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">-</span>
                      Incident response
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-card border border-border">
            <p className="body-refined text-center">
              Subscription-based, long-term care. No lock-ins or hidden fees.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-8">Discuss your project.</h2>
          <p className="body-large mb-10">A short call is the start.</p>
          <Link
            to="/contact?subject=Studio%20Partnership"
            className="inline-flex items-center gap-3 text-base font-light group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="link-underline">Contact</span>
            <span className="text-accent group-hover:translate-x-1 transition-transform">+</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default StudioPartnerships;
