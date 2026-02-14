import Layout from "@/components/Layout";
import ProcessStep from "@/components/ProcessStep";
import Seo from "@/components/Seo";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a focused conversation to understand your goals, constraints, and what success looks like. No lengthy audits or drawn-out scoping - just clarity on what matters.",
  },
  {
    number: "02",
    title: "Build or rebuild",
    description:
      "We deliver a working first version quickly, then refine it based on real feedback. Whether it's a new build or an upgrade to an existing site, we move efficiently toward launch.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Thorough testing, clean handover, and careful monitoring as your site goes live. We document everything clearly so you're never dependent on tribal knowledge.",
  },
  {
    number: "04",
    title: "Ongoing care",
    description:
      "Websites need attention over time. We handle maintenance, improvements, and monitoring - so your site stays reliable, secure, and ready to evolve as you grow.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <Seo
        title="How Novara Delivers Calm Website Builds"
        description="A calm, structured process from discovery to launch and ongoing care, focused on clarity, timelines, and reliable delivery."
        path="/how-it-works"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-small mb-6">How it works</p>
            <h1 className="headline-hero mb-8">
              A calm, structured process focused on outcomes.
            </h1>
            <p className="body-large">
              We keep things simple. Clear communication, steady progress, and a website that works — without unnecessary process or meetings.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-6xl mx-auto rounded-2xl border border-border/60 bg-card/35 p-8 md:p-10 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="text-center lg:text-left">
                <h2 className="headline-primary mb-6">Four simple steps</h2>
                <p className="body-large">
                  From first conversation to ongoing care, we follow a consistent process that respects your time and focuses on outcomes that matter.
                </p>
              </div>
              <div className="space-y-8 text-center lg:text-left">
                {processSteps.map((step) => (
                  <ProcessStep key={step.number} {...step} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-primary mb-8">What you can expect</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Clear communication</h3>
                <p className="body-refined">
                  Regular updates without the noise. You'll always know where things stand.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Honest timelines</h3>
                <p className="body-refined">
                  We estimate conservatively and deliver on our commitments.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">No surprises</h3>
                <p className="body-refined">
                  Scope changes happen - but we discuss them openly before they become problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default HowItWorks;
