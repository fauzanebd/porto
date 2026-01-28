import { personalInfo } from "../data/portfolio";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-8 md:px-16 py-16 pb-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-8">
        <p className="text-sm text-secondary m-0">
          © {currentYear} {personalInfo.name}. Built with React & TypeScript.
        </p>
        <div className="flex gap-8">
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary no-underline text-sm transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              GitHub
            </a>
          )}
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary no-underline text-sm transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              LinkedIn
            </a>
          )}
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-secondary no-underline text-sm transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
