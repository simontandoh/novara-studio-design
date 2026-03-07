import Layout from "@/components/Layout";
import AccordionList from "@/components/Accordion";
import Seo from "@/components/Seo";

const faqItems = [
  {
    question: "What is the difference between the Launch Plan and the Ownership Plan?",
    answer:
      "The Launch Plan is a managed monthly option where Novara builds and maintains the site under the active plan. The Ownership Plan includes an upfront build fee and gives you website ownership from launch.",
  },
  {
    question: "Do I own the website on the Launch Plan?",
    answer:
      "Not immediately. The site is managed under the active Novara plan. Ownership transfer can be discussed after the minimum term if required.",
  },
  {
    question: "Do I own the website on the Ownership Plan?",
    answer: "Yes. The Ownership Plan gives you website ownership from launch.",
  },
  {
    question: "Is there a minimum term on the Launch Plan?",
    answer: "Yes. The Launch Plan has a minimum 12-month term.",
  },
  {
    question: "Can I cancel the Ownership Plan maintenance at any time?",
    answer:
      "Yes. Monthly maintenance can be cancelled. Ongoing maintenance is still recommended to keep the site secure and up to date.",
  },
  {
    question: "What does monthly maintenance include?",
    answer:
      "Maintenance typically includes hosting oversight, security updates, core content edits, general upkeep, and technical support within plan scope.",
  },
  {
    question: "Are automation services included in the website plans?",
    answer:
      "Not by default. Automation, integrations, booking systems, CRM workflows, and advanced lead handling are available as add-ons based on requirements.",
  },
  {
    question: "Can I add automation later?",
    answer:
      "Yes. Your website can be expanded later with automation and growth-focused systems.",
  },
  {
    question: "Is IT support included with website plans?",
    answer:
      "No. IT support is a separate service covering business technology, devices, accounts, Microsoft 365, troubleshooting, and infrastructure assistance.",
  },
  {
    question: "What kind of businesses are these plans for?",
    answer:
      "Local businesses, service providers, and growing companies that need a reliable website and practical technology support.",
  },
  {
    question: "What happens if I want more than the standard plan includes?",
    answer:
      "Additional features, custom functionality, integrations, and extended support can be scoped and quoted separately.",
  },
  {
    question: "Will you help with domain connection and launch?",
    answer: "Yes. Both plans include domain connection and launch support.",
  },
  {
    question: "Is SEO included?",
    answer:
      "Both plans include basic on-page SEO foundations and Google indexing support. Ongoing SEO or deeper technical SEO can be added separately.",
  },
  {
    question: "Can I move from the Launch Plan to the Ownership Plan later?",
    answer:
      "Yes. You can move from a managed monthly model to full ownership by agreement.",
  },
];

const Faq = () => {
  return (
    <Layout>
      <Seo
        title="FAQ"
        description="Clear answers about Novara website plans, ownership, maintenance, automation add-ons, and support scope."
        path="/faq"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10 mx-auto text-center">
            <p className="label-small mb-4">FAQ</p>
            <h1 className="headline-hero mb-6 text-center">Answers, clearly.</h1>
            <p className="body-large">Straight responses to common commercial and service questions.</p>
          </div>
          <AccordionList items={faqItems} />
        </div>
      </section>
    </Layout>
  );
};

export default Faq;
