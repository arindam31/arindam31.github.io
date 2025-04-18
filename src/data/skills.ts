export type CategoryName =
  | "Database"
  | "Backend Framework"
  | "Frontend Framework"
  | "Cloud Services"
  | "Container Technologies"
  | "Testing"
  | "Web Services"
  | "Task Scheduling"
  | "Monitoring & Observability"
  | "Languages";

export type Skill = {
    title: string;
    description: string;
    category: CategoryName;
    show?: boolean;
};

export const categories: { name: CategoryName; icon?: string }[] = [
    { name: "Database" },
    { name: "Backend Framework" },
    { name: "Frontend Framework" },
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
        category: "Backend Framework",
        show: true,
    },
    {
        title: "Flask",
        description: "Lightweight python framework.",
        category: "Backend Framework",
        show: true,

    },
    {
        title: "FastAPI",
        description: "Fastest ASGI backend framework with buildin  swagger support.",
        category: "Backend Framework",
        show: true,
    },
    {
        title: "React",
        description: "Frontend framework.",
        category: "Frontend Framework",
        show: true,
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
        show: true,
    },
    {
        title: "Selenium",
        description: "Load testing tool for APIs",
        category: "Testing",
        show: true,
    },
    {
        title: "unittest",
        description: "In-build pythons testing module",
        category: "Testing",
        show: true,
    },
    {
        title: "Docker",
        description: "Containerization tool for easy deployment and scaling with Kubernetes.",
        category: "Container Technologies",
        show: true,
    },
    {
        title: "Postgres",
        description: "A database that would supports more than other RDBs. Extensions like POSTGis add more features.",
        category: "Database",
        show: true,
    },
    {
        title: "MySql",
        description: "Relational database from Oracle.",
        category: "Database",
        show: false,
    },
    {
        title: "Redis",
        description: "In-memory data store for caching and real-time features.",
        category: "Database",
        show: true,
    },
    {
        title: "Python",
        description: "Programming/Scripting Langauge.",
        category: "Languages",
        show: true,
    },
    {
        title: "SQL Alchemy",
        description: "ORM to query database.",
        category: "Database",
        show: true,
    },
    {
        title: "Restful APIs",
        description: "API design pattern for web services.",
        category: "Web Services",
        show: true,
    },
    {
        title: "Prometheus",
        description: "Collects metrics form services.",
        category: "Monitoring & Observability",
        show: true,
    },
    {
        title: "Grafana",
        description: "UI frontend for Prometheus.",
        category: "Monitoring & Observability",
        show: true,
    },
    {
        title: "AWS",
        description: "Cloud services from Amazon.",
        category: "Cloud Services",
        show: true,
    },
    {
        title: "Celery",
        description: "Asynchronous processing of tasks typically used in Backend projects.",
        category: "Task Scheduling",
        show: true,
    },
    {
        title: "Sentry",
        description: "Error logs and performance monitoring cloud service.",
        category: "Monitoring & Observability",
        show: true,
    },
    {
        title: "Test Framework Designing",
        description: "Designing a framework which allows to keep and use test data, generate reports.",
        category: "Testing",
        show: false,
    },
];