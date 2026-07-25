import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { site } from "@/lib/site-data";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () =>
    seoHead({
      path: "/contato",
      title: "Contato — Clareira",
      description:
        "Fale com a Clareira: e-mail, WhatsApp e Instagram. Estamos nos Marins, Serra da Mantiqueira.",
    }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <PageShell>
      <PageHeader
        kicker="contato"
        title="Escreva. Estamos por aqui."
        intro="Se algo na Clareira ressoou em você — uma vivência, uma parceria, uma pergunta — mande uma mensagem pelo formulário abaixo, ou fale direto com a gente."
      />

      <section className="px-6 sm:px-10 pb-24">
        <div className="mx-auto max-w-xl">
          <div className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--tan)]">
            canais diretos
          </div>
          <ul className="mt-5 space-y-4 text-primary">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 group">
                <Mail className="h-4 w-4 text-[color:var(--olive)]" />
                <span className="group-hover:text-[color:var(--terra)] transition-colors">
                  {site.email}
                </span>
              </a>
            </li>
            <li>
              <a href={site.whatsappHref} className="inline-flex items-center gap-3 group">
                <MessageCircle className="h-4 w-4 text-[color:var(--olive)]" />
                <span className="group-hover:text-[color:var(--terra)] transition-colors">
                  {site.whatsapp}
                </span>
              </a>
            </li>
            <li>
              <a href={site.instagram} className="inline-flex items-center gap-3 group">
                <Instagram className="h-4 w-4 text-[color:var(--olive)]" />
                <span className="group-hover:text-[color:var(--terra)] transition-colors">
                  {site.instagramHandle}
                </span>
              </a>
            </li>
          </ul>

          <div className="divider-hairline mt-8" />

          <div className="mt-8">
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
        </div>
      </section>
    </PageShell>
  );
}
