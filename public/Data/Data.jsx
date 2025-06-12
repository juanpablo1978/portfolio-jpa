import { GrGroup } from "react-icons/gr";
import { AiOutlineApi } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { CiLinkedin, CiFacebook, CiMobile3 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuHome } from "react-icons/lu";
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
    icon: <LuHome className="h-6 w-6" />,
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
      "HTML y CSS - Prototipado, wireframe y maquetado - Versionado de código con GIT, GitHub - SASS - Bootstrap - SEO - Box Modeling - Flexbox - Grid - Animaciones, Transformaciones y Transiciones - Diseño responsive - Deploy - Presupuesto e interacción con el cliente.",
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
      "Desarrollador Frontend React: HTML y CSS -  Javascript - React.js - Next - Tailwind - Librerías UI -  StoryBook - Markdown - GitHub - Metodolías Agiles - Jira - GIT Flow.",
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
    icon: <GrGroup />,
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

export const dataPortfolio = [
  {
    id: 1,
    title: "Sass Portfolio",
    image: "/Images/portfoliosass.png",
    urlGithub: "https://github.com/juanpablo1978/portfolio",
    urlDemo: "https://sass-portfolio-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Asociación",
    image: "/Images/asociacion.png",
    urlGithub: "https://github.com/juanpablo1978/asociacion.github.io",
    urlDemo: "https://asociacion-github-io.vercel.app/",
  },
  {
    id: 3,
    title: "React Movies",
    image: "/Images/reactmovies.png",
    urlGithub: "https://github.com/juanpablo1978/react-movies",
    urlDemo: "https://react-movies-murex.vercel.app/",
  },
  {
    id: 4,
    title: "Ghibli Api",
    image: "/Images/ghibliapi.png",
    urlGithub: "https://github.com/Aikodev-labs/Ghibli-API-platform",
    urlDemo: "https://ghibliapi.aikodev.com/",
  },
  {
    id: 5,
    title: "E-Commerce",
    image:
      "https://i.pinimg.com/564x/ab/f7/2e/abf72ebe2afe5166da893d5525e154c1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Web",
    image:
      "https://i.pinimg.com/564x/36/10/4b/36104baa94fe8229c62d2729d70afd32.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ",
    imageUrl: "/Images/perfilport.jpg",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/Images/perfilport.jpg",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios.en línea. ¡Bravo por este sitio!",
    imageUrl: "/Images/perfilport.jpg",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/Images/perfilport.jpg",
  },
];
