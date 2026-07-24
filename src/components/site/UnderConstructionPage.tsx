import { Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "./PageShell";

type Props = {
  kicker: string;
  title: string;
  intro?: string;
};

export function UnderConstructionPage({ kicker, title, intro }: Props) {
  return (
    <PageShell>
      <PageHeader kicker={kicker} title={title} intro={intro} />
      <section className="px-6 sm:px-10 pb-32">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-sm border border-primary/25 px-4 py-2 text-xs uppercase tracking-[0.22em] text-primary/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--olive)]" />
            em construção
          </div>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Esta página ainda está sendo cultivada. Em breve, mais detalhes por aqui.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="text-sm text-primary underline underline-offset-4 hover:text-[color:var(--terra)]"
            >
              voltar ao início
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
