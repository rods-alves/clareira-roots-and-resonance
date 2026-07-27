import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/experiencias/personalizadas")({
  head: () =>
    seoHead({
      path: "/experiencias/personalizadas",
      title: "Experiências personalizadas — Clareira",
      description: "Vivências sob medida, pensadas para grupos e ocasiões especiais na Clareira.",
    }),
  component: ExperienciasPersonalizadasPage,
});

function ExperienciasPersonalizadasPage() {
  return (
    <PageShell>
      <PageHeader
        kicker="experiências personalizadas"
        title="Uma vivência pensada para o seu grupo."
      />

      <section className="px-6 sm:px-10 pb-32">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Cada grupo chega à natureza com desejos, ritmos e perguntas diferentes. Por isso, a
            Clareira também cria vivências sob medida para grupos, equipes e empresas que buscam uma
            experiência significativa no território dos Marins.
          </p>
          <p>
            Podemos combinar caminhadas guiadas, leitura ecológica da paisagem, práticas de
            presença, conversas sobre regeneração, oficinas, momentos de integração e curadorias
            locais, desenhando uma experiência alinhada ao propósito, ao perfil e às necessidades do
            grupo.
          </p>
          <p>
            Para grupos fechados, encontros corporativos, retiros, formações ou celebrações
            especiais, entre em contato e vamos construir juntos uma vivência que faça sentido para
            vocês.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Link
            to="/contato"
            className="text-sm text-primary underline underline-offset-4 hover:text-[color:var(--terra)]"
          >
            falar com a Clareira →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
