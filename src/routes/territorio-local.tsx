import { createFileRoute } from "@tanstack/react-router";
import { UnderConstructionPage } from "@/components/site/UnderConstructionPage";
import { seoHead } from "@/lib/seo";
import { emBreve } from "@/lib/site-data";

const data = emBreve.find((p) => p.id === "territorio-local")!;

export const Route = createFileRoute("/territorio-local")({
  head: () =>
    seoHead({
      path: "/territorio-local",
      title: `${data.title} — Clareira`,
      description: data.body,
    }),
  component: () => (
    <UnderConstructionPage
      kicker="curadoria de negócios locais"
      title={data.title}
      intro={data.body}
    />
  ),
});
