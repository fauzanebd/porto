import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/portfolio";
import ReactMarkdown from "react-markdown";

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back</span>
        </Link>
      </div>

      {/* Header Image */}
      {post.image && (
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-950 via-transparent to-transparent" />
        </div>
      )}

      {/* Article Content */}
      <article
        className={`px-8 md:px-16 lg:px-32 xl:px-48 ${post.image ? "-mt-24 relative z-10" : "pt-24"}`}
      >
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <header className="mb-12">
            <time className="text-sm text-secondary block mb-4">
              {formatDate(post.date)}
            </time>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-secondary px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          {post.content && (
            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none pb-24">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          )}
        </div>
      </article>
    </main>
  );
};
