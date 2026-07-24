import { site } from "./site-data";

type SeoOptions = {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/" or "/sobre". */
  path: string;
  /** Root-relative asset URL (from an *.asset.json import), e.g. picoMarins.url. */
  image?: string;
};

const defaultOgImage = "/__l5e/assets-v1/3b3cd2a9-8c6b-4674-bbd1-c114b3244428/pico-marins.jpeg";

export function seoHead({ title, description, path, image }: SeoOptions) {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const imageUrl = `${site.url}${image ?? defaultOgImage}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
