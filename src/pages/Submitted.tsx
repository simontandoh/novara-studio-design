import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";

type SubmissionData = Record<string, unknown> & {
  submittedAt?: string;
};

const Submitted = () => {
  const location = useLocation();
  const stateData = location.state as SubmissionData | null;
  const stored = localStorage.getItem("novaraContactSubmission");
  const fallbackData = stored ? (JSON.parse(stored) as SubmissionData) : null;
  const data = stateData ?? fallbackData;

  const handleDownload = () => {
    if (!data) return;
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "novara-contact-submission.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="label-small mb-4">Submitted</p>
            <h1 className="headline-hero mb-6">Thanks, your form is in.</h1>
            <p className="body-large mb-6">
              We have received your details and will respond shortly.
            </p>
            {data ? (
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="btn-secondary rounded-full px-6 py-2"
                >
                  Download JSON
                </button>
                <p className="text-xs text-muted-foreground">
                  Saved locally as `novaraContactSubmission` for quick access.
                </p>
              </div>
            ) : (
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
