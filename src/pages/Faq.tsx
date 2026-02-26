import Layout from "@/components/Layout";
import AccordionList from "@/components/Accordion";
import Seo from "@/components/Seo";

const faqItems = [
  {
    question: "Is support included with maintenance 24/7?",
    answer:
      "No. Support is provided through maintenance tiers, with business-hours coverage as baseline and evening/weekend help on a best-effort, tier-dependent basis.",
  },
  {
    question: "Who is maintenance support best suited for?",
    answer:
      "Businesses that want reassurance beyond weekdays, especially where downtime, slow performance, or missed enquiries carry operational risk.",
  },
  {
    question: "How fast do you respond?",
    answer:
      "Response is best-effort and based on issue severity and tier. We prioritise triage and clear communication first, then resolution work.",
  },
  {
    question: "Do I need another tier first?",
    answer:
      "Support sits alongside the maintenance tiers. A minimum tier may be recommended where monitoring access or deeper oversight is needed.",
  },
  {
    question: "What isn't included?",
    answer:
      "Maintenance support does not include full redesigns, major development scope, guaranteed uptime, or formal SLA commitments.",
  },
  {
    question: "How does support relate to maintenance?",
    answer:
      "Support is part of maintenance, not a separate product. Continuity is the £49/month baseline tier, with broader coverage in Managed Presence and Operations Support.",
  },
];

const Faq = () => {
  return (
    <Layout>
      <Seo
        title="Novara Studios FAQ and Process Notes"
        description="Clear answers on process, timelines, and collaboration with Novara Studios, written for calm, premium delivery."
        path="/faq"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10 mx-auto text-center">
            <p className="label-small mb-4">FAQ</p>
            <h1 className="headline-hero mb-6 text-center">Answers, clearly.</h1>
            <p className="body-large">Straight responses to common questions.</p>
          </div>
          <AccordionList items={faqItems} />
        </div>
      </section>
    </Layout>
  );
};

export default Faq;
