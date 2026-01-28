import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (projectsRef.current) {
      const projectCards =
        projectsRef.current.querySelectorAll(".project-card");

      projectCards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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

  return (
    <section
      id="projects"
      className="px-8 md:px-16 py-24 bg-gray-50 dark:bg-gray-900"
      ref={projectsRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card flex flex-col opacity-0 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    (e.target as HTMLImageElement).src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="sans-serif" font-size="18"%3EProject Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                {!project.link && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded text-xs font-medium">
                    Internal/Private
                  </div>
                )}
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base leading-relaxed text-secondary mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-secondary px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 no-underline text-sm font-medium inline-flex items-center transition-transform duration-300 hover:translate-x-1"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
