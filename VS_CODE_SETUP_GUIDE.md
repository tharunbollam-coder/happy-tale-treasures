# KidsStories - Complete VS Code Setup Guide

## 📋 Prerequisites

### Required Software
1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **VS Code** - [Download here](https://code.visualstudio.com/)
3. **Git** - [Download here](https://git-scm.com/)

### Verify Installation
```bash
node --version  # Should be v18+
npm --version   # Should be 9+
git --version   # Any recent version
```

## 🚀 Project Setup

### 1. Clone the Repository
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Your app will be available at `http://localhost:8080`

## 🔧 Essential VS Code Extensions

### Must-Have Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json",
    "bradlc.vscode-tailwindcss"
  ]
}
```

### Install Extensions
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search and install each extension above

## 📁 Project Structure Overview

### Core Directories
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── Layout.tsx      # Main layout wrapper
│   └── ...
├── pages/              # Route components
│   ├── Home.tsx        # Homepage
│   ├── Stories.tsx     # Stories listing
│   ├── StoryDetail.tsx # Individual story view
│   └── ...
├── data/               # Static data
│   ├── stories.ts      # Story data
│   └── series.ts       # Series data
├── assets/             # Images and static files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── utils/              # Helper utilities
```

### Key Configuration Files
- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `src/index.css` - Global styles and design tokens
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules

## 🎨 Design System

### Color System
All colors are defined in `src/index.css` using CSS variables:
```css
:root {
  --primary: 220 90% 56%;
  --secondary: 320 65% 52%;
  --accent: 47 96% 64%;
  /* ... more colors */
}
```

### Using Colors in Components
```tsx
// ✅ Correct - Use semantic tokens
<div className="bg-primary text-primary-foreground">

// ❌ Wrong - Don't use direct colors
<div className="bg-blue-500 text-white">
```

## 📄 Page Development Guide

### Creating a New Page

1. **Create the page component** in `src/pages/`:
```tsx
// src/pages/NewPage.tsx
import { SEO } from "@/components/SEO";

const NewPage = () => {
  return (
    <>
      <SEO 
        title="New Page - KidsStories"
        description="Description for the new page"
      />
      <main>
        <h1>New Page</h1>
      </main>
    </>
  );
};

export default NewPage;
```

2. **Add route** in `src/App.tsx`:
```tsx
import NewPage from "@/pages/NewPage";

// Add to Routes
<Route path="/new-page" element={<NewPage />} />
```

### Page Structure Best Practices
```tsx
const PageComponent = () => {
  return (
    <>
      {/* SEO Component - Always include */}
      <SEO title="Page Title" description="..." />
      
      {/* Main content with semantic HTML */}
      <main className="container mx-auto px-4 py-8">
        <header>
          <h1 className="text-4xl font-bold">Page Title</h1>
        </header>
        
        <section>
          {/* Page content */}
        </section>
      </main>
    </>
  );
};
```

## 🧩 Component Development

### Creating UI Components

1. **Basic Component Structure**:
```tsx
// src/components/MyComponent.tsx
import { cn } from "@/lib/utils";

interface MyComponentProps {
  children: React.ReactNode;
  className?: string;
}

export const MyComponent = ({ children, className }: MyComponentProps) => {
  return (
    <div className={cn("default-styles", className)}>
      {children}
    </div>
  );
};
```

2. **Using shadcn/ui Components**:
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Use in your component
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button variant="default">Click me</Button>
  </CardContent>
</Card>
```

## 📚 Data Management

### Adding New Stories
Edit `src/data/stories.ts`:
```tsx
export const stories: Story[] = [
  {
    id: "new-story",
    title: "New Story Title",
    description: "Story description",
    content: "Full story content...",
    imageUrl: "/src/assets/new-story.jpg",
    category: "Adventure",
    ageGroup: "5-7",
    readingTime: 5,
    moralLesson: "The lesson learned",
    wordHelper: [
      {
        word: "difficult-word",
        meaning: "Kid-friendly explanation"
      }
    ]
  }
];
```

### Adding Images
1. Place images in `src/assets/`
2. Import in components:
```tsx
import storyImage from "@/assets/story-image.jpg";

<img src={storyImage} alt="Story image" />
```

## 🛠 Development Workflow

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Git Workflow
```bash
git add .
git commit -m "feat: add new story page"
git push origin main
```

## 🔍 Debugging Tools

### VS Code Debugging
1. Install React Developer Tools browser extension
2. Use VS Code's built-in debugger
3. Set breakpoints in your code

### Browser DevTools
- **Console**: Check for errors and logs
- **Network**: Monitor API requests
- **React DevTools**: Inspect component state

## 📱 Responsive Design

### Breakpoint System
```tsx
// Mobile-first approach
<div className="
  text-sm          // Mobile
  md:text-base     // Tablet
  lg:text-lg       // Desktop
  xl:text-xl       // Large desktop
">
```

### Common Responsive Patterns
```tsx
// Grid layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// Flex layout
<div className="flex flex-col md:flex-row items-center">

// Hide/show elements
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>
```

## 🎯 Performance Tips

### Image Optimization
- Use WebP format when possible
- Implement lazy loading with `LazyImage` component
- Optimize image dimensions

### Code Splitting
- Use React.lazy() for large components
- Split routes for better loading

### Bundle Analysis
```bash
npm run build
npm run preview
```

## 🚨 Common Issues & Solutions

### TypeScript Errors
- Check import paths use `@/` alias
- Ensure all props are properly typed
- Use `npm run lint` to catch issues

### Styling Issues
- Use design system tokens from `index.css`
- Check Tailwind classes are correct
- Verify responsive breakpoints

### Build Issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for unused imports
- Verify all assets are properly imported

## 📖 Learning Resources

### Documentation
- [React Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/guide/)

### Project-Specific
- Check existing components for patterns
- Follow the established file structure
- Use the same naming conventions

## 🎉 Quick Start Checklist

- [ ] Install Node.js, VS Code, Git
- [ ] Clone repository and install dependencies
- [ ] Install recommended VS Code extensions
- [ ] Run `npm run dev` and verify app loads
- [ ] Explore project structure
- [ ] Create a test component/page
- [ ] Commit and push changes

## 💡 Pro Tips

1. **Use component composition** - Break down complex components
2. **Follow the design system** - Always use semantic tokens
3. **Write semantic HTML** - Important for accessibility and SEO
4. **Test on different screen sizes** - Use browser DevTools
5. **Keep components small** - Easier to maintain and debug
6. **Use TypeScript** - Catch errors early
7. **Follow naming conventions** - PascalCase for components, camelCase for variables

---

🎈 **Ready to build amazing kids' stories!** Start with exploring the existing components and pages to understand the patterns, then create your first new feature.