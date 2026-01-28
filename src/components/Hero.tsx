import { useEffect, useRef } from "react";
import { Timeline } from "animejs/timeline";
import { stagger, type TimelineParams } from "animejs";
import { personalInfo } from "../data/portfolio";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const timeline = new Timeline({} as TimelineParams);

      timeline
        .add(heroRef.current.querySelector(".hero-name") as Element, {
          translateY: [40, 0],
          opacity: [0, 1],
          duration: 1000,
        })
        .add(
          heroRef.current.querySelector(".hero-title") as Element,
          {
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 800,
          },
          "-=600",
        )
        .add(
          heroRef.current.querySelector(".hero-description") as Element,
          {
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 800,
          },
          "-=600",
        )
        .add(
          heroRef.current.querySelectorAll(".social-link"),
          {
            translateY: [20, 0],
            opacity: [0, 1],
            delay: stagger(100),
            duration: 600,
          },
          "-=400",
        )
        .add(
          heroRef.current.querySelector(".scroll-indicator") as Element,
          {
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600,
          },
          "-=200",
        );
    }
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-8 md:px-16 py-24 relative"
      ref={heroRef}
    >
      <div className="max-w-3xl">
        <h1 className="hero-name text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 tracking-tight opacity-0">
          Fauzan Abdillah
        </h1>
        <p className="hero-title text-xl md:text-2xl lg:text-3xl font-normal text-secondary mb-8 opacity-0">
          Software Engineer
        </p>
        <p className="hero-description text-base md:text-lg leading-relaxed text-secondary mb-12 max-w-2xl opacity-0">
          I am a software engineer who enjoys building reliable,
          high-performance systems from the ground up. My experience spans
          backend architecture, frontend development, and system design, with a
          strong focus on maintainability and real-world impact. I have led
          end-to-end development and major rewrites of production systems,
          turning early-stage solutions into scalable platforms. I care deeply
          about code quality, performance, and user experience, and I enjoy
          solving complex problems that grow with real business needs.
        </p>

        <div className="flex gap-8 flex-wrap">
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-gray-900 dark:text-gray-100 no-underline text-sm relative opacity-0 transition-colors duration-300 group"
            >
              GitHub
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          )}
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-gray-900 dark:text-gray-100 no-underline text-sm relative opacity-0 transition-colors duration-300 group"
            >
              LinkedIn
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          )}
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-link text-gray-900 dark:text-gray-100 no-underline text-sm relative opacity-0 transition-colors duration-300 group"
            >
              Email
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
            </a>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProjects}
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 cursor-pointer group"
        aria-label="Scroll to projects"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-secondary uppercase tracking-wider">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-secondary animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </button>
    </section>
  );
};
