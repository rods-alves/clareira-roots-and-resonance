import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { NewsletterInline } from "@/components/site/NewsletterInline";
import { emBreve } from "@/lib/site-data";

export const Route = createFileRoute("/em-breve")({
  head: () => ({
    meta: [
      { title: "Em breve — Clareira" },
      {
        name: "description",
        content:
          "Quatro caminhos que se abrem a partir da Clareira: Mato Adentro, Estadias, Saberes digitais e Território local.",
      },
      { property: "og:title", content: "Em breve — Clareira" },
      { property: "og:description", content: "Mato Adentro, Estadias, Saberes digitais e Território local." },
    ],
  }),
  component: EmBrevePage,
});

function EmBrevePage() {
  return (
    <PageShell>
      <PageHeader
        kicker="em breve"
        title="Quatro caminhos que se abrem."
        intro="Estamos cultivando, aos poucos, as diferentes formas de habitar a Clareira. Cada uma nasce no seu próprio ritmo."
      />

      <section className="px-6 sm:px-10 pb-16">
        <div className="mx-auto max-w-5xl space-y-24">
          {emBreve.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className="scroll-mt-28 grid gap-8 md:grid-cols-[auto_1fr] md:gap-14 border-t border-primary/20 pt-12"
            >
              <div className="font-serif text-6xl sm:text-7xl text-[color:var(--tan)]/70 leading-none">
                0{i + 1}
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--olive)]">
                  {p.kicker}
                </div>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-primary">
                  {p.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-[1.75] text-primary/80">
                  {p.body}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-primary/25 px-4 py-2 text-xs uppercase tracking-[0.22em] text-primary/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--olive)]" />
                  em cultivo
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <NewsletterInline
            title="Quer ser avisado quando algo aqui florescer?"
            description="Enviamos uma carta curta a cada abertura de estadia, curso ou vivência — no ritmo da montanha, sem excessos."
          />
        </div>
      </section>

      <div className="text-center pb-16">
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary underline underline-offset-4">
          voltar ao início
        </Link>
      </div>
    </PageShell>
  );
}