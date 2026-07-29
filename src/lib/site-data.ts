export const site = {
  name: "Clareira",
  tagline: "experiências enraizadas no território",
  location: "Marins · Serra da Mantiqueira · Piquete-SP",
  email: "ola@clareira.eco",
  whatsapp: "+55 31 99822-5916",
  whatsappHref: "https://wa.me/5531998225916",
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
    label: "Experiências",
    to: "/raiz-e-riso",
    children: [
      { label: "Raiz & Riso", to: "/raiz-e-riso" },
      { label: "Mato Adentro (Em breve)", to: "/mato-adentro" },
      { label: "Estadias (Em breve)", to: "/estadias" },
      { label: "Saberes digitais (Em breve)", to: "/saberes-digitais" },
      { label: "Território local (Em breve)", to: "/territorio-local" },
      { label: "Experiências personalizadas", to: "/experiencias/personalizadas" },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
];

export const manifesto = {
  short:
    "Clareira é um convite para desacelerar, escutar o território e reencontrar, na floresta e em si mesmo, uma forma mais consciente de habitar o mundo.",
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
    to: "/mato-adentro",
    title: "Mato Adentro",
    kicker: "trilhas & imersões guiadas",
    body: "Vivência de iniciação à natureza para quem quer começar a caminhar, explorar trilhas e estar no mato com mais segurança, presença e confiança. Uma experiência acolhedora para dar os primeiros passos no mundo outdoor, sem pressa, sem performance e sem medo.",
  },
  {
    id: "estadias",
    to: "/estadias",
    title: "Estadias",
    kicker: "hospedagem enraizada",
    body: "Opções de hospedagem variadas, aconchegantes e confortáveis para quem deseja permanecer mais tempo junto à paisagem. Chalés, cabanas e espaços de camping pensados para acolher diferentes formas de estar na natureza, sempre com vistas exuberantes e o ritmo tranquilo da montanha.",
  },
  {
    id: "saberes",
    to: "/saberes-digitais",
    title: "Saberes digitais",
    kicker: "cursos & cadernos de campo",
    body: "Materiais editoriais, cursos online e cadernos de campo digitais para levar o que se aprende em Clareira para dentro do cotidiano — onde quer que ele aconteça.",
  },
  {
    id: "territorio-local",
    to: "/territorio-local",
    title: "Território local",
    kicker: "curadoria de negócios locais",
    body: "Uma curadoria de produtos, serviços e experiências locais para quem deseja conhecer a região com mais consciência, cuidado e impacto positivo. Um convite ao turismo de base comunitária, conectando visitantes a pessoas, saberes, sabores e iniciativas que fortalecem o território por onde passam.",
  },
];

export const regeneracao = [
  {
    title: "Escutar antes de intervir",
    body: "Cada gesto parte da observação paciente do lugar — do solo, das águas, das pessoas que já habitam este território há gerações.",
  },
  {
    title: "Devolver mais do que se retira",
    body: "Regenerar é deixar o solo mais fértil, a água mais limpa e a comunidade mais forte do que quando chegamos. É a métrica que nos guia.",
  },
  {
    title: "Trabalhar em rede",
    body: "Costuramos parcerias com moradores, agricultores, artesãos e pesquisadores. A Clareira só existe porque outros já cuidam deste chão há muito tempo.",
  },
  {
    title: "Ritmo da natureza",
    body: "Respeitamos as estações, os ciclos e o tempo próprio do território. Nada aqui tem pressa — porque uma floresta não se planta em um trimestre.",
  },
];

// ============ Raiz & Riso ============
export const raizRiso = {
  location: "Sítios Guetahe e Nawera · Marins · Piquete-SP",
  guideMotto: "explorar, perceber, sentir.",
  nextDate: {
    label: "Próxima edição",
    date: "30 de agosto",
    duration: "4 a 5 horas",
    price: "Valores especiais para os primeiros inscritos",
    spotsLeft: "15 vagas",
  },
  cta: {
    signupHref: `${site.whatsappHref}?text=Quero%20me%20inscrever%20no%20Raiz%20e%20Riso`,
    waitlistHref: `${site.whatsappHref}?text=${encodeURIComponent("Olá! Quero entrar na lista VIP do Raiz & Riso e ser avisado(a) em primeira mão sobre a próxima edição.")}`,
  },
  incluso: [
    { icon: "boots", label: "Vivência guiada de 4 a 5 horas no território" },
    { icon: "mug", label: "Café da manhã ou lanche especial com produtos locais" },
    { icon: "leaf", label: "Caminhadas, pausas e experiências sensoriais" },
    { icon: "fern", label: "Vivências ligadas à vida na roça" },
    { icon: "fire", label: "Jogos, brincadeiras e conversas sobre ecologia e regeneração" },
  ],
  inclusoAviso:
    "Não inclui almoço. Transporte pode ser organizado pela Clareira, mediante custo à parte.",
  paraQuem: [
    "Para pessoas que sentem vontade de se aproximar da natureza com mais presença, curiosidade e cuidado, mesmo sem experiência prévia em trilhas ou vivências ao ar livre. O Raiz & Riso foi criado para quem vive o ritmo intenso do cotidiano e busca uma pausa com sentido: caminhar sem pressa, respirar e apreciar a paisagem, aprender com a ecologia do lugar e se reconectar com o corpo, com o território e com modos de vida mais conscientes. É uma vivência para pessoas curiosas, sensíveis às questões ambientais, interessadas em regeneração, bem-estar e experiências autênticas.",
    'Nada de mística excessiva ou performance. Também não precisa "ser outdoor" para participar. A experiência foi desenhada para jovens e adultos sem restrições significativas de mobilidade. Não é necessário ter condicionamento físico elevado, mas é importante ser capaz de realizar caminhadas e outros exercícios leves sem auxílio. Caso você tenha alguma restrição de mobilidade e deseje participar, entre em contato com a gente. Teremos prazer em conversar e avaliar juntos a melhor forma de te receber.',
  ],
};
