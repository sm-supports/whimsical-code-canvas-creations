import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, Code, Palette, PenTool, ArrowRight } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Web Development", "WordPress Design", "Bug Fixing", "Custom Solutions"];
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
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute" style={{ top: 'var(--hero-circle-1-top)', left: 'var(--hero-circle-1-left)', right: 'var(--hero-circle-1-right)', width: '18rem', height: '18rem', borderRadius: '9999px', background: 'var(--hero-circle-1)' }} />
        <div className="absolute" style={{ bottom: 'var(--hero-circle-2-bottom)', left: 'var(--hero-circle-2-left)', right: 'var(--hero-circle-2-right)', width: '18rem', height: '18rem', borderRadius: '9999px', background: 'var(--hero-circle-2)' }} />
        <div className="absolute" style={{ top: 'var(--hero-circle-3-top)', left: 'var(--hero-circle-3-left)', width: '10rem', height: '10rem', borderRadius: '9999px', background: 'var(--hero-circle-3)', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'none' }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Transforming Ideas into
              <span className="block text-primary">Digital Excellence</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Specializing in {typedText}
              <span className="animate-blink">|</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-primary text-primary-foreground px-8 py-6 rounded-xl flex items-center gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="border-border px-8 py-6 rounded-xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                <span>Modern Design</span>
              </div>
              <div className="flex items-center gap-2">
                <PenTool className="w-5 h-5 text-primary" />
                <span>Creative Solutions</span>
              </div>
            </div>
          </div>          {/* Hero Image */}
          <div className="flex-1">
            <div className="w-full max-w-lg mx-auto aspect-[1/1]">
              <img
                src="/uploads/e36f8ce3-362f-422b-b487-bde1f6e31353.png"
                alt="Hero Image"
                className="w-full h-auto rounded-3xl"
                width="800"
                height="800"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
