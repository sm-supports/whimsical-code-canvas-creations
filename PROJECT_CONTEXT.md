# Project Context: Whimsical Code Canvas Creations

## Project Overview
A modern, responsive portfolio website showcasing various creative and development projects. Built with React, TypeScript, and modern web technologies, featuring smooth animations, responsive design, and a dark/light theme system.

## Technical Stack
- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with shadcn/ui components
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Animations**: Framer Motion
- **3D Graphics**: Three.js (via ThreeDServiceCube component)
- **Package Manager**: Bun

## Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── ProjectLayout.tsx # Common layout for project pages
│   ├── ProjectCard.tsx  # Card component for project displays
│   ├── Navbar.tsx      # Main navigation component
│   └── ...             # Other components
├── pages/              # Route pages
│   ├── Index.tsx       # Home page
│   ├── WebDevelopmentProjects.tsx
│   ├── ReactDevelopmentProjects.tsx
│   ├── GraphicDesignProjects.tsx
│   ├── IllustrationProjects.tsx
│   └── NotFound.tsx    # 404 page
├── hooks/             # Custom React hooks
└── lib/              # Utility functions and helpers
```

## Key Features

### Navigation System
- Hash-based navigation for smooth scrolling to sections on the home page
- State preservation when navigating between pages
- Dropdown menu for project categories
- Mobile-responsive hamburger menu

### Page Types
1. **Home Page (Index.tsx)**
   - Sections: Home, About, Skills, Projects, Contact
   - Smooth scroll navigation
   - Section hash preservation

2. **Project Pages**
   - Common layout using ProjectLayout component
   - Project cards with consistent styling
   - Categories:
     - Web Development
     - React Development
     - Graphic Design
     - Illustration

### Components Architecture

#### ProjectLayout
- Purpose: Provides consistent layout for project pages
- Features:
  - Back navigation with hash state preservation
  - Title and description display
  - Badge system for skills/features
  - SEO meta tags management

#### Navbar
- Features:
  - Responsive design
  - Projects dropdown menu
  - Section navigation
  - Theme toggle
  - Hash state preservation during navigation

#### ProjectCard
- Purpose: Display individual projects
- Properties:
  - Title
  - Description
  - Image
  - Year
  - Technologies
  - Live/Github links

### Theme System
- Dark/Light mode support
- Persistent theme preference storage
- Custom color scheme with primary/secondary colors
- Gradient backgrounds and text effects

### Animation Patterns
- Page transitions using Framer Motion
- Smooth section scrolling
- Loading states with suspense
- Interactive hover effects

### Routing Structure
```
/                           # Home page with sections
/projects/web-development   # Web Development projects
/projects/react-development # React Development projects
/projects/graphic-design    # Graphic Design projects
/projects/illustration      # Illustration projects
```

## Development Patterns

### State Management
- URL hash state for section navigation
- Theme preference in localStorage
- React Query for potential API integrations
- Component-local state for UI interactions

### Code Organization
- Lazy loading for route components
- Consistent file structure
- Shared layouts and components
- Type safety with TypeScript
- Utility-first CSS with Tailwind

### Performance Considerations
- Code splitting via React.lazy()
- Image optimization
- Smooth animations
- Responsive design patterns

## Future Development Areas
1. Project data could be moved to a CMS
2. Add blog section
3. Implement contact form functionality
4. Add more interactive 3D elements
5. Enhance SEO capabilities
6. Add project filtering and search
7. Implement project case studies
8. Add animation variants for theme transitions

## Design System
- Font Scale: Responsive typography system
- Space Scale: Consistent spacing units
- Color Palette:
  - Primary: Custom theme-aware color
  - Background: Gradient variations
  - Text: Foreground/muted variants
  - Accent colors for different sections

## Accessibility
- ARIA labels in navigation
- Keyboard navigation support
- Color contrast compliance
- Screen reader considerations
- Focus management

## Build and Deployment
- Vite for fast development and builds
- Netlify for hosting (netlify.toml configuration)
- Environment-based configuration
- TypeScript strict mode enabled

This context file serves as a comprehensive guide for AI assistance in future development tasks, providing necessary context about the project's architecture, patterns, and conventions.
