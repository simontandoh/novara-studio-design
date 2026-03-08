import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import BookCallButton from "@/components/BookCallButton";

const categories = [
  {
    title: "Websites & Automation",
    forWho:
      "Local businesses that need a professional online presence and systems that can grow with them.",
    covers:
      "Website strategy, build, launch support, maintenance foundations, SEO setup, and optional automation upgrades.",
    result: "A credible online presence supported by systems that scale with your business.",
    href: "/websites",
    cta: "View Websites & Automation",
  },
  {
    title: "IT Support",
    forWho: "Small businesses needing reliable day-to-day technical support.",
    covers:
      "Accounts, devices, Microsoft 365 support, troubleshooting, backups, and network assistance.",
    result: "Reliable operations and faster resolution when technical issues arise.",
    href: "/it-support",
    cta: "View IT Support",
  },
];

const Services = () => {
  return (
    <Layout>
      <Seo
        title="Service Overview"
        description="Explore Novara's two core service categories: Websites & Automation and IT Support."
        path="/services"
      />

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <p className="label-small mb-4">SERVICES</p>
            <h1 className="headline-hero mb-6 text-center">Two clear service paths.</h1>
            <p className="body-large">
              Choose the support path your business needs today. Expand as your systems evolve.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category) => (
              <article
                key={category.title}
                className="rounded-2xl border border-border/60 bg-card/40 p-8 md:p-10 backdrop-blur-sm"
                style={{
                  background:
                    "radial-gradient(120% 130% at 15% 0%, rgba(188, 208, 240, 0.14), transparent 52%), radial-gradient(120% 120% at 100% 100%, rgba(96, 118, 158, 0.16), transparent 58%)",
                }}
              >
                <h2 className="headline-secondary mb-5">{category.title}</h2>
                <p className="label-small mb-2">WHO IT IS FOR</p>
                <p className="body-refined mb-5">{category.forWho}</p>
                <p className="label-small mb-2">WHAT&apos;S INCLUDED</p>
                <p className="body-refined mb-5">{category.covers}</p>
                <p className="label-small mb-2">RESULT</p>
                <p className="body-refined mb-8">{category.result}</p>
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
          <h2 className="headline-primary mb-4">Need help choosing the right path?</h2>
          <p className="body-large mb-8">Book a short call and get a clear recommendation.</p>
          <BookCallButton
            location="services_final_cta"
            className="btn-primary rounded-full px-7 py-3"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Services;
