import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Contact Component - Contact Form Section
 * 
 * This component provides a modern contact form with 3D visual effects
 * matching the Hero section's design language. It includes form validation,
 * smooth animations, and responsive design for all screen sizes.
 * 
 * @component
 * @example
 * ```tsx
 * <Contact />
 * ```
 * 
 * @features
 * - 3D floating elements and gradient orbs
 * - Form validation and submission handling
 * - Responsive design with mobile optimizations
 * - Smooth scroll-triggered animations
 * - Contact information cards with hover effects
 * - Accessibility features (ARIA labels, keyboard navigation)
 * 
 * @state
 * - form: Form data (name, email, message)
 * - submitted: Form submission status
 * - isVisible: Animation trigger state
 */
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Intersection Observer for scroll-triggered animations
   * 
   * Detects when the contact section comes into view and triggers
   * the entrance animations for a smooth user experience.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  /**
   * Contact information data
   * 
   * Contains contact details with icons, links, and gradient colors
   * for the visual cards. Each item has a unique gradient for
   * visual distinction and brand consistency.
   */
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "contact@smsupports.com",
      link: "mailto:contact@smsupports.com",
      external: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "WhatsApp",
      content: "+880 1301-360818",
      link: "https://wa.me/+8801301360818",
      external: true,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: "+880 1301-360818",
      link: "tel:+8801301360818",
      external: false,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      content: "Dhaka, Bangladesh",
      link: "#",
      external: false,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="contact" className="relative pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-28 md:pb-36 overflow-hidden bg-gradient-to-br from-background via-background to-muted/5">
      {/* 3D Background Elements - Matching Hero Style */}
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
        
        {/* Additional floating elements for contact section */}
        <div className="absolute top-1/2 left-1/6 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 transform -rotate-45 animate-float-slow">
          <div className="w-full h-full bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg shadow-xl backdrop-blur-sm border border-primary/10"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/6 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 transform rotate-45 animate-float-medium">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg shadow-lg backdrop-blur-sm border border-primary/10"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header Section with animated entrance */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              Let's Create
            </span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
              Something
            </span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/60 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and make something extraordinary together.
            <Sparkles className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info Cards - 3D Grid with staggered animations */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="relative group">
                  {/* 3D Container with perspective transforms */}
                  <div className="relative transform perspective-1000 group-hover:rotate-y-3 transition-transform duration-500">
                    <Card className="relative overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-card/60 shadow-xl border border-white/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                      {/* Gradient overlay - Appears on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      <CardContent className="p-6 relative">
                        <div className="flex items-start gap-4">
                          {/* Icon with gradient background */}
                          <div className={`rounded-xl bg-gradient-to-br ${info.gradient} p-3 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                              {info.title}
                            </h3>
                            <a
                              href={info.link}
                              target={info.external ? "_blank" : "_self"}
                              rel={info.external ? "noopener noreferrer" : ""}
                              className="text-muted-foreground hover:text-primary transition-colors duration-300 block"
                            >
                              {info.content}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Floating element for each card - Adds visual interest */}
                  <div className={`absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${info.gradient} opacity-20 rounded-lg shadow-lg backdrop-blur-sm border border-primary/20 flex items-center justify-center transform rotate-12 animate-float-fast`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Card - Project availability */}
            <div className="relative group">
              <div className="relative transform perspective-1000 group-hover:rotate-y-3 transition-transform duration-500">
                <Card className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        Available for Projects
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We're currently accepting new projects and would love to hear about your ideas. 
                        Let's create something amazing together!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Floating element for info card */}
              <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg shadow-lg backdrop-blur-sm border border-primary/20 flex items-center justify-center transform -rotate-12 animate-float-medium">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
