import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

type Props = {
  compact?: boolean;
  title?: string;
  description?: string;
};

export function NewsletterInline({ compact, title, description }: Props) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <div className={compact ? "" : "rounded-sm border border-border bg-[color:var(--sand)]/25 p-8 sm:p-12 paper-texture"}>
      {!compact && (
        <>
          <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--tan)]">Cartas da Clareira</div>
          <h3 className="mt-3 font-serif text-3xl sm:text-4xl text-primary max-w-2xl">
            {title ?? "Uma carta ocasional, com o ritmo da montanha."}
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {description ??
              "Receba, algumas vezes ao ano, notícias do território, aberturas de estadias e novos cadernos de campo. Nada de excessos — só o essencial."}
          </p>
        </>
      )}

      <form onSubmit={submit} className={`flex flex-col sm:flex-row gap-3 ${compact ? "" : "mt-6"}`}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu e-mail"
          className="flex-1 min-w-0 rounded-sm border border-border bg-background/70 px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/40"
        />
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-[color:var(--terra)] disabled:opacity-60"
          disabled={done}
        >
          {done ? (
            <>
              <Check className="h-4 w-4" /> Recebido
            </>
          ) : (
            <>
              Assinar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </form>
      {done && (
        <p className="mt-4 text-sm text-[color:var(--olive)]" role="status" aria-live="polite">
          Obrigado. Em breve chega uma primeira carta com o cheiro da montanha.
        </p>
      )}
    </div>
  );
}