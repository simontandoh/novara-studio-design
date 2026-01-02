import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <div className="accent-line mb-8" />
            <h1 className="headline-editorial mb-8">
              Focused services. Exceptional outcomes.
            </h1>
            <p className="body-large">
              We do a few things exceptionally well. Each service builds 
              toward the same goal: a digital presence that works.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-px bg-border">
            {/* Service 1 */}
            <div className="bg-card p-8 md:p-12 lg:p-16">
              <div className="flex flex-col h-full">
                <span className="text-accent font-serif text-sm mb-8">01</span>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">
                  Brand Websites
                </h2>
                <p className="body-refined mb-8 flex-1">
                  Complete website design and development for brands that need to 
                  communicate with clarity. From strategy through launch, we handle 
                  every detail.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Strategy & positioning</p>
                  <p>Visual identity integration</p>
                  <p>Responsive design & development</p>
                  <p>Content strategy guidance</p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-card p-8 md:p-12 lg:p-16">
              <div className="flex flex-col h-full">
                <span className="text-accent font-serif text-sm mb-8">02</span>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">
                  Digital Products
                </h2>
                <p className="body-refined mb-8 flex-1">
                  For products that need to be as functional as they are beautiful. 
                  We design and build interfaces that users love to use.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>User experience design</p>
                  <p>Interface design systems</p>
                  <p>Prototyping & testing</p>
                  <p>Front-end development</p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-card p-8 md:p-12 lg:p-16">
              <div className="flex flex-col h-full">
                <span className="text-accent font-serif text-sm mb-8">03</span>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">
                  Design Systems
                </h2>
                <p className="body-refined mb-8 flex-1">
                  Comprehensive design systems that ensure consistency across 
                  every touchpoint. Built to scale with your organization.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Component libraries</p>
                  <p>Documentation & guidelines</p>
                  <p>Token architecture</p>
                  <p>Team training</p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-card p-8 md:p-12 lg:p-16">
              <div className="flex flex-col h-full">
                <span className="text-accent font-serif text-sm mb-8">04</span>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">
                  Strategic Consulting
                </h2>
                <p className="body-refined mb-8 flex-1">
                  For teams who need expert guidance without a full build. 
                  We help you make better decisions about your digital presence.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Website audits</p>
                  <p>Strategic roadmapping</p>
                  <p>Technical guidance</p>
                  <p>Vendor selection support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
                How we work
              </p>
              <h2 className="headline-secondary">
                No surprises. No drama. Just excellent work.
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="body-large">
                Every engagement begins with a conversation. We take time to 
                understand your goals, constraints, and definition of success.
              </p>
              <p className="body-refined">
                From there, we propose a scope that makes sense—never more than 
                you need, always enough to do the job properly. We work in 
                close collaboration, with regular check-ins and no disappearing acts.
              </p>
              <p className="body-refined">
                The result is work you're proud to show. Work that performs. 
                Work that lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-secondary mb-8">
            Let's discuss what you need.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 font-serif text-xl group"
          >
            <span className="link-underline">Start a conversation</span>
            <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
