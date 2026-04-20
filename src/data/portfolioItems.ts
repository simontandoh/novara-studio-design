export type PortfolioItem = {
  id: string;
  name: string;
  category: string;
  websiteUrl: string;
  /** MP4 path under public; optional when previewImageSrc is used instead. */
  videoSrc?: string;
  /** Static preview (e.g. hero screenshot) when no video or as the primary preview. */
  previewImageSrc?: string;
};

/**
 * Novara demo sites — used by the dedicated Portfolio page selector.
 * Order is alphabetical by `category` (dropdown label).
 * Use `videoSrc` for MP4s under `public/videos/portfolio/`, or `previewImageSrc`
 * for a static preview (e.g. hero screenshot) when no recording is available.
 */
export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: "apex-car",
    name: "Apex Car",
    category: "Car Manufacturer",
    websiteUrl: "https://apexcar.novarastudios.co.uk",
    videoSrc: "/videos/portfolio/apex-car.mp4",
  },
  {
    id: "marcus-cole",
    name: "Marcus Cole",
    category: "Fitness",
    websiteUrl: "https://marcuscole.novarastudios.co.uk",
    previewImageSrc: "/images/portfolio/marcus-cole-preview.png",
  },
  {
    id: "redfield-fc",
    name: "Redfield FC",
    category: "Football Club",
    websiteUrl: "https://redfieldfc.novarastudios.co.uk",
    previewImageSrc: "/images/portfolio/redfield-fc-preview.png",
  },
  {
    id: "celeste-vane",
    name: "Celeste Vane",
    category: "Influencer",
    websiteUrl: "https://celestevane.novarastudios.co.uk",
    previewImageSrc: "/images/portfolio/celeste-vane-preview.png",
  },
  {
    id: "vellum-and-co",
    name: "Vellum & Co",
    category: "Jewellery",
    websiteUrl: "https://vellumandco.novarastudios.co.uk",
    previewImageSrc: "/images/portfolio/vellum-and-co-preview.png",
  },
  {
    id: "hale-and-partners",
    name: "Hale & Partners",
    category: "Law Firm",
    websiteUrl: "https://haleandpartners.novarastudios.co.uk",
    previewImageSrc: "/images/portfolio/hale-and-partners-preview.png",
  },
  {
    id: "lola-nails",
    name: "Lola Nails",
    category: "Nail Tech",
    websiteUrl: "https://lolanails.novarastudios.co.uk",
    videoSrc: "/videos/portfolio/lola-nails.mp4",
  },
  {
    id: "elodie-marsh",
    name: "Elodie Marsh",
    category: "Photographer",
    websiteUrl: "https://elodiemarsh.novarastudios.co.uk",
    previewImageSrc: "/images/portfolio/elodie-marsh-preview.png",
  },
  {
    id: "ironside",
    name: "Ironside",
    category: "Plumber",
    websiteUrl: "https://ironside.novarastudios.co.uk",
    previewImageSrc: "/images/portfolio/ironside-preview.png",
  },
  {
    id: "onyx",
    name: "Onyx",
    category: "Restaurant (Luxury)",
    websiteUrl: "https://onyx.novarastudios.co.uk",
    previewImageSrc: "/images/portfolio/onyx-preview.png",
  },
  {
    id: "calabash",
    name: "Calabash",
    category: "Restaurant (Normal)",
    websiteUrl: "https://calabash.novarastudios.co.uk",
    previewImageSrc: "/images/portfolio/calabash-preview.png",
  },
  {
    id: "willow-wellness",
    name: "Willow Wellness",
    category: "Spa & Wellness",
    websiteUrl: "https://willowwellness.novarastudios.co.uk",
    previewImageSrc: "/images/portfolio/willow-wellness-preview.png",
  },
];

/** Label shown in the portfolio project `<select>` (category only). */
export function getPortfolioLabel(item: PortfolioItem): string {
  return item.category;
}
