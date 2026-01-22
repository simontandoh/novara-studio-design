import { Link } from "react-router-dom";

interface TierCardProps {
  title: string;
  subtitle: string;
  description: string;
  designedFor: string;
  includes: string[];
  supportLevel?: string;
  featured?: boolean;
}

const TierCard = ({
  title,
  subtitle,
  description,
  designedFor,
  includes,
  supportLevel,
  featured = false,
}: TierCardProps) => {
  return (
    <div
      className={`group noise-overlay surface-panel rounded-lg p-8 md:p-10 transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 ${
        featured
          ? "border border-accent/30 hover:border-accent/70"
          : "border border-border hover:border-accent/50"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100"
        style={{ backgroundImage: "var(--gradient-hover)" }}
      />
      {featured && (
        <div className="absolute -top-3 left-8">
          <span className="text-xs uppercase tracking-[0.15em] bg-accent text-background px-3 py-1">
            Popular
          </span>
        </div>
      )}

      <p className="label-small text-accent mb-4">{subtitle}</p>
      <h3 className="headline-secondary mb-3">{title}</h3>
      <p className="body-refined mb-6">{description}</p>

      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground mb-2">
          Designed for
        </p>
        <p className="text-sm text-foreground font-light">{designedFor}</p>
      </div>

      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground mb-3">
          Includes
        </p>
        <ul className="space-y-2">
          {includes.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="text-accent mt-0.5">-</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {supportLevel && (
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground mb-2">
            Support level
          </p>
          <p className="text-sm text-foreground font-light">{supportLevel}</p>
        </div>
      )}

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-sm font-light group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="relative after:content-[''] after:absolute after:w-full after:h-px after:bottom-0 after:left-0 after:bg-accent after:origin-left after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:duration-[180ms]">
          Contact
        </span>
        <span className="text-accent group-hover/link:translate-x-1 transition-transform">
          +
        </span>
      </Link>
    </div>
  );
};

export default TierCard;
