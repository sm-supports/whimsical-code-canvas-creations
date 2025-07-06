# SM Supports Portfolio Wiki

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Common Questions](#common-questions)
3. [Troubleshooting](#troubleshooting)
4. [Best Practices](#best-practices)
5. [Advanced Topics](#advanced-topics)
6. [Performance Optimization](#performance-optimization)
7. [Accessibility Guidelines](#accessibility-guidelines)
8. [Deployment Guide](#deployment-guide)

## 🚀 Getting Started

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/sm-supports/whimsical-code-canvas-creations.git

# Navigate to project directory
cd whimsical-code-canvas-creations

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure Overview

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects gallery
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Site footer
│   └── Navbar.tsx      # Navigation
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Route components
└── styles/             # Global styles
```

## ❓ Common Questions

### Q: How do I add a new section to the website?

**A:** To add a new section:

1. Create a new component in `src/components/`
2. Add the component to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`
4. Add corresponding section ID for smooth scrolling

```tsx
// Example: Adding a Services section
// 1. Create src/components/Services.tsx
const Services = () => {
  return (
    <section id="services" className="py-20">
      {/* Your content */}
    </section>
  );
};

// 2. Add to App.tsx
import Services from './components/Services';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services /> {/* Add here */}
      <Skills />
      {/* ... */}
    </div>
  );
}

// 3. Update Navbar.tsx
const navItems = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" }, // Add here
  // ...
];
```

### Q: How do I customize the color scheme?

**A:** The project uses CSS custom properties for theming. Update the variables in your CSS:

```css
/* In src/index.css or your main CSS file */
:root {
  --primary: #6366f1;           /* Main brand color */
  --primary-foreground: #ffffff; /* Text on primary */
  --background: #ffffff;         /* Page background */
  --foreground: #0f172a;        /* Main text color */
  --muted: #f1f5f9;            /* Muted background */
  --muted-foreground: #64748b;  /* Muted text */
}

/* Dark mode variables */
[data-theme="dark"] {
  --background: #0f172a;
  --foreground: #f8fafc;
  --muted: #1e293b;
  --muted-foreground: #94a3b8;
}
```

### Q: How do I add new animations?

**A:** Add custom animations to your CSS:

```css
/* In src/index.css */
@keyframes your-animation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.animate-your-animation {
  animation: your-animation 2s ease-in-out infinite;
}
```

### Q: How do I optimize images for the website?

**A:** Use the following guidelines:

1. **Format**: Use WebP for better compression
2. **Size**: Optimize for web (max 800px width for most images)
3. **Lazy Loading**: Use `loading="lazy"` attribute
4. **Responsive**: Use `srcset` for different screen sizes

```tsx
<img
  src="/uploads/your-image.webp"
  alt="Description"
  loading="lazy"
  className="w-full h-auto"
  width="800"
  height="600"
/>
```

## 🔧 Troubleshooting

### Issue: Animations not working on mobile

**Solution:**
1. Check if animations are disabled for mobile in CSS
2. Ensure `prefers-reduced-motion` is respected
3. Verify animation classes are applied correctly

```css
/* Check for mobile animation overrides */
@media (max-width: 640px) {
  .animate-float-slow {
    animation: none; /* This might be the issue */
  }
}
```

### Issue: Smooth scrolling not working

**Solution:**
1. Verify section IDs exist in HTML
2. Check for JavaScript errors in console
3. Ensure scroll behavior is supported

```tsx
// Debug scroll function
const scrollToSection = (sectionId: string) => {
  console.log('Scrolling to:', sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error('Section not found:', sectionId);
  }
};
```

### Issue: Form submission not working

**Solution:**
1. Check browser console for errors
2. Verify form validation
3. Ensure proper event handling

```tsx
// Add error handling to form submission
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // Your form logic here
    console.log('Form submitted successfully');
  } catch (error) {
    console.error('Form submission error:', error);
  }
};
```

### Issue: Performance issues on mobile

**Solution:**
1. Reduce animation complexity on mobile
2. Optimize images and assets
3. Use lazy loading for non-critical content

```tsx
// Use mobile detection for performance optimization
const { isMobile } = useIsMobile();

return (
  <div className={isMobile ? 'simplified-animations' : 'full-animations'}>
    {/* Content */}
  </div>
);
```

## ✅ Best Practices

### Code Organization

1. **Component Structure**
   ```tsx
   // Good: Clear component structure
   const MyComponent = () => {
     // 1. Hooks
     const [state, setState] = useState();
     
     // 2. Event handlers
     const handleClick = () => {};
     
     // 3. Effects
     useEffect(() => {}, []);
     
     // 4. Render
     return <div>Content</div>;
   };
   ```

2. **File Naming**
   ```
   ✅ Good: Hero.tsx, ContactForm.tsx, useMobile.ts
   ❌ Bad: hero.tsx, contact-form.tsx, use-mobile.ts
   ```

3. **Import Organization**
   ```tsx
   // 1. React imports
   import React, { useState, useEffect } from 'react';
   
   // 2. Third-party libraries
   import { Button } from '@/components/ui/button';
   
   // 3. Local components
   import { Hero } from '@/components/Hero';
   
   // 4. Utilities and hooks
   import { useIsMobile } from '@/hooks/use-mobile';
   ```

### Styling Guidelines

1. **Mobile-First Approach**
   ```css
   /* Start with mobile styles */
   .component {
     padding: 1rem;
   }
   
   /* Add responsive modifiers */
   @media (min-width: 640px) {
     .component {
       padding: 2rem;
     }
   }
   ```

2. **Consistent Spacing**
   ```css
   /* Use design system spacing */
   .spacing-xs { margin: 0.25rem; }
   .spacing-sm { margin: 0.5rem; }
   .spacing-md { margin: 1rem; }
   .spacing-lg { margin: 1.5rem; }
   .spacing-xl { margin: 2rem; }
   ```

3. **Animation Performance**
   ```css
   /* Use transform and opacity for smooth animations */
   .animate-smooth {
     transform: translateY(0);
     opacity: 1;
     transition: transform 0.3s ease, opacity 0.3s ease;
   }
   ```

### Accessibility

1. **Semantic HTML**
   ```tsx
   // Good: Semantic structure
   <section aria-labelledby="contact-heading">
     <h2 id="contact-heading">Contact Us</h2>
     <form role="form" aria-label="Contact form">
       {/* Form content */}
     </form>
   </section>
   ```

2. **Keyboard Navigation**
   ```tsx
   // Ensure all interactive elements are keyboard accessible
   <button
     onClick={handleClick}
     onKeyDown={(e) => e.key === 'Enter' && handleClick()}
     tabIndex={0}
   >
     Click me
   </button>
   ```

3. **ARIA Labels**
   ```tsx
   // Provide clear labels for screen readers
   <button aria-label="Toggle mobile menu" aria-expanded={isOpen}>
     <Menu className="w-6 h-6" />
   </button>
   ```

## 🚀 Advanced Topics

### Custom Hooks

Create reusable logic with custom hooks:

```tsx
// src/hooks/use-scroll-position.ts
import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

// Usage
const MyComponent = () => {
  const scrollY = useScrollPosition();
  return <div>Scrolled: {scrollY}px</div>;
};
```

### Context API

Manage global state with React Context:

```tsx
// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

### Performance Optimization

1. **React.memo for Component Memoization**
   ```tsx
   const ExpensiveComponent = React.memo(({ data }) => {
     return <div>{/* Expensive rendering */}</div>;
   });
   ```

2. **useCallback for Function Memoization**
   ```tsx
   const handleClick = useCallback(() => {
     // Expensive operation
   }, [dependencies]);
   ```

3. **useMemo for Value Memoization**
   ```tsx
   const expensiveValue = useMemo(() => {
     return computeExpensiveValue(data);
   }, [data]);
   ```

## ⚡ Performance Optimization

### Bundle Size Optimization

1. **Code Splitting**
   ```tsx
   // Lazy load components
   const LazyComponent = React.lazy(() => import('./LazyComponent'));
   
   function App() {
     return (
       <Suspense fallback={<div>Loading...</div>}>
         <LazyComponent />
       </Suspense>
     );
   }
   ```

2. **Tree Shaking**
   ```tsx
   // Import only what you need
   import { Button } from '@/components/ui/button';
   // Instead of: import * as UI from '@/components/ui';
   ```

3. **Image Optimization**
   ```tsx
   // Use next/image or similar for automatic optimization
   <img
     src="/optimized-image.webp"
     alt="Description"
     loading="lazy"
     decoding="async"
   />
   ```

### Runtime Performance

1. **Debounce Expensive Operations**
   ```tsx
   import { debounce } from 'lodash';
   
   const debouncedSearch = debounce((query) => {
     // Expensive search operation
   }, 300);
   ```

2. **Virtual Scrolling for Large Lists**
   ```tsx
   // Use react-window or similar for large datasets
   import { FixedSizeList as List } from 'react-window';
   ```

3. **Intersection Observer for Lazy Loading**
   ```tsx
   const useIntersectionObserver = (callback: () => void) => {
     const ref = useRef<HTMLElement>(null);
     
     useEffect(() => {
       const observer = new IntersectionObserver(callback);
       if (ref.current) observer.observe(ref.current);
       return () => observer.disconnect();
     }, [callback]);
     
     return ref;
   };
   ```

## ♿ Accessibility Guidelines

### WCAG 2.1 Compliance

1. **Color Contrast**
   ```css
   /* Ensure sufficient color contrast */
   .text-primary {
     color: #6366f1; /* 4.5:1 contrast ratio minimum */
   }
   ```

2. **Focus Indicators**
   ```css
   /* Visible focus indicators */
   .focus-visible:focus {
     outline: 2px solid #6366f1;
     outline-offset: 2px;
   }
   ```

3. **Screen Reader Support**
   ```tsx
   // Provide alternative text
   <img src="logo.png" alt="SM Supports Logo" />
   
   // Use semantic HTML
   <button aria-label="Close menu">
     <X className="w-6 h-6" />
   </button>
   ```

### Keyboard Navigation

1. **Tab Order**
   ```tsx
   // Ensure logical tab order
   <div tabIndex={0}>
     <button tabIndex={0}>First</button>
     <button tabIndex={0}>Second</button>
   </div>
   ```

2. **Skip Links**
   ```tsx
   // Provide skip links for main content
   <a href="#main-content" className="sr-only focus:not-sr-only">
     Skip to main content
   </a>
   ```

## 🚀 Deployment Guide

### Netlify Deployment

1. **Automatic Deployment**
   - Connect GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables**
   ```env
   # .env.production
   VITE_APP_TITLE=SM Supports Portfolio
   VITE_APP_DESCRIPTION=Modern web development services
   ```

3. **Custom Domain**
   - Add custom domain in Netlify dashboard
   - Configure DNS settings
   - SSL certificate is automatically provisioned

### Build Optimization

1. **Production Build**
   ```bash
   # Create optimized build
   npm run build
   
   # Preview build locally
   npm run preview
   ```

2. **Bundle Analysis**
   ```bash
   # Analyze bundle size
   npm run build --analyze
   ```

3. **Performance Monitoring**
   - Use Lighthouse for performance audits
   - Monitor Core Web Vitals
   - Set up error tracking (Sentry, etc.)

### Continuous Integration

1. **GitHub Actions**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to Netlify
   on:
     push:
       branches: [main]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
         - run: npm ci
         - run: npm run build
         - uses: nwtgck/actions-netlify@v1.2
   ```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Performance Best Practices](https://web.dev/performance/)

For more detailed information, refer to the [Developer Guide](./DEVELOPER_GUIDE.md) and [API Documentation](./API_DOCUMENTATION.md). 