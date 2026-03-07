import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const projects = [
  {
    name: "Coastal Dental Care",
    category: "Websites & Automation",
    summary:
      "Rebuilt service pages and enquiry flow with structured content hierarchy, resulting in higher-quality inbound requests.",
    cta: "Discuss a similar build",
  },
  {
    name: "Briarfield Electrical",
    category: "Website Relaunch",
    summary:
      "Delivered a premium local-business website with clear quote pathways and stronger service clarity.",
    cta: "Request website quote",
  },
  {
    name: "Northline Advisory",
    category: "Business IT Support",
    summary:
      "Introduced practical support routines for Microsoft 365, account management, and reliability-focused guidance.",
    cta: "Request IT support",
  },
  {
    name: "Elmstone Wellness",
    category: "Automation",
    summary:
      "Connected enquiry forms to follow-up workflows and reminder systems to reduce missed opportunities.",
    cta: "Explore automation options",
  },
];

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
            <h1 className="headline-hero mb-6 text-center">Selected project work.</h1>
            <p className="body-large">
              A curated view of projects focused on clarity, reliability, and practical business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-border/60 bg-card/40 p-7 md:p-8 backdrop-blur-sm"
                style={{
                  background:
                    "radial-gradient(125% 125% at 15% 0%, rgba(192, 212, 245, 0.16), transparent 55%), radial-gradient(120% 120% at 100% 100%, rgba(90, 112, 155, 0.15), transparent 62%)",
                }}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-accent mb-3">{project.category}</p>
                <h2 className="headline-secondary mb-3">{project.name}</h2>
                <p className="body-refined mb-6">{project.summary}</p>
                <a href="/contact" className="btn-secondary rounded-full px-6 py-2 inline-flex">
                  {project.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
