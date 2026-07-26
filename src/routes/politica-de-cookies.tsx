import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { LegalSection, LegalList } from "@/components/site/LegalSection";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () =>
    seoHead({
      path: "/politica-de-cookies",
      title: "Política de Cookies — Clareira",
      description: "Como e por que a Clareira usa cookies, e como gerenciar suas preferências.",
    }),
  component: PoliticaDeCookiesPage,
});

function PoliticaDeCookiesPage() {
  return (
    <PageShell>
      <PageHeader kicker="política de cookies" title="Política de Cookies" />

      <section className="px-6 sm:px-10 pb-32">
        <div className="mx-auto max-w-3xl space-y-10">
          <LegalSection number="1" title="O que são cookies">
            <p>
              Pequenos arquivos de texto armazenados no seu navegador quando você visita um site,
              que ajudam a lembrar preferências e entender como o site é utilizado.
            </p>
          </LegalSection>

          <LegalSection number="2" title="Como usamos cookies">
            <LegalList
              items={[
                <>
                  <strong className="text-foreground">Necessários:</strong> essenciais para o
                  funcionamento básico do site (ex: lembrar sua escolha de consentimento). Não podem
                  ser desativados.
                </>,
                <>
                  <strong className="text-foreground">Análise (Analytics):</strong> nos ajudam a
                  entender, de forma agregada e anônima, como as pessoas navegam pelo site (Google
                  Analytics). Só ativados mediante consentimento.
                </>,
                <>
                  <strong className="text-foreground">Publicidade:</strong> podem medir a eficácia
                  de campanhas de divulgação (Google Ads). Só ativados mediante consentimento.
                </>,
              ]}
            />
          </LegalSection>

          <LegalSection number="3" title="Como gerenciar suas preferências">
            <p>
              Altere sua escolha a qualquer momento em "Preferências de cookies", no rodapé do site.
            </p>
          </LegalSection>

          <LegalSection number="4" title="Cookies de terceiros">
            <p>
              Ao consentir com cookies de análise/publicidade, alguns são definidos pelo Google
              (Analytics/Ads), sujeitos à própria política de privacidade do Google.
            </p>
          </LegalSection>

          <LegalSection number="5" title="Duração">
            <p>
              Sua escolha é armazenada por até 12 meses, após os quais pediremos novamente sua
              preferência.
            </p>
          </LegalSection>
        </div>
      </section>
    </PageShell>
  );
}
