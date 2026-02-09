import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Terms = () => {
  return (
    <Layout>
      <Seo
        title="Terms of Service"
        description="Basic terms for working with Novara Studios."
        path="/terms"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-4">Legal</p>
            <h1 className="headline-hero mb-6">Terms of Service</h1>
            <p className="body-large mb-6">
              By engaging Novara Studios, you agree to the scope, fees, and
              timelines outlined in your proposal or statement of work.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Project deliverables, timelines, and payment terms are confirmed
                in writing before work starts.
              </p>
              <p>
                Client materials remain your property. Final deliverables are
                yours once invoices are paid in full.
              </p>
              <p>
                Any third-party services (hosting, analytics, or platforms) are
                subject to their own terms and policies.
              </p>
              <p>
                For questions about these terms, contact us at
                hello@novarastudios.co.uk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
