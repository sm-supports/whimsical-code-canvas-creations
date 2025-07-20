import { ReactNode, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ProjectLayoutProps {
  children: ReactNode;
  title: string;
  category: string;
  description?: string;
  badges?: {
    icon: ReactNode;
    text: string;
    mobileText?: string;
  }[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ProjectLayout = ({ children, title, category, description, badges = [] }: ProjectLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Meta tags for SEO
  useEffect(() => {
    // Update title
    document.title = `${title} - SM Supports`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${category} project by SM Supports - ${title}. Professional web development and design services.`);
    }
  }, [title, category]);

    // Function to handle back navigation and preserve hash if present
  const handleBackToHome = () => {
    navigate('/', { state: { preserveHash: location.hash } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <Navbar />
      <div className="container relative z-10 mx-auto px-4 py-16" style={{ paddingTop: '4.5rem' }}>
        <div className="mb-12 sm:mb-16">
          <Button
            variant="ghost"
            className="mb-6 sm:mb-8 -ml-4 gap-2 hover:bg-primary/10 text-sm sm:text-base"
            onClick={handleBackToHome}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 h-16 sm:h-20 w-1 sm:w-2 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
              <div className="pl-2 sm:pl-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {title.split(' ')[0]}
                  <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {title.split(' ')[1]}
                  </span>
                </h1>
                {description && (
                  <p className="max-w-2xl text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
          
          {badges.length > 0 && (
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
              {badges.map((badge, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm"
                >
                  {badge.icon}
                  <span className="hidden sm:inline">{badge.text}</span>
                  {badge.mobileText && <span className="sm:hidden">{badge.mobileText}</span>}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {children}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectLayout;
