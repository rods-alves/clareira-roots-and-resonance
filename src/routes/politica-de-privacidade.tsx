import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { LegalSection, LegalList } from "@/components/site/LegalSection";
import { site } from "@/lib/site-data";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () =>
    seoHead({
      path: "/politica-de-privacidade",
      title: "Política de Privacidade — Clareira",
      description:
        "Como a Clareira coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
    }),
  component: PoliticaDePrivacidadePage,
});

function PoliticaDePrivacidadePage() {
  return (
    <PageShell>
      <PageHeader kicker="política de privacidade" title="Política de Privacidade" />

      <section className="px-6 sm:px-10 pb-32">
        <div className="mx-auto max-w-3xl space-y-10">
          <LegalSection number="1" title="Introdução">
            <p>
              A Clareira ("nós") respeita a privacidade das pessoas que visitam este site e se
              preocupa com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de
              Proteção de Dados (Lei nº 13.709/2018 — LGPD). Esta Política explica quais dados
              coletamos, como os utilizamos e quais são os seus direitos.
            </p>
          </LegalSection>

          <LegalSection number="2" title="Quem é o controlador dos dados">
            <p>Clareira, projeto localizado nos Marins, Piquete-SP, Serra da Mantiqueira.</p>
            <p>
              Contato:{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-2 hover:text-primary"
              >
                {site.email}
              </a>{" "}
              · WhatsApp:{" "}
              <a
                href={site.whatsappHref}
                className="underline underline-offset-2 hover:text-primary"
              >
                {site.whatsapp}
              </a>
            </p>
          </LegalSection>

          <LegalSection number="3" title="Quais dados coletamos">
            <LegalList
              items={[
                "Dados fornecidos voluntariamente por você nos formulários do site (nome, e-mail, WhatsApp e mensagem), ao entrar em contato ou se inscrever em uma vivência.",
                "Dados de navegação (páginas visitadas, tempo de permanência), coletados de forma agregada e anônima por ferramentas de análise (Google Analytics), somente mediante seu consentimento a cookies não essenciais.",
                "Não coletamos dados sensíveis (saúde, origem racial, opinião política etc.) através deste site.",
              ]}
            />
          </LegalSection>

          <LegalSection number="4" title="Como usamos seus dados">
            <LegalList
              items={[
                "Para responder mensagens e solicitações de contato.",
                "Para processar inscrições em vivências e encontros (como o Raiz & Riso).",
                "Para enviar comunicações por e-mail a quem se inscreve voluntariamente na newsletter.",
                "Para entender, de forma agregada e anônima, como o site é usado e melhorá-lo (Google Analytics/Google Ads, mediante consentimento).",
              ]}
            />
          </LegalSection>

          <LegalSection number="5" title="Com quem compartilhamos">
            <p>
              Não vendemos nem alugamos dados pessoais a terceiros. Podemos compartilhar dados de
              navegação, de forma agregada, com o Google (Analytics/Ads), exclusivamente para
              análise de audiência e campanhas de divulgação — sempre respeitando sua escolha de
              cookies.
            </p>
          </LegalSection>

          <LegalSection number="6" title="Formulário de contato via WhatsApp">
            <p>
              Ao usar o formulário de contato do site, os dados preenchidos são usados apenas para
              montar sua mensagem inicial no WhatsApp — o envio acontece diretamente entre você e a
              Clareira pelo aplicativo, sem passar por banco de dados ou servidor deste site.
            </p>
          </LegalSection>

          <LegalSection number="7" title="Cookies">
            <p>
              Usamos cookies para o funcionamento do site e, mediante consentimento, para análise de
              audiência. Veja detalhes na{" "}
              <Link
                to="/politica-de-cookies"
                className="underline underline-offset-2 hover:text-primary"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection number="8" title="Seus direitos (LGPD, art. 18)">
            <p>
              A qualquer momento, você pode: confirmar a existência de tratamento de dados; acessar
              seus dados; corrigir dados incompletos/inexatos; solicitar anonimização, bloqueio ou
              eliminação de dados desnecessários; solicitar portabilidade; solicitar eliminação de
              dados tratados com consentimento; revogar o consentimento. Para exercer esses
              direitos:{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-2 hover:text-primary"
              >
                {site.email}
              </a>{" "}
              ou WhatsApp{" "}
              <a
                href={site.whatsappHref}
                className="underline underline-offset-2 hover:text-primary"
              >
                {site.whatsapp}
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection number="9" title="Segurança">
            <p>
              Adotamos medidas razoáveis para proteger seus dados contra acesso não autorizado,
              perda ou alteração.
            </p>
          </LegalSection>

          <LegalSection number="10" title="Alterações desta política">
            <p>
              Podemos atualizar esta política periodicamente. A data da última atualização estará
              sempre indicada nesta página.
            </p>
            <p className="text-sm italic text-muted-foreground/80">
              Última atualização: 26 de julho de 2026
            </p>
          </LegalSection>
        </div>
      </section>
    </PageShell>
  );
}
