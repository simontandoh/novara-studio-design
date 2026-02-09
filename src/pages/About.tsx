import Layout from "@/components/Layout";
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

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="label-small mb-6">About</p>
              <h1 className="headline-hero">Websites that keep working.</h1>
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

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="headline-primary mb-6">How we work</h2>
              <p className="body-large">Clear scope. Steady delivery.</p>
            </div>
            <div className="space-y-6">
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Focused</h3>
                <p className="body-refined">Limited clients. Full attention.</p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Direct</h3>
                <p className="body-refined">One line. No layers.</p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Long-term</h3>
                <p className="body-refined">Built to last.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
