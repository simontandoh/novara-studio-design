import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import HomeHero from "@/components/home/HomeHero";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <Layout>
      <HomeHero />

      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="surface-panel noise-overlay rounded-lg p-8 md:p-10">
              <p className="label-small mb-4">Websites</p>
              <h2 className="headline-secondary mb-4">
                Websites. Built and kept.
              </h2>
              <p className="body-refined mb-6">
                Focused builds with steady care.
              </p>
              <Link
                to="/websites"
                className="btn-secondary rounded-full px-6 py-2"
              >
                See services
              </Link>
            </div>
            <div className="surface-panel noise-overlay rounded-lg p-8 md:p-10">
              <p className="label-small mb-4">Beyond Local</p>
              <h2 className="headline-secondary mb-4">
                Systems beyond local.
              </h2>
              <p className="body-refined mb-6">
                Long-term systems. Quiet upkeep.
              </p>
              <Link
                to="/contact"
                className="btn-secondary rounded-full px-6 py-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection
        headline="Plan the site."
        description="Build. Rebuild. Maintain."
        primaryLabel="Contact"
        primaryTo="/contact"
        secondaryLabel="Websites"
        secondaryTo="/websites"
      />
    </Layout>
  );
};

export default Index;
