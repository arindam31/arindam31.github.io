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
  | "Languages"
  | "CI/CD"
  | "AI Tools";

export type SkillProps = {
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
  { name: "CI/CD" },
  { name: "AI Tools" },
];

export const skills: SkillProps[] = [
  {
    title: "Django",
    description: "Django comes with batteries included for faster deployments.",
    category: "Backend Framework",
    show: true,
  },
  {
    title: "Flask",
    description: "Lightweight Python framework.",
    category: "Backend Framework",
    show: true,
  },
  {
    title: "FastAPI",
    description: "Fastest ASGI backend framework with built-in swagger support.",
    category: "Backend Framework",
    show: true,
  },
  {
    title: "Dramatiq",
    description: "Fast and reliable background task processing for Python.",
    category: "Task Scheduling",
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
    description: "Python's testing framework with powerful fixtures and plugins.",
    category: "Testing",
    show: true,
  },
  {
    title: "Playwright",
    description: "Modern end-to-end testing framework for web applications.",
    category: "Testing",
    show: true,
  },
  {
    title: "Locust",
    description: "Load testing tool for APIs.",
    category: "Testing",
    show: true,
  },
  {
    title: "Selenium",
    description: "Browser automation and web testing framework.",
    category: "Testing",
    show: true,
  },
  {
    title: "unittest",
    description: "Built-in Python testing module.",
    category: "Testing",
    show: true,
  },
  {
    title: "Docker",
    description: "Containerization tool for easy deployment and scaling.",
    category: "Container Technologies",
    show: true,
  },
  {
    title: "GitHub Actions",
    description: "CI/CD pipelines integrated with GitHub repositories.",
    category: "CI/CD",
    show: true,
  },
  {
    title: "Postgres",
    description: "Advanced relational database with extensions like PostGIS.",
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
    description: "Programming/Scripting Language.",
    category: "Languages",
    show: true,
  },
  {
    title: "JavaScript",
    description: "Dynamic scripting language for web development.",
    category: "Languages",
    show: true,
  },
  {
    title: "TypeScript",
    description: "Typed superset of JavaScript for scalable applications.",
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
    description: "Collects metrics from services.",
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
    description: "Asynchronous task processing for Python backends.",
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
    description: "Designing frameworks for test data management and reporting.",
    category: "Testing",
    show: false,
  },
  {
    title: "Claude AI",
    description: "AI assistant for coding, analysis, and automation.",
    category: "AI Tools",
    show: true,
  },
];
