import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site-data";

function buildMessage(nome: string, email: string, whatsapp: string, mensagem: string) {
  const lines = [
    `Olá! Meu nome é ${nome}.`,
    email && `E-mail: ${email}`,
    whatsapp && `Meu WhatsApp: ${whatsapp}`,
    `Mensagem: ${mensagem}`,
  ].filter(Boolean);
  return lines.join("\n");
}

export function ContactWhatsAppForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [opening, setOpening] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!nome || !mensagem) return;
    setOpening(true);
    const text = buildMessage(nome, email, whatsapp, mensagem);
    window.open(
      `${site.whatsappHref}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="rounded-sm border border-border bg-[color:var(--sand)]/25 p-8 sm:p-12 paper-texture">
      <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--tan)]">
        Fale com a Clareira
      </div>
      <h3 className="mt-3 max-w-2xl font-serif text-3xl text-primary sm:text-4xl">
        Escreva pra gente pelo WhatsApp.
      </h3>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
        Preencha os campos abaixo e abrimos uma conversa no WhatsApp já com sua mensagem pronta.
      </p>

      <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="contact-nome"
            className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--tan)]"
          >
            nome
          </label>
          <input
            id="contact-nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mt-2 w-full rounded-sm border border-border bg-background/70 px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="contact-whatsapp"
            className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--tan)]"
          >
            whatsapp <span className="normal-case text-muted-foreground/70">(opcional)</span>
          </label>
          <input
            id="contact-whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="mt-2 w-full rounded-sm border border-border bg-background/70 px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="contact-email"
            className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--tan)]"
          >
            e-mail <span className="normal-case text-muted-foreground/70">(opcional)</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-sm border border-border bg-background/70 px-4 py-3 text-sm text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="contact-mensagem"
            className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--tan)]"
          >
            mensagem
          </label>
          <textarea
            id="contact-mensagem"
            required
            rows={4}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="mt-2 w-full resize-none rounded-sm border border-border bg-background/70 p-4 text-sm text-primary placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-[color:var(--terra)]"
          >
            Enviar pelo WhatsApp
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
      {opening && (
        <p className="mt-4 text-sm text-[color:var(--olive)]" role="status" aria-live="polite">
          Abrindo WhatsApp...
        </p>
      )}
    </div>
  );
}
