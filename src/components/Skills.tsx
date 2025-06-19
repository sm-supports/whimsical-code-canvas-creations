
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Globe, Smartphone, Server } from "lucide-react";

const Skills = () => {
  const skills = {
    "Web Development": {
      skills: ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX"],
      icon: <Globe className="h-6 w-6" />
    },
    "WordPress": {
      skills: ["Custom Themes", "Plugin Development", "Optimization", "Security"],
      icon: <Code className="h-6 w-6" />
    },
    "Mobile Development": {
      skills: ["React Native", "Progressive Web Apps", "Mobile-First Design", "Touch Interfaces"],
      icon: <Smartphone className="h-6 w-6" />
    },
    "Backend Development": {
      skills: ["Node.js", "PHP", "MySQL", "REST APIs"],
      icon: <Server className="h-6 w-6" />
    },
    "Design": {
      skills: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping"],
      icon: <Palette className="h-6 w-6" />
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-portfolio-primary uppercase tracking-wider mb-2 font-medium">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">My Expertise</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            I offer a wide range of creative and technical services, bringing together
            artistic vision and technical know-how to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(skills).map(([category, { skills: categorySkills, icon }]) => (
            <div 
              key={category}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 touch-feedback mobile-spacing"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full glass-button flex items-center justify-center mb-4 text-portfolio-primary">
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{category}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {category === "Web Development" && "Building responsive, accessible, and performant websites with modern technologies."}
                  {category === "WordPress" && "Creating custom WordPress solutions, themes, and plugins for businesses."}
                  {category === "Mobile Development" && "Developing mobile-first applications with touch-friendly interfaces."}
                  {category === "Backend Development" && "Building robust server-side applications and APIs."}
                  {category === "Design" && "Crafting beautiful user interfaces and user experiences."}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    className="glass-button border-portfolio-primary/30 text-portfolio-primary bg-portfolio-primary/10 hover:bg-portfolio-primary/20 transition-colors px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
