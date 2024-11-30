// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
import type { final } from "@/Types/footer";
import type { Experience } from "@/Types/experiences";
import type { Project } from "@/Types/projects";

export const SOBRE: string = `Sou um desenvolvedor dedicado a criar aplicações web robustas
 e escaláveis e venho aprimorando minhas habilidades em front-end, utilizando React, Typescript e TailwindCSS, 
 e em back-end, explorando Node.js, MySQL e PostgreSQL. 
 Meu objetivo é aplicar meus conhecimentos para desenvolver soluções inovadoras que agreguem 
 valor ao mercado e proporcionem boas experiências aos usuários e estou sempre buscando o aprendizado contínuo.`;

export const ABOUT_TEXT: string = `Sou um desenvolvedor front-end apaixonado por criar 
experiências digitais que sejam funcionais, acessíveis e visualmente agradáveis. 
Minha trajetória na tecnologia começou com curiosidade e evoluiu para um compromisso 
constante com aprendizado e inovação. Trabalho com React, TypeScript e TailwindCSS 
para criar interfaces modernas e dinâmicas, além de explorar o backend com Node.js e 
bancos de dados como MySQL e PostgreSQL. Também possuo conhecimentos em Linux, como 
instalação, configuração e resolução de problemas, o que complementa minha versatilidade técnica.
Recentemente, tenho ampliado minhas habilidades com C# e .NET, desenvolvendo soluções
robustas e escaláveis.`;

export const EXPERIENCES: Experience[] = [
  {
    id:0,
    year: "2024 - Present",
    role: "Desenvolvedor Front-End",
    company: "Projetos Pessoais",
    description: "Atualmente, estou desenvolvendo projetos pessoais, incluindo sites de portfólio e pequenas aplicações web. Utilizo principalmente React, TypeScript e TailwindCSS. Em algumas dessas aplicações, implementei o uso de **LocalStorage** para armazenar preferências do usuário e dados temporários, proporcionando uma melhor experiência sem a necessidade de interações constantes com o servidor.",
    technologies: ["React", "TypeScript", "TailwindCSS", "LocalStorage"]
  },  
    {
      id:1,
      year: "2024",
      role: "Suporte Técnico e Resolução de Problemas em Linux",
      company: "Projetos Pessoais e Freelance",
      description: "Tenho experiência em instalação, configuração e resolução de problemas no Linux, especialmente com distros como o Linux Mint. Resolvi questões relacionadas ao desempenho de sistemas, rede, e instalação de ferramentas de desenvolvimento.",
      technologies: ["Linux Mint", "Resolução de Problemas", "Configuração de Ambiente"]
    },
    {
      id:2,
      year: "2023 - 2024",
      role: "Desenvolvedor Front-End / Projetos Freelancer",
      company: "Freelancer",
      description: "Trabalhei em projetos de clientes, criando interfaces responsivas e escaláveis. Utilizei React, SCSS, e também implementei integrações com APIs externas. Fui responsável pela entrega pontual de interfaces que atendem às necessidades dos clientes.",
      technologies: ["HTML/CSS", "React", "SCSS", "API Integration", "JavaScript"]
    },
    {
      id:3,
      year: "2023 - 2024",
      role: "Desenvolvedor Full Stack (Projetos Pessoais)",
      company: "Projetos Pessoais",
      description: "Desenvolvi e mantive aplicações completas, utilizando Node.js e Express no backend, além de React e Next.js no frontend. Trabalhei com bancos de dados como MySQL e PostgreSQL para persistência de dados, e implementei autenticação de usuários e gerenciamento de sessões.",
      technologies: ["Node.js", "Express", "React", "MySQL", "PostgreSQL"]
    },
  ]

export const PROJECTS: Project[] = [
  {
    id:0,
    title: "Pequeno E-Commerce Website",
    image: "str",
    description:
      "Em Produção",
    technologies: ["React", "Typescript",],
  },
  {
    id:1,
    title: "Task Management App",
    image: "str",
    description:"Em Produção",
    technologies: ["React", "Scss", "Typescript",],
  },
  {
    id:2,
    title: "Portfolio",
    image:"str",
    description:
      "Em Produção",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

export const rodape: final = {
  email: "luiizevrsj@gmail.com",
};