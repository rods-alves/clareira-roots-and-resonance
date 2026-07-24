import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { NewsletterInline } from "@/components/site/NewsletterInline";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — Cartas da Clareira" },
      {
        name: "description",
        content: "Assine as cartas ocasionais da Clareira e acompanhe o projeto no ritmo da montanha.",
      },
      { property: "og:title", content: "Cartas da Clareira" },
      { property: "og:description", content: "Uma carta ocasional, com o ritmo da montanha." },
    ],
  }),
  component: NewsletterPage,
});

function NewsletterPage() {
  return (
    <PageShell>
      <PageHeader
        kicker="cartas da Clareira"
        title="Notícias do território, em passo de floresta."
        intro="Algumas vezes ao ano, mandamos uma carta com o que floresce na Clareira — novas estadias, aberturas de vivência, cadernos de campo e pequenos ensaios sobre o território."
      />

      <section className="px-6 sm:px-10 pb-32">
        <div className="mx-auto max-w-3xl">
          <NewsletterInline />

          <ul className="mt-16 grid gap-6 sm:grid-cols-3 text-sm text-primary/80">
            <li className="border-t border-primary/20 pt-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--tan)]">o que chega</div>
              <p className="mt-2">cartas ocasionais, no ritmo das estações</p>
            </li>
            <li className="border-t border-primary/20 pt-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--tan)]">de quem</div>
              <p className="mt-2">escritas à mão pela equipe da Clareira</p>
            </li>
            <li className="border-t border-primary/20 pt-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--tan)]">seus dados</div>
              <p className="mt-2">guardados com cuidado — sem repasses</p>
            </li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}