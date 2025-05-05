
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectLayoutProps {
  children: ReactNode;
  title: string;
  category: string;
}

const ProjectLayout = ({ children, title, category }: ProjectLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 pt-16">
          <Link to="/">
            <Button variant="ghost" className="pl-0 mb-4 hover:bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <p className="text-portfolio-purple uppercase tracking-wider mb-2">{category}</p>
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectLayout;
