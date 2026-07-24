import { createFileRoute } from "@tanstack/react-router";
import { UnderConstructionPage } from "@/components/site/UnderConstructionPage";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/experiencias/personalizadas")({
  head: () =>
    seoHead({
      path: "/experiencias/personalizadas",
      title: "Experiências personalizadas — Clareira",
      description: "Vivências sob medida, pensadas para grupos e ocasiões especiais na Clareira.",
    }),
  component: () => (
    <UnderConstructionPage
      kicker="experiências personalizadas"
      title="Experiências feitas sob medida."
      intro="Estamos desenhando um jeito de criar vivências personalizadas na Clareira. Em breve, mais detalhes por aqui."
    />
  ),
});
