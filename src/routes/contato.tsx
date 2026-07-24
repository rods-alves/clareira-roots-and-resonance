import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Instagram, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Clareira" },
      {
        name: "description",
        content: "Fale com a Clareira: e-mail, WhatsApp e Instagram. Estamos nos Marins, Serra da Mantiqueira.",
      },
      { property: "og:title", content: "Contato — Clareira" },
      { property: "og:description", content: "Fale com a Clareira." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell>
      <PageHeader
        kicker="contato"
        title="Escreva. Estamos por aqui."
        intro="Se algo na Clareira ressoou em você — uma vivência, uma parceria, uma pergunta — mande uma mensagem. Respondemos no ritmo da montanha, mas respondemos."
      />

      <section className="px-6 sm:px-10 pb-32">
        <div className="mx-auto max-w-6xl grid gap-14 md:grid-cols-[1.2fr_1fr]">
          <form onSubmit={submit} className="space-y-6">
            <div>
              <label className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--tan)]">
                seu nome
              </label>
              <input
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="mt-2 w-full border-b border-primary/30 bg-transparent py-3 text-lg text-primary focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--tan)]">
                seu e-mail
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full border-b border-primary/30 bg-transparent py-3 text-lg text-primary focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--tan)]">
                sua mensagem
              </label>
              <textarea
                required
                rows={6}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="mt-2 w-full border border-primary/25 bg-background/60 rounded-sm p-4 text-base text-primary focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm text-primary-foreground hover:bg-[color:var(--terra)] transition-colors disabled:opacity-60"
            >
              {sent ? "Mensagem enviada" : "Enviar"} <Send className="h-4 w-4" />
            </button>
            {sent && (
              <p className="text-sm text-[color:var(--olive)]">
                Obrigado, {form.nome || "amigo"}. Recebemos sua mensagem e retornamos em breve.
              </p>
            )}
          </form>

          <aside className="space-y-8 md:pl-10 md:border-l border-border">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--tan)]">
                canais diretos
              </div>
              <ul className="mt-5 space-y-4 text-primary">
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 group">
                    <Mail className="h-4 w-4 text-[color:var(--olive)]" />
                    <span className="group-hover:text-[color:var(--terra)] transition-colors">{site.email}</span>
                  </a>
                </li>
                <li>
                  <a href={site.whatsappHref} className="inline-flex items-center gap-3 group">
                    <MessageCircle className="h-4 w-4 text-[color:var(--olive)]" />
                    <span className="group-hover:text-[color:var(--terra)] transition-colors">{site.whatsapp}</span>
                  </a>
                </li>
                <li>
                  <a href={site.instagram} className="inline-flex items-center gap-3 group">
                    <Instagram className="h-4 w-4 text-[color:var(--olive)]" />
                    <span className="group-hover:text-[color:var(--terra)] transition-colors">{site.instagramHandle}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="divider-hairline" />

            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--tan)]">
                onde estamos
              </div>
              <div className="mt-5 inline-flex items-start gap-3 text-primary/85">
                <MapPin className="h-4 w-4 mt-1 text-[color:var(--olive)]" />
                <div>
                  <div className="font-serif text-xl text-primary">Marins</div>
                  <div className="text-sm mt-1 text-muted-foreground">
                    Piquete · SP <br />
                    Serra da Mantiqueira, aos pés do Pico dos Marins
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}