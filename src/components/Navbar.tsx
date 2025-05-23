import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

  // Function to handle navigation with smooth scrolling for same-page links
  const handleNavigation = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    
    // If we're already on the homepage, scroll smoothly
    if (isHomePage) {
      if (sectionId === '') {
        // For the home section, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Navigate to homepage with hash and set a flag to scroll after navigation
      navigate(sectionId ? `/#${sectionId}` : '/');
    }
  };

  // Check if there's a hash in URL after page load and scroll to it
  useEffect(() => {
    if (isHomePage && location.hash) {
      const id = location.hash.substring(1); // Remove the # character
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure DOM is ready
      }
    } else if (isHomePage && !location.hash) {
      // If on homepage with no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location, isHomePage]);

  const navItems = [
    { name: 'Home', href: '/', sectionId: '' },
    { name: 'Projects', href: '/#projects', sectionId: 'projects' },
    { name: 'About', href: '/#about', sectionId: 'about' },
    { name: 'Skills', href: '/#skills', sectionId: 'skills' },
    { name: 'Contact', href: '/#contact', sectionId: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2 sm:py-3' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={(e) => handleNavigation('', e)}>
          <div className="h-8 w-8 sm:h-10 sm:w-10 relative flex-shrink-0">
            <img 
              src="/lovable-uploads/e36f8ce3-362f-422b-b487-bde1f6e31353.png" 
              alt="SM Supports Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-lg sm:text-xl font-bold heading-gradient hidden xs:inline">SM Supports</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="nav-link font-medium cursor-pointer text-sm lg:text-base hover:text-portfolio-primary transition-colors"
              onClick={(e) => handleNavigation(item.sectionId, e)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute w-full py-4 animate-fade-in border-t border-gray-100">
          <div className="container mx-auto px-4 flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors text-center font-medium"
                onClick={(e) => handleNavigation(item.sectionId, e)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
