export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTimeMinutes: number;
  coverImage?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-my-blog",
    title: "Welcome to My Blog",
    date: "February 2026",
    description:
      "An introduction to this blog: what I plan to write about, the tech behind this site, and a live showcase of all supported markdown features.",
    tags: ["Python", "Testing", "React"],
    readTimeMinutes: 4,
  },
];
