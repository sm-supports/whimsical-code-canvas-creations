
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Children's Book Illustration",
    category: "Illustration",
    imageUrl: "https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1074&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "Graphic Design",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1064&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "Task Management App",
    category: "React Development",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "Interactive Dashboard",
    category: "Full Stack Development",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 6,
    title: "Story Book Cover Design",
    category: "Illustration",
    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1176&auto=format&fit=crop",
    link: "#"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", "Illustration", "Graphic Design", "Web Development", "React Development", "Full Stack Development"];
  
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-portfolio-purple uppercase tracking-wider mb-2">My Recent Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore my recent projects spanning children's book illustrations, 
            graphic design, web development, and more.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={`rounded-full ${
                activeFilter === category 
                  ? "bg-portfolio-purple hover:bg-portfolio-dark-purple" 
                  : "border-gray-200 hover:border-portfolio-purple hover:text-portfolio-purple"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
