import { ReactNode, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface ProjectLayoutProps {
  children: ReactNode;
  title: string;
  category: string;
}

const ProjectLayout = ({ children, title, category }: ProjectLayoutProps) => {
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
    if (location.hash) {
      navigate(`/${location.hash}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: '#40E0D0' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full" style={{ background: '#2CB5B5' }} />
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full" style={{ background: '#A0F0E9', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <Navbar />
      <div className="container relative z-10 mx-auto px-4 py-16" style={{ paddingTop: '4.5rem' }}>
        <div className="mb-12 pt-16">
          <Button 
            variant="ghost" 
            className="pl-0 mb-6 hover:bg-transparent group transition-all duration-300"
            onClick={handleBackToHome}
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </Button>
          <p className="text-primary font-semibold uppercase tracking-wider mb-3">{category}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">{title}</h1>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectLayout;
