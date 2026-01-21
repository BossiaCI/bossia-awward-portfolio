// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Offrez à votre entreprise une base digitale à la fois performante, sécurisée et évolutive. Je crée des applications web personnalisées avec une architecture claire, des bases de données optimisées et des intégrations harmonieuses, pour une fiabilité maximale à chaque couche.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Déploiement fiable : infrastructure automatisée, sécurité intégrée et cloud (AWS/Azure) pour des applications performantes en continu.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Pas de lenteur ni de failles. Sécurité renforcée (XSS, SQLi, OAuth) et optimisation des performances pour une app rapide, sûre et scalable.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "Une interface maladroite peut ruiner une idée. Je crée des apps web & mobiles responsive et pixel perfect (React Native / Flutter) qui combinent design et fonctionnalité.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Workflow Manager",
    description:
      "Gestionnaire de flow : organisation et optimisation des flux de travail pour garantir des processus fluides, efficaces et cohérents.",
    href: "",
    image: "/assets/projects/flowscrape.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
      { id: 6, name: "Clerk auth" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "Une boutique en ligne spécialisée dans les plantes rares et décoratives, avec une interface épurée et conviviale.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Finance App",
    description:
      "Une application de gestion des finances personnelles qui aide les utilisateurs à suivre leurs dépenses, définir des budgets et visualiser leurs habitudes de consommation.",
    href: "",
    image: "/assets/projects/financeapp.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "flutter" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "Une boutique en ligne multicatégorie proposant de l’électronique, de l’électroménager et du matériel gaming, avec des offres spéciales.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Reactjs" },
      { id: 2, name: "Django" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "Une collection soigneusement sélectionnée d’objets de décoration design pour la maison, incluant du mobilier et des vases artisanaux.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Ivoire Explorer (WIP)",
    description:
      "Une application de guide de voyage interactif pour explorer les principales destinations, la culture et la gastronomie de la Côte d’Ivoire.",
    href: "",
    image: "/assets/projects/ivoire_explorer.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Figma" },
      { id: 2, name: "Flutter" },
    ],
  },
  {
    id: 7,
    name: "Quartz (WIP)",
    description:
      "Une plateforme interactive de gestion BIM permettant de visualiser et de gérer les données du bâtiment en temps réel.",
    href: "",
    image: "/assets/projects/quartz.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "nextjs" },
      { id: 2, name: "tailwindcss" },
      { id: 3, name: "typescript" },
      { id: 4, name: "fastapi" },
      { id: 5, name: "Postgres" },
      { id: 6, name: "redis" },
      { id: 7, name: "rabbitmq" },
      { id: 8, name: "c++" },
    ],
  },
  {
    id: 8,
    name: "Pathfinder Algorithm Visualizer",
    description:
      "Une application web interactive qui permet aux utilisateurs de visualiser et de comprendre le fonctionnement des algorithmes de recherche de chemin tels que A*, Dijkstra et BFS.",
    href: "",
    image: "/assets/projects/pathfinding-visualizer.gif",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "reactjs" },
      { id: 2, name: "tailwindcss" },
      { id: 3, name: "typescript" },
    ],
  },
  {
    id: 8,
    name: "Sorting Algorithm Visualizer",
    description:
      "Une application web interactive qui permet aux utilisateurs de visualiser et de comprendre le fonctionnement des algorithmes de tri tels que QuickSort, MergeSort et BubbleSort.",
    href: "",
    image: "/assets/projects/sorting.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "reactjs" },
      { id: 2, name: "tailwindcss" },
      { id: 3, name: "typescript" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/bossia.daha/" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@BossiaDaha",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bossia-daha-71b4386b/" },
  { name: "GitHub", href: "https://github.com/BossiaCI" },
];
