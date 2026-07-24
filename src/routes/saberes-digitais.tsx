import { createFileRoute } from "@tanstack/react-router";
import { UnderConstructionPage } from "@/components/site/UnderConstructionPage";
import { seoHead } from "@/lib/seo";
import { emBreve } from "@/lib/site-data";

const data = emBreve.find((p) => p.id === "saberes")!;

export const Route = createFileRoute("/saberes-digitais")({
  head: () =>
    seoHead({
      path: "/saberes-digitais",
      title: `${data.title} — Clareira`,
      description: data.body,
    }),
  component: () => (
    <UnderConstructionPage
      kicker="cursos & cadernos de campo"
      title={data.title}
      intro={data.body}
    />
  ),
});
