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
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 dark:bg-background/80 border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
      } py-4`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105" 
          onClick={(e) => handleNavigation('', e)}
        >
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-xl blur-lg opacity-50" />
            <img 
              src="/uploads/e36f8ce3-362f-422b-b487-bde1f6e31353.png" 
              alt="SM Supports Logo" 
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent hidden sm:inline">
            SM Supports
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`relative font-medium text-foreground/80 hover:text-primary transition-colors duration-300
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
              onClick={(e) => handleNavigation(item.sectionId, e)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden relative p-2 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all duration-300" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-lg border-b border-border/50 py-6 animate-in fade-in slide-in-from-top duration-300">
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 text-center font-medium"
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
