export type CategoryName =
  | "Database"
  | "Backend Framework"
  | "Cloud Services"
  | "Container Technologies"
  | "Testing"
  | "Languages";

export type Skill = {
    title: string;
    description: string;
    category: CategoryName;
};

export const categories: { name: CategoryName; icon?: string }[] = [
    { name: "Database" },
    { name: "Backend Framework" },
    { name: "Cloud Services" },
    { name: "Container Technologies" },
    { name: "Testing" },
    { name: "Languages" },
  ];

export const skills: Skill[] = [
    {
        title: "Django",
        description: "Django comes with batterries included for faster deployments. \
        Supports RestAPIs, Templating languages, OAuth, MFA and a lot more. \
        Cherry on top in an admin page for easy data browsing during development.",
        category: "Backend Framework"
    },
    {
        title: "Flask",
        description: "Lightweight python framework.",
        category: "Backend Framework"
    },
    {
        title: "FastAPI",
        description: "Fastest ASGI backend framework with buildin  swagger support.",
        category: "Backend Framework"
    },
    {
        title: "Pytest",
        description: "Pythons testing framework which lets you do more than in-build unittest module.",
        category: "Testing",
    },
    {
        title: "Locust",
        description: "Load testing tool for APIs",
        category: "Testing",
    },
    {
        title: "Selenium",
        description: "Load testing tool for APIs",
        category: "Testing",
    },
    {
        title: "unittest",
        description: "In-build pythons testing module",
        category: "Testing",
    },
    {
        title: "Docker",
        description: "Containerization tool for easy deployment and scaling with Kubernetes.",
        category: "Container Technologies",
    },
    {
        title: "Postgres",
        description: "A database that would supports more than other RDBs. Extensions like POSTGis add more features.",
        category: "Database",
    },
    {
        title: "Redis",
        description: "In-memory data store for caching and real-time features.",
        category: "Database",
    },
    {
        title: "Python",
        description: "Programming/Scripting Langauge.",
        category: "Languages",
    },
];