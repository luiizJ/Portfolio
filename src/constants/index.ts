import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import type { final } from "@/Types/footer";
import type { Experience } from "@/Types/experiences";
import type { Project } from "@/Types/projects";

export const SOBRE: string = `Graduando em Análise e Desenvolvimento de Sistemas com foco na criação de ecossistemas digitais de alta performance. Especializado na construção de interfaces modernas com React, TypeScript e TailwindCSS, aliada a uma sólida compreensão de arquitetura Backend com Node.js e Bancos de Dados Relacionais. Meu diferencial é unir Design System consistente com código limpo e escalável, priorizando a experiência do usuário e as melhores práticas de SEO e Acessibilidade.`;
export const ABOUT_TEXT: string = `Minha jornada na tecnologia é guiada pela busca incessante por qualidade de código e impacto visual. Atuo no desenvolvimento Fullstack, construindo interfaces dinâmicas de alta performance com o ecossistema React (Next.js) e APIs escaláveis em Node.js. Tenho proficiência em administração de sistemas Linux, o que me permite ter autonomia na configuração de ambientes e deploy. Atualmente, estou focado em dominar conceitos mais avançados de Backend e aprimorar minhas habilidades no ecossistema JavaScript, enquanto traço meu roadmap para o desenvolvimento com Java, visando sistemas de larga escala.`;

export const EXPERIENCES: Experience[] = [
  {
    id: 0,
    year: "2024 - Presente",
    role: "Desenvolvedor Frontend & Software Engineer",
    company: "Laboratório de Projetos & Open Source",
    description:
      "Desenvolvimento e arquitetura de aplicações web modernas focadas em performance (Core Web Vitals). Implementação de estratégias de renderização (SSR/CSR) com Next.js, gestão de estado complexa e persistência local para otimização de requisições. Foco em criar interfaces pixel-perfect e acessíveis.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Performance Optimization",
    ],
  },
  {
    id: 1,
    year: "2024",
    role: "Analista de Suporte & Infraestrutura Linux",
    company: "Consultoria Freelance",
    description:
      "Diagnóstico e resolução de problemas críticos em ambientes Linux (Mint/Debian). Responsável pela configuração de ambientes de desenvolvimento, otimização de rede e scripts de automação. Atuação direta na manutenção preventiva de sistemas e hardening de segurança básica.",
    technologies: [
      "Linux Mint",
      "Shell Scripting",
      "Networking",
      "System Administration",
    ],
  },
  {
    id: 2,
    year: "2023 - 2024",
    role: "Desenvolvedor Frontend Freelancer",
    company: "Freelancer",
    description:
      "Entrega de soluções web personalizadas para clientes, focando em responsividade e fidelidade ao design. Integração de interfaces com APIs RESTful externas, tratamento de erros e feedback visual ao usuário. Desenvolvimento ágil com foco em prazos e qualidade de entrega.",
    technologies: [
      "React",
      "SCSS",
      "Axios/Fetch API",
      "Git Flow",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    year: "2023 - 2024",
    role: "Desenvolvedor Full Stack",
    company: "Projetos Acadêmicos & Pessoais",
    description:
      "Arquitetura de sistemas completos (End-to-End). No Backend: desenvolvimento de APIs REST com Node.js/Express, modelagem de dados SQL (MySQL/PostgreSQL) e implementação de autenticação segura (JWT). No Frontend: consumo de dados e gerenciamento de rotas privadas.",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT Auth",
      "Database Modeling",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: "FastFood Delivery",
    image: project3,
    description:
      "Aplicação completa de pedidos simulando um ambiente real de produção. Focado em validação de dados (Zod) e componentes de interface reutilizáveis (ShadCN). Possui carrinho de compras dinâmico e fluxo de checkout otimizado.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Zod", "ShadCN UI"],
    link: "https://sistema-de-pedidos-wine.vercel.app/",
  },
  {
    id: 1,
    title: "E-Commerce Concept",
    image: project1,
    description:
      "Plataforma de comércio digital em desenvolvimento, focada em escalabilidade. Arquitetura preparada para integração com gateways de pagamento e gestão de inventário. Implementação de boas práticas de roteamento e gestão de estado global.",
    technologies: ["React", "TypeScript", "State Management", "API REST"],
    link: "https://ecommerce-puce-rho.vercel.app/",
  },
  {
    id: 2,
    title: "Legacy Portfolio",
    image: project2,
    description:
      "Projeto marco inicial da minha carreira. Desenvolvido com tecnologias puras (Vanilla JS) para consolidar os fundamentos da web: manipulação do DOM, CSS Grid/Flexbox e animações nativas sem dependência de frameworks.",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "DOM Manipulation"],
    link: "https://luiizj.github.io/",
  },
];

export const rodape: final = {
  email: "luiizevrsj@gmail.com",
};
