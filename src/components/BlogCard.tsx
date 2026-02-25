import { Link } from "react-router-dom";
import type { BlogPost } from "../data/blogs";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border rounded-2xl p-6 shadow-sm bg-white dark:bg-gray-600 hover:shadow-md transition-shadow flex flex-col">
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
      )}

      <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-1">
        <Link to={`/blogs/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>

      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300 mb-3">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTimeMinutes} min read</span>
      </div>

      <p className="text-gray-700 dark:text-gray-100 text-sm mb-4 leading-relaxed flex-1">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-800 dark:bg-gray-500 dark:text-gray-100 rounded-full px-3 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={`/blogs/${post.slug}`}
        className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
      >
        Read more →
      </Link>
    </article>
  );
}
