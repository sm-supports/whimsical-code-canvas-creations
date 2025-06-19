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
    <section id="skills" className="relative py-24 bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">My Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I offer a wide range of creative and technical services, bringing together
            artistic vision and technical know-how to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { skills: categorySkills, icon, description }], index) => (
            <Card 
              key={category}
              className="group relative overflow-hidden backdrop-blur-sm bg-background/50 dark:bg-card/50 border-border/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {category}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground text-secondary-foreground transition-all duration-300"
                      style={{
                        transitionDelay: `${skillIndex * 50}ms`,
                      }}
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
