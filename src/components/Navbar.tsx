import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '/', sectionId: '' },
  { name: 'Projects', href: '/#projects', sectionId: 'projects' },
  { name: 'About', href: '/#about', sectionId: 'about' },
  { name: 'Skills', href: '/#skills', sectionId: 'skills' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={e => handleNavigation('', e)}>
          <img
            src="/uploads/e36f8ce3-362f-422b-b487-bde1f6e31353.png"
            alt="SM Supports Logo"
            className="w-9 h-9 object-contain rounded-lg"
            style={{ background: 'var(--hero-circle-1, #40E0D0)' }}
          />
          <span className="text-lg font-bold tracking-tight text-foreground">SM Supports</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-colors font-medium after:absolute after:left-3 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-2/3"
              onClick={e => handleNavigation(item.sectionId, e)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: Theme toggle and mobile menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden p-2 rounded-lg border border-border/50 bg-background"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full left-0 bg-background/95 border-b border-border/50 shadow-sm animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-4 py-3 text-center text-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={e => handleNavigation(item.sectionId, e)}
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
