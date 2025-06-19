
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  const handleNavigation = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    
    if (isHomePage) {
      if (sectionId === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(sectionId ? `/#${sectionId}` : '/');
    }
  };

  useEffect(() => {
    if (isHomePage && location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (isHomePage && !location.hash) {
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-card py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-2 touch-feedback" onClick={(e) => handleNavigation('', e)}>
          <div className="h-10 w-10 relative">
            <img 
              src="/lovable-uploads/e36f8ce3-362f-422b-b487-bde1f6e31353.png" 
              alt="SM Supports Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold heading-gradient hidden sm:inline">SM Supports</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="nav-link font-medium cursor-pointer text-white hover:text-portfolio-primary transition-colors"
              onClick={(e) => handleNavigation(item.sectionId, e)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden glass-button p-3 rounded-full mobile-touch-target touch-feedback" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mobile-nav absolute w-full py-6 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-6 px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-3 px-6 glass-button rounded-xl text-white hover:bg-white/20 transition-colors mobile-touch-target touch-feedback text-center font-medium"
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
