import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const useCases = [
  "Instant response to enquiries",
  "Contact form to CRM routing",
  "Appointment booking flows",
  "Follow-up reminders",
  "Review request workflows",
  "Admin-saving systems",
];

const Automation = () => {
  return (
    <Layout>
      <Seo
        title="Business Automation"
        description="Practical business automation from Novara to improve enquiry handling, follow-ups, booking, and day-to-day admin efficiency."
        path="/automation"
      />

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-small mb-4">Automation</p>
            <h1 className="headline-hero mb-6 text-center">Practical automation for everyday business workflows.</h1>
            <p className="body-large">
              We focus on automation that saves time, improves response speed, and supports revenue,
              without adding unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="label-small mb-4">Use Cases</p>
            <h2 className="headline-primary">Where automation helps most.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((item) => (
              <article key={item} className="rounded-lg border border-border/60 bg-card/50 p-6 md:p-8">
                <h3 className="headline-secondary">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-4">Add automation when your business is ready.</h2>
          <p className="body-large mb-8">Most automation projects are scoped as a focused monthly add-on.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary rounded-full px-7 py-3">
              Book a Call
            </Link>
            <Link to="/websites" className="btn-secondary rounded-full px-7 py-3">
              View Website Plans
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Automation;
