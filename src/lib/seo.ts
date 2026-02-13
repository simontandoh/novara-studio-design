export const SITE_URL = "https://novarastudios.co.uk";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Novara Studios",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  email: "hello@novarastudios.co.uk",
};

export const buildCanonical = (path?: string) => {
  if (!path) return SITE_URL;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
};

export const buildTitle = (title: string) => {
  if (!title) return "Novara Studios";
  if (title.includes("Novara Studios")) return title;
  return `${title} | Novara Studios`;
};
