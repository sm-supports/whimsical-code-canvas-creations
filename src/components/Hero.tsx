
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Code, Palette, PenTool } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const logoRef = useRef<HTMLDivElement>(null);
  const texts = ["Web Development", "WordPress Design", "Bug Fixing", "Custom Solutions"];
  const fullText = texts[currentTextIndex];
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (logoRef.current) {
        const scrollY = window.scrollY;
        const translateY = Math.sin(scrollY * 0.01) * 20;
        const rotate = Math.sin(scrollY * 0.005) * 5;
        
        logoRef.current.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(prev => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, currentTextIndex, fullText]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Dark mode background with particles effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div 
            className={`lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white leading-tight">
              Professional <span className="heading-gradient">Web Solutions</span> by SM Supports
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-4 max-w-lg">
              Delivering exceptional <span className="text-portfolio-primary font-medium">{typedText}<span className="animate-pulse">|</span></span>
            </p>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
              with a focus on responsive, functional, and user-friendly web experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button 
                className="glass-button rounded-full px-8 py-6 text-base font-medium text-white border-white/30 hover:bg-white/20 touch-feedback mobile-touch-target"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Button 
                className="glass-button rounded-full px-8 py-6 text-base font-medium text-white border-white/30 hover:bg-white/20 touch-feedback mobile-touch-target"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div 
            className={`lg:w-2/5 relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            style={{ transitionDelay: "0.3s" }}
            ref={logoRef}
          >
            <div className="aspect-square glass-card rounded-full flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 dark-glow">
              <img 
                src="/lovable-uploads/e36f8ce3-362f-422b-b487-bde1f6e31353.png"
                alt="SM Supports Logo" 
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer touch-feedback mobile-touch-target"
        onClick={scrollToProjects}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-300 mb-2">Scroll Down</span>
          <ChevronDown className="text-portfolio-primary h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
