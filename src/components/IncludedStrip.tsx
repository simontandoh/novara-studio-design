import { Shield, Code, Gauge, Lock, FileText, Heart } from "lucide-react";

const items = [
  { icon: Shield, label: "Reliability-first builds" },
  { icon: Code, label: "Clean structure" },
  { icon: Gauge, label: "Performance baseline" },
  { icon: Lock, label: "Security hygiene" },
  { icon: FileText, label: "Documentation" },
  { icon: Heart, label: "Ongoing care mindset" },
];

const IncludedStrip = () => {
  return (
    <section className="py-12 border-t border-b border-border bg-card">
      <div className="container-editorial">
        <p className="label-small text-center mb-8">Included in every tier</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <item.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground font-light">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedStrip;
