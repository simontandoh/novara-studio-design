import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const values = [
  {
    title: "Reliability",
    description: "Proven systems. Long life.",
  },
  {
    title: "Clarity",
    description: "Simple structure. Easy to run.",
  },
  {
    title: "Continuity",
    description: "Long-term care.",
  },
  {
    title: "Honesty",
    description: "Clear fit. Clear no.",
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
              <p className="body-large mb-6">Novara is a digital systems studio.</p>
              <p className="body-refined">We build, rebuild, and maintain websites.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <h2 className="headline-primary mb-8">Why Novara</h2>
            <div className="space-y-6">
              <p className="body-large">Websites need care after launch.</p>
              <p className="body-large">We stay with the system.</p>
              <p className="body-refined">No drama. Just work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card">
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

      <section className="section-padding border-t border-border">
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

      <CTASection
        headline="Start here."
        description="Send the brief."
        primaryLabel="Contact"
      />
    </Layout>
  );
};

export default About;
