import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const AccessibilityStatement = () => {
  return (
    <Layout>
      <Seo
        title="Accessibility Statement for Novara Studios"
        description="Accessibility commitments and support contact details for Novara Studios, aligned with WCAG 2.1 AA guidance."
        path="/accessibility"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="label-small mb-4">Legal</p>
            <h1 className="headline-hero mb-6 text-center">Accessibility Statement</h1>
            <p className="body-large mb-6">
              We want this site to be usable for as many people as possible. We design and
              build with accessibility in mind and continue to improve based on feedback.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                The site aims to meet WCAG 2.1 AA guidelines, including keyboard access,
                visible focus states, and readable contrast.
              </p>
              <p>
                If you find an accessibility issue or need information in a different
                format, email us at hello@novarastudios.co.uk and we will respond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AccessibilityStatement;
