import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const values = [
  {
    title: "Reliability over novelty",
    description:
      "We prefer proven approaches that work. New technology is interesting, but what matters is whether it serves your business well over time.",
  },
  {
    title: "Clarity over complexity",
    description:
      "We build systems that are easy to understand and maintain. If something is complicated to explain, it's probably too complicated to build.",
  },
  {
    title: "Partnership over projects",
    description:
      "We think in terms of ongoing relationships, not one-off deliveries. Websites need care over time, and we're set up to provide it.",
  },
  {
    title: "Honesty over sales",
    description:
      "We'll tell you if we're not the right fit. We'd rather have fewer clients who trust us than more clients who don't.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="label-small mb-6">About</p>
              <h1 className="headline-hero">
                We build websites that work — and keep working.
              </h1>
            </div>
            <div className="lg:pt-4">
              <p className="body-large mb-6">
                Novara is a digital systems studio focused on building, rebuilding, 
                and maintaining websites for businesses that value reliability over hype.
              </p>
              <p className="body-refined">
                We're not interested in chasing trends or building things that need 
                constant attention. We build systems that run quietly in the background, 
                doing their job well, so you can focus on yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Novara exists */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <h2 className="headline-primary mb-8">Why Novara exists</h2>
            <div className="space-y-6">
              <p className="body-large">
                Most web agencies are set up around projects. They build something, 
                hand it over, and move on to the next client. But websites aren't 
                one-time projects — they need ongoing attention.
              </p>
              <p className="body-large">
                We built Novara around a different model. One where the relationship 
                continues after launch. Where there's someone to call when things break 
                — even on a Saturday afternoon. Where your website gets better over time, 
                not abandoned.
              </p>
              <p className="body-refined">
                This isn't a revolutionary idea. It's just a more honest way to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we value */}
      <section className="section-padding border-t border-border bg-card">
        <div className="container-editorial">
          <h2 className="headline-primary mb-12">What we value</h2>
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

      {/* How we work */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="headline-primary mb-6">How we work</h2>
              <p className="body-large">
                We keep things simple. Clear communication, honest timelines, 
                and work that speaks for itself.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Small and focused</h3>
                <p className="body-refined">
                  We work with a small number of clients at a time. This means we can 
                  give each project the attention it deserves.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Direct access</h3>
                <p className="body-refined">
                  No account managers or middlemen. You work directly with the people 
                  building your website.
                </p>
              </div>
              <div className="border-l border-border pl-6">
                <h3 className="text-base font-normal mb-2">Long-term thinking</h3>
                <p className="body-refined">
                  We build things to last. Every decision we make considers not just 
                  today, but how this will work in two years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's work together."
        description="If our approach resonates with you, we'd love to hear about what you're building."
        primaryLabel="Start a conversation"
      />
    </Layout>
  );
};

export default About;
