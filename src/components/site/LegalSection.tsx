import type { ReactNode } from "react";

type Props = {
  number: string;
  title: string;
  children: ReactNode;
};

export function LegalSection({ number, title, children }: Props) {
  return (
    <section className="border-t border-primary/15 pt-8">
      <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--olive)]">{number}</div>
      <h2 className="mt-2 font-serif text-2xl text-primary sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--olive)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
