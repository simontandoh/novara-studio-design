import Layout from "@/components/Layout";

const projects = [
  {
    title: "Plumber One-Page",
    highlights: ["Call-first layout", "Emergency banner", "Service areas"],
    href: "#",
  },
  {
    title: "Electrician One-Page",
    highlights: ["Mobile-first", "Fast enquiry flow", "Trust badges"],
    href: "#",
  },
  {
    title: "Cleaning Service One-Page",
    highlights: ["Lead capture form", "Before and after gallery", "Simple pricing"],
    href: "#",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="label-small mb-6">Portfolio</p>
            <h1 className="headline-hero mb-6">Selected work.</h1>
            <p className="body-large">Placeholder links for now.</p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-editorial grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="surface-panel noise-overlay rounded-lg p-6 md:p-8 transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
            >
              <h3 className="headline-secondary mb-4">{project.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="text-sm text-muted-foreground">View on Behance</span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
