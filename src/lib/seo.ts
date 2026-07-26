import { site } from "./site-data";
import defaultOgImage from "@/assets/pico-marins.jpeg";

type SeoOptions = {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/" or "/sobre". */
  path: string;
  /** Root-relative asset URL (from an image import), e.g. picoMarins. */
  image?: string;
  /** Root-relative URL of this page's LCP image, preloaded for a faster paint. */
  preloadImage?: string;
};

export function seoHead({ title, description, path, image, preloadImage }: SeoOptions) {
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
    links: [
      { rel: "canonical", href: url },
      ...(preloadImage ? [{ rel: "preload", as: "image", href: preloadImage } as const] : []),
    ],
  };
}
