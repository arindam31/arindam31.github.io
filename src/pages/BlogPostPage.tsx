import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { Components } from "react-markdown";
import Header from "../components/Header";
import { blogPosts } from "../data/blogs";

function CodeBlock({ language, children }: { language: string; children: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-6 rounded-xl overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-1.5 border-b border-gray-700">
        <span className="text-xs text-gray-400 font-mono select-none">{language}</span>
        <button
          onClick={handleCopy}
          title="Copy code"
          className="text-gray-400 hover:text-white transition-colors"
        >
          {copied ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        PreTag="div"
        customStyle={{ margin: 0, borderRadius: 0, fontSize: "0.875rem" }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

type FetchState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; content: string };

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [fetchState, setFetchState] = useState<FetchState>({ status: "loading" });

  const meta = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!slug) return;
    setFetchState({ status: "loading" });

    fetch(`/blogs/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error(`Post not found (HTTP ${res.status})`);
        return res.text();
      })
      .then((text) => setFetchState({ status: "success", content: text }))
      .catch((err: Error) => setFetchState({ status: "error", message: err.message }));
  }, [slug]);

  const components: Components = {
    code({ className, children }) {
      const match = /language-(\w+)/.exec(className ?? "");
      const language = match?.[1] ?? "";

      if (match) {
        return (
          <CodeBlock language={language}>
            {String(children).replace(/\n$/, "")}
          </CodeBlock>
        );
      }

      return (
        <code className="bg-gray-100 dark:bg-gray-700 text-pink-600 dark:text-pink-400 rounded px-1.5 py-0.5 text-sm font-mono">
          {children}
        </code>
      );
    },

    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-1">{children}</h4>
    ),

    p: ({ children }) => (
      <p className="text-gray-700 dark:text-gray-200 leading-7 mb-4">{children}</p>
    ),

    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 space-y-1 mb-4 text-gray-700 dark:text-gray-200">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 space-y-1 mb-4 text-gray-700 dark:text-gray-200">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,

    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-400 pl-4 my-4 italic text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-gray-700/50 py-2 rounded-r-lg">
        {children}
      </blockquote>
    ),

    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith("/") ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {children}
      </a>
    ),

    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt ?? ""}
        className="rounded-xl shadow-md my-6 max-w-full mx-auto block"
      />
    ),

    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,

    hr: () => <hr className="my-8 border-gray-200 dark:border-gray-700" />,

    table: ({ children }) => (
      <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-100 dark:bg-gray-700">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-700">
        {children}
      </td>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <Link to="/blogs" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
            ← Back to Blog
          </Link>
        </div>

        {fetchState.status === "loading" && (
          <div className="flex items-center justify-center py-24 text-gray-500 dark:text-gray-400">
            Loading post…
          </div>
        )}

        {fetchState.status === "error" && (
          <div className="border rounded-2xl p-8 bg-white dark:bg-gray-600 shadow-sm text-center">
            <p className="text-red-600 dark:text-red-400 font-semibold mb-2">Could not load post</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">{fetchState.message}</p>
          </div>
        )}

        {fetchState.status === "success" && (
          <>
            {meta && (
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {meta.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-300 mb-4">
                  <span>{meta.date}</span>
                  <span>·</span>
                  <span>{meta.readTimeMinutes} min read</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 dark:bg-gray-500 dark:text-gray-100 rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <hr className="mt-6 border-gray-200 dark:border-gray-700" />
              </div>
            )}

            <div>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                {fetchState.content}
              </ReactMarkdown>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
