import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Studio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <div className="accent-line mb-8" />
            <h1 className="headline-editorial mb-8">
              A studio built on precision and care.
            </h1>
            <p className="body-large">
              Novara exists because we believe the web deserves better. 
              Better thinking. Better craft. Better outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
                Our philosophy
              </p>
              <h2 className="headline-secondary">
                We believe in quiet confidence.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
              <p className="body-large">
                The best websites don't demand attention—they earn it. They work 
                so well, feel so right, that users trust them instinctively.
              </p>
              <p className="body-refined">
                This is what we aim for: websites that feel inevitable. Not trendy, 
                not flashy, but precisely right for the brand they represent. 
                Every element considered. Every decision intentional.
              </p>
              <p className="body-refined">
                We're not interested in following templates or chasing aesthetics. 
                We're interested in understanding problems deeply and solving them elegantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              What we value
            </p>
            <h2 className="headline-secondary max-w-2xl">
              Principles that guide every decision.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="border-t border-border pt-8">
              <h3 className="font-serif text-2xl mb-4">Clarity over complexity</h3>
              <p className="body-refined">
                Complexity is easy. Clarity is hard. We do the difficult work of 
                distilling ideas to their essence, so your audience experiences 
                simplicity.
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <h3 className="font-serif text-2xl mb-4">Structure before style</h3>
              <p className="body-refined">
                Beautiful websites that don't work are failures. We build on solid 
                foundations—strategy, architecture, systems—then let design emerge 
                from that structure.
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <h3 className="font-serif text-2xl mb-4">Longevity over trends</h3>
              <p className="body-refined">
                Trends fade. Taste endures. We create work that will look as 
                considered in three years as it does today.
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <h3 className="font-serif text-2xl mb-4">Partnership over transaction</h3>
              <p className="body-refined">
                We work best with clients who see us as partners, not vendors. 
                The best outcomes come from genuine collaboration and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-secondary mb-8">
            We'd love to hear about your project.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 font-serif text-xl group"
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
