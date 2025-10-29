export type NavLinkChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href?: string;
  children?: NavLinkChild[];
};

export type ServiceCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const navLinks: NavLink[] = [
  { label: 'O mnie', href: '/o-mnie' },
  {
    label: 'Usługi',
    children: [
      { label: 'Terapia pedagogiczna', href: '/terapia/pedagogiczna' },
      { label: 'Wczesna nauka czytania', href: '/terapia/czytanie' },
      { label: 'Czytanie ze słuchawkami Forbrain', href: '/terapia/forbrain' },
      { label: 'Terapia ręki', href: '/terapia/reki' },
      { label: 'Treningi słuchowe', href: '/terapia/sluchowe' }
    ]
  },
  { label: 'Opinie', href: '#opinie' },
  { label: 'Cennik', href: '/cennik' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Dla Rodziców', href: '/dla-rodzicow' }
];

export const heroChallenges: string[] = [
  'Trudności w nauce i koncentracji',
  'Wyzwania w relacjach z rówieśnikami',
  'Nadpobudliwość i impulsywność'
];

export const heroSuccesses: string[] = [
  'Lepsze wyniki w szkole i większa motywacja',
  'Większa pewność siebie i radość z nauki',
  'Spokojniejsza atmosfera i relacje w domu'
];

export const services: ServiceCard[] = [
  {
    title: 'Terapia Johansen',
    description: 'Indywidualna stymulacja słuchowa wspierająca koncentrację i rozumienie mowy.',
    image: '/images/services/terapia-johansen.png',
    href: '/terapia/sluchowe'
  },
  {
    title: 'Neuroflow',
    description: 'Trening wyższych funkcji słuchowych dla dzieci z trudnościami w nauce.',
    image: '/images/services/neuroflow.png',
    href: '/terapia/sluchowe'
  },
  {
    title: 'Diagnoza ADHD',
    description: 'Profesjonalna ocena i wsparcie w zrozumieniu potrzeb dziecka z ADHD.',
    image: '/images/services/diagnoza-adhd.png',
    href: '/kontakt'
  },
  {
    title: 'Nauka czytania',
    description: 'Metody dopasowane do możliwości dziecka, aby czytanie było przygodą.',
    image: '/images/services/nauka-czytania.png',
    href: '/terapia/czytanie'
  },
  {
    title: 'Forbrain',
    description: 'Innowacyjny trening mowy, uwagi i pamięci słuchowej z wykorzystaniem technologii.',
    image: '/images/services/forbrain.png',
    href: '/terapia/forbrain'
  },
  {
    title: 'Wsparcie Autyzm / ADHD',
    description: 'Kompleksowe wsparcie terapeutyczne i edukacyjne dla dzieci oraz rodziców.',
    image: '/images/services/wsparcie-autyzm-adhd.png',
    href: '/oferta'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Dzięki EduHuśtawce nasz syn zrobił ogromne postępy w komunikacji. Otrzymaliśmy wsparcie, które odmieniło codzienność.',
    author: 'Anna K.',
    role: 'mama Jakuba (7 lat)'
  },
  {
    quote:
      'Fantastyczne podejście do dziecka! Córka znów lubi chodzić do szkoły i buduje relacje z rówieśnikami.',
    author: 'Tomasz P.',
    role: 'tata Mai (9 lat)'
  },
  {
    quote:
      'Profesjonalizm i wielkie serce. Współpraca dała nam spokój w domu i jasny plan pracy.',
    author: 'Magdalena W.',
    role: 'mama Oli (6 lat)'
  }
];

export const footerNavigation: NavLink[] = [
  { label: 'O mnie', href: '/o-mnie' },
  { label: 'Oferta', href: '/oferta' },
  { label: 'Cennik', href: '/cennik' },
  { label: 'Kontakt', href: '/kontakt' }
];
