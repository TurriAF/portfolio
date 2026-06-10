export const personal = {
  name: "David Aguilar Fernández",
  alias: "daguilar",
  role: "Frontend Developer",
  location: "Almería, España",
  bio: "Desarrollador de Aplicaciones Web. Especializado en crear soluciones limpias, eficientes y con un buen diseño. Almería, España",
  available: true,
  email: "david34512@gmail.com",
  linkedin: "https://www.linkedin.com/in/david-aguilar-fernández-52836b248",
  github: "https://github.com/TurriAF",
};

// icon: nombre del icono en el set "logos" de Iconify
// Consulta iconos en: https://icon-sets.iconify.design/logos/
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5",      icon: "logos:html-5"          },
      { name: "CSS3",       icon: "logos:css-3"           },
      { name: "JavaScript", icon: "logos:javascript"      },
      { name: "React",      icon: "logos:react"           },
    ],
  },
  {
    category: "Estilos",
    items: [
      { name: "CSS",   icon: "skill-icons:css" },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git",        icon: "logos:git-icon"        },
      { name: "GitHub",     icon: "logos:github-icon"     },
      { name: "VS Code",    icon: "logos:visual-studio-code" },
    ],
  },
  {
    category: "Backend básico",
    items: [
      { name: "PHP",        icon: "logos:php"             },
      { name: "MySQL",      icon: "logos:mysql-icon"      },
    ],
  },
];

// tags debe coincidir con los nombres de skills para que los filtros funcionen
export const projects = [
  {
    num: "01",
    title: "Movie Search",
    desc: "Buscador de películas conectado a la API de TMDB. Busca cualquier película, y consulta su puntuación, fecha de estreno y sinopsis",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/Projects/portadaApp.png",
    github: "https://github.com/TurriAF/movie-search",
    demo: "https://turriaf.github.io/movie-search/",
    status: "production",
  },
  {
    num: "02",
    title: "PokeApi",
    desc: "Pokédex interactiva conectada a la PokéAPI. Consulta estadísticas, tipos, evoluciones y más de cualquier Pokémon.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "",
    github: "",
    demo: "",
    status: "development",
  },
  {
    num: "03",
    title: "Portfolio Personal",
    desc: "Este mismo portfolio. Construido con Astro, React y Tailwind.",
    tags: ["Astro", "React", "Tailwind"],
    image: "/img/Projects/portfolioPortada.png",
    github: "https://github.com/daguilar/portfolio",
    demo: "",
    status: "production",
  },
];

export const experience = [
  {
    date: "Marzo - Junio 2025",
    role: "Programador Informático",
    company: "Michelin CEMA, Almería, España",
    desc: "Durante mi formación en Michelin, tuve la oportunidad de integrarme en un entorno profesional, donde aprendí a desenvolverme con un lenguaje de programación propio, utilizado para las diferentes máquinas del centro. Además, adquirí experiencia práctica en el uso de herramientas colaborativas como Gitlab/Github, que me permitieron trabajar en equipo, gestionar versiones de código y seguir flujos de trabajos profesionales.",
  },
  {
    date: "Septiembre - Diciembre 2022",
    role: "Técnico Informático",
    company: "Leo's Computer, Génova, Italia",
    desc: "Al finalizar el Grado Medio de Sistemas Microinformáticos y Redes, tuve la oportunidad de participar en el programa Erasmus+, realizando una estancia formativa en una empresa italiana. Durante esta experiencia, trabajé en tareas relacionadas con el soporte técnico, mantenimiento de equipos y redes, y tuve un primer contacto con herramientas y metodologías utilizadas en el ámbito profesional.",
  },
];