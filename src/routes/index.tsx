import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { NewsletterInline } from "@/components/site/NewsletterInline";
import picoMarins from "@/assets/pico-marins.asset.json";
import logoStacked from "@/assets/logo-stacked.asset.json";
import marina1 from "@/assets/marina-1.asset.json";
import { emBreve, manifesto, site } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clareira — experiências enraizadas no território" },
      {
        name: "description",
        content:
          "Projeto regenerativo nos Marins, Serra da Mantiqueira. Experiências, estadias e saberes que aproximam pessoas da natureza.",
      },
      { property: "og:title", content: "Clareira — experiências enraizadas no território" },
      {
        property: "og:description",
        content: "Uma pausa dentro da mata, aos pés do Pico dos Marins.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-end overflow-hidden">
        <img
          src={picoMarins.url}
          alt="Pico dos Marins visto do território da Clareira"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--forest)]/40 via-[color:var(--forest)]/10 to-[color:var(--forest)]/85" />

        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 pb-16 sm:pb-24 pt-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[color:var(--sand)] text-[11px] uppercase tracking-[0.32em]">
              <MapPin className="h-3.5 w-3.5" /> {site.location}
            </div>
            <img
              src={logoStacked.url}
              alt="Clareira — experiências enraizadas no território"
              className="mt-8 w-56 sm:w-72 md:w-80 drop-shadow-xl"
              style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))" }}
            />
            <p className="mt-10 max-w-xl font-serif italic text-2xl sm:text-3xl leading-[1.35] text-[color:var(--cream)]">
              Uma pausa dentro da mata. Um lugar onde a luz alcança o chão e algo novo pode brotar.
            </p>
          </div>

          <div className="mt-14 flex items-center gap-6 text-[color:var(--cream)]/80 text-xs uppercase tracking-[0.28em]">
            <span className="h-px w-16 bg-[color:var(--sand)]" />
            role scroll para conhecer
          </div>
        </div>
      </section>

      {/* Manifesto short */}
      <section className="px-6 sm:px-10 py-28 sm:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--tan)]">
            manifesto
          </div>
          <p className="mt-8 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.25] text-primary">
            {manifesto.short}
          </p>
          <div className="mt-12 mx-auto max-w-xs divider-hairline" />
          <Link
            to="/sobre"
            hash="manifesto"
            className="mt-10 inline-flex items-center gap-2 text-sm text-primary hover:text-[color:var(--terra)] transition-colors"
          >
            ler o manifesto inteiro
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Raiz & Riso feature */}
      <section className="px-6 sm:px-10 pb-32">
        <div className="mx-auto max-w-7xl grid gap-14 md:grid-cols-2 md:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
            <img
              src={marina1.url}
              alt="Marina no portão de madeira com a Serra da Mantiqueira ao fundo"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--tan)]">
              vivência inaugural
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-[1.05]">
              Raiz &amp; Riso
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nossa primeira vivência é um convite para se enraizar no território
              e reencontrar o riso simples — o das refeições ao redor do fogo, das
              caminhadas sem pressa, das conversas que só a montanha permite.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Estamos preparando as datas, a curadoria e o cuidado com cada detalhe.
              Deixe seu e-mail e avisamos quando as inscrições abrirem.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/raiz-e-riso"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-[color:var(--terra)] transition-colors"
              >
                Conhecer Raiz &amp; Riso
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/newsletter"
                className="inline-flex items-center gap-2 rounded-sm border border-primary/40 px-6 py-3 text-sm text-primary hover:border-primary transition-colors"
              >
                Avise-me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Em breve pillars */}
      <section className="px-6 sm:px-10 py-24 bg-[color:var(--sand)]/25 paper-texture border-y border-border/60">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--tan)]">
              em breve
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-primary leading-[1.05]">
              Quatro caminhos que se abrem a partir da Clareira.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {emBreve.map((pilar, i) => (
              <article
                key={pilar.id}
                className="group flex flex-col border-t border-primary/25 pt-6"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--olive)]">
                  0{i + 1} · {pilar.kicker}
                </div>
                <h3 className="mt-4 font-serif text-2xl text-primary">{pilar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pilar.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <Link
              to="/em-breve"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-[color:var(--terra)]"
            >
              Ver tudo que está por vir
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 sm:px-10 py-28">
        <div className="mx-auto max-w-4xl">
          <NewsletterInline />
        </div>
      </section>
    </PageShell>
  );
}
