# Contributing to SM Supports Portfolio

Thank you for your interest in contributing to our portfolio project! This document provides guidelines for contributing to the codebase.

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **🐛 Bug Reports**: Help us identify and fix issues
- **✨ Feature Requests**: Suggest new features or improvements
- **📝 Documentation**: Improve or expand our documentation
- **🎨 UI/UX Improvements**: Enhance the visual design and user experience
- **⚡ Performance Optimizations**: Help make the site faster
- **♿ Accessibility Improvements**: Make the site more accessible
- **🧪 Testing**: Add tests or improve test coverage

### Before You Start

1. **Check Existing Issues**: Search existing issues to avoid duplicates
2. **Read the Documentation**: Familiarize yourself with our [Developer Guide](./DEVELOPER_GUIDE.md)
3. **Follow the Code Style**: Ensure your code follows our conventions

## 🚀 Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Local Development

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/whimsical-code-canvas-creations.git
cd whimsical-code-canvas-creations

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests (if available)
npm test

# Build for production
npm run build
```

## 📝 Code Style Guidelines

### TypeScript
- Use strict TypeScript configuration
- Define proper interfaces for all props
- Use functional components with hooks
- Avoid `any` type - use proper typing

```tsx
// Good
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  return <button onClick={onClick} className={`btn-${variant}`}>{children}</button>;
};

// Avoid
const Button = (props: any) => {
  return <button {...props} />;
};
```

### React Components
- Use functional components with hooks
- Keep components focused and single-purpose
- Use proper prop interfaces
- Implement proper error boundaries

```tsx
// Good component structure
const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
  // 1. Hooks
  const [state, setState] = useState();
  
  // 2. Event handlers
  const handleClick = useCallback(() => {
    // Handle click
  }, []);
  
  // 3. Effects
  useEffect(() => {
    // Side effects
  }, []);
  
  // 4. Render
  return (
    <div className="my-component">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
```

### CSS/Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Use CSS custom properties for theming
- Ensure accessibility with proper contrast ratios

```css
/* Good: Mobile-first approach */
.component {
  padding: 1rem;
  font-size: 1rem;
}

@media (min-width: 640px) {
  .component {
    padding: 2rem;
    font-size: 1.125rem;
  }
}
```

## 🧪 Testing Guidelines

### Component Testing
- Test component rendering
- Test user interactions
- Test accessibility features
- Test responsive behavior

```tsx
// Example test
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

## 📦 Pull Request Process

### Before Submitting

1. **Test Your Changes**: Ensure everything works locally
2. **Check Performance**: Verify no performance regressions
3. **Test Responsiveness**: Check on different screen sizes
4. **Accessibility**: Ensure WCAG 2.1 compliance
5. **Documentation**: Update docs if needed

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
- [ ] Mobile responsiveness verified

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
- [ ] Performance impact considered
```

### Review Process

1. **Automated Checks**: CI/CD pipeline runs tests
2. **Code Review**: Maintainers review the PR
3. **Testing**: Changes are tested in staging
4. **Merge**: Approved changes are merged to main

## 🐛 Bug Reports

### Before Reporting

1. **Search Existing Issues**: Check if the bug is already reported
2. **Reproduce the Issue**: Ensure you can consistently reproduce it
3. **Check Browser Console**: Look for error messages
4. **Test Different Browsers**: Verify if it's browser-specific

### Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Browser: [e.g. Chrome, Safari]
- OS: [e.g. macOS, Windows]
- Device: [e.g. Desktop, Mobile]

## Additional Context
Screenshots, console logs, etc.
```

## ✨ Feature Requests

### Before Requesting

1. **Check Existing Features**: Ensure the feature doesn't already exist
2. **Consider Impact**: Think about how it affects the overall design
3. **Provide Context**: Explain why the feature is needed

### Feature Request Template

```markdown
## Feature Description
Clear description of the feature

## Problem Statement
What problem does this solve?

## Proposed Solution
How should this be implemented?

## Alternatives Considered
Other approaches you considered

## Additional Context
Screenshots, mockups, etc.
```

## 📚 Documentation Contributions

### Documentation Guidelines

- **Clear and Concise**: Write in simple, understandable language
- **Code Examples**: Include practical code examples
- **Screenshots**: Add visual aids where helpful
- **Keep Updated**: Ensure docs stay current with code changes

### Documentation Areas

- **README.md**: Project overview and quick start
- **Developer Guide**: Comprehensive development documentation
- **API Documentation**: Component APIs and utilities
- **Wiki**: Common questions and troubleshooting

## 🎨 Design Contributions

### Design Guidelines

- **Consistent with Brand**: Follow existing design patterns
- **Accessibility First**: Ensure designs are accessible
- **Mobile-First**: Design for mobile, enhance for desktop
- **Performance Conscious**: Consider performance impact

### Design Process

1. **Proposal**: Submit design proposal with mockups
2. **Review**: Design is reviewed by maintainers
3. **Implementation**: Code implementation follows design
4. **Testing**: Design is tested across devices

## 🚀 Performance Contributions

### Performance Guidelines

- **Measure First**: Use Lighthouse and other tools
- **Optimize Images**: Use appropriate formats and sizes
- **Minimize Bundle Size**: Avoid unnecessary dependencies
- **Lazy Loading**: Implement for non-critical content

### Performance Checklist

- [ ] Lighthouse score > 90
- [ ] Core Web Vitals optimized
- [ ] Bundle size minimized
- [ ] Images optimized
- [ ] Animations performant

## ♿ Accessibility Contributions

### Accessibility Guidelines

- **WCAG 2.1 AA**: Follow accessibility standards
- **Keyboard Navigation**: Ensure full keyboard access
- **Screen Reader Support**: Provide proper ARIA labels
- **Color Contrast**: Maintain sufficient contrast ratios

### Accessibility Checklist

- [ ] All interactive elements keyboard accessible
- [ ] Proper ARIA labels and roles
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Screen reader friendly
- [ ] Focus indicators visible

## 📞 Getting Help

### Communication Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and ideas
- **Documentation**: Check our comprehensive guides

### Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please:

- **Be Respectful**: Treat others with respect
- **Be Inclusive**: Welcome diverse perspectives
- **Be Constructive**: Provide helpful feedback
- **Be Patient**: Allow time for responses

## 🙏 Recognition

Contributors will be recognized in:

- **README.md**: Listed as contributors
- **Release Notes**: Acknowledged in releases
- **Documentation**: Credited in relevant docs

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing to SM Supports Portfolio! 🚀**

Your contributions help make this project better for everyone. We appreciate your time and effort! 