import { createFileRoute } from "@tanstack/react-router";
import { UnderConstructionPage } from "@/components/site/UnderConstructionPage";
import { seoHead } from "@/lib/seo";
import { emBreve } from "@/lib/site-data";

const data = emBreve.find((p) => p.id === "estadias")!;

export const Route = createFileRoute("/estadias")({
  head: () =>
    seoHead({
      path: "/estadias",
      title: `${data.title} — Em breve · Clareira`,
      description: data.body,
    }),
  component: () => (
    <UnderConstructionPage
      kicker="em breve · hospedagem enraizada"
      title={data.title}
      intro={data.body}
    />
  ),
});
