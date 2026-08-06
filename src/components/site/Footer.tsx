import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import logoSymbol from "@/assets/clareira-simbolo-selo.png";
import { nav, site } from "@/lib/site-data";
import { setBannerOpen } from "@/lib/cookieConsent";
import { trackWhatsAppLead } from "@/lib/analytics";

const legalLinks = [
  { label: "Política de Privacidade", to: "/politica-de-privacidade" as const },
  { label: "Política de Cookies", to: "/politica-de-cookies" as const },
  { label: "Termos de Uso", to: "/termos-de-uso" as const },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/70 bg-[color:var(--forest)] text-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoSymbol}
                alt=""
                className="h-12 w-12 object-contain"
                style={{ filter: "brightness(1.15)" }}
                loading="lazy"
                decoding="async"
              />
              <div className="leading-tight">
                <div className="font-serif text-2xl">{site.name}</div>
                <div className="text-[9px] uppercase tracking-[0.24em] text-[color:var(--sand)]">
                  {site.tagline}
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[color:var(--sand)]">
              Um projeto regenerativo aos pés do Pico dos Marins, na Serra da Mantiqueira. Convite
              para desacelerar, escutar o território e cultivar formas mais conscientes de habitar o
              mundo.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[color:var(--tan)]">
              {site.location}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.24em] text-[color:var(--tan)]">Navegar</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    className="text-[color:var(--cream)]/85 hover:text-[color:var(--cream)] transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.24em] text-[color:var(--tan)]">Contato</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 hover:text-[color:var(--sand)]"
                >
                  <Mail className="h-4 w-4" /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppLead("footer")}
                  className="inline-flex items-center gap-2 hover:text-[color:var(--sand)]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  className="inline-flex items-center gap-2 hover:text-[color:var(--sand)]"
                >
                  <Instagram className="h-4 w-4" /> {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[color:var(--olive)]/25 pt-6 text-xs text-[color:var(--sand)]/70">
          <span>© {new Date().getFullYear()} Clareira. Todos os direitos reservados.</span>
          <span className="italic font-serif text-[color:var(--sand)]">
            uma pausa dentro da mata
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[color:var(--sand)]/60">
          {legalLinks.map((l, i) => (
            <span key={l.to} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>·</span>}
              <Link to={l.to} className="hover:text-[color:var(--sand)] transition-colors">
                {l.label}
              </Link>
            </span>
          ))}
          <span aria-hidden>·</span>
          <button
            type="button"
            onClick={() => setBannerOpen(true)}
            className="hover:text-[color:var(--sand)] transition-colors"
          >
            Preferências de cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
