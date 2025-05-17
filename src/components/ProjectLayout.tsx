
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
  
  // Function to handle back navigation and preserve hash if present
  const handleBackToHome = () => {
    if (location.hash) {
      navigate(`/${location.hash}`);
    } else {
      navigate('/');
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 pt-16">
          <Button 
            variant="ghost" 
            className="pl-0 mb-4 hover:bg-transparent"
            onClick={handleBackToHome}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <p className="text-portfolio-primary uppercase tracking-wider mb-2">{category}</p>
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectLayout;
