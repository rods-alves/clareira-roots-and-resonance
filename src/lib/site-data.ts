export const site = {
  name: "Clareira",
  tagline: "experiências enraizadas no território",
  location: "Marins · Serra da Mantiqueira · Piquete-SP",
  email: "ola@clareira.eco",
  whatsapp: "+55 12 99999-0000",
  whatsappHref: "https://wa.me/5512999990000",
  instagram: "https://instagram.com/clareira.eco",
  instagramHandle: "@clareira.eco",
  // Domínio público atual (preview do Lovable). Atualizar para o domínio
  // definitivo (Hostinger) quando o site sair do Lovable — junto com
  // public/sitemap.xml, que usa o mesmo host em URLs absolutas.
  url: "https://id-preview--0c39c4b9-d49a-4a23-ba0e-770a80094a80.lovable.app",
};

export type NavItem = {
  label: string;
  to: string;
  hash?: string;
  children?: { label: string; to: string; hash?: string }[];
};

export const nav: NavItem[] = [
  { label: "Início", to: "/" },
  { label: "Raiz & Riso", to: "/raiz-e-riso" },
  {
    label: "Sobre a Clareira",
    to: "/sobre",
    children: [
      { label: "Manifesto", to: "/sobre", hash: "manifesto" },
      { label: "Território dos Marins", to: "/sobre", hash: "territorio" },
      { label: "Regeneração", to: "/sobre", hash: "regeneracao" },
      { label: "Quem conduz", to: "/sobre", hash: "quem-conduz" },
    ],
  },
  {
    label: "Em breve",
    to: "/em-breve",
    children: [
      { label: "Mato Adentro", to: "/em-breve", hash: "mato-adentro" },
      { label: "Estadias", to: "/em-breve", hash: "estadias" },
      { label: "Saberes digitais", to: "/em-breve", hash: "saberes" },
      { label: "Território local", to: "/em-breve", hash: "territorio-local" },
    ],
  },
  { label: "Newsletter", to: "/newsletter" },
  { label: "Contato", to: "/contato" },
];

export const manifesto = {
  short:
    "Clareira é um convite para desacelerar, escutar o território e reencontrar, na floresta e em si mesmo, uma forma mais viva de habitar o mundo.",
  long: [
    "Uma clareira é uma pausa dentro da mata. Um espaço onde a luz alcança o chão, onde uma nova semente encontra terreno para brotar.",
    "Nasce aqui, ao pé do Pico dos Marins, um projeto que abriga experiências, estadias e curadorias enraizadas neste território. Um convite para desacelerar, escutar a floresta, cozinhar com o que a terra oferece, dormir com o silêncio da montanha.",
    "Cultivamos encontros que costuram pessoas ao lugar. Que devolvem ao corpo o ritmo do vento nas folhas, o cheiro da terra molhada, o gesto simples de plantar uma muda e voltar meses depois para vê-la crescida.",
    "Clareira não é um destino. É uma prática — de presença, de cuidado, de regeneração — que começa nos Marins e se estende a cada pessoa que passa por aqui.",
  ],
};

export const emBreve = [
  {
    id: "mato-adentro",
    title: "Mato Adentro",
    kicker: "trilhas & imersões guiadas",
    body:
      "Caminhadas contemplativas pela Serra da Mantiqueira, imersões silenciosas na floresta e travessias até o Pico dos Marins conduzidas por quem vive o território.",
  },
  {
    id: "estadias",
    title: "Estadias",
    kicker: "hospedagem enraizada",
    body:
      "Um punhado de acomodações simples e cuidadas, feitas com materiais locais, para dormir com o silêncio da montanha e acordar com o canto dos pássaros.",
  },
  {
    id: "saberes",
    title: "Saberes digitais",
    kicker: "cursos & cadernos de campo",
    body:
      "Materiais editoriais, cursos online e cadernos de campo digitais para levar o que se aprende em Clareira para dentro do cotidiano — onde quer que ele aconteça.",
  },
  {
    id: "territorio-local",
    title: "Território local",
    kicker: "rede de artesãos & produtores",
    body:
      "Uma curadoria de produtores, artesãos e agricultores da região dos Marins — um mapa vivo para quem quer atravessar o território de maneira mais próxima e justa.",
  },
];

export const regeneracao = [
  {
    title: "Escutar antes de intervir",
    body:
      "Cada gesto parte da observação paciente do lugar — do solo, das águas, das pessoas que já habitam este território há gerações.",
  },
  {
    title: "Devolver mais do que se retira",
    body:
      "Regenerar é deixar o solo mais fértil, a água mais limpa e a comunidade mais forte do que quando chegamos. É a métrica que nos guia.",
  },
  {
    title: "Trabalhar em rede",
    body:
      "Costuramos parcerias com moradores, agricultores, artesãos e pesquisadores. A Clareira só existe porque outros já cuidam deste chão há muito tempo.",
  },
  {
    title: "Ritmo da natureza",
    body:
      "Respeitamos as estações, os ciclos e o tempo próprio do território. Nada aqui tem pressa — porque uma floresta não se planta em um trimestre.",
  },
];

// ============ Raiz & Riso ============
export const raizRiso = {
  location: "Sítios Guetahe e Nawera · Marins · Piquete-SP",
  guideMotto: "explorar, perceber, sentir.",
  nextDate: {
    label: "Próxima edição",
    date: "[data a definir]",
    duration: "3 dias · 2 noites",
    price: "[valor sob consulta]",
    spotsLeft: "[vagas limitadas]",
  },
  cta: {
    // placeholders — troque pelos links reais
    signupHref: "https://wa.me/5512999990000?text=Quero%20me%20inscrever%20no%20Raiz%20e%20Riso",
    waitlistHref: "/newsletter?interesse=raiz-e-riso",
  },
  incluso: [
    { icon: "tent", label: "Hospedagem em sítio nos Marins" },
    { icon: "mug", label: "Refeições feitas com ingredientes locais" },
    { icon: "boots", label: "Caminhadas guiadas pela Serra" },
    { icon: "fire", label: "Rodas de fogo ao anoitecer" },
    { icon: "fern", label: "Vivências de plantio e contato com a terra" },
    { icon: "leaf", label: "Materiais de campo e diário da vivência" },
  ],
  paraQuem: [
    "Quem quer uma pausa real do ritmo urbano.",
    "Quem sente falta da natureza como parte da rotina, não como exceção.",
    "Quem gosta de encontros pequenos, conversas verdadeiras e comida de verdade.",
    "Quem topa se sujar um pouquinho — de terra, de café, de riso.",
  ],
};