import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

type SubmissionData = Record<string, unknown> & {
  submittedAt?: string;
};

const Submitted = () => {
  const location = useLocation();
  const stateData = location.state as SubmissionData | null;
  const stored = localStorage.getItem("novaraContactSubmission");
  const fallbackData = stored ? (JSON.parse(stored) as SubmissionData) : null;
  const data = stateData ?? fallbackData;

  return (
    <Layout>
      <Seo
        title="Submitted"
        description="Your message was submitted to Novara Studios."
        path="/submitted"
        noIndex
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="label-small mb-4">Submitted</p>
            <h1 className="headline-hero mb-6">Received.</h1>
            <p className="body-large mb-6">We will respond shortly.</p>
            {!data && (
              <p className="text-sm text-muted-foreground">
                Submission data is unavailable in this session.
              </p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Submitted;
