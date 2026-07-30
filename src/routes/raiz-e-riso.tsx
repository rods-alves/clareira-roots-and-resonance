import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  MapPin,
  Trees,
  Mountain,
  Leaf,
  Coffee,
  Flame,
  Tent,
  Footprints,
  Bird,
  Sun,
  Sprout,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { FAQ } from "@/components/site/FAQ";
import { raizRiso, raizRisoFaq } from "@/lib/site-data";
import { seoHead } from "@/lib/seo";
import { trackWhatsAppLead } from "@/lib/analytics";
import rrBadge from "@/assets/raiz-riso-badge.jpg";
import raizRisoLogo from "@/assets/raiz-riso-logo.png";
import raizERisoEvento from "@/assets/raiz-e-riso-evento.jpg";
import marina3 from "@/assets/marina-3.jpg";
import marina4 from "@/assets/marina-4.jpg";

export const Route = createFileRoute("/raiz-e-riso")({
  head: () =>
    seoHead({
      path: "/raiz-e-riso",
      title: "Raiz & Riso — vivência nos Marins · Clareira",
      description:
        "Raiz & Riso é uma vivência da Clareira nos Sítios Guetahe e Nawera, nos Marins, Piquete-SP. Explorar, perceber, sentir.",
      image: rrBadge,
      preloadImage: rrBadge,
    }),
  component: RaizERiso,
});

const anchors = [
  { id: "sobre", label: "O que é" },
  { id: "para-quem", label: "Para quem" },
  { id: "incluso", label: "O que inclui" },
  { id: "quem-conduz", label: "Quem conduz" },
  { id: "clima", label: "O que esperar" },
  { id: "data", label: "Próxima data" },
  { id: "inscricao", label: "Inscrição" },
  { id: "faq", label: "Perguntas frequentes" },
];

const iconMap = {
  tent: Tent,
  mug: Coffee,
  boots: Footprints,
  fire: Flame,
  fern: Sprout,
  leaf: Leaf,
} as const;

function Stamp({
  Icon,
  size = "md",
}: {
  Icon: React.ComponentType<{ className?: string }>;
  size?: "sm" | "md" | "lg";
}) {
  const box = size === "sm" ? "h-10 w-10" : size === "lg" ? "h-20 w-20" : "h-14 w-14";
  const inner = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-9 w-9" : "h-6 w-6";
  return (
    <span
      className={`relative inline-flex ${box} shrink-0 items-center justify-center rounded-full`}
      style={{
        border: "1.5px solid var(--rr-moss)",
        boxShadow: "inset 0 0 0 3px var(--rr-cream), inset 0 0 0 4px var(--rr-moss)",
        color: "var(--rr-moss)",
      }}
      aria-hidden
    >
      <Icon className={inner} />
    </span>
  );
}

function RaizERiso() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <PageShell>
      <div className="rr-theme kraft-texture">
        {/* Scroll progress */}
        <div
          className="fixed left-0 right-0 top-[76px] sm:top-[88px] z-40 h-[2px] bg-transparent"
          aria-hidden
        >
          <div
            className="h-full transition-[width] duration-150"
            style={{ width: `${progress}%`, background: "var(--rr-terracotta)" }}
          />
        </div>

        {/* Anchor mini-nav (sticky) */}
        <nav
          className="sticky top-[76px] sm:top-[88px] z-30 border-y backdrop-blur-md"
          style={{
            background: "color-mix(in oklab, var(--rr-cream) 88%, transparent)",
            borderColor: "color-mix(in oklab, var(--rr-leather) 25%, transparent)",
          }}
        >
          <div className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-8">
            <ul className="flex items-center gap-6 py-3 text-[11px] uppercase tracking-[0.24em] whitespace-nowrap">
              {anchors.map((a) => (
                <li key={a.id}>
                  <a
                    href={`#${a.id}`}
                    className="transition-colors"
                    style={{ color: "var(--rr-leather)" }}
                  >
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Opening — Badge */}
        <section className="pt-24 pb-20 sm:pt-32 sm:pb-28 px-6 sm:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <img
              src={raizRisoLogo}
              alt="Selo Raiz & Riso — Marins, Piquete-SP"
              className="mx-auto w-56 sm:w-72 md:w-80"
              style={{ filter: "drop-shadow(0 8px 24px rgba(74,93,58,0.18))" }}
              fetchPriority="high"
              decoding="async"
            />
            <div
              className="mt-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em]"
              style={{ color: "var(--rr-terracotta)" }}
            >
              <MapPin className="h-3.5 w-3.5" />
              {raizRiso.location}
            </div>
            <p
              className="mt-10 font-serif italic text-3xl sm:text-4xl md:text-5xl leading-[1.2]"
              style={{ color: "var(--rr-moss)" }}
            >
              {raizRiso.guideMotto}
            </p>
            <div className="mt-10 mx-auto max-w-[220px] rr-divider" />
          </div>
        </section>

        {/* O que é */}
        <section id="sobre" className="scroll-mt-40 px-6 sm:px-10 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl grid gap-14 md:grid-cols-2 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="rr-kicker">01 · o que é</div>
              <h2
                className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05]"
                style={{ color: "var(--rr-moss)" }}
              >
                Um encontro presencial nos Marins.
              </h2>
              <div
                className="mt-8 space-y-5 text-[16px] leading-[1.8]"
                style={{ color: "color-mix(in oklab, var(--rr-moss) 85%, black)" }}
              >
                <p>
                  Raiz &amp; Riso é uma vivência de poucos dias, feita para reaproximar corpo,
                  floresta e presença. Acontece nos Sítios Guetahe e Nawera, na Serra da
                  Mantiqueira, entre araucárias, café coado, terra fresca e o silêncio das manhãs da
                  montanha.
                </p>
                <p>
                  Não é retiro, não é curso, não é workshop. É um encontro pequeno — de gente
                  atenta, refeições generosas, caminhadas sem pressa e conversas que só nascem longe
                  das telas.
                </p>
                <p className="font-serif italic text-xl">
                  Aqui, a proposta é uma só: explorar, perceber, sentir.
                </p>
              </div>

              <a
                href={raizRiso.cta.signupHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppLead("raiz_e_riso")}
                className="mt-10 inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm text-white transition-transform hover:-translate-y-[1px]"
                style={{ background: "var(--rr-terracotta)" }}
              >
                Quero me inscrever
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={raizERisoEvento}
                alt="Grupo de participantes da vivência Raiz & Riso reunido com o Pico dos Marins ao fundo"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, transparent 60%, rgba(74,93,58,0.35))",
                }}
              />
            </div>
          </div>
        </section>

        {/* Para quem */}
        <section
          id="para-quem"
          className="scroll-mt-40 px-6 sm:px-10 py-20 sm:py-28"
          style={{ background: "color-mix(in oklab, var(--rr-sand) 45%, var(--rr-cream))" }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <Stamp Icon={Bird} size="sm" />
              <div className="rr-kicker">02 · para quem é</div>
            </div>
            <h2
              className="mt-6 font-serif text-4xl sm:text-5xl leading-[1.05]"
              style={{ color: "var(--rr-moss)" }}
            >
              Para quem quer voltar a se parecer consigo.
            </h2>
            <div
              className="mt-10 max-w-2xl space-y-5 text-[15px] leading-[1.7]"
              style={{ color: "var(--rr-leather)" }}
            >
              {raizRiso.paraQuem.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* O que inclui */}
        <section id="incluso" className="scroll-mt-40 px-6 sm:px-10 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="rr-kicker">03 · o que está incluso</div>
            <h2
              className="mt-4 font-serif text-4xl sm:text-5xl leading-[1.05] max-w-2xl"
              style={{ color: "var(--rr-moss)" }}
            >
              Tudo pensado para você chegar e apenas estar.
            </h2>

            <ul className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {raizRiso.incluso.map((item, i) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Leaf;
                return (
                  <li key={i} className="flex items-center gap-5">
                    <Stamp Icon={Icon} />
                    <span
                      className="text-[15px] leading-snug"
                      style={{ color: "var(--rr-leather)" }}
                    >
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div
              className="mt-10 inline-flex items-start gap-3 rounded-sm border px-5 py-4 text-sm"
              style={{
                borderColor: "color-mix(in oklab, var(--rr-terracotta) 40%, transparent)",
                background: "color-mix(in oklab, var(--rr-terracotta) 8%, transparent)",
                color: "var(--rr-leather)",
              }}
            >
              {raizRiso.inclusoAviso}
            </div>

            <p
              className="mt-8 text-sm italic"
              style={{ color: "color-mix(in oklab, var(--rr-leather) 70%, transparent)" }}
            >
              * conteúdo editável — ajuste a curadoria final de cada edição em
              <code className="mx-1 px-1 rounded bg-black/5">src/lib/site-data.ts</code>
            </p>
          </div>
        </section>

        {/* Quem conduz */}
        <section
          id="quem-conduz"
          className="scroll-mt-40 px-6 sm:px-10 py-20 sm:py-28"
          style={{ background: "var(--rr-moss)", color: "var(--rr-cream)" }}
        >
          <div className="mx-auto max-w-6xl">
            <div
              className="text-[11px] uppercase tracking-[0.32em] font-semibold"
              style={{ color: "var(--rr-sand)" }}
            >
              04 · quem conduz
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-[1.05] max-w-3xl">
              Anfitriã do território.
            </h2>

            <div className="mt-14 grid gap-12 md:grid-cols-[1.1fr_1fr] items-center">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={marina3}
                  alt="Marina, anfitriã do Raiz & Riso"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl">Marina</h3>
                <div
                  className="mt-2 text-xs uppercase tracking-[0.28em]"
                  style={{ color: "var(--rr-sand)" }}
                >
                  anfitriã · Sítios Guetahe e Nawera
                </div>
                <div
                  className="mt-6 space-y-4 text-[15px] leading-[1.8]"
                  style={{ color: "color-mix(in oklab, var(--rr-cream) 90%, transparent)" }}
                >
                  <p>
                    Marina Schmoeller, bióloga, mestre e doutora em Ecologia, moradora da Serra da
                    Mantiqueira e criadora da Clareira. Sua trajetória reúne pesquisa científica,
                    conservação da biodiversidade, restauração da natureza e educação ambiental. Mas
                    sua relação com a natureza começou muito antes da vida profissional: Marina sobe
                    montanhas e percorre trilhas desde criança, aprendendo a conhecer os lugares
                    também pelo corpo, pelo ritmo da caminhada, pelo cansaço, pela atenção e pela
                    presença.
                  </p>
                  <p>
                    Há cerca de dez anos, pratica várias vertentes de yoga e meditação. Ao longo
                    desse caminho, também se aventurou em atividades como circo, teatro, muay thai,
                    esqui e corrida, movida pela curiosidade de experimentar novas formas de habitar
                    o próprio corpo, ampliar a percepção e se relacionar com o mundo. É desse
                    encontro entre conhecimento ecológico, experiência no território e investigação
                    corporal que nasce sua forma de conduzir. No Raiz &amp; Riso, Marina cria
                    contextos para que cada pessoa possa explorar a natureza com segurança e
                    liberdade, alternando movimento e pausa, silêncio e conversa, reflexão e
                    brincadeira. Aqui acreditamos que experimentar é mais importante do que
                    desempenhar e que não há respostas prontas nem uma maneira certa de viver as
                    experiências.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 relative aspect-[16/9] overflow-hidden rounded-sm">
              <img
                src={marina4}
                alt="Vista da Serra da Mantiqueira a partir do território"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Clima do encontro */}
        <section
          id="clima"
          className="scroll-mt-40 px-6 sm:px-10 py-20 sm:py-28"
          style={{ background: "color-mix(in oklab, var(--rr-sand) 55%, var(--rr-cream))" }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="rr-kicker">05 · informações práticas</div>
            <h2
              className="mt-4 font-serif text-4xl sm:text-5xl leading-[1.05]"
              style={{ color: "var(--rr-moss)" }}
            >
              O que esperar.
            </h2>

            <div className="mt-14 space-y-12">
              <div className="grid gap-6 sm:grid-cols-[auto_1fr] items-start">
                <Stamp Icon={Mountain} />
                <div>
                  <h3 className="font-serif text-2xl" style={{ color: "var(--rr-moss)" }}>
                    Uma experiência genuinamente outdoor.
                  </h3>
                  <p
                    className="mt-3 text-[15px] leading-[1.8]"
                    style={{ color: "var(--rr-leather)" }}
                  >
                    O Raiz &amp; Riso é uma experiência outdoor. Isso significa estar em contato
                    direto com a paisagem viva dos Marins: terreno íngreme e acidentado, plantas,
                    insetos, terra, vento, sol, frio, umidade e vida selvagem fazem parte do
                    encontro.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-[auto_1fr] items-start">
                <Stamp Icon={Footprints} />
                <div>
                  <h3 className="font-serif text-2xl" style={{ color: "var(--rr-moss)" }}>
                    Abra-se para o imprevisível.
                  </h3>
                  <p
                    className="mt-3 text-[15px] leading-[1.8]"
                    style={{ color: "var(--rr-leather)" }}
                  >
                    A vivência é conduzida com cuidado, orientação e respeito aos ritmos do grupo,
                    mas é importante vir com abertura para sujar os pés, suar, sentir o corpo, lidar
                    com pequenas imprevisibilidades da natureza e se permitir estar fora do controle
                    habitual. Você pode esperar momentos de diversão, descontração e acolhimento,
                    mas também tempo para pausa, silêncio, reflexão individual e partilha em grupo.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-[auto_1fr] items-start">
                <Stamp Icon={Coffee} />
                <div>
                  <h3 className="font-serif text-2xl" style={{ color: "var(--rr-moss)" }}>
                    O tempo pode mudar rápido por aqui.
                  </h3>
                  <p
                    className="mt-3 text-[15px] leading-[1.8]"
                    style={{ color: "var(--rr-leather)" }}
                  >
                    O clima na região pode variar bastante: é comum termos temperaturas amenas a
                    frias, sol intenso, vento forte e também mudanças rápidas no tempo, com
                    possibilidade de neblina, chuva, queda de visibilidade e sensação térmica mais
                    baixa.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-[1.8]" style={{ color: "var(--rr-leather)" }}>
                Venha preparada para caminhar, observar, respirar, rir, relaxar e se deixar
                atravessar pela paisagem.
              </p>

              <blockquote
                className="mt-8 border-l-2 pl-6 font-serif italic text-2xl sm:text-3xl leading-[1.35]"
                style={{
                  borderColor: "var(--rr-terracotta)",
                  color: "var(--rr-moss)",
                }}
              >
                “O mais bonito acontece quando as pessoas começam a se parecer menos com personagens
                e mais com elas mesmas — a autenticidade vem sempre em primeiro lugar.”
              </blockquote>
            </div>
          </div>
        </section>

        {/* Próxima data */}
        <section id="data" className="scroll-mt-40 px-6 sm:px-10 py-20 sm:py-28">
          <div
            className="mx-auto max-w-4xl rounded-sm border p-10 sm:p-14 text-center"
            style={{
              borderColor: "color-mix(in oklab, var(--rr-leather) 35%, transparent)",
              background: "var(--rr-cream)",
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <Sun className="h-4 w-4" style={{ color: "var(--rr-mustard)" }} />
              <div className="rr-kicker">06 · {raizRiso.nextDate.label}</div>
            </div>
            <div
              className="mt-6 font-serif text-5xl sm:text-6xl"
              style={{ color: "var(--rr-moss)" }}
            >
              {raizRiso.nextDate.date}
            </div>
            <div
              className="mt-4 text-sm uppercase tracking-[0.24em]"
              style={{ color: "var(--rr-leather)" }}
            >
              {raizRiso.nextDate.duration} · {raizRiso.nextDate.price}
            </div>
            <div
              className="mt-2 text-xs uppercase tracking-[0.24em]"
              style={{ color: "var(--rr-terracotta)" }}
            >
              {raizRiso.nextDate.spotsLeft}
            </div>
          </div>
        </section>

        {/* Inscrição */}
        <section id="inscricao" className="scroll-mt-40 px-6 sm:px-10 pb-32 pt-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="rr-kicker">07 · inscrição</div>
            <h2
              className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05]"
              style={{ color: "var(--rr-moss)" }}
            >
              Vem com a gente.
            </h2>
            <p
              className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
              style={{ color: "var(--rr-leather)" }}
            >
              As vagas são poucas — feitas para preservar o clima íntimo do encontro. Se a próxima
              data já estiver esgotada, entre na lista de espera para ser avisado das próximas
              edições.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={raizRiso.cta.signupHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppLead("raiz_e_riso")}
                className="inline-flex items-center gap-2 rounded-sm px-8 py-4 text-sm text-white transition-transform hover:-translate-y-[1px]"
                style={{ background: "var(--rr-terracotta)" }}
              >
                Inscrever-se
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={raizRiso.cta.waitlistHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppLead("raiz_e_riso_vip_waitlist")}
                className="inline-flex items-center gap-2 rounded-sm border-2 px-8 py-4 text-sm transition-colors"
                style={{
                  borderColor: "var(--rr-moss)",
                  color: "var(--rr-moss)",
                }}
              >
                Entrar na lista VIP
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center gap-4 opacity-70">
              <Trees className="h-4 w-4" style={{ color: "var(--rr-moss)" }} />
              <span
                className="text-[11px] uppercase tracking-[0.32em]"
                style={{ color: "var(--rr-leather)" }}
              >
                {raizRiso.location}
              </span>
              <Trees className="h-4 w-4" style={{ color: "var(--rr-moss)" }} />
            </div>
          </div>
        </section>

        {/* Perguntas frequentes */}
        <section id="faq" className="scroll-mt-40 px-6 sm:px-10 py-20 sm:py-28">
          <FAQ title="Perguntas frequentes" items={raizRisoFaq} />
        </section>

        {/* Sticky mobile CTA */}
        <div
          className="fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-md md:hidden"
          style={{
            background: "color-mix(in oklab, var(--rr-cream) 92%, transparent)",
            borderColor: "color-mix(in oklab, var(--rr-leather) 25%, transparent)",
          }}
        >
          <div className="mx-auto flex max-w-2xl gap-2 px-4 py-3">
            <a
              href={raizRiso.cta.signupHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppLead("raiz_e_riso")}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm px-4 py-3 text-sm text-white"
              style={{ background: "var(--rr-terracotta)" }}
            >
              Inscrever-se
            </a>
            <a
              href={raizRiso.cta.waitlistHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppLead("raiz_e_riso_vip_waitlist")}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm border-2 px-4 py-3 text-sm"
              style={{
                borderColor: "var(--rr-moss)",
                color: "var(--rr-moss)",
              }}
            >
              Lista VIP
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
