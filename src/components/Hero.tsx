
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-portfolio-purple font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              A Creative <span className="heading-gradient">Multi-disciplinary</span> Designer & Developer
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              I create delightful experiences through illustrations, graphic design, 
              and web development with a focus on beautiful, functional solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="button-gradient rounded-full px-8 py-6 text-base">
                View My Work
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-portfolio-purple text-portfolio-purple hover:text-portfolio-purple hover:bg-portfolio-light-purple/10">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="lg:w-2/5 relative animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
            <div className="aspect-square bg-gradient-to-br from-portfolio-purple/20 to-portfolio-cream/30 rounded-full flex items-center justify-center">
              <div className="w-4/5 h-4/5 rounded-full overflow-hidden bg-gradient-to-br from-portfolio-purple to-portfolio-dark-purple flex items-center justify-center text-white text-9xl font-bold">
                {/* Replace with your logo or profile image */}
                <span>C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
