import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const slides = Array.from({ length: 6 }, (_, index) => ({
  id: `slide-${index}`,
}));

const Portfolio = () => {
  return (
    <Layout>
      <Seo
        title="Portfolio"
        description="Selected project snapshots and outcome-focused work from Novara Studios."
        path="/portfolio"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10">
            <p className="label-small mb-4">Portfolio</p>
            <h1 className="headline-hero mb-6">Selected work snapshots.</h1>
            <p className="body-large">
              Anonymized previews with a focus on outcomes, structure, and delivery.
            </p>
          </div>
          <div className="overflow-x-auto pb-4 -mx-6 md:-mx-12 px-6 md:px-12 portfolio-scroll">
            <div className="flex gap-6 min-w-full snap-x snap-mandatory">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/9] rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm"
                  style={{
                    background:
                      "radial-gradient(120% 120% at 20% 20%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(120% 120% at 80% 70%, rgba(140,170,220,0.18), transparent 60%)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
