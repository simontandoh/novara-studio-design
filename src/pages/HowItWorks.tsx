import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import ProcessStep from "@/components/ProcessStep";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Short call. Goals, constraints, scope.",
  },
  {
    number: "02",
    title: "Build or rebuild",
    description: "First version fast. Refine to launch.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Testing, handover, documentation.",
  },
  {
    number: "04",
    title: "Ongoing care",
    description: "Maintenance and monitoring over time.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-6">Process</p>
            <h1 className="headline-hero mb-8">A structured path to launch.</h1>
            <p className="body-large">Clear steps. Measured pace.</p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="headline-primary mb-6">Four steps</h2>
              <p className="body-large">From first call to ongoing care.</p>
            </div>
            <div className="space-y-8">
              {processSteps.map((step) => (
                <ProcessStep key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-primary mb-8">What to expect</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Clear updates</h3>
                <p className="body-refined">Signal over noise.</p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Honest timelines</h3>
                <p className="body-refined">Conservative estimates. Delivered.</p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">No surprises</h3>
                <p className="body-refined">Scope changes are discussed early.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Start here."
        description="Share the brief."
        primaryLabel="Contact"
        secondaryLabel="Websites"
        secondaryTo="/websites"
      />
    </Layout>
  );
};

export default HowItWorks;
