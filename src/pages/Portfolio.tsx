import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const slides = [
  { id: "slide-1", src: "/video/hero.mp4" },
  { id: "slide-2", src: "/video/novara-hero.mp4" },
  { id: "slide-3", src: "/video/recording-2026-02-26-181053.mp4" },
  { id: "slide-4", src: "/video/hero.mp4" },
  { id: "slide-5", src: "/video/novara-hero.mp4" },
  { id: "slide-6", src: "/video/hero.mp4" },
];

const Portfolio = () => {
  const playVideo = (video: HTMLVideoElement | null) => {
    if (!video) return;
    const playPromise = video.play();
    if (playPromise) {
      void playPromise.catch(() => {
        // Ignore blocked play attempts on unsupported environments.
      });
    }
  };

  const pauseVideo = (video: HTMLVideoElement | null) => {
    if (!video) return;
    video.pause();
  };

  return (
    <Layout>
      <Seo
        title="Selected Website Work and Outcomes"
        description="Anonymized snapshots of Novara Studios work focused on outcomes, structure, and delivery across premium websites."
        path="/portfolio"
      />
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10 mx-auto text-center">
            <p className="label-small mb-4">Portfolio</p>
            <h1 className="headline-hero mb-6 text-center">Selected work snapshots.</h1>
            <p className="body-large">
              Anonymized previews with a focus on outcomes, structure, and delivery.
            </p>
          </div>
          <div className="overflow-x-auto pb-4 -mx-6 md:-mx-12 px-6 md:px-12 portfolio-scroll">
            <div className="flex gap-6 min-w-full snap-x snap-mandatory">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/9] rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(120% 120% at 20% 20%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(120% 120% at 80% 70%, rgba(140,170,220,0.18), transparent 60%)",
                  }}
                  onMouseEnter={(event) =>
                    playVideo(event.currentTarget.querySelector("video"))
                  }
                  onMouseLeave={(event) =>
                    pauseVideo(event.currentTarget.querySelector("video"))
                  }
                  onFocus={(event) =>
                    playVideo(event.currentTarget.querySelector("video"))
                  }
                  onBlur={(event) =>
                    pauseVideo(event.currentTarget.querySelector("video"))
                  }
                  tabIndex={0}
                >
                  <video
                    className="h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={slide.src} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
