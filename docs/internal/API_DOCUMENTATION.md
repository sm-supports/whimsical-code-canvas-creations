# API Documentation - SM Supports Portfolio

## 📋 Table of Contents

1. [Component APIs](#component-apis)
2. [Custom Hooks](#custom-hooks)
3. [Utility Functions](#utility-functions)
4. [Styling System](#styling-system)
5. [Animation System](#animation-system)
6. [Integration Examples](#integration-examples)

## 🧩 Component APIs

### Hero Component

```typescript
interface HeroProps {
  // No props currently - self-contained component
}

const Hero: React.FC<HeroProps> = () => {
  // Component implementation
}
```

**Features:**
- 3D floating elements with perspective transforms
- Typing animation for skill showcase
- Responsive design with mobile optimizations
- Smooth scroll navigation

**Usage:**
```tsx
import { Hero } from '@/components/Hero';

function App() {
  return (
    <div>
      <Hero />
      {/* Other components */}
    </div>
  );
}
```

### Contact Component

```typescript
interface ContactProps {
  // No props currently - self-contained component
}

const Contact: React.FC<ContactProps> = () => {
  // Component implementation
}
```

**Features:**
- Form validation and submission handling
- 3D visual effects matching Hero design
- Contact information cards with hover effects
- Accessibility features (ARIA labels, keyboard navigation)

**Usage:**
```tsx
import { Contact } from '@/components/Contact';

function App() {
  return (
    <div>
      <Contact />
    </div>
  );
}
```

### Footer Component

```typescript
interface FooterProps {
  // No props currently - self-contained component
}

const Footer: React.FC<FooterProps> = () => {
  // Component implementation
}
```

**Features:**
- Mobile-first responsive design
- Social media links with hover effects
- Theme toggle integration
- Smooth scroll for hash links

**Usage:**
```tsx
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div>
      <Footer />
    </div>
  );
}
```

## 🎣 Custom Hooks

### useIsMobile Hook

```typescript
interface UseIsMobileReturn {
  isMobile: boolean;
}

const useIsMobile = (): UseIsMobileReturn => {
  // Hook implementation
}
```

**Purpose:** Detects mobile devices for responsive behavior and performance optimizations.

**Usage:**
```tsx
import { useIsMobile } from '@/hooks/use-mobile';

function MyComponent() {
  const { isMobile } = useIsMobile();
  
  return (
    <div>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}
```

### useToast Hook

```typescript
interface ToastOptions {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
}

interface UseToastReturn {
  toast: (options: ToastOptions) => void;
  dismiss: (toastId: string) => void;
}

const useToast = (): UseToastReturn => {
  // Hook implementation
}
```

**Purpose:** Provides toast notifications for user feedback.

**Usage:**
```tsx
import { useToast } from '@/hooks/use-toast';

function MyComponent() {
  const { toast } = useToast();
  
  const handleSubmit = () => {
    // Form submission logic
    toast({
      title: "Success!",
      description: "Your message has been sent.",
      variant: "success"
    });
  };
  
  return <button onClick={handleSubmit}>Submit</button>;
}
```

## 🛠️ Utility Functions

### Smooth Scroll Utility

```typescript
interface SmoothScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

const scrollToElement = (
  elementId: string, 
  options?: SmoothScrollOptions
): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      ...options
    });
  }
};
```

**Usage:**
```tsx
import { scrollToElement } from '@/lib/utils';

function Navigation() {
  const handleClick = () => {
    scrollToElement('contact');
  };
  
  return <button onClick={handleClick}>Contact</button>;
}
```

### Form Validation Utilities

```typescript
interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

const validateField = (
  value: string, 
  rules: ValidationRule
): ValidationResult => {
  const errors: string[] = [];
  
  if (rules.required && !value.trim()) {
    errors.push('This field is required');
  }
  
  if (rules.minLength && value.length < rules.minLength) {
    errors.push(`Minimum length is ${rules.minLength} characters`);
  }
  
  if (rules.maxLength && value.length > rules.maxLength) {
    errors.push(`Maximum length is ${rules.maxLength} characters`);
  }
  
  if (rules.pattern && !rules.pattern.test(value)) {
    errors.push('Invalid format');
  }
  
  if (rules.custom && !rules.custom(value)) {
    errors.push('Invalid value');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
```

**Usage:**
```tsx
import { validateField } from '@/lib/utils';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  
  const handleEmailChange = (value: string) => {
    setEmail(value);
    const validation = validateField(value, {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    });
    setErrors(validation.errors);
  };
  
  return (
    <div>
      <input 
        value={email}
        onChange={(e) => handleEmailChange(e.target.value)}
      />
      {errors.map(error => <span key={error}>{error}</span>)}
    </div>
  );
}
```

## 🎨 Styling System

### Design Tokens

```css
/* CSS Custom Properties */
:root {
  /* Colors */
  --primary: #6366f1;
  --primary-foreground: #ffffff;
  --background: #ffffff;
  --foreground: #0f172a;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Typography */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  
  /* Animations */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;
}
```

### Animation Classes

```css
/* Floating animations */
@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(12deg); }
  50% { transform: translateY(-20px) rotate(12deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0px) rotate(-12deg); }
  50% { transform: translateY(-15px) rotate(-12deg); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0px) rotate(45deg); }
  50% { transform: translateY(-10px) rotate(45deg); }
}

/* Pulse animations */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.2; }
}

@keyframes pulse-medium {
  0%, 100% { opacity: 0.08; }
  50% { opacity: 0.15; }
}
```

## 🎬 Animation System

### Intersection Observer Hook

```typescript
interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>;
  isIntersecting: boolean;
}

const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (options.triggerOnce) {
            observer.disconnect();
          }
        } else if (!options.triggerOnce) {
          setIsIntersecting(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    );
    
    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.triggerOnce]);
  
  return { ref, isIntersecting };
};
```

**Usage:**
```tsx
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

function AnimatedComponent() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    triggerOnce: true
  });
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      Content
    </div>
  );
}
```

## 🔗 Integration Examples

### Form Integration with API

```typescript
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

const submitContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json();
  } catch (error) {
    throw new Error('Failed to submit form');
  }
};
```

**Usage in Component:**
```tsx
import { submitContactForm } from '@/lib/api';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent.",
          variant: "success"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

### Theme Integration

```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

**Usage:**
```tsx
import { ThemeProvider, useTheme } from '@/contexts/theme';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

**For questions or contributions, please refer to the [Developer Guide](./DEVELOPER_GUIDE.md) or create an issue in the repository.** 