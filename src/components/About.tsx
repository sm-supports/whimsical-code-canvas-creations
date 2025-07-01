import { Button } from "@/components/ui/button";
import { Code, Globe, Server, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Building responsive websites and custom WordPress solutions for businesses of all sizes.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Bug Fixing",
      description:
        "Diagnosing and resolving website issues, errors, and functionality problems quickly.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "WordPress",
      description:
        "Creating and customizing WordPress websites, themes, and plugins to meet client needs.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-12 bg-gradient-to-b from-background via-background/95 to-background/90"
    >
      {/* Background Elements */}
      {/* (Removed all background circles) */}

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl transform rotate-3" />
              <div className="relative bg-background/50 border border-border/50 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1170&auto=format&fit=crop"
                  alt="SM Supports - Web Development Services"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full" />
                  <div className="relative w-full h-full bg-background/50 border border-border/50 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-bold text-2xl text-foreground">5+</div>
                      <div className="text-sm text-muted-foreground">
                        Years of Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Web Developer & Digital Solutions Expert
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              I'm a skilled web developer at SM Supports with over 5 years of
              experience delivering high-quality digital solutions. I specialize in
              WordPress development, bug fixing, and creating custom web
              applications that help businesses thrive online.
            </p>

            <p className="text-muted-foreground text-lg mb-8">
              My approach combines technical expertise with a keen eye for detail,
              allowing me to deliver solutions that are not only functional but
              also user-friendly and visually appealing.
            </p>

            <div className="grid gap-4 mb-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group p-6 bg-background/50 border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button
              className="bg-primary text-primary-foreground px-8 py-6 rounded-xl flex items-center gap-2"
              onClick={() =>
                window.open(
                  "https://www.fiverr.com/users/sajjatmohammed/",
                  "_blank"
                )
              }
            >
              View My Fiverr Profile
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
