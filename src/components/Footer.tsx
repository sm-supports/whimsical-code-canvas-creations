import { ThemeToggle } from "./ThemeToggle";
import { Facebook, Instagram, Github, Linkedin, MessageCircle } from "lucide-react";

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
  
  return (
    <footer className="relative border-t border-border bg-white dark:bg-black/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">SM Supports</h3>
            <p className="text-muted-foreground">
              Creating beautiful illustrations, designs, and web experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Connect With Us</h3>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-2 rounded-lg bg-background/50 border border-border`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Theme</h3>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Toggle theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} SM Supports. All rights reserved.
          </p>
          
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#home" className="text-muted-foreground">Home</a>
            <a href="#projects" className="text-muted-foreground">Projects</a>
            <a href="#about" className="text-muted-foreground">About</a>
            <a href="#contact" className="text-muted-foreground">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
