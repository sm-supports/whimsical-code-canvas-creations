
import { Button } from "@/components/ui/button";
import { Code, Globe, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image or Illustration */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass-card">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1170&auto=format&fit=crop"
                  alt="SM Supports - Web Development Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 w-32 md:w-36 h-32 md:h-36 glass-card rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl p-2 transform rotate-12 hover:rotate-0 transition-transform border-2 border-white/30">
                <span className="text-center">5+ Years Experience</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <p className="text-portfolio-primary uppercase tracking-wider mb-2 font-medium">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Web Developer & Digital Solutions Expert</h2>
            
            <p className="text-gray-200 mb-6">
              I'm a skilled web developer at SM Supports with over 5 years of experience delivering high-quality 
              digital solutions. I specialize in WordPress development, bug fixing, and creating custom 
              web applications that help businesses thrive online.
            </p>
            
            <p className="text-gray-200 mb-6">
              My approach combines technical expertise with a keen eye for detail, allowing me to deliver 
              solutions that are not only functional but also user-friendly and visually appealing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6 rounded-xl hover:bg-white/20 transition-all">
                <div className="flex items-center mb-3">
                  <Globe className="text-portfolio-primary mr-3 h-6 w-6" />
                  <h3 className="font-bold text-lg text-white">Web Development</h3>
                </div>
                <p className="text-gray-200">Building responsive websites and custom WordPress solutions for businesses of all sizes.</p>
              </div>
              <div className="glass-card p-6 rounded-xl hover:bg-white/20 transition-all">
                <div className="flex items-center mb-3">
                  <Code className="text-portfolio-primary mr-3 h-6 w-6" />
                  <h3 className="font-bold text-lg text-white">Bug Fixing</h3>
                </div>
                <p className="text-gray-200">Diagnosing and resolving website issues, errors, and functionality problems quickly.</p>
              </div>
              <div className="glass-card p-6 rounded-xl hover:bg-white/20 transition-all md:col-span-2">
                <div className="flex items-center mb-3">
                  <Server className="text-portfolio-primary mr-3 h-6 w-6" />
                  <h3 className="font-bold text-lg text-white">WordPress</h3>
                </div>
                <p className="text-gray-200">Creating and customizing WordPress websites, themes, and plugins to meet client needs.</p>
              </div>
            </div>
            
            <Button className="glass-button rounded-full px-8 py-6 text-base text-white font-medium">
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
