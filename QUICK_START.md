# Quick Start Guide

## Your Portfolio is Ready! 🎉

The development server is running at: **http://localhost:5174/**

## Next Steps

### 1. Update Your Information

Open `src/data/portfolio.ts` and update:

- Your name, title, and bio
- Your social media links (GitHub, LinkedIn, etc.)
- Your email address

### 2. Add Your Projects

In the same file (`src/data/portfolio.ts`), edit the `projects` array:

```typescript
{
  id: "1",
  title: "Your Project Name",
  description: "What does this project do?",
  image: "/projects/my-project.jpg",
  link: "https://your-project-url.com", // Optional
  tags: ["React", "TypeScript", "API"],
}
```

**For Private/Internal Projects:**

- Remove the `link` field
- Take a screenshot and save it in `public/projects/`
- The site will automatically show "Internal/Private" badge

### 3. Add Your Blog Posts

Update the `blogPosts` array in `src/data/portfolio.ts`:

```typescript
{
  id: "1",
  title: "My First Post",
  excerpt: "A brief description of what this post is about",
  date: "2024-01-28",
  slug: "my-first-post",
  tags: ["Web Dev", "React"],
}
```

### 4. Add Project Images

1. Create screenshots or images of your projects
2. Save them in `public/projects/` folder
3. Name them clearly (e.g., `ecommerce-project.jpg`)
4. Reference them in `portfolio.ts` as `/projects/filename.jpg`

### 5. Customize the Look

All styling is done with Tailwind CSS. To customize:

- **Colors:** Edit `tailwind.config.js`
- **Fonts:** Change the Google Fonts import in `src/index.css`
- **Animation speed:** Adjust in `App.tsx` (Lenis config) and component files

### 6. Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder that you can deploy to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Features You Have

✅ Smooth scrolling (Lenis)  
✅ Smooth animations (GSAP + anime.js)  
✅ Responsive design  
✅ Dark mode support  
✅ Easy content management (single file!)  
✅ Support for private/internal projects

## Need Help?

Check out the full `README.md` for more detailed documentation.

---

**Pro Tip:** Start by replacing the placeholder content with your real information, then add one project at a time with real screenshots!
