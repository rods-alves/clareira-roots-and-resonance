import { createFileRoute } from "@tanstack/react-router";
import { UnderConstructionPage } from "@/components/site/UnderConstructionPage";
import { seoHead } from "@/lib/seo";
import { emBreve } from "@/lib/site-data";

const data = emBreve.find((p) => p.id === "mato-adentro")!;

export const Route = createFileRoute("/mato-adentro")({
  head: () =>
    seoHead({
      path: "/mato-adentro",
      title: `${data.title} — Em breve · Clareira`,
      description: data.body,
    }),
  component: () => (
    <UnderConstructionPage
      kicker="em breve · trilhas & imersões guiadas"
      title={data.title}
      intro={data.body}
    />
  ),
});
