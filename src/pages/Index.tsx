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
                Clear websites with proper maintenance.
              </h2>
              <p className="body-refined mb-6">
                Focused builds for local services with ongoing care so your site
                stays fast, stable, and current.
              </p>
              <Link
                to="/local"
                className="btn-secondary rounded-full px-6 py-2"
              >
                See services
              </Link>
            </div>
            <div className="surface-panel noise-overlay rounded-lg p-8 md:p-10">
              <p className="label-small mb-4">Beyond Local</p>
              <h2 className="headline-secondary mb-4">
                Systems that evolve with your business.
              </h2>
              <p className="body-refined mb-6">
                When you're ready for larger platforms or complex systems, we deliver
                long-term care with clarity and continuity.
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
        headline="Ready to plan a website that lasts?"
        description="We build and maintain calm systems so you are never firefighting."
        primaryLabel="Contact"
        primaryTo="/contact"
        secondaryLabel="Websites"
        secondaryTo="/local"
      />
    </Layout>
  );
};

export default Index;
