
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image or Illustration */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1170&auto=format&fit=crop')` }}
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-portfolio-purple rounded-full flex items-center justify-center text-white font-bold text-xl">
                5+ Years Experience
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <p className="text-portfolio-purple uppercase tracking-wider mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Creative Designer & Developer</h2>
            
            <p className="text-gray-600 mb-6">
              I'm a multi-disciplinary creator passionate about bringing stories to life through illustrations, 
              design, and code. With expertise spanning children's book illustrations to full-stack development, 
              I bridge the gap between creativity and technology.
            </p>
            
            <p className="text-gray-600 mb-6">
              My approach combines artistic sensitivity with technical precision, allowing me to create 
              visually stunning and functionally robust solutions for various creative challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-2">Illustration & Design</h3>
                <p className="text-gray-600">Creating whimsical characters and compelling visual stories for children's books and brands.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Development</h3>
                <p className="text-gray-600">Building responsive websites and interactive applications with modern technologies.</p>
              </div>
            </div>
            
            <Button className="button-gradient rounded-full px-8 py-6 text-base">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
