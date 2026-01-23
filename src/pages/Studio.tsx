import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Studio = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-6">Studio</p>
            <h1 className="headline-hero mb-8">Quiet process. Long partnership.</h1>
            <p className="body-large">Direct, measured, and focused on delivery.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-16">
            <p className="label-small mb-6">Process</p>
            <h2 className="headline-primary">From conversation to care.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            <div className="bg-background p-8">
              <span className="label-small text-accent">01</span>
              <h3 className="headline-secondary mt-6 mb-4">Conversation</h3>
              <p className="body-refined">Goals, constraints, fit.</p>
            </div>
            <div className="bg-background p-8">
              <span className="label-small text-accent">02</span>
              <h3 className="headline-secondary mt-6 mb-4">Planning</h3>
              <p className="body-refined">Scope, timeline, approach.</p>
            </div>
            <div className="bg-background p-8">
              <span className="label-small text-accent">03</span>
              <h3 className="headline-secondary mt-6 mb-4">Build</h3>
              <p className="body-refined">Design, build, test.</p>
            </div>
            <div className="bg-background p-8">
              <span className="label-small text-accent">04</span>
              <h3 className="headline-secondary mt-6 mb-4">Ongoing care</h3>
              <p className="body-refined">Monitor, maintain, improve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="label-small mb-6">Approach</p>
              <h2 className="headline-primary">Quiet confidence.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
              <p className="body-large">Work done properly, without noise.</p>
              <p className="body-refined">Reliability, clarity, and long-term care.</p>
              <p className="body-refined">
                We work with clients who value substance and continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="mb-16">
            <p className="label-small mb-6">Values</p>
            <h2 className="headline-primary max-w-2xl">Principles that hold.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="border-l border-border pl-6">
              <h3 className="text-lg font-normal mb-3">Reliability</h3>
              <p className="body-refined">Systems that stay up.</p>
            </div>
            <div className="border-l border-border pl-6">
              <h3 className="text-lg font-normal mb-3">Clarity</h3>
              <p className="body-refined">Simple structure and flow.</p>
            </div>
            <div className="border-l border-border pl-6">
              <h3 className="text-lg font-normal mb-3">Longevity</h3>
              <p className="body-refined">Built for the long term.</p>
            </div>
            <div className="border-l border-border pl-6">
              <h3 className="text-lg font-normal mb-3">Partnership</h3>
              <p className="body-refined">Ongoing, not transactional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <p className="label-small mb-6">Continuity support</p>
              <h2 className="headline-primary mb-6">Support beyond standard hours.</h2>
              <p className="body-large mb-4">
                Operational and IT support during evenings and weekends.
              </p>
              <p className="body-refined">
                Proactive monitoring to prevent issues.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-background border border-border">
                <h3 className="text-base font-normal mb-2">Proactive monitoring</h3>
                <p className="body-refined">Early detection and response.</p>
              </div>
              <div className="p-6 bg-background border border-border">
                <h3 className="text-base font-normal mb-2">Evening and weekend support</h3>
                <p className="body-refined">Direct help after hours.</p>
              </div>
              <div className="p-6 bg-background border border-border">
                <h3 className="text-base font-normal mb-2">Incident response</h3>
                <p className="body-refined">Clear updates until resolved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-8">Start a conversation.</h2>
          <p className="body-large mb-10">Tell us the situation.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 text-base font-light group">
            <span className="link-underline">Contact</span>
            <span className="text-accent group-hover:translate-x-1 transition-transform">+</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;
