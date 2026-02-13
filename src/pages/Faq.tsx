import Layout from "@/components/Layout";
import AccordionList from "@/components/Accordion";
import Seo from "@/components/Seo";

const faqItems = [
  {
    question: "Is continuity support 24/7 emergency coverage?",
    answer: "No. It covers evenings and weekends.",
  },
  {
    question: "Who is continuity support best for?",
    answer: "Teams that rely on their site outside standard hours.",
  },
  {
    question: "How fast do you respond?",
    answer: "Typically within 1-2 hours during coverage.",
  },
  {
    question: "Do I need to be on another service tier first?",
    answer: "Available to Growth and Continuity clients.",
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
          <div className="max-w-2xl mb-10">
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
