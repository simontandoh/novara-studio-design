import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Legal = () => {
  return (
    <Layout>
      <Seo
        title="Legal"
        description="Policies and statements for Novara Studios."
        path="/legal"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto">
            <p className="label-small mb-4">Legal</p>
            <h1 className="headline-hero mb-6">Policies and statements.</h1>
            <p className="body-large mb-8">
              Everything in one place.
            </p>
            <div className="grid gap-4 text-sm">
              <Link to="/privacy-policy" className="btn-secondary rounded-full px-6 py-2">
                Privacy Policy
              </Link>
              <Link to="/terms" className="btn-secondary rounded-full px-6 py-2">
                Terms of Service
              </Link>
              <Link to="/cookie-notice" className="btn-secondary rounded-full px-6 py-2">
                Cookie Notice
              </Link>
              <Link to="/accessibility" className="btn-secondary rounded-full px-6 py-2">
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
