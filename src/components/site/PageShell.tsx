import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="pt-36 sm:pt-44 pb-16 sm:pb-24 px-6 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--tan)]">
          {kicker}
        </div>
        <h1 className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl text-primary leading-[1.02]">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl font-serif italic text-xl sm:text-2xl leading-relaxed text-primary/75">
            {intro}
          </p>
        )}
        <div className="mt-12 divider-hairline" />
      </div>
    </section>
  );
}