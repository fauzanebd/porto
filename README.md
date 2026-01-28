# Portfolio Website

A minimalist portfolio website built with React, TypeScript, Vite, Tailwind CSS, GSAP, anime.js, and Lenis smooth scroll.

## Features

- ✨ Smooth scrolling with Lenis
- 🎨 Minimalist design with Tailwind CSS
- 🎭 Smooth animations with GSAP and anime.js
- 📱 Fully responsive
- 🌗 Dark mode support
- ⚡ Fast performance with Vite
- 📝 Easy to customize - all content in one file

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

## Customization Guide

### Update Your Personal Info

Edit `src/data/portfolio.ts` to customize all your content:

#### Personal Information

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  description: "Your bio/description here...",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername", // Optional
};
```

#### Projects

Add/edit projects in the `projects` array:

```typescript
{
  id: "1",
  title: "Project Name",
  description: "Project description",
  image: "/projects/project1.jpg", // Path to image in public folder
  link: "https://example.com", // Optional - omit for private/internal projects
  tags: ["React", "TypeScript", "Node.js"],
}
```

**For Internal/Private Projects:**

- Just omit the `link` field
- Add a screenshot to the `public/projects/` folder
- The site will automatically show an "Internal/Private" badge

#### Blog Posts

Add/edit blog posts in the `blogPosts` array:

```typescript
{
  id: "1",
  title: "Post Title",
  excerpt: "Short description of the post",
  date: "2024-01-15",
  slug: "post-url-slug",
  tags: ["Tag1", "Tag2"],
}
```

### Adding Project Images

1. Create a `public/projects/` folder if it doesn't exist
2. Add your project images there (e.g., `public/projects/project1.jpg`)
3. Reference them in `portfolio.ts` as `/projects/project1.jpg`

**Tip:** For private/internal projects, take a screenshot and use that as the image!

### Styling Customization

The site uses Tailwind CSS. To customize:

1. **Colors:** Edit `tailwind.config.js` to add your color scheme
2. **Fonts:** Update the Google Fonts import in `src/index.css`
3. **Spacing:** Adjust padding/margin classes directly in components

### Animation Customization

- **Scroll animations:** Adjust in `Projects.tsx` and `Blog.tsx` (GSAP)
- **Page load animations:** Adjust in `Hero.tsx` and `Header.tsx` (anime.js)
- **Smooth scroll speed:** Adjust `duration` in `App.tsx` (Lenis config)

## Project Structure

```
porto/
├── public/               # Static assets
│   └── projects/        # Project images go here
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts # ← EDIT THIS FILE TO UPDATE CONTENT
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
└── package.json
```

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** GSAP, anime.js
- **Smooth Scroll:** Lenis

## Tips

1. **Adding more sections:** Create a new component and import it in `App.tsx`
2. **SEO:** Update `index.html` meta tags and title
3. **Deploy:** The site is static and can be deployed to Vercel, Netlify, or any static hosting

## License

MIT
