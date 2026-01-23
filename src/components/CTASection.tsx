import { Link } from "react-router-dom";

interface CTASectionProps {
  headline: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  centered?: boolean;
}

const CTASection = ({
  headline,
  description,
  primaryLabel = "Contact",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
  centered = false,
}: CTASectionProps) => {
  return (
    <section className="section-padding">
      <div className="container-editorial">
        <div
          className={`${
            centered
              ? "text-center max-w-2xl mx-auto"
              : "grid lg:grid-cols-2 gap-12 items-center"
          }`}
        >
          <div>
            <h2 className="headline-primary mb-6">{headline}</h2>
            {description && <p className="body-large">{description}</p>}
          </div>

          <div className={centered ? "mt-8" : "lg:text-right"}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link
                to={primaryTo}
                className="btn-primary rounded-full px-7 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryTo && (
                <Link
                  to={secondaryTo}
                  className="btn-secondary rounded-full px-7 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
