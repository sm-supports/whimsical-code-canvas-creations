import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, Code, Palette, PenTool, ArrowRight, Smartphone, Globe, Sparkles } from "lucide-react";

/**
 * Hero Component - Landing Section
 * 
 * This component serves as the main landing section of the portfolio website.
 * It features a modern 3D design with floating elements, gradient orbs, and
 * smooth animations. The component includes a typing effect for dynamic text
 * and responsive design for all screen sizes.
 * 
 * @component
 * @example
 * ```tsx
 * <Hero />
 * ```
 * 
 * @features
 * - 3D floating cubes with perspective transforms
 * - Gradient orbs with animated pulse effects
 * - Typing animation for skill showcase
 * - Responsive design with mobile optimizations
 * - Smooth scroll navigation
 * - Performance-optimized animations
 */
const Hero = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // Array of skills to cycle through in typing animation
  const texts = ["React Development", "React Native", "TypeScript", "Full-Stack Solutions"];
  const fullText = texts[currentTextIndex];
  const [charIndex, setCharIndex] = useState(0);

  /**
   * Initialize component visibility for animation triggers
   */
  useEffect(() => {
    setIsVisible(true);
  }, []);

  /**
   * Typing animation effect
   * 
   * This effect creates a typewriter animation that cycles through different
   * skills. On mobile devices, the animation is disabled for better performance
   * and the full text is displayed immediately.
   * 
   * @dependencies charIndex, currentTextIndex, fullText, isMobile
   */
  useEffect(() => {
    // Skip animation on mobile for better performance
    if (isMobile) {
      setTypedText(fullText);
      return;
    }

    // Type each character with a delay
    if (charIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(prev => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // 100ms delay between characters
      return () => clearTimeout(timeoutId);
    } else {
      // Pause before starting the next text
      const timeoutId = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }, 2000); // 2 second pause
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, currentTextIndex, fullText, isMobile]);

  /**
   * Smooth scroll to projects section
   * 
   * Uses the native scrollIntoView API with smooth behavior
   * for a polished user experience.
   */
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Smooth scroll to contact section
   * 
   * Navigates to the contact form section with smooth scrolling.
   */
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-24 overflow-hidden bg-gradient-to-br from-background via-background to-muted/5"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Floating 3D Cubes - Creates depth and visual interest */}
        <div className="absolute top-16 sm:top-20 right-6 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 transform rotate-12 animate-float-slow">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg shadow-2xl backdrop-blur-sm border border-primary/10 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-24 sm:bottom-32 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 transform -rotate-12 animate-float-medium">
          <div className="w-full h-full bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg shadow-2xl backdrop-blur-sm border border-primary/10 transform -rotate-45"></div>
        </div>
        <div className="hidden sm:block absolute top-1/3 left-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 transform rotate-45 animate-float-fast">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg shadow-xl backdrop-blur-sm border border-primary/10"></div>
        </div>
        
        {/* Gradient Orbs - Adds atmospheric depth and movement */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 bg-gradient-radial from-primary/8 via-primary/4 to-transparent rounded-full blur-3xl animate-pulse-medium"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Text Content - Left side on desktop, centered on mobile */}
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              {/* Modern Typography with gradient text effects */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight">
                  <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
                    Crafting
                  </span>
                  <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                    Digital
                  </span>
                  <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/60 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h1>
                
                {/* Dynamic typing animation for skills */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                  Specializing in{" "}
                  <span className="text-primary font-semibold relative">
                    {typedText}
                    <span className="animate-blink text-primary">|</span>
                    <Sparkles className="absolute -top-1 -right-4 sm:-right-6 w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
                  </span>
                </p>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start w-full">
              <Button 
                className="group w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-2xl flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-semibold hover:from-primary/90 hover:to-primary/80 transition-all duration-300 active:scale-95 shadow-2xl shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1"
                onClick={scrollToContact}
              >
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline"
                className="group w-full sm:w-auto border-2 border-primary/20 bg-background/50 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-2xl text-base sm:text-lg md:text-xl font-semibold hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 active:scale-95 shadow-xl hover:shadow-primary/20 transform hover:-translate-y-1"
                onClick={scrollToProjects}
              >
                <span>View Work</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Tech Stack Badges - Desktop only for cleaner mobile experience */}
            <div className="hidden lg:flex items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">React & TypeScript</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <PenTool className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* 3D Hero Image - Right side on desktop, below text on mobile */}
          <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-8 lg:mt-0">
            <div className="relative group">
              {/* 3D Container with perspective transforms */}
              <div className="relative transform perspective-1000 group-hover:rotate-y-12 transition-transform duration-700">
                <div className="relative transform rotate-y-6 hover:rotate-y-12 transition-transform duration-500">
                  <img
                    src="/uploads/e36f8ce3-362f-422b-b487-bde1f6e31353.png"
                    alt="Hero Image"
                    className="w-full h-full object-contain rounded-3xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 transform hover:scale-105"
                    width="800"
                    height="800"
                    decoding="async"
                  />
                  
                  {/* 3D Glow Effect - Appears on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Floating 3D Elements - Adds depth and interactivity */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-2xl backdrop-blur-sm border border-primary/20 flex items-center justify-center transform rotate-12 animate-float-slow">
                <Code className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl shadow-2xl backdrop-blur-sm border border-primary/20 flex items-center justify-center transform -rotate-12 animate-float-medium">
                <Palette className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Desktop only */}
        <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-primary/60 rounded-full mt-1 sm:mt-2 animate-scroll-indicator"></div>
            </div>
            <span className="text-xs text-muted-foreground font-medium">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
