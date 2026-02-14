import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
const values = [
  {
    title: "Reliability",
    description: "Systems that stay stable under real-world use.",
  },
  {
    title: "Clarity",
    description: "Plain language, clear scope, and simple paths forward.",
  },
  {
    title: "Continuity",
    description: "We stay involved after launch to keep things healthy.",
  },
  {
    title: "Honesty",
    description: "We say no when it is not the right fit.",
  },
];

const proofItems = [
  {
    title: "Hospitality group website rebuild",
    outcome: "34% increase in direct booking enquiries in 8 weeks",
    focus: "Rebuilt the site structure, improved page speed, and simplified the booking path.",
  },
  {
    title: "B2B service firm lead flow",
    outcome: "2.1x more qualified leads after launch",
    focus: "Clarified services, added proof blocks, and optimized form flow.",
  },
  {
    title: "Retail brand relaunch",
    outcome: "28% higher conversion on core landing pages",
    focus: "Refined messaging, improved imagery layout, and tightened CTA placement.",
  },
];

const About = () => {
  return (
    <Layout>
      <Seo
        title="About Novara Studios and Our Approach"
        description="Novara Studios is a premium digital systems studio focused on clear strategy, reliable builds, and long-term care for modern websites."
        path="/about"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="label-small mb-6">About</p>
              <h1 className="headline-hero text-center">Websites that keep working.</h1>
            </div>
            <div className="lg:pt-4">
              <p className="body-large mb-6">
                Novara is a digital systems studio focused on clarity, reliability, and long-term care.
              </p>
              <p className="body-refined">
                We partner with teams that need a site to run quietly, stay secure, and evolve without drama.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="headline-primary mb-6">What we do</h2>
              <p className="body-large">
                Build, rebuild, and maintain websites that are built to last.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Builds and rebuilds</h3>
                <p className="body-refined">
                  Clear information architecture, resilient systems, and clean handover.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Ongoing care</h3>
                <p className="body-refined">
                  Monitoring, maintenance, and improvement without the noise.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Quiet operations</h3>
                <p className="body-refined">
                  Consistent communication and predictable delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-padding-proof">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12 mx-auto text-center">
            <p className="label-small mb-4">Proof</p>
            <h2 className="headline-primary">Outcomes that stay measurable.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {proofItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg p-6 md:p-8 border border-border/60 bg-card/70 transition-all duration-200 hover:bg-card/90 hover:border-accent/60 hover:shadow-xl text-center"
              >
                <h3 className="text-base font-normal mb-3">{item.title}</h3>
                <p className="text-sm text-foreground mb-4">{item.outcome}</p>
                <p className="body-refined">{item.focus}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Outcomes shown are representative. Case studies are anonymized.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-editorial">
          <h2 className="headline-primary mb-12">Values</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 md:p-10">
                <h3 className="text-lg font-light mb-3">{value.title}</h3>
                <p className="body-refined">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
