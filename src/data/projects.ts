export type Project = {
    title: string;
    description: string;
};

export const projects: Project[] = [
    {
        title: "Admin-controlled Asset Trading Platform",
        description: "A Django-based system where admins introduce assets into a trading marketplace.",
      },
      {
        title: "Django + Redis Backend APIs",
        description: "APIs with smart caching using Redis for performance and scalability.",
      },
      {
        title: "Flask Microservices",
        description: "Built lightweight services for specific backend responsibilities using Flask.",
      },
      {
        title: "Old GitHub Pages Portfolio",
        description: "My original HTML/CSS portfolio hosted on GitHub Pages.",
      },
    ];