import Layout from "@/components/Layout";

const slides = Array.from({ length: 6 }, (_, index) => ({
  id: `slide-${index}`,
}));

const Portfolio = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-editorial">
          <div className="overflow-x-auto pb-4 -mx-6 md:-mx-12 px-6 md:px-12">
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
