// =============================================================================
// PORTFOLIO CONFIGURATION
// =============================================================================
// Edit this file to update your portfolio content. No need to touch components!

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Path to image in public folder, e.g., "/projects/project1.jpg"
  // For private/internal projects, use screenshots instead of live links
  link?: string; // Optional: URL to live site (omit if private/internal)
  tags: string[]; // Tech stack or categories
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string; // URL slug, e.g., "my-first-post"
  tags: string[];
}

// =============================================================================
// YOUR PERSONAL INFO
// =============================================================================
export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  description:
    "I build modern web applications with clean code and thoughtful design. Passionate about creating seamless user experiences and solving complex problems.",
  email: "your.email@example.com",
  github: "https://github.com/fauzanebd",
  linkedin: "https://linkedin.com/in/fauzanabdillah",
  // twitter: "https://twitter.com/yourusername", // Optional
};

// =============================================================================
// YOUR PROJECTS
// =============================================================================
// Add your projects here. For internal/private projects, just omit the 'link' field
// and use a screenshot for the 'image' field.
export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.",
    image: "/projects/placeholder1.jpg",
    link: "https://example.com", // Omit this if project is private/internal
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: "2",
    title: "Internal Company Dashboard",
    description:
      "Real-time analytics dashboard for internal use. Features data visualization, user management, and reporting.",
    image: "/projects/placeholder2.jpg",
    // No link because it's internal - just show a screenshot!
    tags: ["React", "TypeScript", "D3.js", "Express"],
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "A minimalist portfolio website with smooth animations and responsive design.",
    image: "/projects/placeholder3.jpg",
    link: "https://yourportfolio.com",
    tags: ["React", "TypeScript", "GSAP", "Vite"],
  },
];

// =============================================================================
// YOUR BLOG POSTS
// =============================================================================
// Add your blog posts here. You can implement the actual blog pages later.
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications",
    excerpt:
      "A comprehensive guide to modern web development practices and tools.",
    date: "2024-01-15",
    slug: "building-modern-web-apps",
    tags: ["Web Development", "React", "Best Practices"],
  },
  {
    id: "2",
    title: "TypeScript Best Practices",
    excerpt:
      "Learn how to write better TypeScript code with these essential tips and patterns.",
    date: "2024-01-10",
    slug: "typescript-best-practices",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: "3",
    title: "Optimizing React Performance",
    excerpt:
      "Techniques and strategies for building lightning-fast React applications.",
    date: "2024-01-05",
    slug: "optimizing-react-performance",
    tags: ["React", "Performance", "Optimization"],
  },
];
