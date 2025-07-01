import { Badge } from "@/components/ui/badge";
import { Code, Palette, Globe, Smartphone, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = {
    "Web Development": {
      skills: ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX"],
      icon: <Globe className="h-6 w-6" />,
      description: "Building responsive, accessible, and performant websites with modern technologies."
    },
    "WordPress": {
      skills: ["Custom Themes", "Plugin Development", "Optimization", "Security"],
      icon: <Code className="h-6 w-6" />,
      description: "Creating custom WordPress solutions, themes, and plugins for businesses."
    },
    "Mobile Development": {
      skills: ["React Native", "Progressive Web Apps", "Mobile-First Design", "Touch Interfaces"],
      icon: <Smartphone className="h-6 w-6" />,
      description: "Developing mobile-first applications with touch-friendly interfaces."
    },
    "Backend Development": {
      skills: ["Node.js", "PHP", "MySQL", "REST APIs"],
      icon: <Server className="h-6 w-6" />,
      description: "Building robust server-side applications and APIs."
    },
    "Design": {
      skills: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping"],
      icon: <Palette className="h-6 w-6" />,
      description: "Crafting beautiful user interfaces and user experiences."
    }
  };

  return (
    <section id="skills" className="relative py-12 bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Background decorations removed */}

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">My Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I offer a wide range of creative and technical services, bringing together
            artistic vision and technical know-how to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, { skills: categorySkills, icon, description }], index) => (            <Card 
              key={category}
              className="group relative overflow-hidden bg-background/50 dark:bg-card/50 border-border/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0" />
              <div className="absolute inset-0 opacity-0">
                <div className="absolute -inset-[1000%] bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-shimmer" />
              </div>
              <CardContent className="relative p-8">
                <div className="mb-6">
                  <div className="relative w-14 h-14 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      {icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {category}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
