import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
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
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      content: "+880 1301-360818",
      link: "https://wa.me/+8801301360818",
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

  return (    <section className="relative py-20 bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      {/* Blob animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Have a project in mind? Let's bring your vision to life.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="backdrop-blur-md bg-white/80 dark:bg-card/50 shadow-lg dark:shadow-none border border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/80 dark:bg-background/50"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/80 dark:bg-background/50"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/80 dark:bg-background/50 min-h-[150px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="backdrop-blur-md bg-white/80 dark:bg-card/50 shadow-md dark:shadow-none border border-border/50 hover:shadow-lg hover:bg-white/90 dark:hover:bg-card/70 transition-all duration-300"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <a
                      href={info.link}
                      target={info.external ? "_blank" : "_self"}
                      rel={info.external ? "noopener noreferrer" : ""}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
