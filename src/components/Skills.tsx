
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = {
    "Web Development": ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX"],
    "WordPress": ["Custom Themes", "Plugin Development", "WooCommerce", "Site Optimization"],
    "Bug Fixing": ["Error Diagnosis", "Performance Issues", "Cross-browser Compatibility", "Code Debugging"],
    "React Development": ["React.js", "State Management", "Hooks", "Component Architecture"],
    "Full Stack": ["Node.js", "Express", "MongoDB", "REST APIs"]
  };

  return (
    <section id="skills" className="section px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-portfolio-primary uppercase tracking-wider mb-2 text-sm">What I Do</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">My Expertise</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base px-4">
            I offer a wide range of web development and technical services, bringing together
            expertise and innovation to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div 
              key={category}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-portfolio-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {category === "Web Development" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    )}
                    {category === "WordPress" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    )}
                    {category === "Bug Fixing" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    )}
                    {category === "React Development" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    )}
                    {category === "Full Stack" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-center sm:text-left">{category}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base text-center sm:text-left">
                  {category === "Web Development" && "Building responsive, accessible, and performant websites using modern technologies."}
                  {category === "WordPress" && "Creating custom WordPress solutions, themes, and plugins for businesses."}
                  {category === "Bug Fixing" && "Diagnosing and resolving technical issues quickly and efficiently."}
                  {category === "React Development" && "Developing interactive user interfaces and single-page applications."}
                  {category === "Full Stack" && "Creating end-to-end solutions with seamless frontend and backend integration."}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {categorySkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-portfolio-primary text-portfolio-primary bg-portfolio-primary/5 text-xs">
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
