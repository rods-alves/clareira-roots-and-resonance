import { createFileRoute } from "@tanstack/react-router";
import { UnderConstructionPage } from "@/components/site/UnderConstructionPage";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    seoHead({
      path: "/blog",
      title: "Blog — Clareira",
      description: "Ensaios, cadernos de campo e notícias do território dos Marins.",
    }),
  component: () => (
    <UnderConstructionPage
      kicker="blog"
      title="Histórias do território."
      intro="Estamos preparando o espaço para ensaios, cadernos de campo e notícias da Clareira. Em breve, mais detalhes por aqui."
    />
  ),
});
