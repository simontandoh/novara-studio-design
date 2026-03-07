import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const automationTypes = [
  {
    title: "Instant Enquiry Response",
    detail: "Automatic first-response messages to new enquiries so leads are acknowledged immediately.",
  },
  {
    title: "Contact Form to CRM Routing",
    detail: "Capture and route form submissions into your CRM with tags, owner assignment, and status tracking.",
  },
  {
    title: "Appointment Booking Flows",
    detail: "Booking journeys with confirmations, reminders, and follow-up actions tied to your calendar process.",
  },
  {
    title: "Follow-Up Reminders",
    detail: "Timed reminder sequences for leads and clients to reduce missed opportunities and delays.",
  },
  {
    title: "Review Request Workflows",
    detail: "Automated post-service review requests to help generate consistent business credibility signals.",
  },
  {
    title: "Admin-Saving Systems",
    detail: "Back-office automation for repetitive tasks like updates, notifications, handoffs, and reporting.",
  },
  {
    title: "Quote and Lead Workflows",
    detail: "Triggered quote pipelines and lead progression stages to keep sales movement organized.",
  },
  {
    title: "Analytics and Visibility Dashboards",
    detail: "Operational dashboards that surface lead sources, conversion points, and workflow performance.",
  },
];

const Automation = () => {
  return (
    <Layout>
      <Seo
        title="Automation"
        description="Practical automation services for enquiry handling, CRM routing, booking, follow-ups, and admin workflows."
        path="/automation"
      />

      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-small mb-4">Automation</p>
            <h1 className="headline-hero mb-6 text-center">Practical automation for small business operations.</h1>
            <p className="body-large">
              Novara designs automation around real operational needs, improving response speed,
              consistency, and internal efficiency without unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-6">
            {automationTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border/60 bg-card/40 p-7 md:p-8 backdrop-blur-sm"
                style={{
                  background:
                    "radial-gradient(125% 130% at 15% -5%, rgba(188, 208, 240, 0.16), transparent 54%), radial-gradient(120% 120% at 100% 100%, rgba(88, 110, 150, 0.14), transparent 60%)",
                }}
              >
                <h2 className="headline-secondary mb-3">{item.title}</h2>
                <p className="body-refined">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-4">Add automation when your business is ready.</h2>
          <p className="body-large mb-8">Most automation upgrades are scoped from {"\u00A3"}30 to {"\u00A3"}120/month depending on complexity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary rounded-full px-7 py-3">
              Book a Call
            </Link>
            <Link to="/websites" className="btn-secondary rounded-full px-7 py-3">
              Back to Websites & Automation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Automation;
