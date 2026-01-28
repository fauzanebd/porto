import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export const Header = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      animate(navRef.current.querySelectorAll(".nav-link"), {
        translateY: [-20, 0],
        opacity: [0, 1],
        delay: stagger(100, { start: 300 }),
        duration: 800,
        ease: "out(2)",
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-8 flex justify-end">
      <nav className="flex gap-8" ref={navRef}>
        <button
          onClick={() => scrollToSection("projects")}
          className="nav-link bg-transparent border-none text-gray-900 dark:text-gray-100 text-sm font-normal cursor-pointer py-2 relative transition-colors duration-300 group"
        >
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button
          onClick={() => scrollToSection("blog")}
          className="nav-link bg-transparent border-none text-gray-900 dark:text-gray-100 text-sm font-normal cursor-pointer py-2 relative transition-colors duration-300 group"
        >
          Blog
          <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </nav>
    </header>
  );
};
