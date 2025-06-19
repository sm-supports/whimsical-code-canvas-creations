
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "contact@smsupports.com",
      link: "mailto:contact@smsupports.com",
      external: true
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      external: true
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Available Worldwide",
      link: "#",
      external: false
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      url: "https://facebook.com/smsupports",
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/company/smsupports",
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/smsupports",
      color: "hover:text-gray-300"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      url: "https://instagram.com/smsupports",
      color: "hover:text-pink-400"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-6 w-6" />,
      url: "https://wa.me/15551234567",
      color: "hover:text-green-400"
    },
    {
      name: "Dribbble",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
        </svg>
      ),
      url: "https://dribbble.com/smsupports",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-portfolio-primary uppercase tracking-wider mb-2 font-medium">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact Me</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="glass-card border-none hover:scale-105 transition-all duration-300 touch-feedback">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="glass-button p-3 rounded-full text-portfolio-primary">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                          {info.external ? (
                            <a 
                              href={info.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-portfolio-primary transition-colors mobile-touch-target"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-300">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Follow Me</h4>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon ${social.color} transition-all duration-300 touch-feedback mobile-touch-target`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-input rounded-xl border-white/20 focus:border-portfolio-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-input rounded-xl border-white/20 focus:border-portfolio-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-input rounded-xl border-white/20 focus:border-portfolio-primary min-h-[120px] resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full glass-button rounded-xl py-6 text-white font-medium hover:bg-portfolio-primary/20 transition-all duration-300 touch-feedback mobile-touch-target"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
