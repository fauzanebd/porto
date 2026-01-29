import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const action = useNavigationType();

  useLayoutEffect(() => {
    // Temporarily disable CSS scroll-behavior: smooth to ensure instant jumping
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";

    if (action !== "POP") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }

    // Restore smooth scroll behavior after a brief delay
    // This allows the browser to perform the restoration instantly before re-enabling smooth scrolling
    const timeoutId = setTimeout(() => {
      html.style.removeProperty("scroll-behavior");
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [action, pathname]);

  return null;
};
