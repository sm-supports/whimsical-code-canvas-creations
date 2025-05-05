import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Function to handle smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    // If we're already on the homepage, scroll smoothly
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Otherwise, navigate to homepage with hash
    // The hash will be handled after navigation
  };

  // Apply the scroll event handler when navigating from another page to homepage with hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the # character
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);

  const navItems = [
    { name: 'Home', href: '/', sectionId: '' },
    { name: 'Projects', href: isHomePage ? '#projects' : '/#projects', sectionId: 'projects' },
    { name: 'About', href: isHomePage ? '#about' : '/#about', sectionId: 'about' },
    { name: 'Skills', href: isHomePage ? '#skills' : '/#skills', sectionId: 'skills' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', sectionId: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold heading-gradient">Portfolio</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.sectionId ? (
              <a 
                key={item.name}
                href={item.href}
                className="nav-link font-medium cursor-pointer"
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    scrollToSection(item.sectionId);
                  }
                }}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name}
                to={item.href}
                className="nav-link font-medium"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-6 w-6"
          >
            {mobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-4">
            {navItems.map((item) => (
              item.sectionId ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault();
                      scrollToSection(item.sectionId);
                    }
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
