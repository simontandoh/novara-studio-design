import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const CookieNotice = () => {
  return (
    <Layout>
      <Seo
        title="Cookie Notice and Site Tracking for Novara"
        description="How Novara Studios uses cookies and privacy-friendly analytics to keep the site running and improve the experience."
        path="/cookie-notice"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl text-center mx-auto">
            <p className="label-small mb-4">Legal</p>
            <h1 className="headline-hero mb-6 text-center">Cookie Notice</h1>
            <p className="body-large mb-6">
              We use a small number of cookies and similar technologies to keep this site
              working and to understand how people use it.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Essential cookies keep the site functioning (for example, remembering form
                preferences). Optional analytics cookies help us improve the experience by
                measuring anonymous usage.
              </p>
              <p>
                You can block or delete cookies in your browser settings. If you disable
                cookies, some features may not work as expected.
              </p>
              <p>
                For questions, contact us at hello@novarastudios.co.uk.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground text-center">
              <Link to="/terms" className="btn-secondary rounded-full px-4 py-2">
                Left
              </Link>
              <Link to="/legal" className="btn-secondary rounded-full px-4 py-2">
                Back to Menu
              </Link>
              <Link to="/accessibility" className="btn-secondary rounded-full px-4 py-2">
                Right
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookieNotice;
