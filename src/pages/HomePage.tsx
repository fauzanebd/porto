import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Blog } from "../components/Blog";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      {/* Spacer to push content below the fixed hero */}
      <div className="min-h-screen" />
      {/* Sections that scroll over the hero */}
      <div className="relative z-10 bg-gray-50 dark:bg-gray-900">
        <Projects />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};
