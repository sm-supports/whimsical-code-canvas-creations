import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * Navigation Item Interface
 * 
 * Defines the structure for navigation menu items, including
 * dropdown functionality for project categories.
 */
interface NavItem {
  label: string;
  href?: string;
  sectionId?: string;
  children?: NavItem[];
}

/**
 * Navbar Component - Main Navigation
 * 
 * This component provides the main navigation for the portfolio website.
 * It includes responsive design, smooth scrolling to sections, dropdown
 * menus for project categories, and theme toggle functionality.
 * 
 * @component
 * @example
 * ```tsx
 * <Navbar />
 * ```
 * 
 * @features
 * - Responsive mobile menu with hamburger toggle
 * - Smooth scroll navigation to page sections
 * - Dropdown menus for project categories
 * - Theme toggle integration
 * - Sticky positioning with backdrop blur
 * - Accessibility features (ARIA labels, keyboard navigation)
 * 
 * @state
 * - isMenuOpen: Mobile menu visibility state
 * - activeDropdown: Currently open dropdown menu
 * - isScrolled: Scroll position for sticky behavior
 */
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Navigation state management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Navigation items configuration
   * 
   * Defines the main navigation structure with sections and
   * dropdown menus for project categories.
   */
  const navItems: NavItem[] = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
    { label: "Skills", sectionId: "skills" },
    { 
      label: "Projects", 
      children: [
        { label: "All Projects", sectionId: "projects" },
        { label: "Web Development", href: "/projects/web-development" },
        { label: "React Development", href: "/projects/react-development" },
        { label: "Graphic Design", href: "/projects/graphic-design" },
        { label: "Illustration", href: "/projects/illustration" }
      ]
    },
    { label: "Contact", sectionId: "contact" }
  ];

  /**
   * Scroll event handler for sticky navbar
   * 
   * Monitors scroll position to add/remove sticky styling
   * and backdrop blur effects for better visual hierarchy.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Smooth scroll to section
   * 
   * Handles navigation to page sections using smooth scrolling.
   * Includes error handling for missing elements and debugging
   * for development purposes.
   * 
   * @param sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    
    if (!sectionId) {
      console.warn('Section ID is undefined or empty');
      return;
    }

    // If we're not on the home page, navigate there first with the hash
    if (location.pathname !== '/') {
      navigate('/', { state: { preserveHash: `#${sectionId}` } });
      return;
    }

    // Update URL hash without causing a scroll (browser default behavior)
    window.history.pushState({}, '', `#${sectionId}`);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(`Successfully scrolled to section: ${sectionId}`);
    } else {
      console.warn(`Section with id '${sectionId}' not found`);
    }
  };

  /**
   * Handle navigation item click
   * 
   * Processes navigation clicks, handling both direct links
   * and section scrolling. Closes mobile menu after navigation.
   * 
   * @param item - The navigation item that was clicked
   */
  const handleNavClick = (item: NavItem) => {
    if (item.href) {
      // Handle internal route navigation
      if (item.href.startsWith('/')) {
        // For project pages, preserve the current hash state if we're on the home page
        const state = location.pathname === '/' && location.hash 
          ? { preserveHash: location.hash }
          : undefined;
        navigate(item.href, { state });
      } else {
        // Handle external links
        window.open(item.href, '_blank');
      }
    } else if (item.sectionId) {
      // Handle smooth scroll to section
      scrollToSection(item.sectionId);
    }
    
    // Close mobile menu after navigation
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  /**
   * Toggle dropdown menu
   * 
   * Handles opening and closing of dropdown menus for
   * project categories. Ensures only one dropdown is open at a time.
   * 
   * @param label - The label of the dropdown to toggle
   */
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  /**
   * Close all menus
   * 
   * Utility function to close both mobile menu and dropdowns,
   * typically used when clicking outside or on escape key.
   */
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  /**
   * Handle escape key press
   * 
   * Closes all menus when escape key is pressed for
   * better keyboard navigation and accessibility.
   */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAllMenus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Backdrop for mobile menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeAllMenus}
        aria-hidden="true"
      />

      {/* Modern Mobile Menu Modal */}
      <div 
        className={`lg:hidden fixed inset-0 z-[9999] transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-y-0 right-0 w-full sm:w-80">
          <aside className="w-full h-[100dvh] bg-background border-l border-border/10 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/10 bg-background">
              <a 
                href="#home" 
                onClick={e => { e.preventDefault(); scrollToSection('home'); closeAllMenus(); }}
                className="text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
              >
                SM Supports
              </a>
              <button
                onClick={closeAllMenus}
                className="p-2 rounded-full hover:bg-muted/80 text-foreground/80 hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-6 bg-background">
              <ul className="space-y-2.5">
              {navItems.map(item => (
                <li key={item.label}>
                  {item.children ? (
                    <div className="mb-2">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-foreground/90 hover:bg-muted/60 font-medium transition-all duration-200"
                        aria-expanded={activeDropdown === item.label}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <div className={`mt-1 transition-all duration-200 ${
                        activeDropdown === item.label ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}>
                        <ul className="pl-4 space-y-1 border-l border-border/10">
                          {item.children.map(child => (
                            <li key={child.label}>
                              <button
                                onClick={() => handleNavClick(child)}
                                className="w-full text-left px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted/40 text-sm transition-all duration-200"
                              >
                                {child.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="w-full text-left px-4 py-2.5 rounded-lg text-foreground/90 hover:text-foreground hover:bg-muted/60 font-medium transition-all duration-200"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Actions */}
          <div className="mt-auto px-4 py-6 border-t border-border/10 bg-background">
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-sm text-foreground/70">Switch theme</span>
              <ThemeToggle />
            </div>
            <Button 
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="w-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm text-foreground py-2.5 rounded-lg font-medium transition-all duration-300 hover:bg-primary/5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
            >
              Get Started
            </Button>
          </div>
        </aside>
      </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
            >
              SM Supports
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  /* Dropdown Menu for Projects */
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Content */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl py-2 z-50">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child)}
                            className="w-full text-left px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Direct Navigation Link */
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary/20 bg-background/50 backdrop-blur-sm text-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-primary/5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground/80 hover:text-foreground transition-colors duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 