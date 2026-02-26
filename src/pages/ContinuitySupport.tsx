import Layout from "@/components/Layout";
import { Mail, AlertCircle, Server, KeyRound, Clock, Shield } from "lucide-react";
import Seo from "@/components/Seo";
import { SITE_URL } from "@/lib/seo";

const issuesCovered = [
  { icon: Server, label: "Site downtime" },
  { icon: AlertCircle, label: "Broken forms or flows" },
  { icon: KeyRound, label: "DNS and hosting issues" },
  { icon: Mail, label: "Email domain issues" },
  { icon: Clock, label: "Urgent updates" },
  { icon: Shield, label: "Access and security" },
];

const ContinuitySupport = () => {
  return (
    <Layout>
      <Seo
        title="Maintenance & Support Overview"
        description="An overview of ongoing maintenance and support coverage across tiers, including expectations, boundaries, and best-effort response."
        path="/continuity"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Maintenance and Support",
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
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-small mb-6">Maintenance and support</p>
            <h1 className="headline-hero mb-8 text-center">Ongoing maintenance, with support built in.</h1>
            <p className="body-large">
              Maintenance keeps your site stable and secure over time. Support sits within the
              maintenance tiers, with coverage depth that varies by tier and no 24/7 emergency
              claims.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="headline-primary mb-6">What it is</h2>
              <p className="body-large mb-6">
                Ongoing technical care to keep your website operational, secure, and current.
              </p>
              <p className="body-refined">
                Support covers triage, response, and clear communication when issues arise. The
                tier you are on determines depth, oversight, and expected pace.
              </p>
            </div>
            <div className="bg-card/80 border border-border p-8 md:p-10">
              <h3 className="text-lg md:text-xl font-light mb-6 text-center">Coverage includes</h3>
              <ul className="space-y-5 max-w-md mx-auto">
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-0.5">-</span>
                  <p className="text-muted-foreground font-light">
                    <span className="text-foreground">Business-hours coverage</span> as the
                    baseline for maintenance support
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-0.5">-</span>
                  <p className="text-muted-foreground font-light">
                    <span className="text-foreground">Evening and weekend coverage</span>{" "}
                    where appropriate, on a best-effort basis
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-0.5">-</span>
                  <p className="text-muted-foreground font-light">
                    <span className="text-foreground">Monitoring</span> - early detection
                    where possible
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-0.5">-</span>
                  <p className="text-muted-foreground font-light">
                    <span className="text-foreground">Issue triage and communication</span>{" "}
                    with clear updates while work is in progress
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="text-center mb-12">
            <h2 className="headline-primary mb-4">Typical issues we handle</h2>
            <p className="body-large max-w-2xl mx-auto">
              Issues that cannot wait until the next business day.
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

      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="bg-background/70 border border-border p-8 md:p-10">
              <h2 className="headline-primary mb-6">Request support</h2>
              <p className="body-large mb-8">Direct contact. Clear responses.</p>
              <div className="space-y-7 max-w-lg">
                <div className="grid grid-cols-[20px_1fr] gap-4 items-start">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground font-light mb-1">Email</p>
                    <p className="text-sm text-muted-foreground">
                      support@novarastudios.co.uk - monitored during coverage
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[20px_1fr] gap-4 items-start">
                  <AlertCircle
                    className="w-5 h-5 text-accent shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-foreground font-light mb-1">Support channel</p>
                    <p className="text-sm text-muted-foreground">
                      Available for maintenance clients based on tier and coverage context
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-base font-normal mb-3">How tiers differ</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Continuity provides baseline maintenance and support. Managed Presence adds
                  deeper oversight and proactive improvements. Operations Support is designed for
                  higher-risk, business-critical use cases that need broader support allocation.
                </p>
              </div>
            </div>
            <div className="bg-background border border-border p-8 md:p-10">
              <h3 className="text-lg md:text-xl font-light mb-6">Clear expectations</h3>
              <ul className="space-y-4 text-sm text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">-</span>
                  Response is best-effort and tier-dependent, with triage and communication first
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">-</span>
                  Complex issues can take longer; updates follow throughout
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">-</span>
                  Professional support, not instant on-demand response
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">-</span>
                  Designed for continuity and operational stability, not crisis response
                </li>
              </ul>
              <p className="text-sm text-muted-foreground font-light mt-8 pt-6 border-t border-border">
                What it is not: 24/7 emergency on-call, an SLA, or a guarantee of uptime or
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContinuitySupport;
