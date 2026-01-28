// =============================================================================
// PORTFOLIO CONFIGURATION
// =============================================================================
// Edit this file to update your portfolio content. No need to touch components!

// Project types for different modal layouts
export type ProjectType = "public" | "mobile" | "private";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Path to image in public folder or URL
  type: ProjectType; // Determines modal layout
  link?: string; // URL to live site (for public projects)
  appStoreLink?: string; // For mobile apps
  playStoreLink?: string; // For mobile apps
  screenshots?: string[]; // For image galleries
  tags: string[];
  role?: string; // Your role in the project
  markdown?: string; // Detailed markdown content for modal
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags: string[];
  image?: string; // Header image for modal
  content?: string; // Full markdown content
}

// =============================================================================
// YOUR PERSONAL INFO
// =============================================================================
export const personalInfo = {
  name: "Fauzan Abdillah",
  title: "Fullstack Developer",
  description: "Fullstack Developer",
  email: "fauzan.ebd@gmail.com",
  github: "https://github.com/fauzanebd",
  linkedin: "https://linkedin.com/in/fauzanabdillah",
};

// =============================================================================
// YOUR PROJECTS
// =============================================================================
export const projects: Project[] = [
  {
    id: "1",
    title: "Yaro Wora Tourism Website",
    description: "Tourism Web for Yaro Wora Village, Sumba, NTT",
    image: "https://yarowora.web.id/og-image.jpg",
    type: "public",
    link: "https://yarowora.web.id",
    tags: ["React", "TypeScript", "GSAP", "Tailwind"],
    role: "Frontend Developer",
    markdown: `
## About This Project

A tourism website for Yaro Wora Village in Sumba, East Nusa Tenggara, Indonesia. The site showcases the village's natural beauty, cultural heritage, and tourism offerings.

## My Role

- Designed the UI/UX from scratch
- Built the entire frontend using React and TypeScript
- Implemented smooth animations with GSAP
- Deployed and maintained the production website

## Key Features

- Responsive design that works on all devices
- Smooth scroll animations and transitions
- Fast loading with optimized images
- SEO-friendly structure
`,
  },
  {
    id: "2",
    title: "Yaro Wora CMS",
    description:
      "Custom Content Management System for Yaro Wora tourism website",
    image: "/projects/yarowora-cms-thumb.jpg",
    type: "private",
    tags: [
      "Golang",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "PostgreSQL",
      "R2",
    ],
    role: "Fullstack Developer",
    screenshots: [
      // Add your 10 screenshot URLs here
    ],
    markdown: `
## About This Project

A custom-built Content Management System for managing the Yaro Wora tourism website content. Built from scratch to provide complete control over the tourism site's content.

## My Role

- Designed and built the backend API with Golang
- Created the admin dashboard with React and shadcn/ui
- Set up PostgreSQL database and R2 object storage
- Implemented authentication and authorization

## Tech Stack

- **Backend**: Golang with Fiber framework
- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Database**: PostgreSQL
- **Storage**: Cloudflare R2 for media files
`,
  },
  {
    id: "3",
    title: "Gelael Membership App",
    description: "Mobile membership app for Gelael supermarket chain",
    image: "/projects/gelael-thumb.jpg",
    type: "mobile",
    appStoreLink:
      "https://apps.apple.com/id/app/gelael-membership/id1234567890",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.gelael.membership",
    tags: ["Flutter", "Dart"],
    role: "Mobile Developer",
    screenshots: [
      // Add your 3 screenshot URLs here
    ],
    markdown: `
## About This Project

A mobile membership app for Gelael supermarket chain, allowing customers to manage their loyalty points, view promotions, and access exclusive member benefits.

## My Role

- Built the mobile application using Flutter
- Implemented UI/UX designs
- Integrated with backend APIs
- Published to App Store and Play Store

## Key Features

- Loyalty points tracking
- Digital membership card
- Exclusive promotions and offers
- Store locator
`,
  },
  {
    id: "4",
    title: "Hamilton IFRS Reporting",
    description: "Dashboard for IFRS reporting and financial analysis",
    image: "/projects/hamilton-thumb.jpg",
    type: "private",
    tags: ["TypeScript", "React", "Tailwind"],
    role: "Frontend Developer",
    screenshots: [
      // Add your 3 screenshot URLs here
    ],
    markdown: `
## About This Project

A comprehensive dashboard for IFRS (International Financial Reporting Standards) reporting. The platform helps financial teams generate and analyze IFRS-compliant reports.

## My Role

- Built the reporting dashboard frontend
- Implemented data visualization components
- Created interactive charts and tables
- Optimized for large dataset handling

## Key Features

- IFRS-compliant report generation
- Interactive data visualizations
- Export capabilities
- Role-based access control
`,
  },
  {
    id: "5",
    title: "OIA FEB UGM Website",
    description:
      "Official website for Office of International Affairs, Faculty of Economics and Business, UGM",
    image: "https://oia.feb.ugm.ac.id/og-image.jpg",
    type: "public",
    link: "https://oia.feb.ugm.ac.id",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    role: "Frontend Developer",
    markdown: `
## About This Project

The official website for the Office of International Affairs at the Faculty of Economics and Business, Universitas Gadjah Mada (UGM).

## My Role

- Developed the website frontend
- Implemented responsive design
- Integrated with content management system

## Key Features

- Information about international programs
- News and events section
- Partner university directory
- Contact and inquiry forms
`,
  },
  {
    id: "6",
    title: "Terumo E-Learning Platform",
    description: "E-learning platform for nursing education",
    image: "/projects/terumo-thumb.jpg",
    type: "private",
    tags: ["React", "TypeScript", "Node.js"],
    role: "Fullstack Developer",
    screenshots: [
      // Add your 10 screenshot URLs here
    ],
    markdown: `
## About This Project

An e-learning platform designed for nurses to learn about Terumo medical products and best practices. The platform provides interactive courses and assessments.

## My Role

- Built the learning management system
- Implemented course modules and quizzes
- Created progress tracking features
- Developed admin dashboard for content management

## Key Features

- Interactive video courses
- Quizzes and assessments
- Progress tracking
- Certificate generation
- Admin dashboard for content management
`,
  },
];

// =============================================================================
// YOUR BLOG POSTS
// =============================================================================
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications",
    excerpt:
      "A comprehensive guide to modern web development practices and tools.",
    date: "2024-01-15",
    slug: "building-modern-web-apps",
    tags: ["Web Development", "React", "Best Practices"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    content: `
# Building Modern Web Applications

Modern web development has evolved significantly over the past decade. In this post, we'll explore the key technologies and practices that define successful web applications today.

## The Modern Stack

Today's web applications typically use a combination of:

- **React or Vue** for building interactive UIs
- **TypeScript** for type-safe JavaScript
- **Tailwind CSS** for rapid styling
- **Node.js** for backend services

## Best Practices

1. Start with a solid foundation
2. Prioritize performance
3. Write maintainable code
4. Test early and often

## Conclusion

Building modern web applications requires staying current with best practices while maintaining a focus on user experience and code quality.
`,
  },
  {
    id: "2",
    title: "TypeScript Best Practices",
    excerpt:
      "Learn how to write better TypeScript code with these essential tips and patterns.",
    date: "2024-01-10",
    slug: "typescript-best-practices",
    tags: ["TypeScript", "JavaScript", "Programming"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    content: `
# TypeScript Best Practices

TypeScript has become the standard for building large-scale JavaScript applications. Here are some best practices to follow.

## Use Strict Mode

Always enable strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## Prefer Interfaces Over Types

Interfaces are more extensible and provide better error messages.

## Use Generics

Generics allow you to write reusable, type-safe code.

## Conclusion

Following these practices will help you write more maintainable TypeScript code.
`,
  },
  {
    id: "3",
    title: "Optimizing React Performance",
    excerpt:
      "Techniques and strategies for building lightning-fast React applications.",
    date: "2024-01-05",
    slug: "optimizing-react-performance",
    tags: ["React", "Performance", "Optimization"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    content: `
# Optimizing React Performance

Performance is crucial for user experience. Here are strategies to optimize your React applications.

## Use React.memo

Wrap components that don't need frequent re-renders:

\`\`\`jsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

## Lazy Loading

Use React.lazy for code splitting:

\`\`\`jsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
\`\`\`

## Virtual Lists

For large lists, use virtualization libraries like react-window.

## Conclusion

Performance optimization is an ongoing process. Measure, optimize, and repeat.
`,
  },
];
