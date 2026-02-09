import Layout from "@/components/Layout";
import { Mail, AlertCircle, Server, KeyRound } from "lucide-react";
import Seo from "@/components/Seo";

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
        title="Continuity Support"
        description="Structured out-of-hours coverage for websites and digital systems."
        path="/continuity"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-6">Continuity support</p>
            <h1 className="headline-hero mb-8">Support beyond standard hours.</h1>
            <p className="body-large">
              Evening and weekend coverage, with monitoring and response.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="headline-primary mb-6">What it is</h2>
              <p className="body-large mb-6">Structured coverage beyond standard hours.</p>
              <p className="body-refined">
                Monitoring, response, and clear updates when timing matters.
              </p>
            </div>
            <div className="bg-card border border-border p-8 md:p-10">
              <h3 className="text-lg font-light mb-6">Coverage includes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-1">-</span>
                  <p className="text-muted-foreground font-light">
                    <span className="text-foreground">Evenings</span> - typically 6pm to
                    10pm weekdays
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-1">-</span>
                  <p className="text-muted-foreground font-light">
                    <span className="text-foreground">Weekends</span> - reasonable hours
                    on Saturday and Sunday
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-1">-</span>
                  <p className="text-muted-foreground font-light">
                    <span className="text-foreground">Monitoring</span> - early detection
                    where possible
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
            <div>
              <h2 className="headline-primary mb-6">Request support</h2>
              <p className="body-large mb-8">Direct contact. Clear responses.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground font-light mb-1">Email</p>
                    <p className="text-sm text-muted-foreground">
                      support@novarastudios.co.uk - monitored during coverage
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <AlertCircle
                    className="w-5 h-5 text-accent shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-foreground font-light mb-1">Direct line</p>
                    <p className="text-sm text-muted-foreground">
                      Dedicated number for continuity clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background border border-border p-8 md:p-10">
              <h3 className="text-lg font-light mb-6">Clear expectations</h3>
              <ul className="space-y-4 text-sm text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">-</span>
                  Response within 1-2 hours during coverage
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">-</span>
                  Complex issues take longer; updates follow
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">-</span>
                  Professional support, not instant on-demand
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">-</span>
                  Designed for continuity, not crisis response
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContinuitySupport;
