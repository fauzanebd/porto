import { useParams, Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
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

      {project.link && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white shadow-lg">
          <iframe
            src={project.link}
            title={`${project.title} preview`}
            className="w-full h-full"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
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

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="screenshot-gallery">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {project.screenshots.map((screenshot, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[9/16] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

// Private project layout
const PrivateProjectContent = ({
  project,
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
        <span>Private/Internal Project</span>
      </div>

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="screenshot-gallery">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="!pb-12"
          >
            {project.screenshots.map((screenshot, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};
