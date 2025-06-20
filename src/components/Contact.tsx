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

  return (    <section id="contact" className="relative py-20 bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

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
                  className="w-full bg-primary text-primary-foreground font-medium py-6 rounded-xl flex items-center justify-center gap-2"
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
                className="backdrop-blur-md bg-white/80 dark:bg-card/50 shadow-md dark:shadow-none border border-border/50"
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
                      className="text-muted-foreground"
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
