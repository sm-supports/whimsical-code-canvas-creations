# Developer Guide - SM Supports Portfolio

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Architecture](#project-architecture)
4. [Component Structure](#component-structure)
5. [Styling Guidelines](#styling-guidelines)
6. [State Management](#state-management)
7. [Performance Considerations](#performance-considerations)
8. [Testing Strategy](#testing-strategy)
9. [Deployment](#deployment)
10. [Contributing Guidelines](#contributing-guidelines)

## 🎯 Project Overview

This is a modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. The project showcases web development, React Native, and full-stack development services with a focus on modern design and user experience.

### Key Features
- **3D Visual Effects**: Floating elements, gradient orbs, and perspective transforms
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Modern Animations**: Smooth transitions and scroll-triggered animations
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Performance**: Optimized images, lazy loading, and efficient rendering

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

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

# Preview production build
npm run preview
```

### Environment Setup

The project uses environment variables for configuration. Create a `.env.local` file:

```env
VITE_APP_TITLE=SM Supports Portfolio
VITE_APP_DESCRIPTION=Modern web development and design services
```

## 🏗️ Project Architecture

### Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects gallery
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Route components
└── styles/             # Global styles
```

### Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui for consistent design
- **Animations**: Framer Motion and CSS animations
- **Routing**: React Router for navigation
- **Deployment**: Netlify with automatic deployments

## 🧩 Component Structure

### Component Guidelines

1. **Functional Components**: Use functional components with hooks
2. **TypeScript**: Strict typing for all props and state
3. **Props Interface**: Define clear interfaces for component props
4. **Default Props**: Use default parameters instead of defaultProps
5. **Error Boundaries**: Wrap major sections in error boundaries

### Example Component Structure

```typescript
interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
}

const Component: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  className = "" 
}) => {
  // Component logic here
  
  return (
    <section className={`component ${className}`}>
      {/* JSX content */}
    </section>
  );
};

export default Component;
```

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices

1. **Mobile-First**: Start with mobile styles, then add responsive modifiers
2. **Custom Classes**: Use `@apply` for complex, reusable styles
3. **Consistent Spacing**: Use the design system spacing scale
4. **Dark Mode**: Support both light and dark themes
5. **Performance**: Minimize CSS bundle size with purging

### Design System

```css
/* Custom CSS Variables */
:root {
  --primary: #6366f1;
  --primary-foreground: #ffffff;
  --background: #ffffff;
  --foreground: #0f172a;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
}

/* Dark mode variables */
[data-theme="dark"] {
  --background: #0f172a;
  --foreground: #f8fafc;
  --muted: #1e293b;
  --muted-foreground: #94a3b8;
}
```

### Animation Guidelines

1. **Performance**: Use `transform` and `opacity` for smooth animations
2. **Accessibility**: Respect `prefers-reduced-motion`
3. **Consistency**: Use standardized duration and easing curves
4. **Mobile**: Reduce animation complexity on mobile devices

## 🔄 State Management

### Local State
- Use `useState` for component-specific state
- Use `useReducer` for complex state logic
- Keep state as close to where it's used as possible

### Global State
- Consider React Context for theme and user preferences
- Use URL state for navigation and filters
- Avoid prop drilling with proper component composition

### Example State Pattern

```typescript
interface FormState {
  name: string;
  email: string;
  message: string;
  isSubmitting: boolean;
}

const useContactForm = () => {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    isSubmitting: false
  });

  const updateField = (field: keyof FormState, value: string) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  const submitForm = async () => {
    setState(prev => ({ ...prev, isSubmitting: true }));
    // Form submission logic
    setState(prev => ({ ...prev, isSubmitting: false }));
  };

  return { state, updateField, submitForm };
};
```

## ⚡ Performance Considerations

### Optimization Strategies

1. **Code Splitting**: Use React.lazy for route-based splitting
2. **Image Optimization**: Use WebP format and responsive images
3. **Bundle Analysis**: Monitor bundle size with `npm run build --analyze`
4. **Caching**: Implement proper cache headers for static assets
5. **Lazy Loading**: Load non-critical components and images on demand

### Performance Monitoring

```typescript
// Custom hook for performance monitoring
const usePerformanceMonitor = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      console.log(`${componentName} render time: ${endTime - startTime}ms`);
    };
  });
};
```

## 🧪 Testing Strategy

### Testing Levels

1. **Unit Tests**: Test individual components and functions
2. **Integration Tests**: Test component interactions
3. **E2E Tests**: Test complete user workflows
4. **Visual Regression**: Ensure UI consistency

### Testing Tools

- **Jest**: Unit and integration testing
- **React Testing Library**: Component testing
- **Cypress**: E2E testing
- **Storybook**: Component documentation and testing

### Example Test

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  it('renders contact form', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    render(<Contact />);
    
    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' }
    });
    
    fireEvent.click(screen.getByText('Send Message'));
    
    expect(await screen.findByText('Message Sent!')).toBeInTheDocument();
  });
});
```

## 🚀 Deployment

### Netlify Deployment

1. **Automatic Deployments**: Connected to main branch
2. **Preview Deployments**: Created for pull requests
3. **Environment Variables**: Configured in Netlify dashboard
4. **Custom Domain**: SSL certificate automatically provisioned

### Build Configuration

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deployment Checklist

- [ ] All tests pass
- [ ] Build completes successfully
- [ ] Performance metrics are acceptable
- [ ] Accessibility audit passes
- [ ] Cross-browser testing completed

## 🤝 Contributing Guidelines

### Development Workflow

1. **Create Feature Branch**: `git checkout -b feature/your-feature`
2. **Make Changes**: Follow coding standards and add tests
3. **Commit Changes**: Use conventional commit messages
4. **Push Branch**: `git push origin feature/your-feature`
5. **Create PR**: Add description and link related issues
6. **Code Review**: Address feedback and make improvements
7. **Merge**: Squash and merge when approved

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Examples:
- `feat(contact): add form validation`
- `fix(hero): resolve mobile animation issues`
- `docs(readme): update installation instructions`

### Code Review Checklist

- [ ] Code follows project conventions
- [ ] TypeScript types are properly defined
- [ ] Component is responsive and accessible
- [ ] Tests are included and passing
- [ ] Performance impact is considered
- [ ] Documentation is updated

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing done

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Vite Documentation](https://vitejs.dev/)

## 🆘 Getting Help

- **Issues**: Create GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Documentation**: Check this guide and component documentation
- **Code Review**: Request reviews from maintainers

---

**Happy Coding! 🚀** 