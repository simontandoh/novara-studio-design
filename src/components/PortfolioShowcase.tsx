import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { PORTFOLIO_ITEMS, getPortfolioLabel } from "@/data/portfolioItems";

const selectClassName =
  "w-full max-w-2xl mx-auto bg-card border border-border/60 rounded-xl p-3 text-foreground appearance-none cursor-pointer [&>option]:bg-card [&>option]:text-foreground";
const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23788CA0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 12px center",
};

const PortfolioShowcase = () => {
  const [selectedId, setSelectedId] = useState<string>(() => PORTFOLIO_ITEMS[0].id);
  const [videoFailed, setVideoFailed] = useState(false);

  const selected = useMemo(
    () => PORTFOLIO_ITEMS.find((item) => item.id === selectedId) ?? PORTFOLIO_ITEMS[0],
    [selectedId]
  );

  useEffect(() => {
    setVideoFailed(false);
  }, [selectedId]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedId(event.target.value);
  };

  const showVideo = Boolean(selected.videoSrc) && !videoFailed;

  return (
    <div className="w-full">
      <div className="mb-6 md:mb-8">
        <label htmlFor="portfolio-project-select" className="block label-small mb-2 text-center">
          Select project
        </label>
        <select
          id="portfolio-project-select"
          value={selectedId}
          onChange={handleSelectChange}
          className={selectClassName}
          style={selectStyle}
          aria-describedby="portfolio-project-hint"
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <option key={item.id} value={item.id}>
              {getPortfolioLabel(item)}
            </option>
          ))}
        </select>
        <p id="portfolio-project-hint" className="sr-only">
          Choosing an option loads a screen recording and updates the project details below.
        </p>
      </div>

      <div
        className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 120% at 20% 20%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(120% 120% at 80% 70%, rgba(140,170,220,0.18), transparent 60%)",
        }}
      >
        {showVideo ? (
          <video
            key={selected.id}
            className="h-full w-full object-cover"
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
            poster="/og-image.png"
            onError={() => setVideoFailed(true)}
          >
            <source src={selected.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="flex h-full w-full min-h-[200px] flex-col items-center justify-center gap-2 px-6 text-center text-muted-foreground">
            <p className="body-refined text-foreground/90">{selected.name}</p>
            <p className="text-sm">
              {videoFailed || !selected.videoSrc
                ? "Preview video is not available yet. Add the MP4 under public/videos/portfolio/ or check the file name."
                : "Loading preview…"}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 md:mt-10 max-w-2xl mx-auto text-center space-y-3">
        <h2 className="headline-secondary">{selected.name}</h2>
        <p className="label-small text-muted-foreground">{selected.category}</p>
        <div className="pt-2">
          <a
            href={selected.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary rounded-full px-7 py-3 inline-flex items-center justify-center"
          >
            Visit live site
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
