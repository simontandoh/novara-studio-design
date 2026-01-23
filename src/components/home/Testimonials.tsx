import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Quiet. Stable. Clear.",
    name: "Trade Owner",
  },
  {
    quote: "Fast. Maintained. Out of the way.",
    name: "Service Director",
  },
  {
    quote: "It fits the business.",
    name: "Operations Lead",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <p className="label-small mb-4">Notes</p>
        <div className="relative">
          {testimonials.map((item, i) => (
            <div
              key={item.quote}
              className={`transition-opacity duration-500 ${
                i === index ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <p className="headline-secondary mb-4">"{item.quote}"</p>
              <p className="text-sm text-muted-foreground">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
