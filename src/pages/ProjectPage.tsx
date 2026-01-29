import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { projects } from "../data/portfolio";
import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate(-1)}
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
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-8 md:px-16 lg:px-32 xl:px-48">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-secondary mb-6">{project.description}</p>
          {project.role && (
            <p className="text-base text-secondary mb-6">
              <span className="font-medium text-gray-900 dark:text-white">
                Role:
              </span>{" "}
              {project.role}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-secondary px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content based on project type */}
      <section className="pb-12 px-8 md:px-16 lg:px-32 xl:px-48">
        <div className="max-w-4xl mx-auto">
          {project.type === "public" && (
            <PublicProjectContent project={project} />
          )}
          {project.type === "mobile" && (
            <MobileProjectContent project={project} />
          )}
          {project.type === "private" && (
            <PrivateProjectContent project={project} />
          )}
        </div>
      </section>

      {/* Gallery Section - Full width */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="pb-24 px-4 md:px-8">
          <div className="max-w-[1600px] mx-auto">
            <ProjectGallery project={project} />
          </div>
        </section>
      )}

      {/* Markdown Content */}
      {project.markdown && (
        <section className="pb-24 px-8 md:px-16 lg:px-32 xl:px-48">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray dark:prose-invert">
            <ReactMarkdown>{project.markdown}</ReactMarkdown>
          </div>
        </section>
      )}
    </main>
  );
};

// Public website layout
const PublicProjectContent = ({
  project,
}: {
  project: (typeof projects)[0];
}) => {
  return (
    <div className="space-y-8">
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium transition-transform hover:scale-105"
        >
          <span>Visit Website</span>
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

// Mobile app layout
const MobileProjectContent = ({
  project,
}: {
  project: (typeof projects)[0];
}) => {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        {project.appStoreLink && (
          <a
            href={project.appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 bg-black text-white rounded-xl font-medium transition-transform hover:scale-105"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </a>
        )}
        {project.playStoreLink && (
          <a
            href={project.playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 bg-black text-white rounded-xl font-medium transition-transform hover:scale-105"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">GET IT ON</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

// Private project layout
const PrivateProjectContent = ({
  project: _project,
}: {
  project: (typeof projects)[0];
}) => {
  return (
    <div className="space-y-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-lg text-sm">
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <span>Enterprise / Internal Systems</span>
      </div>
    </div>
  );
};

const ProjectGallery = ({ project }: { project: (typeof projects)[0] }) => {
  const [prevEl, setPrevEl] = React.useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = React.useState<HTMLButtonElement | null>(null);

  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      }
    };

    if (lightboxImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  if (!project.screenshots || project.screenshots.length === 0) return null;

  const isMobileApp = project.type === "mobile";

  return (
    <>
      <div className="screenshot-gallery relative group">
        <div className="w-full">
          <Swiper
            autoHeight={true}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl,
              nextEl,
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              640: { slidesPerView: isMobileApp ? 2.5 : 1.2 },
              1024: { slidesPerView: isMobileApp ? 3.5 : 1.5 },
              1400: { slidesPerView: isMobileApp ? 4.5 : 1.8 },
            }}
            className="h-full !pb-12"
          >
            {project.screenshots.map((screenshot, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div
                  className={`rounded-xl overflow-hidden h-full w-auto shadow-lg cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]`}
                  onClick={() => setLightboxImage(screenshot)}
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-auto h-auto max-w-full max-h-[60vh] md:max-h-[70vh] object-contain mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation Buttons */}
        <button
          ref={(node) => setPrevEl(node)}
          className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full shadow-lg text-gray-900 dark:text-white transition-all hover:scale-110 hover:bg-white dark:hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          ref={(node) => setNextEl(node)}
          className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full shadow-lg text-gray-900 dark:text-white transition-all hover:scale-110 hover:bg-white dark:hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="custom-swiper-pagination flex justify-center gap-2 absolute bottom-0 left-0 right-0 z-10" />
      </div>

      {/* Lightbox / Fullscreen Image */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
