
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Illustrations", "Graphic Design", "Web Development", "Full-Stack Solutions"];
  const fullText = texts[currentTextIndex];
  const [charIndex, setCharIndex] = useState(0);

  // Animation for fade-in
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(prev => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      // After typing is complete, wait and move to next text
      const timeoutId = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, currentTextIndex, fullText]);

  // Smooth scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div 
            className={`lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <p className="text-portfolio-purple font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              A Creative <span className="heading-gradient">Multi-disciplinary</span> Designer & Developer
            </h1>
            <p className="text-gray-600 text-lg mb-4 max-w-lg">
              I create delightful experiences through <span className="text-portfolio-purple font-medium">{typedText}<span className="animate-pulse">|</span></span>
            </p>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              with a focus on beautiful, functional solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="button-gradient rounded-full px-8 py-6 text-base transition-transform hover:scale-105 shadow-md hover:shadow-lg"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-6 text-base border-portfolio-purple text-portfolio-purple hover:text-portfolio-purple hover:bg-portfolio-light-purple/10 transition-all hover:scale-105"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div 
            className={`lg:w-2/5 relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="aspect-square bg-gradient-to-br from-portfolio-purple/20 to-portfolio-cream/30 rounded-full flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
              <div className="w-4/5 h-4/5 rounded-full overflow-hidden bg-gradient-to-br from-portfolio-purple to-portfolio-dark-purple flex items-center justify-center text-white text-9xl font-bold transform hover:rotate-12 transition-all duration-500">
                {/* Replace with your logo or profile image */}
                <span>C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToProjects}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
          <ChevronDown className="text-portfolio-purple h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
