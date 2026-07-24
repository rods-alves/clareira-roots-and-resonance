import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import picoMarins from "@/assets/pico-marins.asset.json";
import marina2 from "@/assets/marina-2.asset.json";
import marina3 from "@/assets/marina-3.asset.json";
import marina4 from "@/assets/marina-4.asset.json";
import { manifesto, regeneracao } from "@/lib/site-data";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    seoHead({
      path: "/sobre",
      title: "Sobre a Clareira — manifesto, território e quem conduz",
      description:
        "Conheça o manifesto da Clareira, o território dos Marins, nossos princípios regenerativos e quem conduz o projeto.",
      image: picoMarins.url,
    }),
  component: SobrePage,
});

const anchors = [
  { id: "manifesto", label: "Manifesto" },
  { id: "territorio", label: "Território dos Marins" },
  { id: "regeneracao", label: "Regeneração" },
  { id: "quem-conduz", label: "Quem conduz" },
];

function SobrePage() {
  return (
    <PageShell>
      <PageHeader
        kicker="sobre a Clareira"
        title="Uma pausa dentro da mata."
        intro="Um projeto regenerativo aos pés do Pico dos Marins, feito de gente, de território e do tempo próprio da montanha."
      />

      {/* Anchor nav */}
      <div className="px-6 sm:px-10 -mt-4">
        <div className="mx-auto max-w-4xl flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {anchors.map((a) => (
            <a key={a.id} href={`#${a.id}`} className="hover:text-primary transition-colors">
              — {a.label}
            </a>
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <section id="manifesto" className="scroll-mt-28 px-6 sm:px-10 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--tan)]">
            01 · manifesto
          </div>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-primary">
            O que nos move.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-[1.75] text-primary/85">
            {manifesto.long.map((p, i) => (
              <p key={i} className={i === 0 ? "font-serif italic text-2xl leading-[1.5]" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Território */}
      <section id="territorio" className="scroll-mt-28 border-t border-border/60 bg-[color:var(--sand)]/25 paper-texture">
        <div className="px-6 sm:px-10 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl grid gap-14 md:grid-cols-2 md:gap-20 items-center">
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm">
              <img src={picoMarins.url} alt="Pico dos Marins" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--tan)]">
                02 · território dos Marins
              </div>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-primary leading-[1.05]">
                Aos pés de uma das mais belas montanhas da Mantiqueira.
              </h2>
              <div className="mt-8 space-y-5 text-[15px] leading-[1.8] text-primary/85">
                <p>
                  O Pico dos Marins se ergue a 2.420 metros sobre a região de
                  Piquete, no interior de São Paulo. Ao seu redor, um mosaico de
                  mata atlântica preservada, nascentes, sítios e comunidades que
                  sustentam a vida da serra.
                </p>
                <p>
                  A Clareira nasce nesse contexto — não como um empreendimento
                  isolado, mas como uma extensão do território. Escutamos os
                  ciclos da montanha, aprendemos com quem já cuida deste chão há
                  muito tempo e cultivamos formas de habitá-lo com mais atenção.
                </p>
                <p>
                  Aqui, a paisagem é convite e mestra. O silêncio da mata, o som
                  dos riachos e o desenho do céu sobre as cristas são o primeiro
                  currículo de qualquer experiência que oferecemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regeneração */}
      <section id="regeneracao" className="scroll-mt-28 px-6 sm:px-10 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--tan)]">
              03 · regeneração
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-primary leading-[1.05]">
              Princípios que guiam cada gesto.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Regenerar, para nós, é um verbo cotidiano. Se traduz em decisões
              pequenas e persistentes — de arquitetura, de curadoria, de convívio.
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {regeneracao.map((r, i) => (
              <article key={r.title} className="border-t border-primary/25 pt-6">
                <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--olive)]">
                  princípio 0{i + 1}
                </div>
                <h3 className="mt-3 font-serif text-2xl text-primary">{r.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-muted-foreground">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quem conduz */}
      <section
        id="quem-conduz"
        className="scroll-mt-28 border-t border-border/60 bg-[color:var(--forest)] text-[color:var(--cream)]"
      >
        <div className="px-6 sm:px-10 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--tan)]">
              04 · quem conduz
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-[1.05] max-w-3xl">
              Feito por quem já mora nesse ritmo.
            </h2>

            <div className="mt-16 grid gap-14 md:grid-cols-[1.1fr_1fr] items-center">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img src={marina3.url} alt="Marina no território" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl">Marina</h3>
                <div className="mt-2 text-xs uppercase tracking-[0.22em] text-[color:var(--tan)]">
                  co-fundadora · curadora do território
                </div>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.8] text-[color:var(--cream)]/85">
                  <p>
                    [texto editável] Marina é quem abre os portões da Clareira todo
                    dia. Vive nos Marins, conhece as trilhas pelo nome e conduz as
                    experiências com uma escuta rara — dessas que só nascem de anos
                    de convivência com a montanha.
                  </p>
                  <p>
                    [texto editável] Sua formação atravessa a hospitalidade, a
                    agroecologia e o cuidado com o corpo. É ela quem costura cada
                    detalhe entre a floresta, a cozinha e as pessoas que chegam.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[marina2, marina4].map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-sm">
                  <img src={img.url} alt="Marina no território dos Marins" className="absolute inset-0 h-full w-full object-cover" />
                </div>
              ))}
              <div className="hidden sm:flex items-center justify-center bg-[color:var(--forest)] border border-[color:var(--olive)]/30 rounded-sm p-6 text-center">
                <p className="font-serif italic text-lg text-[color:var(--sand)]">
                  “o território ensina, se a gente aceitar ser aluno.”
                </p>
              </div>
            </div>

            <div className="mt-16 text-sm">
              <Link to="/contato" className="text-[color:var(--sand)] underline underline-offset-4 hover:text-[color:var(--cream)]">
                falar com a Clareira →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}