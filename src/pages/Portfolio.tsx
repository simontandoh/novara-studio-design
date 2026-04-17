import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PortfolioShowcase from "@/components/PortfolioShowcase";

const Portfolio = () => {
  return (
    <Layout>
      <Seo
        title="Portfolio"
        description="Selected Novara projects across websites, automation, and business IT support outcomes."
        path="/portfolio"
      />

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="label-small mb-4">Portfolio</p>
            <h1 className="headline-hero mb-6 text-center">Selected work snapshots.</h1>
            <p className="body-large">
              Anonymized previews with a focus on outcomes, structure, and delivery.
            </p>
          </div>
          <PortfolioShowcase />
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
