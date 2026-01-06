import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { Clock, Mail, Shield, AlertCircle, Server, KeyRound } from "lucide-react";

const issuesCovered = [
  { icon: Server, label: "Website downtime" },
  { icon: AlertCircle, label: "Broken forms or functionality" },
  { icon: KeyRound, label: "DNS and hosting issues" },
  { icon: Mail, label: "Email domain problems" },
  { icon: Clock, label: "Urgent content updates" },
  { icon: Shield, label: "Access and security issues" },
];

const ContinuitySupport = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-6">Continuity support</p>
            <h1 className="headline-hero mb-8">
              Support that continues when standard hours end.
            </h1>
            <p className="body-large">
              Problems don't wait for Monday morning. Continuity support means your 
              systems are monitored and you have someone to call during evenings and 
              weekends — before issues become emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="headline-primary mb-6">What continuity support means</h2>
              <p className="body-large mb-6">
                This isn't a 24/7 emergency hotline. It's thoughtful, extended coverage 
                for businesses that need reliability beyond the nine-to-five.
              </p>
              <p className="body-refined">
                We monitor your systems proactively, respond to issues during extended 
                hours, and handle the kinds of problems that can't wait until tomorrow.
              </p>
            </div>
            <div className="bg-card border border-border p-8 md:p-10">
              <h3 className="text-lg font-light mb-6">Coverage includes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-1">—</span>
                  <p className="text-muted-foreground font-light">
                    <span className="text-foreground">Evening support</span> — typically 6pm to 10pm on weekdays
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-1">—</span>
                  <p className="text-muted-foreground font-light">
                    <span className="text-foreground">Weekend support</span> — reasonable hours on Saturday and Sunday
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-1">—</span>
                  <p className="text-muted-foreground font-light">
                    <span className="text-foreground">Proactive monitoring</span> — we often know before you do
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Issues covered */}
      <section className="section-padding border-t border-border bg-card">
        <div className="container-editorial">
          <div className="text-center mb-12">
            <h2 className="headline-primary mb-4">Typical issues we handle</h2>
            <p className="body-large max-w-2xl mx-auto">
              The kinds of problems that can't wait — and shouldn't have to.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {issuesCovered.map((issue, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-background border border-border"
              >
                <issue.icon className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-muted-foreground font-light">
                  {issue.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to request support */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="headline-primary mb-6">How to request support</h2>
              <p className="body-large mb-8">
                Getting help should be simple. No ticketing systems, no hold queues — 
                just clear communication channels.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground font-light mb-1">Email</p>
                    <p className="text-sm text-muted-foreground">
                      support@novara.studio — monitored during extended hours
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground font-light mb-1">Direct line</p>
                    <p className="text-sm text-muted-foreground">
                      Continuity clients receive a dedicated contact number
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border p-8 md:p-10">
              <h3 className="text-lg font-light mb-6">Clear expectations</h3>
              <ul className="space-y-4 text-sm text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">—</span>
                  We aim to respond within 1-2 hours during covered times
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">—</span>
                  Complex issues may take longer — we'll keep you updated
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">—</span>
                  This is calm, professional support — not instant on-demand
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">—</span>
                  Designed for continuity, not crisis management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive monitoring */}
      <section className="section-padding border-t border-border bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-6">Proactive, not reactive</h2>
          <p className="body-large mb-4">
            Continuity support includes proactive monitoring. We check your systems 
            regularly and often catch issues before they affect your customers.
          </p>
          <p className="body-refined">
            Because the best support is when nothing goes wrong in the first place.
          </p>
        </div>
      </section>

      <CTASection
        headline="Need support beyond standard hours?"
        description="Let's discuss how continuity support could work for your business."
        primaryLabel="Start a conversation"
        secondaryLabel="View all services"
        secondaryTo="/services"
      />
    </Layout>
  );
};

export default ContinuitySupport;
