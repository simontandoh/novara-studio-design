import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const categories = [
  {
    title: "Websites & Automation",
    description:
      "Modern business websites with optional automation and growth systems you can add as needed.",
    outcomes: [
      "Professional online presence",
      "Clear service and enquiry flows",
      "Room to add lead and admin automation",
    ],
    href: "/websites",
    cta: "View Websites & Automation",
  },
  {
    title: "IT Support",
    description:
      "Day-to-day technical support for small businesses, including accounts, devices, backups, and networking.",
    outcomes: [
      "Faster issue resolution",
      "More reliable day-to-day operations",
      "Improved technical continuity",
    ],
    href: "/it-support",
    cta: "View IT Support",
  },
];

const Services = () => {
  return (
    <Layout>
      <Seo
        title="Business Service Overview"
        description="Explore Novara's two service categories: Websites & Automation and IT Support for small businesses."
        path="/services"
      />

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-small mb-4">Services</p>
            <h1 className="headline-hero mb-6 text-center">Two clear service paths for small businesses.</h1>
            <p className="body-large">
              Choose the area where you need support now, then expand over time as your business grows.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category) => (
              <article key={category.title} className="rounded-lg border border-border/60 bg-card/40 p-8 md:p-10">
                <h2 className="headline-secondary mb-4">{category.title}</h2>
                <p className="body-refined mb-6">{category.description}</p>
                <p className="label-small mb-3">Key outcomes</p>
                <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                  {category.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={category.href} className="btn-secondary rounded-full px-6 py-2">
                  {category.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-4">Not sure where to start?</h2>
          <p className="body-large mb-8">We can recommend the right starting point in one short call.</p>
          <Link to="/contact" className="btn-primary rounded-full px-7 py-3">
            Book a Call
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
