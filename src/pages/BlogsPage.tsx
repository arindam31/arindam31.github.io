import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/blogs";

export default function BlogsPage() {
  const sorted = [...blogPosts].reverse();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Blog</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Thoughts on Python, testing, automation, and software engineering.
          </p>
        </div>

        {sorted.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {sorted.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
