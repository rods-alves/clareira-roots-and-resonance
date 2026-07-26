import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { LegalSection } from "@/components/site/LegalSection";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/termos-de-uso")({
  head: () =>
    seoHead({
      path: "/termos-de-uso",
      title: "Termos de Uso — Clareira",
      description: "Condições de uso do site da Clareira.",
    }),
  component: TermosDeUsoPage,
});

function TermosDeUsoPage() {
  return (
    <PageShell>
      <PageHeader kicker="termos de uso" title="Termos de Uso" />

      <section className="px-6 sm:px-10 pb-32">
        <div className="mx-auto max-w-3xl space-y-10">
          <LegalSection number="1" title="Aceitação">
            <p>Ao acessar e usar este site, você concorda com estes Termos de Uso.</p>
          </LegalSection>

          <LegalSection number="2" title="Sobre a Clareira">
            <p>
              Projeto regenerativo localizado nos Marins, Serra da Mantiqueira, Piquete-SP, que
              oferece experiências, estadias e conteúdos relacionados a natureza, território e modos
              de vida conscientes.
            </p>
          </LegalSection>

          <LegalSection number="3" title="Uso do conteúdo">
            <p>
              Todo o conteúdo deste site (textos, imagens, logotipo e identidade visual) pertence à
              Clareira ou é usado sob licença, e não pode ser reproduzido, distribuído ou usado
              comercialmente sem autorização prévia.
            </p>
          </LegalSection>

          <LegalSection number="4" title="Inscrições em vivências e encontros">
            <p>
              A inscrição em vivências como o Raiz & Riso está sujeita à disponibilidade de vagas e
              aos termos informados no momento da inscrição.{" "}
              <span className="italic">[a definir: política de cancelamento e reembolso]</span>
            </p>
          </LegalSection>

          <LegalSection number="5" title="Limitação de responsabilidade">
            <p>
              As informações deste site são fornecidas "como estão". A Clareira não se
              responsabiliza por danos decorrentes do uso do site, ressalvados os casos previstos em
              lei.
            </p>
          </LegalSection>

          <LegalSection number="6" title="Alterações">
            <p>
              Podemos atualizar estes Termos periodicamente. A versão vigente estará sempre
              disponível nesta página.
            </p>
          </LegalSection>

          <LegalSection number="7" title="Legislação aplicável">
            <p>Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
            <p className="text-sm italic text-muted-foreground/80">
              Última atualização: 26 de julho de 2026
            </p>
          </LegalSection>
        </div>
      </section>
    </PageShell>
  );
}
