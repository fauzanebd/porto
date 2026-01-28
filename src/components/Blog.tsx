import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogPosts } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export const Blog = () => {
  const blogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (blogRef.current) {
      const blogCards = blogRef.current.querySelectorAll(".blog-card");

      blogCards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 1,
            // y: 60,
          },
          {
            opacity: 1,
            // y: 0,
            duration: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section
      id="blog"
      className="px-8 md:px-16 py-24 bg-gray-50 dark:bg-gray-900"
      ref={blogRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden opacity-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-900/50"
            >
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-8">
                <time className="text-sm text-secondary block mb-4">
                  {formatDate(post.date)}
                </time>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight leading-tight">
                  {post.title}
                </h3>
                <p className="text-base leading-relaxed text-secondary mb-6">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-secondary px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-gray-900 dark:text-gray-100 text-sm font-medium inline-flex items-center transition-transform duration-300 hover:translate-x-1"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
