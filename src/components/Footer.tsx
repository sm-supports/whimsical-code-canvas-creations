import { ThemeToggle } from "./ThemeToggle";
import { Facebook, Instagram, Github, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://facebook.com/smsupports",
      color: "hover:text-blue-500"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/company/smsupports",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/smsupports",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com/smsupports",
      color: "hover:text-pink-500"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      url: "https://wa.me/+8801301360818",
      color: "hover:text-green-500"
    },
    {
      name: "Dribbble",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
        </svg>
      ),
      url: "https://dribbble.com/smsupports",
      color: "hover:text-pink-600"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" }
  ];

  const services = [
    { name: "Web Development", href: "/projects/web-development" },
    { name: "React Development", href: "/projects/react-development" },
    { name: "UI/UX Design", href: "/#services" },
    { name: "Illustration", href: "/#services" }
  ];

  // Function to handle smooth scrolling for hash links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2); // Remove '/#'
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <footer className="relative bg-gradient-to-br from-background via-background to-muted/20 border-t-2 border-primary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative container mx-auto px-4 py-8 sm:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                SM Supports
              </h3>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-3 sm:mb-4" />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Creating beautiful illustrations, designs, and web experiences that inspire and engage users.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <span className="break-all">contact@smsupports.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <span>+880 1301-360818</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a 
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200 block py-1 cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200 block py-1"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-foreground">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  {service.href.startsWith('/#') ? (
                    <a 
                      href={service.href}
                      onClick={(e) => handleSmoothScroll(e, service.href)}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200 block py-1 cursor-pointer"
                    >
                      {service.name}
                    </a>
                  ) : (
                    <Link 
                      to={service.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200 block py-1"
                    >
                      {service.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Theme */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-foreground">Connect With Us</h4>
            
            {/* Social Links */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-2 sm:p-3 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-muted-foreground">Theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4 sm:mb-6" />
        
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; {currentYear} <span className="text-primary font-medium">SM Supports</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
