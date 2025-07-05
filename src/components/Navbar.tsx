import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '/', sectionId: 'home' },
  { name: 'Projects', href: '/#projects', sectionId: 'projects' },
  { name: 'About', href: '/#about', sectionId: 'about' },
  { name: 'Skills', href: '/#skills', sectionId: 'skills' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' },
];

const projectSubItems = [
  { name: 'React Development', href: '/projects/react-development' },
  { name: 'Web Development', href: '/projects/web-development' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (mobileMenuOpen && !target.closest('.mobile-drawer') && !target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
      // Close projects dropdown when clicking outside
      if (projectsDropdownOpen && !target.closest('.projects-dropdown')) {
        setProjectsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen, projectsDropdownOpen]);

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    
    // Handle hash links
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (path === '/' || path === '') {
        // If we're already on the home page, just scroll to the section
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page and then scroll to section
        navigate(href);
      }
    } else {
      // Regular navigation
      navigate(href);
    }
  };

  const handleHashLink = (href: string) => {
    setMobileMenuOpen(false);
    
    console.log('handleHashLink called with:', href);
    
    // Handle the case where there's no hash (like Home link)
    if (!href.includes('#')) {
      console.log('No hash found, handling as regular link');
      if (href === '/') {
        // Scroll to top of page
        console.log('Scrolling to top of page');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Navigate to the page
        console.log('Navigating to:', href);
        navigate(href);
      }
      return;
    }
    
    const parts = href.split('#');
    console.log('Split parts:', parts);
    
    if (parts.length < 2) {
      console.warn('Invalid hash link format:', href);
      return;
    }
    
    const [path, hash] = parts;
    console.log('Path:', path, 'Hash:', hash);
    
    if (!hash) {
      console.warn('No hash found in link:', href);
      return;
    }
    
    if (path === '/' || path === '') {
      // If we're already on the home page, just scroll to the section
      const section = document.getElementById(hash);
      console.log('Looking for section with id:', hash, 'Found:', !!section);
      if (section) {
        // Add a small delay to ensure the menu closes before scrolling
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        console.warn(`Section with id '${hash}' not found`);
      }
    } else {
      // Navigate to home page and then scroll to section
      console.log('Navigating to home page with hash:', href);
      navigate(href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background border-b border-border/30`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Hamburger (mobile only) */}
        <button
          className="lg:hidden p-2 mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mobile-menu-button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="h-7 w-7 text-foreground" />
        </button>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="/uploads/e36f8ce3-362f-422b-b487-bde1f6e31353.png"
            alt="SM Supports Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-xl"
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground">SM Supports</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <div key={item.name} className="relative">
              {item.name === 'Projects' ? (
                <div className="relative">
                  <button
                    onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                    className="relative px-4 py-3 text-foreground/80 hover:text-primary transition-colors font-medium rounded-lg hover:bg-primary/5 after:absolute after:left-4 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-2/3"
                  >
                    {item.name}
                  </button>
                  {projectsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border/30 rounded-lg shadow-lg py-2 z-50 projects-dropdown">
                      <a
                        href="/#projects"
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          setProjectsDropdownOpen(false);
                          handleHashLink('/#projects');
                        }}
                      >
                        All Projects
                      </a>
                      {projectSubItems.map(subItem => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                          onClick={() => setProjectsDropdownOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="relative px-4 py-3 text-foreground/80 hover:text-primary transition-colors font-medium rounded-lg hover:bg-primary/5 after:absolute after:left-4 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-2/3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleHashLink(item.href);
                  }}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
        {/* Theme toggle (mobile only) */}
        <div className="lg:hidden ml-auto">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer */}
          <aside
            className="fixed left-0 top-0 h-full w-4/5 max-w-xs bg-background shadow-lg z-50 flex flex-col mobile-drawer"
            role="dialog"
            aria-modal="true"
            data-open="true"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-border/20">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/uploads/e36f8ce3-362f-422b-b487-bde1f6e31353.png"
                  alt="SM Supports Logo"
                  className="w-8 h-8 object-contain rounded"
                />
                <span className="text-lg font-bold tracking-tight text-foreground">SM Supports</span>
              </Link>
              <button
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>
            </div>
            {/* Nav Items */}
            <nav className="flex-1 flex flex-col gap-1 px-2 py-4" aria-label="Mobile Navigation">
              {navItems.map(item => (
                <div key={item.name}>
                  <button
                    className="w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground hover:bg-accent/40 focus:bg-accent/40 transition-colors rounded-none border-l-4 border-transparent hover:border-primary focus:border-primary text-left"
                    onClick={() => handleHashLink(item.href)}
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {/* Simple icons for each nav item */}
                    {item.name === 'Home' && <Menu className="h-5 w-5 text-muted-foreground" />}
                    {item.name === 'Projects' && <Code className="h-5 w-5 text-muted-foreground" />}
                    {item.name === 'About' && <span className="h-5 w-5 text-muted-foreground">👤</span>}
                    {item.name === 'Skills' && <span className="h-5 w-5 text-muted-foreground">🛠️</span>}
                    {item.name === 'Contact' && <span className="h-5 w-5 text-muted-foreground">✉️</span>}
                    <span>{item.name}</span>
                  </button>
                  {item.name === 'Projects' && (
                    <div className="ml-4 border-l border-border/30">
                      {projectSubItems.map(subItem => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-accent/40 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="w-2 h-2 bg-primary/50 rounded-full ml-2"></span>
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            {/* Theme Toggle at Bottom */}
            <div className="px-4 py-4 border-t border-border/20 flex items-center gap-3">
              <span className="text-base text-muted-foreground">Theme:</span>
              <ThemeToggle />
            </div>
          </aside>
        </>
      )}
    </nav>
  );
};

export default Navbar; 