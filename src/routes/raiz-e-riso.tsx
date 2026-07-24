import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/raiz-e-riso")({
  head: () => ({
    meta: [
      { title: "Raiz & Riso — Clareira" },
      {
        name: "description",
        content:
          "Raiz & Riso é a vivência inaugural da Clareira, ao pé do Pico dos Marins. Em breve, mais detalhes.",
      },
      { property: "og:title", content: "Raiz & Riso — Clareira" },
      { property: "og:description", content: "A vivência inaugural da Clareira. Em breve." },
    ],
  }),
  component: RaizERiso,
});

function RaizERiso() {
  return (
    <PageShell>
      <section className="min-h-[80vh] pt-40 pb-32 px-6 sm:px-10 flex items-center">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--tan)]">
            vivência · em construção
          </div>
          <h1 className="mt-6 font-serif text-6xl sm:text-7xl md:text-8xl text-primary leading-[1.02]">
            Raiz &amp; Riso
          </h1>
          <p className="mt-10 font-serif italic text-2xl sm:text-3xl leading-[1.4] text-primary/75">
            Estamos preparando o solo. Em breve, mais detalhes sobre nossa
            vivência inaugural — datas, curadoria e como participar.
          </p>

          <div className="mt-14 mx-auto max-w-xs divider-hairline" />

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 rounded-sm border border-primary/25 px-6 py-3 text-sm text-primary/50 cursor-not-allowed"
            >
              Inscrições em breve
            </button>
            <Link
              to="/newsletter"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-[color:var(--terra)] transition-colors"
            >
              Avise-me quando abrir
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-16 text-sm text-muted-foreground">
            Enquanto isso, conheça{" "}
            <Link to="/sobre" className="underline underline-offset-4 hover:text-primary">
              a Clareira
            </Link>{" "}
            e o território dos Marins.
          </p>
        </div>
      </section>
    </PageShell>
  );
}