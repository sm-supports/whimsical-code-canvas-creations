
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Facebook, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically handle form submission to a backend
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-portfolio-primary uppercase tracking-wider mb-2 font-medium">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact Me</h2>
          <p className="text-gray-200 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-white">Let's talk about your project</h3>
              <p className="text-gray-200 mb-6">
                Whether you need illustrations for a children's book, a new website, or a full-stack application,
                I'm here to help turn your vision into reality.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-primary/20 backdrop-blur-sm flex items-center justify-center mr-4 border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a href="mailto:contact@yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-portfolio-primary transition-colors">
                    contact@yourportfolio.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-primary/20 backdrop-blur-sm flex items-center justify-center mr-4 border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <a href="tel:+11234567890" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-portfolio-primary transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-primary/20 backdrop-blur-sm flex items-center justify-center mr-4 border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-200">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-medium text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-blue-600/20">
                  <Facebook size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-blue-700/20">
                  <Linkedin size={20} />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-green-600/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-pink-600/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 5.302c.904 1.402 1.432 3.060 1.432 4.841-.465-.113-1.533-.113-2.113-.113-.465 0-.93 0-1.281.113-.465-1.634-1.049-3.155-1.746-4.5 1.746-.582 2.808-.929 3.708-.341zm-6.454 1.055c.7 1.402 1.284 2.979 1.692 4.613-1.165.354-2.446.467-3.766.467-.235 0-.47 0-.7-.056.354-2.043.932-3.886 1.52-5.302.464.113.93.164 1.254.278zm-4.84-.64c-.641 1.402-1.225 3.074-1.52 5.018-.352-.056-.818-.113-1.284-.225-1.049-.281-2.098-.619-3.148-.9.641-1.862 1.804-3.44 3.375-4.498.93.41 1.747.41 2.577.605zm-4.955 6.245c.873.281 1.804.563 2.734.788.465.113.873.169 1.284.225.294 2.211.93 4.309 1.746 6.126-1.86-.641-3.433-1.86-4.424-3.714-.817-1.577-1.284-3.098-1.34-3.425zm6.623 7.406c-.816-1.804-1.396-3.714-1.691-5.696.235.056.47.056.7.056 1.49 0 3.036-.168 4.498-.562.236 1.803.583 3.549.873 5.127-.93.64-2.098 1.075-3.38 1.075zm5.025-2.043c-.235-1.634-.582-3.323-.817-5.015.35-.113.758-.113 1.168-.113.583 0 1.633 0 2.155.113-.117 2.042-.758 3.886-1.862 5.302-.465-.113-.874-.169-1.397-.287h-.247z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-purple-600/20">
                  <Instagram size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon hover:bg-gray-700/20">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="glass-input border-white/20 text-white placeholder-gray-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="glass-input border-white/20 text-white placeholder-gray-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this regarding?"
                  className="glass-input border-white/20 text-white placeholder-gray-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="glass-input border-white/20 text-white placeholder-gray-300 min-h-[120px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full glass-button text-white font-medium py-3 rounded-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
