interface PortfolioVideoCarouselProps {
  className?: string;
  maxSlides?: number;
}

const slides = [
  { id: "slide-1", src: "/video/recording-2026-02-26-181053.mp4" },
  { id: "slide-2", src: "" },
  { id: "slide-3", src: "" },
  { id: "slide-4", src: "" },
  { id: "slide-5", src: "" },
];

const playVideo = (video: HTMLVideoElement | null) => {
  if (!video) return;
  const playPromise = video.play();
  if (playPromise) {
    void playPromise.catch(() => {
      // Ignore blocked autoplay attempts.
    });
  }
};

const pauseVideo = (video: HTMLVideoElement | null) => {
  if (!video) return;
  video.pause();
};

const PortfolioVideoCarousel = ({ className = "", maxSlides }: PortfolioVideoCarouselProps) => {
  const visibleSlides = typeof maxSlides === "number" ? slides.slice(0, maxSlides) : slides;

  return (
    <div className={`overflow-x-auto pb-4 -mx-6 md:-mx-12 px-6 md:px-12 portfolio-scroll ${className}`}>
      <div className="flex gap-6 min-w-full snap-x snap-mandatory">
        {visibleSlides.map((slide) => (
          <div
            key={slide.id}
            className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/9] rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden"
            style={{
              background:
                "radial-gradient(120% 120% at 20% 20%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(120% 120% at 80% 70%, rgba(140,170,220,0.18), transparent 60%)",
            }}
            onMouseEnter={(event) => playVideo(event.currentTarget.querySelector("video"))}
            onMouseLeave={(event) => pauseVideo(event.currentTarget.querySelector("video"))}
            onFocus={(event) => playVideo(event.currentTarget.querySelector("video"))}
            onBlur={(event) => pauseVideo(event.currentTarget.querySelector("video"))}
            tabIndex={0}
          >
            {slide.src ? (
              <video
                className="h-full w-full object-cover"
                loop
                muted
                playsInline
                preload="auto"
                poster="/og-image.png"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <div className="h-full w-full bg-black/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioVideoCarousel;
