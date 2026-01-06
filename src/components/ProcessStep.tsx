interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex gap-6 group">
      <div className="shrink-0">
        <span className="text-xs uppercase tracking-[0.15em] text-accent">
          {number}
        </span>
      </div>
      <div className="pb-8 border-b border-border group-last:border-0">
        <h3 className="text-lg font-light mb-2">{title}</h3>
        <p className="body-refined">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
