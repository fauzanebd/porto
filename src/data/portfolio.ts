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
  email: "fauzanebd@gmail.com",
  github: "https://github.com/fauzanebd",
  linkedin: "https://linkedin.com/in/fauzanabdillah",
};

// =============================================================================
// YOUR PROJECTS
// =============================================================================
export const projects: Project[] = [
  {
    id: "1",
    title: "Hamilton IFRS Reporting",
    description: "Dashboard for IFRS reporting and financial analysis",
    image:
      "https://content.fauzanebd.web.id/images/hamiltonifrs/Screenshot%202026-01-29%20at%2012.43.12.webp",
    type: "private",
    tags: [
      "Golang",
      "PostgreSQL",
      "Oracle",
      "Kubernetes",
      "Docker",
      "TypeScript",
      "React",
      "Tailwind",
    ],
    role: "Product Engineer",
    screenshots: [
      "https://content.fauzanebd.web.id/images/hamiltonifrs/Screenshot%202026-01-29%20at%2012.43.12.webp",
      "https://content.fauzanebd.web.id/images/hamiltonifrs/Screenshot%202026-01-29%20at%2012.43.38.webp",
      "https://content.fauzanebd.web.id/images/hamiltonifrs/Screenshot%202026-01-29%20at%2012.48.49.webp",
      "https://content.fauzanebd.web.id/images/hamiltonifrs/Screenshot%202026-01-29%20at%2012.43.49.webp",
      "https://content.fauzanebd.web.id/images/hamiltonifrs/Screenshot%202026-01-29%20at%2012.44.19.webp",
      "https://content.fauzanebd.web.id/images/hamiltonifrs/Screenshot%202026-01-29%20at%2012.44.30.webp",
      "https://content.fauzanebd.web.id/images/hamiltonifrs/Screenshot%202026-01-29%20at%2012.44.44.webp",
      "https://content.fauzanebd.web.id/images/hamiltonifrs/Screenshot%202026-01-29%20at%2012.44.55.webp",
    ],
    markdown: `
## About This Project

An enterprise-grade **IFRS (International Financial Reporting Standards) reporting platform** used by financial teams to generate, analyze, and export IFRS-compliant financial reports.

I have been involved in this project since **late 2021**, contributing to its evolution from an early implementation into a scalable, multi-client reporting system.

## My Role

I worked as a **Product Engineer**, with end-to-end ownership across backend, frontend, and system architecture.

### Initial Phase
- Built the original backend using **Python and Flask**
- Supported IFRS reporting workflows using **PostgreSQL**
- Helped establish the initial reporting features and data pipelines

### System Rewrite & Architecture Redesign
As the codebase and client requirements grew, I proposed and led a **full system rewrite** to improve maintainability, performance, and scalability.

Key contributions include:

- Designed and rebuilt the backend from scratch using **Golang**
  - Introduced strong typing and clean architecture
  - Implemented **database-agnostic design** using Go interfaces to support multiple databases (PostgreSQL and Oracle)
  - Added **Redis caching** to improve report performance
  - Implemented background job processing using **Asynq** for heavy reporting tasks

- Rebuilt the frontend using **React and TypeScript**
  - Designed a new frontend architecture with strong type safety
  - Created a reusable **design system** using Tailwind
  - Implemented efficient data fetching and caching using **TanStack React Query** for large and complex reports

- Containerized services using **Docker** and deployed on **Kubernetes** for scalability and reliability

## Key Outcomes

- Significantly improved system performance and memory usage
- Reduced maintenance complexity through strong typing and cleaner architecture
- Enabled multi-database support to onboard additional clients
- Improved UI/UX consistency and overall usability for financial users
- Positioned the platform to scale for future clients and reporting requirements

## Tech Stack

- **Backend**: Golang
- **Frontend**: React, TypeScript, Tailwind CSS
- **Databases**: PostgreSQL, Oracle
- **Caching & Queues**: Redis, Asynq
- **Infrastructure**: Docker, Kubernetes

`,
  },
  {
    id: "2",
    title: "Yaro Wora Tourism Website",
    description: "Tourism Web for Yaro Wora Village, West Sumba, NTT",
    image:
      "https://content.fauzanebd.web.id/images/yarowora/Screenshot%202026-01-29%20at%2008.16.31.webp",
    type: "public",
    link: "https://yarowora.web.id",
    tags: ["React", "TypeScript", "GSAP", "Tailwind"],
    role: "Frontend Developer",
    screenshots: [
      "https://content.fauzanebd.web.id/images/yarowora/Screenshot%202026-01-29%20at%2008.16.31.webp",
      "https://content.fauzanebd.web.id/images/yarowora/Screenshot%202026-01-29%20at%2008.16.44.webp",
      "https://content.fauzanebd.web.id/images/yarowora/Screenshot%202026-01-29%20at%2008.17.11.webp",
      "https://content.fauzanebd.web.id/images/yarowora/Screenshot%202026-01-29%20at%2008.17.19.webp",
      "https://content.fauzanebd.web.id/images/yarowora/Screenshot%202026-01-29%20at%2008.18.03.webp",
    ],
    markdown: `
## About This Project

A public-facing tourism website for **Yaro Wora Village**, located in West Sumba, East Nusa Tenggara, Indonesia.  
The goal of this project was to promote local tourism by showcasing the village’s natural landscapes, cultural heritage, and travel information in a visually engaging and accessible way.

The website serves as the primary digital presence for the village, targeted at both domestic and international visitors.

## My Role

I was responsible for the **entire frontend development lifecycle**, including:

- Designing the UI/UX from scratch with a strong focus on storytelling and visual flow
- Building the frontend using **React and TypeScript**
- Implementing smooth, performant animations using **GSAP**
- Ensuring responsive behavior across mobile, tablet, and desktop devices
- Deploying and maintaining the production website

## Key Highlights

- Visually rich landing experience with smooth scroll-based animations
- Fully responsive layout optimized for low- to mid-range devices
- Optimized image loading for faster page performance
- SEO-friendly structure to improve discoverability

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: GSAP

`,
  },
  {
    id: "3",
    title: "Yaro Wora CMS",
    description:
      "Custom Content Management System for Yaro Wora tourism website",
    image:
      "https://content.fauzanebd.web.id/images/yarowora-dashboard/Screenshot%202026-01-29%20at%2008.51.44.webp",
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
      "https://content.fauzanebd.web.id/images/yarowora-dashboard/Screenshot%202026-01-29%20at%2008.51.14.webp",
      "https://content.fauzanebd.web.id/images/yarowora-dashboard/Screenshot%202026-01-29%20at%2008.51.26.webp",
      "https://content.fauzanebd.web.id/images/yarowora-dashboard/Screenshot%202026-01-29%20at%2008.51.44.webp",
      "https://content.fauzanebd.web.id/images/yarowora-dashboard/Screenshot%202026-01-29%20at%2008.52.08.webp",
    ],
    markdown: `
## About This Project

A custom-built **Content Management System (CMS)** designed to manage all content for the Yaro Wora Tourism Website.  
The CMS enables non-technical administrators to update tourism information, manage media assets, and maintain site content without developer involvement.

This system was built from scratch to meet specific project needs rather than relying on off-the-shelf CMS solutions.

## My Role

I worked as a **Fullstack Developer**, responsible for both system design and implementation:

- Designed and implemented a RESTful backend API using **Golang**
- Built an admin dashboard using **React and TypeScript**
- Designed the database schema using **PostgreSQL**
- Integrated **Cloudflare R2** for scalable media storage
- Implemented authentication and role-based authorization for admin access

## Key Features

- Secure admin authentication and access control
- Media upload and management using object storage
- Structured content management for tourism pages
- Clean and consistent admin UI built with reusable components

## Tech Stack

- **Backend**: Golang (Fiber)
- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Database**: PostgreSQL
- **Storage**: Cloudflare R2
`,
  },
  {
    id: "4",
    title: "Gelael Membership App",
    description: "Mobile membership app for Gelael supermarket chain",
    image: "https://content.fauzanebd.web.id/images/gelaelapp/IMG_0663.webp",
    type: "mobile",
    appStoreLink: "https://apps.apple.com/id/app/gelael-member/id6496972554",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.gelael.member",
    tags: ["Flutter", "Dart"],
    role: "Mobile Developer",
    screenshots: [
      "https://content.fauzanebd.web.id/images/gelaelapp/IMG_0663.webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/IMG_0664.webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/IMG_0665.webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/IMG_0666.webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/IMG_0667.webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/IMG_0668.webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/IMG_0669.webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/IMG_0670.webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/IMG_0671.webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/WhatsApp%20Image%202026-01-29%20at%2012.16.25.webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/WhatsApp%20Image%202026-01-29%20at%2012.16.26%20(1).webp",
      "https://content.fauzanebd.web.id/images/gelaelapp/WhatsApp%20Image%202026-01-29%20at%2012.16.26.webp",
    ],
    markdown: `
## About This Project

A production **mobile membership application** for **Gelael**, a supermarket chain, designed to digitize customer loyalty and improve member engagement.  
The app allows customers to manage their membership, track loyalty points, and access exclusive promotions directly from their mobile devices.

The application is publicly available on both **iOS App Store** and **Google Play Store**.

## My Role

I worked as a **Mobile Developer**, responsible for delivering a cross-platform mobile application:

- Developed the application using **Flutter** for both iOS and Android
- Implemented UI components based on provided design guidelines
- Integrated the app with backend APIs for member data and promotions
- Prepared and published the app to the **App Store** and **Play Store**, including build and release configurations

## Key Features

- Digital membership card for in-store use
- Loyalty points tracking and balance overview
- Member-only promotions and offers
- Store locator to find nearby Gelael locations

## Tech Stack

- **Mobile**: Flutter (Dart)
`,
  },
  {
    id: "5",
    title: "OIA FEB UGM Website",
    description:
      "Official website for Office of International Affairs, Faculty of Economics and Business, UGM",
    image:
      "https://content.fauzanebd.web.id/images/oiafebugm/Screenshot%202026-01-29%20at%2012.54.53.webp",
    type: "public",
    link: "https://oia.feb.ugm.ac.id",
    tags: ["Wordpress", "Elementor"],
    role: "Frontend Developer",
    screenshots: [
      "https://content.fauzanebd.web.id/images/oiafebugm/Screenshot%202026-01-29%20at%2012.54.53.webp",
      "https://content.fauzanebd.web.id/images/oiafebugm/Screenshot%202026-01-29%20at%2012.55.06.webp",
      "https://content.fauzanebd.web.id/images/oiafebugm/Screenshot%202026-01-29%20at%2012.55.15.webp",
      "https://content.fauzanebd.web.id/images/oiafebugm/Screenshot%202026-01-29%20at%2012.55.23.webp",
      "https://content.fauzanebd.web.id/images/oiafebugm/Screenshot%202026-01-29%20at%2012.55.47.webp",
      "https://content.fauzanebd.web.id/images/oiafebugm/Screenshot%202026-01-29%20at%2012.55.59.webp",
    ],
    markdown: `
## About This Project

The official public website for the **Office of International Affairs (OIA)** at the **Faculty of Economics and Business, Universitas Gadjah Mada (UGM)**.  
The website serves as an information hub for international programs, partnerships, news, and student inquiries.

## My Role

I worked as a **Frontend / Web Developer**, focusing on content presentation and usability:

- Built and customized the website using **WordPress** and **Elementor**
- Implemented responsive layouts to ensure accessibility across devices
- Structured pages and content to improve clarity and navigation
- Collaborated with stakeholders to align the site structure with organizational needs

## Key Features

- Information pages for international programs and initiatives
- News and events updates
- Partner university listings
- Contact and inquiry forms

## Tech Stack

- **CMS**: WordPress
- **Page Builder**: Elementor

`,
  },
  {
    id: "6",
    title: "Terumo E-Learning Platform",
    description: "E-learning platform for nursing education",
    image:
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.00.55.webp",
    type: "private",
    tags: ["React", "TypeScript", "Node.js"],
    role: "Fullstack Developer",
    screenshots: [
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.00.55.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.01.12.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.01.50.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.02.03.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.02.21.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.02.43.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.03.04.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.03.19.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.03.42.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.04.05.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.04.15.webp",
      "https://content.fauzanebd.web.id/images/terumoelearn/Screenshot%202026-01-29%20at%2013.04.58.webp",
    ],
    markdown: `
## About This Project

An internal **e-learning platform** developed for **Terumo**, designed to support nursing education related to medical products and best practices.  
The platform delivers structured learning content, assessments, and progress tracking for healthcare professionals.

## My Role

I worked as a **Frontend Developer**, focusing on user experience and interface implementation:

- Designed the UI/UX for the learning platform
- Built the frontend application using **React and TypeScript**
- Implemented course pages, quizzes, and progress views based on backend APIs
- Collaborated with backend engineers to integrate learning data and user progress

## Key Features (Frontend)

- Interactive course interfaces for video and learning materials
- Quiz and assessment UI components
- User progress and completion status views
- Admin-facing interfaces for content management workflows

## Tech Stack

- **Frontend**: React, TypeScript

`,
  },
];

// =============================================================================
// YOUR BLOG POSTS
// =============================================================================
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title:
      "Being a Junior With No Seniors: How Hamilton Accidentally Became My Biggest Growth Project",
    excerpt:
      "I was a junior engineer with no senior guidance, owning a production financial system. This is the story of how shipping fast, accumulating technical debt, and delaying a rewrite became some of the most important lessons in my growth.",
    date: "2024-01-15",
    slug: "building-modern-web-apps",
    tags: ["Web Development", "React", "Best Practices"],
    image: "https://content.fauzanebd.web.id/images/blogs/IMG_5869.webp",
    content: `
# Being a Junior With No Seniors: How Hamilton Accidentally Became My Biggest Growth Project

## Owning a Production System Before I Felt Ready

I joined the Hamilton IFRS Reporting project in late 2021.

My official title was **junior engineer**.  
The responsibility, however, didn’t really match that title.

This wasn’t a toy project or an internal experiment. It was a real production system handling real financial data for real clients, built by a very small team.

At that time, there was no dedicated senior engineer setting standards, reviewing architecture, or acting as a technical safety net. We had to move fast, decisions had to be made, and someone had to own them.

That someone ended up being me while I was still very early in my career.

I didn’t step into a “learning role.” I stepped straight into ownership.



## Choosing Flask Because It Was the Fastest Way Forward

Back then, I wasn’t even focused on web development.

I was learning native mobile development with Kotlin, but the project needed a web backend. There was no time to wait until I felt ready, so I adapted.

I chose Python with Flask for one simple reason:  
it was the fastest path from zero to something that worked.

I learned Flask specifically for this project.

Looking back, Flask wasn’t the ideal choice for a long-lived enterprise system. But at that stage, perfection wasn’t the goal. Delivery was.

We needed something functional, understandable, and fast.

And it worked.



## The Code Worked, Even If the Structure Didn’t

The early system did what it needed to do:

- IFRS reports were generated  
- PostgreSQL handled the data  
- Features shipped to users  

But the structure reflected my experience level at the time.

There were things like:

- weak separation of concerns  
- patterns that felt “okay” but weren’t well thought out  
- very little type safety  
- architectural decisions driven more by intuition than industry practice  

There was no senior engineer to ask, “Is this the right way to do it?”  
No architectural reviews. No shared mental model.

So I relied on what I knew.

As I learned more, I tried to improve the system gradually—refactoring parts, cleaning things up, reducing obvious messes. But some structural problems are hard to fully fix once a system grows.



## Team Changes and Growing Complexity

Over time, the system kept expanding:

- more features  
- more reports  
- more business logic  
- eventually, real paying clients  

The team changed too. Some developers left, new ones joined. Since I had been there the longest, the existing codebase naturally became the reference.

New developers followed the patterns that were already in place.

No one was intentionally writing bad code. We were just building on top of what existed.

That’s how technical debt accumulated. Not from carelessness, but from momentum.



## Knowing a Rewrite Was Needed, But Not Forcing It

At some point, I already knew the system would need a rewrite.

But I didn’t push for it.

A rewrite is risky, and at that time:

- the team was small  
- most people didn’t know Golang or React  
- new features were constantly requested  
- the business was gaining traction  

Rewriting just because the code felt messy would have been irresponsible.

So instead, I focused on preparing myself.

Outside of work, I spent time learning:

- how to write maintainable backend services in Golang  
- how to build scalable frontends with React and TypeScript  
- how production systems are structured in mature engineering teams  

I already had a redesign in mind.  
I just didn’t have a strong enough reason to act on it yet.



## A Small Team Change That Made a Difference

In Q2 2024, I introduced a close friend to my boss and recommended him for the team. He was a strong engineer and already comfortable with Golang and React.

For the first time, there was someone else who shared the same technical direction I had been quietly preparing for.

Still, I didn’t propose the rewrite.



## The Moment That Changed Everything

In Q4 2024, we were informed that a new client didn’t want to use PostgreSQL.  
They required Oracle instead.

Because our software was deployed on-premise in client infrastructure, this wasn’t optional.

That’s when things became clear.

Supporting multiple databases on top of the existing Python codebase with its structure and accumulated technical debt would massively increase complexity. Debugging would be harder. Maintenance would get riskier. The system would become fragile.

This was no longer about code cleanliness.

It was about whether the system could continue evolving safely.

That was the moment I proposed the rewrite.



## Proposing the Rewrite

I proposed rebuilding the system using:

- **Golang** for the backend  
- **React + TypeScript** for the frontend  

Not because they were “better” in general, but because they solved very specific problems we were facing:

- strong typing  
- clearer boundaries  
- cleaner multi-database support  
- better performance and memory characteristics  

I explained the risks, the trade-offs, and the long-term benefits.

The proposal was accepted.

We officially started the rewrite on **January 1st, 2025**.



## Rebuilding the System

This time, I wasn’t experimenting. I was deliberate.

On the backend, I:

- designed the Go codebase structure from scratch  
- used interfaces to support multiple databases (PostgreSQL and Oracle)  
- added Redis caching for expensive reporting queries  
- implemented background processing with Asynq  
- ensured the structure was readable and predictable  

On the frontend, I:

- rebuilt everything with React and TypeScript  
- designed a consistent design system  
- structured the codebase for long-term scalability  
- used TanStack React Query to handle heavy report data efficiently  

One guiding principle was simple:

> New developers shouldn’t have to guess how the system works.  
> The structure itself should guide them.



## One Year After the Rewrite

About a year after starting the rewrite:

- the system is significantly easier to maintain  
- performance is noticeably better  
- memory usage is predictable  
- onboarding new developers is faster  
- supporting new clients feels manageable, not scary  

Most importantly, the team now has a solid foundation.  
People can focus on building features instead of fighting the codebase.



## What This Project Taught Me

Being a junior engineer without senior guidance forced me to grow faster than I expected.

I learned that:

- moving fast early is sometimes necessary  
- technical debt is normal, but it must be paid eventually  
- rewrites should be driven by real constraints, not frustration  
- timing matters just as much as technical correctness  

I’m glad I didn’t rewrite too early.  
I’m also glad I didn’t wait too long.



## Closing

If you’re early in your career and suddenly responsible for a real production system, you will make imperfect decisions.

That’s normal.

What matters is whether you recognize those decisions later, learn from them, and know when it’s time to change direction.

That’s what Hamilton ended up teaching me by accident.

`,
  },
];
