import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import ServiceTypeCard from "@/components/ServiceTypeCard";

const serviceTypes = [
  {
    title: "Build",
    description: "New websites and systems designed from the ground up.",
    details: [
      "Discovery-led planning and structure",
      "Modern, performant builds",
      "Launch-ready handover and documentation",
    ],
  },
  {
    title: "Rebuild",
    description: "Upgrade or replace what you have without disruption.",
    details: [
      "Audit and rebuild of legacy sites",
      "SEO-aware migration planning",
      "Clear improvements in speed and clarity",
    ],
  },
  {
    title: "Ongoing care",
    description: "Maintenance, monitoring, and improvements over time.",
    details: [
      "Proactive maintenance and updates",
      "Performance and reliability checks",
      "Prioritised support and refinements",
    ],
  },
];

const Services = () => {
  const [activeType, setActiveType] = useState(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-6">Services</p>
            <h1 className="headline-hero mb-8">
              Websites and systems built for long-term reliability.
            </h1>
            <p className="body-large">
              We offer a focused set of services, all designed around the same principle: 
              building digital systems that work reliably and improve over time.
            </p>
          </div>
        </div>
      </section>

      {/* Build / Rebuild / Ongoing care */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="label-small mb-6">Service types</p>
            <h2 className="headline-primary">
              Build, rebuild, and ongoing care - delivered as a single partnership.
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {serviceTypes.map((type, index) => (
              <ServiceTypeCard
                key={type.title}
                title={type.title}
                description={type.description}
                details={type.details}
                isActive={activeType === index}
                onClick={() => setActiveType(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers Detail */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-16">
            <p className="label-small mb-6">Service tiers</p>
            <h2 className="headline-primary">
              Choose the level of partnership that fits your needs.
            </h2>
          </div>

          <div className="space-y-px bg-border">
            {/* Foundation */}
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
                      <span className="text-accent mt-0.5">—</span>
                      New build or complete rebuild of your website
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Secure, reliable hosting infrastructure
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Regular updates and maintenance
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Basic monitoring and performance tracking
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Long-term care mindset from day one
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Growth */}
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
                      <span className="text-accent mt-0.5">—</span>
                      Ongoing improvements and refinements
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Automation and system integrations
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Performance optimisation and analytics
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Priority support and faster response times
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Quarterly strategy reviews
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Continuity */}
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
                      <span className="text-accent mt-0.5">—</span>
                      Enhanced monitoring and operational oversight
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Proactive system care and issue prevention
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Out-of-hours IT and system support
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
                      Evening and weekend availability
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">—</span>
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
              No lock-ins, no hidden fees — just ongoing care for systems that matter.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="label-small mb-6">What we build</p>
              <h2 className="headline-primary">
                Digital systems designed for reliability and clarity.
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Websites</h3>
                <p className="body-refined">
                  Modern, performant websites that represent your business accurately and work reliably 
                  across all devices and conditions.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Platforms and portals</h3>
                <p className="body-refined">
                  Custom platforms for clients, teams, or operations — built with the same attention 
                  to reliability and long-term maintenance.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Integrations</h3>
                <p className="body-refined">
                  Connecting your tools and systems so they work together smoothly, 
                  reducing manual effort and improving operational flow.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Rebuilds</h3>
                <p className="body-refined">
                  Taking existing websites and platforms that have outgrown their current state 
                  and bringing them up to modern standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-8">
            Let's discuss what you need.
          </h2>
          <p className="body-large mb-10">
            Every engagement starts with a conversation. Tell us about your situation, 
            and we'll let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-base font-light group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="link-underline">Contact</span>
            <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
