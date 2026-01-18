interface ServiceTypeCardProps {
  title: string;
  description: string;
  details: string[];
  isActive?: boolean;
  onClick?: () => void;
}

const ServiceTypeCard = ({
  title,
  description,
  details,
  isActive = false,
  onClick,
}: ServiceTypeCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 md:p-8 transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] rounded-lg noise-overlay surface-panel hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        isActive
          ? "border-accent/50"
          : "border-border hover:border-accent/40"
      }`}
    >
      <h3 className="headline-secondary mb-3">{title}</h3>
      <p className="body-refined mb-4">{description}</p>
      
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-accent mt-0.5">·</span>
            {detail}
          </li>
        ))}
      </ul>
    </button>
  );
};

export default ServiceTypeCard;
