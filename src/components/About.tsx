
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Code, Globe, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image or Illustration */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1170&auto=format&fit=crop"
                  alt="SM Supports - Web Development Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 w-32 md:w-36 h-32 md:h-36 bg-portfolio-primary rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl p-2 shadow-lg transform rotate-12 hover:rotate-0 transition-transform border-4 border-white">
                <span className="text-center">5+ Years Experience</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <p className="text-portfolio-primary uppercase tracking-wider mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Web Developer & Digital Solutions Expert</h2>
            
            <p className="text-gray-600 mb-6">
              I'm a skilled web developer at SM Supports with over 5 years of experience delivering high-quality 
              digital solutions. I specialize in WordPress development, bug fixing, and creating custom 
              web applications that help businesses thrive online.
            </p>
            
            <p className="text-gray-600 mb-6">
              My approach combines technical expertise with a keen eye for detail, allowing me to deliver 
              solutions that are not only functional but also user-friendly and visually appealing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 border border-portfolio-primary/20 rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center mb-2">
                  <Globe className="text-portfolio-primary mr-2 h-5 w-5" />
                  <h3 className="font-bold text-lg">Web Development</h3>
                </div>
                <p className="text-gray-600">Building responsive websites and custom WordPress solutions for businesses of all sizes.</p>
              </div>
              <div className="p-4 border border-portfolio-primary/20 rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center mb-2">
                  <Code className="text-portfolio-primary mr-2 h-5 w-5" />
                  <h3 className="font-bold text-lg">Bug Fixing</h3>
                </div>
                <p className="text-gray-600">Diagnosing and resolving website issues, errors, and functionality problems quickly.</p>
              </div>
              <div className="p-4 border border-portfolio-primary/20 rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center mb-2">
                  <Server className="text-portfolio-primary mr-2 h-5 w-5" />
                  <h3 className="font-bold text-lg">WordPress</h3>
                </div>
                <p className="text-gray-600">Creating and customizing WordPress websites, themes, and plugins to meet client needs.</p>
              </div>
            </div>
            
            <Button className="button-gradient rounded-full px-8 py-6 text-base">
              <a href="https://www.fiverr.com/users/sajjatmohammed/" target="_blank" rel="noopener noreferrer">
                View My Fiverr Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
