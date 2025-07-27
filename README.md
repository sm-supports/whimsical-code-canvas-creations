# SM Supports Portfolio

A modern, responsive portfolio website showcasing web development, React Native, and full-stack development services. Built with cutting-edge technologies and featuring stunning 3D visual effects.

![SM Supports Portfolio](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- **🎨 Modern 3D Design**: Floating elements, gradient orbs, and perspective transforms
- **📱 Responsive Design**: Mobile-first approach with adaptive layouts
- **⚡ Performance Optimized**: Fast loading with optimized animations and assets
- **♿ Accessibility First**: WCAG 2.1 compliant with keyboard navigation
- **🌙 Dark Mode**: Seamless theme switching with system preference detection
- **📧 Contact Integration**: Modern contact form with validation
- **🚀 SEO Optimized**: Meta tags, structured data, and performance metrics

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for lightning-fast development
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui for consistent design
- **Animations**: CSS animations and Intersection Observer
- **Deployment**: Netlify with automatic deployments

## 🚀 Quick Start

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

Create a `.env.local` file for environment variables:

```env
VITE_APP_TITLE=SM Supports Portfolio
VITE_APP_DESCRIPTION=Modern web development and design services
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects gallery
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Route components
```

## 🎨 Customization

### Color Scheme
Update the design tokens in your CSS:

```css
:root {
  --primary: #6366f1;           /* Main brand color */
  --background: #ffffff;         /* Page background */
  --foreground: #0f172a;        /* Main text color */
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Add it to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Optimized touch targets and simplified animations
- **Tablet**: Adaptive layouts with enhanced interactions
- **Desktop**: Full 3D effects and complex animations

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for user experience
- **Bundle Size**: Minimized with tree shaking and code splitting
- **Image Optimization**: WebP format with lazy loading

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

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📚 Documentation

### Public Documentation
- **[Quick Start Guide](./docs/public/QUICK_START.md)**: Get up and running quickly
- **[Contributing Guidelines](./CONTRIBUTING.md)**: How to contribute to the project

### Internal Documentation (Private)
Detailed technical documentation is available to contributors and maintainers. Contact the project maintainers for access to:
- Developer Guide
- API Documentation  
- Wiki and troubleshooting guides

## 🆘 Support

- **Issues**: Create GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Documentation**: Check our comprehensive guides above

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://react.dev/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Vite](https://vitejs.dev/) for the fast build tool

---

**Built with ❤️ by SM Supports**

[Live Demo](https://smsupports.com) | [GitHub](https://github.com/sm-supports/whimsical-code-canvas-creations)
