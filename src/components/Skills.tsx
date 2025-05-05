
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = {
    "Illustration": ["Character Design", "Digital Illustration", "Children's Book Style", "Storyboarding"],
    "Graphic Design": ["Brand Identity", "Print Design", "Typography", "Color Theory"],
    "Web Development": ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX"],
    "React Development": ["React.js", "State Management", "Hooks", "Component Architecture"],
    "Full Stack": ["Node.js", "Express", "MongoDB", "REST APIs"]
  };

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-portfolio-purple uppercase tracking-wider mb-2">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Expertise</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            I offer a wide range of creative and technical services, bringing together
            artistic vision and technical know-how to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div 
              key={category}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-purple/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {category === "Illustration" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    )}
                    {category === "Graphic Design" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    )}
                    {category === "Web Development" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    )}
                    {category === "React Development" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    )}
                    {category === "Full Stack" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{category}</h3>
                <p className="text-gray-600 mb-4">
                  {category === "Illustration" && "Creating vibrant visuals and characters that bring stories to life."}
                  {category === "Graphic Design" && "Crafting compelling visual identities and communication materials."}
                  {category === "Web Development" && "Building responsive, accessible, and performant websites."}
                  {category === "React Development" && "Developing interactive user interfaces and single-page applications."}
                  {category === "Full Stack" && "Creating end-to-end solutions with seamless frontend and backend integration."}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-portfolio-purple text-portfolio-dark-purple bg-portfolio-purple/5">
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
