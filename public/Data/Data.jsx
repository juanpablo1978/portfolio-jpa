import { AiOutlineApi } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { CiLinkedin, CiFacebook, CiMobile3 } from "react-icons/ci";
import { FaGithub, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson, GoBook } from "react-icons/go";
import { IoCodeSlash, IoCloudOutline } from "react-icons/io5";

export const socialNetworks = [
  {
    id: 1,
    logo: <CiLinkedin />,
    src: "https://www.linkedin.com/in/juan-pablo-andrujovich-921386189/",
  },
  {
    id: 2,
    logo: <FaGithub />,
    src: "https://github.com/juanpablo1978",
  },
  {
    id: 3,
    logo: <CiFacebook />,
    src: "https://www.facebook.com/juanpablo.andrujovich",
  },
  {
    id: 4,
    logo: <FaXTwitter />,
    src: "https://x.com/JAndrujovich",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome className="h-6 w-6" />,
    link: "/",
  },
  {
    id: 2,
    title: "AboutMe",
    icon: <GoPerson className="h-6 w-6" />,
    link: "/aboutme",
  },
  {
    id: 3,
    title: "ServicesComponent",
    icon: <GoBook className="h-6 w-6" />,
    link: "/servicescomponent",
  },
  {
    id: 4,
    title: "Portfolio",
    icon: <IoCodeSlash className="h-6 w-6" />,
    link: "/portfolio",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    date: 2021,
    title: "Desarrollo Web",
    subtitle: "CoderHouse",
    description:
      "HTML y CSS - Prototipado, wireframe y maquetado - Versionado de código con GIT, GitHub - SASS - Bootstrap - SEO - Box Modeling - Flexbox - Grid - Animaciones, Transformaciones y Transiciones - Diseño responsive - Deploy.",
  },
  {
    id: 2,
    date: 2022,
    title: "Javascript",
    subtitle: "CoderHouse",
    description:
      " Sintaxis y variables - Control de flujos, Ciclos/Iteraciones - Programación con funciones - Objetos - Arrays - Funciones de órden superior - DOM - Eventos - Storage y JSON - Operadores avanzados -  Promises & Async - AJAX & Fetch.",
  },
  {
    id: 3,
    date: 2022,
    title: "React.js",
    subtitle: "CoderHouse",
    description:
      " JSX y transpiling - Componentes - Promises, asincronía y MAP - Consumo de APIs - Routing y navegación - Eventos - Context - Técnicas de rendering - Firebase.",
  },
  {
    id: 4,
    date: 2023,
    title: "Desarrollador Frontend",
    subtitle: "Aikodev",
    description:
      "Desarrollador Frontend React: HTML y CSS -  Javascript - React.js - Next - Tailwind - Librerías UI -  StoryBook - Markdown - GitHub - Metodolías Agiles - Jira - GIT Flow - Typescript.",
  },
];

export const serviceData = [
  {
    icon: <BsLayoutTextSidebarReverse />,
    title: "Mantenimiento y mejora continua de sitios existentes",
    description:
      "Actualización de contenido, refactorización de código, mejoras en la accesibilidad y rendimiento de sitios ya desarrollados. Diagnóstico y resolución de bugs, implementación de nuevas funcionalidades y adaptación a nuevas necesidades del cliente.",
  },
  {
    icon: <CiMobile3 />,
    title: "Diseño responsivo",
    description:
      "Creación de interfaces adaptables a todo tipo de dispositivos (móviles, tablets y escritorio) utilizando tecnologías modernas como HTML5, CSS3, JavaScript, React y frameworks CSS. Foco en experiencia de usuario fluida y diseño limpio.",
  },
  {
    icon: <FaReact />,
    title: "Desarrollo de aplicaciones con React / Next.js",
    description:
      "Creación de aplicaciones web modernas con React y/o Next.js, aprovechando renderizado del lado del servidor (SSR), generación estática (SSG), rutas dinámicas y optimización automática de recursos.",
  },
  {
    icon: <AiOutlineApi />,
    title: "Integración con APIs",
    description:
      "Consumo e integración de APIs REST o GraphQL para conectar el frontend con bases de datos, servicios externos o sistemas de terceros, permitiendo funcionalidades como pagos, mapas, autenticación o envío de formularios.",
  },
  {
    icon: <TbSeo />,
    title: "SEO (Search Engine Optimization)",
    description:
      "Implementación de buenas prácticas de desarrollo orientadas al posicionamiento orgánico en buscadores, incluyendo optimización de rendimiento, estructura semántica del HTML, tiempos de carga, accesibilidad y metadatos, con el objetivo de mejorar la visibilidad del sitio web en resultados de búsqueda.",
  },
  {
    icon: <IoCloudOutline />,
    title: "Despliegue y administración en la nube",
    description:
      "Configuración y despliegue de sitios web en servicios como Vercel, Netlify, o servidores con Docker y Nginx. Gestión de dominios, certificados SSL, variables de entorno y control de versiones con Git.",
  },
];

export const dataAiko = [
  {
    id: 1,
    title: "Aikodev",
    image: "/Images/print-portfolio2.png",
    tecnologias: ["Next.js", "Tailwind", "Typescript", "IA"],
    description:
      "Plataforma educativa IT desarrollada con Next.js, Tailwind y TypeScript. Proyecto remunerado enfocado en ofrecer cursos para estudiantes tech, facilitando el aprendizaje moderno y ampliando el acceso a la formación en tecnología.",
    urlDemo:
      "https://www.aikodev.com/?fbclid=PAZXh0bgNhZW0CMTEAAacpD39ONorwuJdewkKp1crRNZqHneitvNnuHcB-0-TPTNiUBtlwDQRCZbpvCw_aem_2XH74sBqKSVUW-1JtxM2SQ",
      portugues: 'Plataforma educativa IT desarrollada con Next.js, Tailwind y TypeScript. Proyecto remunerado enfocado en ofrecer cursos para estudiantes tech, facilitando el aprendizaje moderno y ampliando el acceso a la formación en tecnología. '
  },
  {
    id: 2,
    title: "Ghibli Api",
    tecnologias: ["React", "Markdown", "Storybook"],
    image: "/Images/ghibliapi.png",
    description:
      "Proyecto open source en construcción, basado en el stack MERN. Se trata una API REST de películas de Studio Ghibli y su interfaz con React y Tailwind. Incluye documentación en Markdown y componentes reutilizables desarrollados con Storybook.",
    urlGithub: "https://github.com/Aikodev-labs/Ghibli-API-platform",
    urlDemo: "https://ghibliapi.aikodev.com/",
    portugues: 'Aplicación web, open source (en construcción) basada en el stack MERN. Se trata una API REST de películas de Studio Ghibli y su interfaz con React y Tailwind. Incluye documentación en Markdown y componentes reutilizables desarrollados con Storybook.'
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Redux Toolkit Crud",
    tecnologias: ["React", "Tailwind", "Redux"],
    image: "/Images/crud.png",
    description:
      "Aplicación CRUD con Redux Toolkit que permite crear, leer, actualizar y eliminar registros. Incluye sistema de login y logout con protección de rutas, asegurando acceso seguro y gestión eficiente de datos.",
    urlGithub: "https://github.com/juanpablo1978/crud-rtk",
    urlDemo: "https://crud-rtk-eta.vercel.app/",
    portugues:
      "Aplicação CRUD com Redux Toolkit que permite criar, ler, atualizar e excluir registros. Inclui sistema de login e logout com proteção de rotas, garantindo acesso seguro e gestão eficiente de dados.",
  },

  {
    id: 2,
    title: "E-Commerce",
    tecnologias: ["React", "Tailwind", "Context"],
    image: "/Images/ecommerce.png",
    description:
      "Aplicación e-commerce desarrollada con React, Context API y Tailwind. Simula una tienda online para practicar maquetado, lógica de carrito y gestión de estado. Ideal para demostrar habilidades frontend aplicadas a retail.",
    urlGithub: "https://github.com/juanpablo1978/e-commerce",
    urlDemo: "https://e-commerce-pink-three-60.vercel.app/",
    portugues:
      "Aplicação de e-commerce desenvolvida com React, Context API e Tailwind. Simula uma loja online para praticar layout, lógica de carrinho e gerenciamento de estado. Ideal para demonstrar habilidades frontend aplicadas ao varejo.",
  },

  {
    id: 3,
    title: "Zustand Quiz",
    tecnologias: ["Next", "Zutand", "Tailwind", "Typescript"],
    image: "/Images/quiz.png",
    description:
      "Quiz, interactivo con paginado, desarrollado en Next usando Zustand para manejo de estado global. Incluye navegación entre preguntas, feedback dinámico y UI limpia para experiencia fluida y enfocada.",
    urlGithub: "https://github.com/juanpablo1978/quizz-app",
    urlDemo: "https://quizz-app-blush-iota.vercel.app/",
      portugues:
      "Quiz interativo com paginação, desenvolvido em Next usando Zustand para gerenciamento de estado global. Inclui navegação entre perguntas, feedback dinâmico e uma UI limpa para uma experiência fluida e focada.",
  },

  {
    id: 4,
    title: "Translate App",
    tecnologias: ["React", "Typescript", "Tailwind"],
    image: "/Images/print-translate.png",
    description:
      "Aplicación de traducción de textos a múltiples idiomas. Desarrollada con React y Tailwind, integra consumo de APIs y funciones asíncronas para demostrar manejo de datos externos y experiencia de usuario fluida.",
    urlGithub: "https://github.com/juanpablo1978/translate-app",
    urlDemo: "https://translate-app-zeta-swart.vercel.app/",
     portugues:
      "Aplicação de tradução de textos para múltiplos idiomas. Desenvolvida com React e Tailwind, integra consumo de APIs e funções assíncronas para demonstrar manipulação de dados externos e oferecer uma experiência de usuário fluida.",
  },
];


