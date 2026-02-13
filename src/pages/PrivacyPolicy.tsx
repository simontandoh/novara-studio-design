import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Seo
        title="Privacy Policy and Data Use at Novara Studios"
        description="How Novara Studios collects, uses, and protects information shared through our site and contact channels."
        path="/privacy-policy"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl text-center mx-auto">
            <p className="label-small mb-4">Legal</p>
            <h1 className="headline-hero mb-6 text-center">Privacy Policy</h1>
            <p className="body-large mb-6">
              We collect information you submit through our contact forms and
              communication channels so we can respond to your enquiry.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Data we collect may include your name, business details, contact
                information, and any project notes you provide.
              </p>
              <p>
                We only use this information to respond to your request, deliver
                services, and maintain our working relationship. We do not sell
                your data.
              </p>
              <p>
                We may use privacy-friendly analytics to understand how the site
                is used. This data is aggregated and does not identify you.
              </p>
              <p>
                If you would like a copy of your data, or want it removed, email
                us at hello@novarastudios.co.uk.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground text-center">
              <Link to="/accessibility" className="btn-secondary rounded-full px-4 py-2">
                Left
              </Link>
              <Link to="/legal" className="btn-secondary rounded-full px-4 py-2">
                Back to Menu
              </Link>
              <Link to="/terms" className="btn-secondary rounded-full px-4 py-2">
                Right
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
