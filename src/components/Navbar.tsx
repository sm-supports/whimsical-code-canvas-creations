import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
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
        { label: "Web Development", href: "/web-development" },
        { label: "React Development", href: "/react-development" }
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
      // Handle external links or page navigation
      window.location.href = item.href;
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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
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
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hover:from-primary/80 hover:to-purple-600/80 transition-all duration-300"
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
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    /* Mobile Dropdown */
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
                        aria-expanded={activeDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mobile Dropdown Content */}
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => handleNavClick(child)}
                              className="block w-full text-left py-2 text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Mobile Direct Link */
                    <button
                      onClick={() => handleNavClick(item)}
                      className="block w-full text-left py-2 text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Button 
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeAllMenus}
        />
      )}
    </nav>
  );
};

export default Navbar; 