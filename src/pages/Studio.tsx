import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Studio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-6">How it works</p>
            <h1 className="headline-hero mb-8">
              A calm, simple process built around long-term partnership.
            </h1>
            <p className="body-large">
              We don't believe in overwhelming clients with technical details or pressure. 
              Our process is designed to be straightforward, respectful, and focused on outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-16">
            <p className="label-small mb-6">The process</p>
            <h2 className="headline-primary">
              From conversation to ongoing care.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            <div className="bg-background p-8">
              <span className="label-small text-accent">01</span>
              <h3 className="headline-secondary mt-6 mb-4">Conversation</h3>
              <p className="body-refined">
                We start by understanding your situation, your goals, and your constraints. 
                No sales pressure, just honest assessment.
              </p>
            </div>
            <div className="bg-background p-8">
              <span className="label-small text-accent">02</span>
              <h3 className="headline-secondary mt-6 mb-4">Planning</h3>
              <p className="body-refined">
                We define scope, timeline, and approach together. You'll know exactly 
                what to expect before any work begins.
              </p>
            </div>
            <div className="bg-background p-8">
              <span className="label-small text-accent">03</span>
              <h3 className="headline-secondary mt-6 mb-4">Build</h3>
              <p className="body-refined">
                We design and build your website or system with care, keeping you 
                informed throughout without overwhelming you with details.
              </p>
            </div>
            <div className="bg-background p-8">
              <span className="label-small text-accent">04</span>
              <h3 className="headline-secondary mt-6 mb-4">Ongoing care</h3>
              <p className="body-refined">
                After launch, we continue to monitor, maintain, and improve your 
                systems as part of our long-term partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding border-t border-border bg-card">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="label-small mb-6">Our approach</p>
              <h2 className="headline-primary">
                Quiet confidence, not loud promises.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
              <p className="body-large">
                We believe in doing the work properly, not in selling the idea of it. 
                Our focus is on reliability, clarity, and long-term performance.
              </p>
              <p className="body-refined">
                We don't use buzzwords or make exaggerated claims. We don't promise 
                revolutionary transformations or cutting-edge innovations. We build 
                websites and systems that work reliably, and we maintain them over time.
              </p>
              <p className="body-refined">
                This approach means we're selective about who we work with. We look for 
                clients who value substance over style, reliability over novelty, and 
                partnership over transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="mb-16">
            <p className="label-small mb-6">What we value</p>
            <h2 className="headline-primary max-w-2xl">
              Principles that guide every decision.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="border-l border-border pl-6">
              <h3 className="text-lg font-normal mb-3">Reliability over novelty</h3>
              <p className="body-refined">
                We build systems that work consistently, not systems that impress briefly. 
                Our measure of success is uptime, not applause.
              </p>
            </div>
            <div className="border-l border-border pl-6">
              <h3 className="text-lg font-normal mb-3">Clarity over complexity</h3>
              <p className="body-refined">
                We do the difficult work of making things simple. Your audience should 
                experience ease, even when the underlying systems are sophisticated.
              </p>
            </div>
            <div className="border-l border-border pl-6">
              <h3 className="text-lg font-normal mb-3">Longevity over speed</h3>
              <p className="body-refined">
                We build for the long term. Rushing leads to problems later. 
                We take the time to do things properly from the start.
              </p>
            </div>
            <div className="border-l border-border pl-6">
              <h3 className="text-lg font-normal mb-3">Partnership over transaction</h3>
              <p className="body-refined">
                We work best with clients who see us as partners. The best outcomes 
                come from ongoing relationships, not one-off deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Out of hours */}
      <section className="section-padding border-t border-border bg-card">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <p className="label-small mb-6">Continuity support</p>
              <h2 className="headline-primary mb-6">
                Support that extends beyond standard hours.
              </h2>
              <p className="body-large mb-4">
                Problems don't respect business hours. For clients on our Continuity tier, 
                we provide operational and IT support during evenings and weekends.
              </p>
              <p className="body-refined">
                This isn't emergency response — it's designed-in reliability. We monitor 
                your systems proactively and address issues before they become problems.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-background border border-border">
                <h3 className="text-base font-normal mb-2">Proactive monitoring</h3>
                <p className="body-refined">
                  We watch your systems continuously and catch issues before they affect your users.
                </p>
              </div>
              <div className="p-6 bg-background border border-border">
                <h3 className="text-base font-normal mb-2">Evening and weekend support</h3>
                <p className="body-refined">
                  Real support from people who understand your systems, available when standard hours end.
                </p>
              </div>
              <div className="p-6 bg-background border border-border">
                <h3 className="text-base font-normal mb-2">Incident response</h3>
                <p className="body-refined">
                  When problems do occur, we respond quickly and communicate clearly until they're resolved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-8">
            Ready to start a conversation?
          </h2>
          <p className="body-large mb-10">
            Tell us about your situation. We'll respond honestly about whether we're the right fit.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-base font-light group"
          >
            <span className="link-underline">Get in touch</span>
            <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;