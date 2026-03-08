import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const pillars = [
  {
    title: "Websites",
    detail:
      "Modern websites designed to present your business clearly and convert visitors into enquiries.",
  },
  {
    title: "Automation",
    detail:
      "Practical systems for lead handling, follow-ups, bookings, and everyday business workflows.",
  },
  {
    title: "IT Support",
    detail:
      "Reliable IT support across accounts, devices, backups, and network infrastructure.",
  },
];

const About = () => {
  return (
    <Layout>
      <Seo
        title="About Novara"
        description="Novara combines web development, automation thinking, and business IT support to help small businesses operate more effectively."
        path="/about"
      />

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-small mb-4">ABOUT</p>
            <h1 className="headline-hero mb-6 text-center">A business technology partner for growing companies.</h1>
            <p className="body-large">
              Novara brings together websites, automation, and practical IT support to help businesses
              operate more clearly and scale reliably.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-lg border border-border/60 bg-card/50 p-6 md:p-8">
                <h2 className="headline-secondary mb-3">{pillar.title}</h2>
                <p className="body-refined">{pillar.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-4">How we work</h2>
          <p className="body-large">
            Structured delivery, clear communication, and practical recommendations based on what your
            business needs now.
          </p>
          <div className="mt-8">
            <Link to="/services" className="btn-secondary rounded-full px-7 py-3 inline-flex">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
