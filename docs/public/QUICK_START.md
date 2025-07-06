# Quick Start Guide - SM Supports Portfolio

## 🚀 Getting Started

This guide will help you get up and running with the SM Supports Portfolio project quickly.

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm or yarn** - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

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
```

Your site will be available at `http://localhost:5173`

## 🎨 Customization

### Changing Colors

Update the primary color in `src/index.css`:

```css
:root {
  --primary: #6366f1; /* Change this to your brand color */
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

Example:
```tsx
// src/components/Services.tsx
const Services = () => {
  return (
    <section id="services" className="py-20">
      {/* Your content */}
    </section>
  );
};

// Add to App.tsx
import Services from './components/Services';
```

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: Optimized touch targets and simplified animations
- **Tablet**: Adaptive layouts with enhanced interactions  
- **Desktop**: Full 3D effects and complex animations

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📚 Next Steps

- Check out the [main README](../README.md) for more details
- Review [Contributing Guidelines](../CONTRIBUTING.md) if you want to contribute
- Explore the codebase in `src/components/` to understand the structure
- Contact maintainers for detailed technical documentation

## 🆘 Need Help?

- **GitHub Issues**: Report bugs or request features
- **GitHub Discussions**: Ask questions and share ideas
- **Documentation**: Check the main README for more information

---

**Happy coding! 🚀** 