
import React from 'react';

export const COLORS = {
  primary: '#d6b468',
  white: '#FFFFFF',
  text: '#667388',
  lightBg: '#bac2cd',
  darkBg: '#667388',
};

export const LANDING_CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d42e2?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop"
];

export const ANIMATED_KEYWORDS = ["futuro", "espaço urbano", "meio ambiente", "cotidiano"];

export const TEXTS = {
  landing: {
      impactPhrase: "Soluções completas em engenharia para transformar o futuro."
  },
  about: {
    title: "Sobre a Atakama Engenharia",
    animatedPhrase: "Transformando o",
    animatedPhraseSuffix: "com soluções inteligentes.",
    paragraph1: "Somos uma empresa inovadora, focada em entregar soluções de engenharia com excelência e sustentabilidade. Nossa equipe é composta por profissionais altamente qualificados, prontos para transformar desafios em resultados concretos.",
    mission: {
      title: "Missão",
      text: "Oferecer serviços de engenharia que superem as expectativas, com qualidade, segurança e respeito ao meio ambiente."
    },
    vision: {
      title: "Visão",
      text: "Ser referência em engenharia civil e ambiental, reconhecida pela inovação e compromisso com o desenvolvimento sustentável."
    },
    values: {
      title: "Valores",
      text: "Ética, Transparência, Inovação, Qualidade e Sustentabilidade."
    }
  },
  civil: {
    title: "Engenharia Civil",
    description: "Projetamos e executamos obras com a mais alta tecnologia e precisão, garantindo segurança, durabilidade e funcionalidade em cada empreendimento."
  },
  environmental: {
    title: "Engenharia Ambiental",
    description: "Desenvolvemos soluções ambientais integradas que promovem o equilíbrio entre o desenvolvimento humano e a preservação dos recursos naturais."
  },
  certifications: {
    title: "Certificações e Parcerias",
    description: "Nosso compromisso com a qualidade e excelência é validado por certificações e parcerias estratégicas."
  },
   workWithUs: {
    title: "Trabalhe Conosco",
    description: "Aqui na Atakama, valorizamos profissionais comprometidos com inovação, ética e excelência técnica. Faça parte de uma equipe que está construindo o futuro.",
    formTitle: "Envie seu Currículo",
    teamTitle: "O Que Nossa Equipe Diz"
  },
  contact: {
    title: "Entre em Contato",
    description: "Tem um projeto em mente? Fale conosco. Nossa equipe está pronta para atendê-lo e encontrar a melhor solução para sua necessidade."
  },
  testimonials: {
      title: "O Que Nossos Clientes Dizem",
      description: "Confiança e satisfação são os pilares do nosso relacionamento com cada cliente. Veja o que eles têm a dizer sobre nossa parceria."
  },
  timeline: {
    title: "Nossa Jornada",
    description: "Desde a fundação, a Atakama Engenharia tem trilhado um caminho de inovação, crescimento e compromisso com a excelência."
  },
  googleReviews: {
    title: "Avaliações no Google",
    description: "A opinião dos nossos clientes no Google reflete a qualidade e o empenho que dedicamos a cada projeto."
  }
};

export const CIVIL_SERVICES = [
  {
    title: "Construção e Gestão de Obras",
    description: "Execução completa de projetos, desde o planejamento até a entrega, com foco em prazo e qualidade.",
    icon: <BuildingIcon />
  },
  {
    title: "Projetos Estruturais",
    description: "Cálculos e detalhamento de estruturas em concreto armado, aço e alvenaria estrutural.",
    icon: <RulerIcon />
  },
  {
    title: "Laudos Técnicos",
    description: "Emissão de laudos e pareceres técnicos para avaliações, inspeções e regularizações.",
    icon: <ClipboardIcon />
  },
  {
    title: "Consultoria em Engenharia",
    description: "Suporte técnico especializado para otimização de projetos e solução de desafios complexos.",
    icon: <UsersIcon />
  }
];

export const ENVIRONMENTAL_SERVICES = [
  {
    title: "Licenciamento Ambiental",
    description: "Assessoria completa para obtenção e renovação de licenças ambientais em todas as esferas.",
    icon: <LeafIcon />
  },
  {
    title: "Estudos Ambientais (EIA/RIMA)",
    description: "Elaboração de estudos de impacto ambiental e relatórios para grandes empreendimentos.",
    icon: <BookOpenIcon />
  },
  {
    title: "Gestão de Resíduos Sólidos",
    description: "Planos de gerenciamento e soluções para destinação e reaproveitamento de resíduos.",
    icon: <TrashIcon />
  },
  {
    title: "Soluções Sustentáveis",
    description: "Implementação de tecnologias e práticas que visam a sustentabilidade e a eficiência de recursos.",
    icon: <SparklesIcon />
  }
];

export const PROJECTS = [
  {
    category: "Residencial",
    name: "Edifício Solaris",
    location: "São Paulo, SP",
    year: "2023",
    description: "Construção de edifício residencial de alto padrão com 20 andares e área de lazer completa.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category: "Industrial",
    name: "Centro de Distribuição Atakama",
    location: "Campinas, SP",
    year: "2022",
    description: "Projeto e execução de um centro logístico industrial com mais de 50.000m² de área construída.",
    image: "https://images.unsplash.com/photo-15875732c4936-a36613534938?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category: "Ambiental",
    name: "Plano de Recuperação Ambiental",
    location: "Cubatão, SP",
    year: "2023",
    description: "Consultoria e execução de plano para recuperação de área degradada pela atividade industrial.",
    image: "https://images.unsplash.com/photo-1503375743844-a937c865147a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category: "Obras Públicas",
    name: "Revitalização da Orla",
    location: "Santos, SP",
    year: "2021",
    description: "Projeto de revitalização urbana da orla da praia, incluindo nova ciclovia e quiosques.",
    image: "https://images.unsplash.com/photo-1615599849769-79a295861115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category: "Residencial",
    name: "Condomínio Vista Verde",
    location: "Vinhedo, SP",
    year: "2022",
    description: "Implantação de condomínio residencial horizontal com foco em sustentabilidade e integração com a natureza.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category: "Ambiental",
    name: "Licenciamento de Aterro Sanitário",
    location: "Sorocaba, SP",
    year: "2024",
    description: "Processo completo de licenciamento ambiental para a implantação de um novo aterro sanitário.",
    image: "https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const EMPLOYEE_TESTIMONIALS = [
  {
    name: "Ana Beatriz",
    role: "Engenheira Civil Sênior",
    text: "Trabalhar na Atakama é um aprendizado diário. Os desafios são grandes, mas a colaboração da equipe e o investimento em tecnologia nos permitem superá-los.",
    avatar: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    name: "Ricardo Mendes",
    role: "Especialista Ambiental",
    text: "Tenho orgulho de fazer parte de uma empresa que realmente se preocupa com o impacto positivo e a sustentabilidade em cada projeto que desenvolvemos.",
     avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
];

export const TESTIMONIALS = [
  {
    name: "Carlos Pereira",
    company: "Construtora Horizonte",
    city: "Belo Horizonte, MG",
    text: "A parceria com a Atakama foi fundamental para o sucesso do nosso último empreendimento. A equipe demonstrou um nível de profissionalismo e expertise técnica que superou nossas expectativas. A gestão de obra foi impecável.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
  {
    name: "Juliana Almeida",
    company: "Indústria Têxtil FiaBEM",
    city: "Blumenau, SC",
    text: "Precisávamos de uma solução completa de licenciamento ambiental e a Atakama entregou um serviço ágil e eficiente, garantindo que todas as regulamentações fossem cumpridas. Recomendo fortemente.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
      name: "Fernando Martins",
      company: "Agroindustrial Campo Verde",
      city: "Goiânia, GO",
      text: "O estudo de impacto ambiental realizado pela Atakama foi extremamente detalhado e preciso, permitindo-nos avançar com nosso projeto de expansão com total segurança e responsabilidade socioambiental.",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 4
  }
];

export const GOOGLE_REVIEWS = {
    averageRating: 4.9,
    totalReviews: 128,
    reviews: [
        {
            name: "Mariana Costa",
            time: "2 semanas atrás",
            rating: 5,
            text: "Serviço excepcional! A equipe da Atakama é muito profissional e atenta aos detalhes. Cumpriram todos os prazos e o resultado final ficou perfeito.",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
            name: "Lucas Ferreira",
            time: "1 mês atrás",
            rating: 5,
            text: "Contratei para um laudo técnico e fiquei impressionado com a agilidade e a qualidade do documento. Recomendo a todos!",
            avatar: "https://randomuser.me/api/portraits/men/66.jpg",
        },
        {
            name: "Beatriz Oliveira",
            time: "3 meses atrás",
            rating: 4,
            text: "Bom serviço de consultoria ambiental. Ajudaram a destravar nosso processo de licenciamento. A comunicação poderia ser um pouco mais proativa.",
            avatar: "https://randomuser.me/api/portraits/women/71.jpg",
        },
    ]
};

export const PARTNERS_LOGOS = [
  { name: "CREA", tooltip: "Conselho Regional de Engenharia e Agronomia" },
  { name: "IBAMA", tooltip: "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis" },
  { name: "ISO 9001", tooltip: "Certificação de Sistema de Gestão da Qualidade" },
  { name: "ISO 14001", tooltip: "Certificação de Sistema de Gestão Ambiental" },
  { name: "LEED", tooltip: "Liderança em Energia e Design Ambiental" },
  { name: "Green Building Council", tooltip: "Membro do Conselho de Construção Sustentável" },
];

function TrophyIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 8v10m14-10v10M2 11h20M9 21h6" />
        </svg>
    )
}

export const TIMELINE_DATA = [
    {
        year: "2015",
        title: "Fundação da Atakama",
        description: "Iniciamos nossas operações com foco em projetos residenciais e comerciais de pequeno porte, estabelecendo uma base de qualidade e confiança.",
        icon: <FlagIcon />
    },
    {
        year: "2018",
        title: "Expansão para Engenharia Ambiental",
        description: "Ampliamos nossa atuação, criando um departamento dedicado a soluções ambientais, licenciamentos e estudos de impacto.",
        icon: <LeafIcon />
    },
    {
        year: "2020",
        title: "Primeiro Grande Projeto Industrial",
        description: "Conquistamos e executamos nosso primeiro projeto de grande escala: um complexo industrial, consolidando nossa expertise.",
        icon: <BuildingIcon />
    },
    {
        year: "2023",
        title: "Prêmio de Inovação em Sustentabilidade",
        description: "Recebemos reconhecimento pelo nosso trabalho em desenvolver e implementar soluções de engenharia sustentável.",
        icon: <TrophyIcon />
    }
];


// SVG Icons (Heroicons style)
function BuildingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-11v11m0 0h2m-2 0h-5" />
    </svg>
  );
}

function RulerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16M8 4v4m8-4v4" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a4 4 0 110-5.292" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48zM12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  );
}

export function LeafSimpleIcon({ className = "h-6 w-6" }: {className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 15.879l-1.414 1.414A2 2 0 0111.293 18H5.828a2 2 0 01-1.414-3.414l5.657-5.657A2 2 0 0111.293 8h2.414a2 2 0 001.414-.586l1.414-1.414a1 1 0 011.414 0l1.414 1.414a2 2 0 01.586 1.414v2.414a2 2 0 01-1.172 1.832l-3.31 1.655a2 2 0 00-1.17 1.832v.586z" />
        </svg>
    );
}

export function HelmetIcon({ className = "h-6 w-6" }: {className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2.625c0-.497-.198-.975-.558-1.313L20 15h-3l-2 3v2zM4 20h5v-2.625c0-.497-.198-.975-.558-1.313L7 15H4l-2 3v2zM12 21a9 9 0 01-9-9V8a3 3 0 013-3h12a3 3 0 013 3v4a9 9 0 01-9 9zM9 11h6" />
        </svg>
    );
}

function BookOpenIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    );
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M19 3v4M17 5h4M12 3v4M10 5h4M5 19v2M3 20h4M19 19v2M17 20h4M12 19v2M10 20h4M12 9l-1 2-2 1 2 1 1 2 1-2 2-1-2-1-1-2z" />
    </svg>
  );
}

export function ChatBubbleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    )
}

export function XIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

export function UploadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  );
}

export function WhatsappIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004 4.971 4.971z" />
        </svg>
    );
}
export function FacebookIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
        </svg>
    );
}
export function InstagramIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/>
        </svg>
    );
}
export function LinkedinIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
    );
}

export function QuoteIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/>
        </svg>
    );
}

export function StarIcon({ filled, className = 'h-5 w-5' }: { filled: boolean, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} ${filled ? '' : 'text-slate-300'}`} style={filled ? {color: '#d6b468'} : {}} viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

export function GoogleIcon() {
    return (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
          <title>Google</title>
          <path fill="#4285F4" d="M21.543 9.385H12.21v4.83h5.234c-.22 1.564-1.427 4.21-5.234 4.21-3.15 0-5.71-2.6-5.71-5.71s2.56-5.71 5.71-5.71c1.804 0 2.983.765 3.655 1.41l3.25-3.136C17.394.963 15.051 0 12.21 0 5.467 0 0 5.467 0 12.21s5.467 12.21 12.21 12.21c6.994 0 11.83-4.885 11.83-12.016 0-1.09-.09-1.81-.2-2.81z"/>
      </svg>
    )
}

export function FlagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zM4 21v-6" />
    </svg>
  );
}