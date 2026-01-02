import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Editorial, Asymmetric */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 lg:col-start-1">
              <div className="accent-line mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }} />
              <h1 className="headline-editorial text-balance opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                We design websites that feel inevitable.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="body-large opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                Novara is a premium web studio. We create elegant, high-performance 
                websites and systems for modern brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Minimal, Clear */}
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
                What we do
              </p>
              <h2 className="headline-secondary mb-6">
                Clarity in every decision. Quality in every detail.
              </h2>
              <p className="body-refined">
                We work with founders and brands who understand that their website 
                is more than a digital presence—it's a statement of intent. Every 
                element serves a purpose. Nothing exists by accident.
              </p>
            </div>
            <div className="flex flex-col gap-8 lg:pt-12">
              <div className="group">
                <h3 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors">
                  Strategic Foundations
                </h3>
                <p className="body-refined">
                  We begin with understanding—your audience, your goals, your position 
                  in the market. Structure before style.
                </p>
              </div>
              <div className="group">
                <h3 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors">
                  Considered Design
                </h3>
                <p className="body-refined">
                  Every visual choice reinforces your brand. We design systems that 
                  scale and evolve with you.
                </p>
              </div>
              <div className="group">
                <h3 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors">
                  Technical Excellence
                </h3>
                <p className="body-refined">
                  Fast, accessible, built to last. We write clean code that performs 
                  beautifully across every device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - Visual Process */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Our approach
            </p>
            <h2 className="headline-secondary">
              We think in systems. We design for longevity.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            <div className="bg-background p-8 md:p-12">
              <span className="text-accent font-serif text-4xl">01</span>
              <h3 className="font-serif text-xl mt-6 mb-3">Listen</h3>
              <p className="body-refined">
                We start by understanding your world—your constraints, 
                your ambitions, your definition of success.
              </p>
            </div>
            <div className="bg-background p-8 md:p-12">
              <span className="text-accent font-serif text-4xl">02</span>
              <h3 className="font-serif text-xl mt-6 mb-3">Shape</h3>
              <p className="body-refined">
                Strategy informs structure. We define the architecture 
                before we touch a single pixel.
              </p>
            </div>
            <div className="bg-background p-8 md:p-12">
              <span className="text-accent font-serif text-4xl">03</span>
              <h3 className="font-serif text-xl mt-6 mb-3">Build</h3>
              <p className="body-refined">
                Design and development move together. We craft experiences 
                that are beautiful because they work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - Quiet Confidence */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8">
            "Novara understood what we needed before we could articulate it. 
            The result feels like it was always meant to exist."
          </blockquote>
          <cite className="not-italic">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">
              Creative Director — Design Studio
            </span>
          </cite>
        </div>
      </section>

      {/* CTA Section - Calm, Confident */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-secondary mb-6">
                Ready to build something that lasts?
              </h2>
              <p className="body-large">
                We work with a small number of clients at any given time. 
                If you're interested in working together, we'd love to hear from you.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 font-serif text-xl group"
              >
                <span className="link-underline">Start a conversation</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
