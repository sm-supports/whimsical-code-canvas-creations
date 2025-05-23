
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Children's Book Illustration",
    category: "Illustration",
    imageUrl: "https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1074&auto=format&fit=crop",
    link: "/projects/illustration"
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
    link: "/projects/web-development"
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "Graphic Design",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1064&auto=format&fit=crop",
    link: "/projects/graphic-design"
  },
  {
    id: 4,
    title: "Task Management App",
    category: "React Development",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop",
    link: "/projects/react-development"
  },
  {
    id: 5,
    title: "Interactive Dashboard",
    category: "Full Stack Development",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
    link: "/projects/full-stack"
  },
  {
    id: 6,
    title: "Story Book Cover Design",
    category: "Illustration",
    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1176&auto=format&fit=crop",
    link: "/projects/illustration"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", "Illustration", "Graphic Design", "Web Development", "React Development", "Full Stack Development"];
  
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-portfolio-primary uppercase tracking-wider mb-2 text-sm">My Recent Work</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base px-4">
            Explore my recent projects spanning children's book illustrations, 
            graphic design, web development, and more.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={`rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2 ${
                activeFilter === category 
                  ? "bg-portfolio-primary hover:bg-portfolio-primary/90" 
                  : "border-gray-200 hover:border-portfolio-primary hover:text-portfolio-primary"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map(project => (
            <Link to={project.link} key={project.id}>
              <ProjectCard
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
