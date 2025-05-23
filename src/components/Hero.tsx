
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Code, Palette, PenTool } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const logoRef = useRef<HTMLDivElement>(null);
  // Updated services list based on Fiverr profile
  const texts = ["Web Development", "WordPress Design", "Bug Fixing", "Custom Solutions"];
  const fullText = texts[currentTextIndex];
  const [charIndex, setCharIndex] = useState(0);

  // Animation for fade-in
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll effect for the logo
  useEffect(() => {
    const handleScroll = () => {
      if (logoRef.current) {
        const scrollY = window.scrollY;
        // Create a floating effect based on scroll position
        const translateY = Math.sin(scrollY * 0.01) * 20; // Adjust the multipliers to control movement
        const rotate = Math.sin(scrollY * 0.005) * 5; // Slight rotation effect
        
        logoRef.current.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 md:pt-20 px-4 bg-gradient-to-b from-white to-gray-50 relative"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div 
            className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Professional <span className="heading-gradient">Web Solutions</span> by SM Supports
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-2 max-w-lg mx-auto lg:mx-0">
              Delivering exceptional <span className="text-portfolio-primary font-medium">{typedText}<span className="animate-pulse">|</span></span>
            </p>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              with a focus on responsive, functional, and user-friendly web experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="button-gradient rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base transition-transform hover:scale-105 shadow-md hover:shadow-lg w-full sm:w-auto"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base border-portfolio-primary text-portfolio-primary hover:text-portfolio-primary hover:bg-portfolio-primary/10 transition-all hover:scale-105 w-full sm:w-auto"
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
            className={`w-full lg:w-2/5 max-w-sm lg:max-w-none mx-auto relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            style={{ transitionDelay: "0.3s" }}
            ref={logoRef}
          >
            <div className="aspect-square bg-gradient-to-br from-portfolio-primary/20 to-portfolio-cream/30 rounded-full flex items-center justify-center hover:shadow-xl transition-all hover:scale-105">
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
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToProjects}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm text-gray-500 mb-2">Scroll Down</span>
          <ChevronDown className="text-portfolio-primary h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
