import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, Code, Palette, PenTool, ArrowRight, Smartphone, Globe } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["React Development", "React Native", "TypeScript", "Full-Stack Solutions"];
  const fullText = texts[currentTextIndex];
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setTypedText(fullText);
      return;
    }
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
  }, [charIndex, currentTextIndex, fullText, isMobile]);

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
    <section id="home" className="relative min-h-screen pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Background Elements - Simplified for mobile */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-8 right-8 w-24 h-24 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-full bg-primary/5 opacity-50 -rotate-12" />
        <div className="absolute bottom-8 left-8 w-16 h-16 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full bg-primary/10 opacity-50 rotate-12" />
        <div className="hidden sm:block absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-40 rounded-full bg-primary/5 opacity-50" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Transforming Ideas into
                </span>
                <span className="block mt-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Specializing in{" "}
                <span className="text-primary font-semibold">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </p>
            </div>

            {/* Mobile Features */}
            <div className="lg:hidden grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card/50 rounded-lg p-3">
                <Smartphone className="w-4 h-4 text-primary" />
                <span>React Native</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card/50 rounded-lg p-3">
                <Globe className="w-4 h-4 text-primary" />
                <span>TypeScript</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full">
              <Button 
                className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-5 sm:py-6 rounded-2xl flex items-center justify-center gap-2 text-lg sm:text-xl font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-95"
                onClick={scrollToContact}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="w-full sm:w-auto border-border px-8 py-5 sm:py-6 rounded-2xl text-lg sm:text-xl font-semibold hover:bg-primary/5 transition-all duration-200 active:scale-95"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
            </div>

            {/* Desktop Features */}
            <div className="hidden lg:flex items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                <span>React & TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <PenTool className="w-5 h-5 text-primary" />
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
            <div className="relative">
              <img
                  src="/uploads/e36f8ce3-362f-422b-b487-bde1f6e31353.png"
                  alt="Hero Image"
                  className="w-full h-full object-contain rounded-2xl sm:rounded-3xl shadow-2xl shadow-primary/10"
                  width="800"
                  height="800"
                  decoding="async"
                />
              
              {/* Mobile floating elements */}
              <div className="lg:hidden absolute -top-2 -right-2 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div className="lg:hidden absolute -bottom-2 -left-2 w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
                <Palette className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
