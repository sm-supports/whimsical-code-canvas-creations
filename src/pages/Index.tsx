import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToHashSection(hash: string) {
  if (!hash) return;
  const sectionId = hash.replace('#', '');
  let attempts = 0;
  function scrollToSection() {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else if (attempts < 20) {
      attempts++;
      requestAnimationFrame(scrollToSection);
    }
  }
  scrollToSection();
}

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle both direct hash and preserved hash from state
    const hash = location.hash || (location.state as any)?.preserveHash;
    if (hash) {
      // Remove the preserveHash from state to avoid reapplying
      window.history.replaceState({ ...window.history.state, preserveHash: undefined }, '');
      scrollToHashSection(hash);
    }
  }, [location]);

  useEffect(() => {
    const onHashChange = () => {
      scrollToHashSection(window.location.hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        
        {/* Projects Section */}
        <section id="projects" className="relative py-10 bg-gradient-to-b from-background to-muted/10">
          <Projects />
        </section>
        
        {/* About Section */}
        <section id="about" className="relative py-10 bg-background">
          <About />
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="relative py-10 bg-gradient-to-b from-background to-muted/10">
          <Skills />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="relative py-10 bg-background">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
