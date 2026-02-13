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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
