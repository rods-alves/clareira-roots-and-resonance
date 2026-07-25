import { useEffect, useState } from "react";
import { chooseConsent, initCookieConsent, useCookieBannerOpen } from "@/lib/cookieConsent";

export function CookieConsentBanner() {
  const open = useCookieBannerOpen();
  const [customizing, setCustomizing] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    initCookieConsent();
  }, []);

  useEffect(() => {
    if (!open) setCustomizing(false);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Preferências de cookies"
      // z-[60]: above the header (50) and the WhatsApp button (40) — it's a
      // first-visit, one-time prompt, fine for it to briefly sit on top of the
      // WhatsApp button until the visitor makes a choice.
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/98 backdrop-blur-md shadow-[0_-4px_24px_rgba(0,0,0,0.12)]"
    >
      <div className="mx-auto max-w-5xl px-6 py-6 sm:px-10">
        {!customizing ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-foreground">
              Usamos cookies para entender como o site é usado e melhorar sua experiência. Você pode
              aceitar todos, rejeitar os não essenciais ou personalizar sua escolha. Veja nossa{" "}
              <a
                href="/politica-de-cookies"
                className="underline underline-offset-2 hover:text-primary"
              >
                política de cookies
              </a>
              .
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:shrink-0">
              <button
                type="button"
                onClick={() => setCustomizing(true)}
                className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
              >
                Personalizar
              </button>
              <button
                type="button"
                onClick={() => chooseConsent(false)}
                className="rounded-sm border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
              >
                Rejeitar não essenciais
              </button>
              <button
                type="button"
                onClick={() => chooseConsent(true)}
                className="rounded-sm border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Escolha quais categorias de cookies podem ser usadas. Saiba mais na nossa{" "}
              <a
                href="/politica-de-cookies"
                className="underline underline-offset-2 hover:text-primary"
              >
                política de cookies
              </a>
              .
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-start justify-between gap-4 border-t border-border pt-4">
                <div>
                  <div className="text-sm font-medium text-foreground">Cookies necessários</div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Essenciais para o funcionamento do site (navegação, formulários). Não podem ser
                    desativados.
                  </p>
                </div>
                <span className="mt-0.5 shrink-0 rounded-sm border border-border px-2.5 py-1 text-xs uppercase tracking-wide text-muted-foreground">
                  sempre ativos
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 border-t border-border pt-4">
                <div>
                  <div className="text-sm font-medium text-foreground">Análise e publicidade</div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Nos ajuda a entender o uso do site e a medir a eficácia de eventuais campanhas.
                  </p>
                </div>
                <label className="mt-0.5 inline-flex shrink-0 cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                    className="peer sr-only"
                    aria-label="Permitir cookies de análise e publicidade"
                  />
                  <span className="relative h-6 w-11 rounded-full bg-muted transition-colors peer-checked:bg-primary peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ring">
                    <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-background shadow transition-transform peer-checked:translate-x-5" />
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setCustomizing(false)}
                className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={() => chooseConsent(analyticsChecked)}
                className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-[color:var(--terra)]"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
