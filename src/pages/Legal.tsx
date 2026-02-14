import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Legal = () => {
  return (
    <Layout>
      <Seo
        title="Legal Policies and Statements for Novara"
        description="Policies and statements for Novara Studios, including privacy, terms, cookies, and accessibility."
        path="/legal"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto">
            <p className="label-small mb-4">Legal</p>
            <h1 className="headline-hero mb-6 text-center">Policies and statements.</h1>
            <p className="body-large mb-8">
              Everything in one place.
            </p>
            <div className="grid gap-4 text-sm md:text-base">
              <Link to="/privacy-policy" className="btn-secondary rounded-full px-6 py-2 md:px-8 md:py-3 md:text-lg">
                Privacy Policy
              </Link>
              <Link to="/terms" className="btn-secondary rounded-full px-6 py-2 md:px-8 md:py-3 md:text-lg">
                Terms of Service
              </Link>
              <Link to="/cookie-notice" className="btn-secondary rounded-full px-6 py-2 md:px-8 md:py-3 md:text-lg">
                Cookie Notice
              </Link>
              <Link to="/accessibility" className="btn-secondary rounded-full px-6 py-2 md:px-8 md:py-3 md:text-lg">
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
