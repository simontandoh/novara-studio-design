import { Helmet } from "react-helmet-async";
import { buildCanonical, buildTitle, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA } from "@/lib/seo";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const Seo = ({
  title,
  description,
  path,
  image,
  canonical,
  noIndex,
  structuredData,
}: SeoProps) => {
  const fullTitle = buildTitle(title);
  const canonicalUrl = canonical ?? buildCanonical(path);
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const structuredInput = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];
  const structured = [ORGANIZATION_SCHEMA, ...structuredInput];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="NOVARA Studios" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {structured.map((json, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      ))}
    </Helmet>
  );
};

export default Seo;
