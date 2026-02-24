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
    slug: "pytest-run-selected-tests",
    title: "Running Selected Pytest Tests — The Right Way",
    date: "February 2026",
    description:
      "Two practical methods for running a specific subset of pytest tests: direct path selection and keyword expressions (-k flag). Covers 7 real-world cases from basic OR/AND logic to class-scoped filtering.",
    tags: ["Python", "Pytest", "Testing"],
    readTimeMinutes: 3,
  },
];
