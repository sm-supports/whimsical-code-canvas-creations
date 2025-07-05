import { Button } from "@/components/ui/button";
import { Code, Globe, Server, ArrowUpRight, ExternalLink, Star, Users, Clock, CheckCircle, Award, MessageSquare, Zap, Shield, Building2, Briefcase, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const services = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "React Development",
      description: "Building modern, scalable web applications with React, TypeScript, and Vite for optimal performance.",
      features: ["React Hooks", "TypeScript", "Vite Build Tool", "Component Architecture"]
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "React Native Development",
      description: "Creating cross-platform mobile applications with React Native for iOS and Android platforms.",
      features: ["Cross-platform", "Native Performance", "Mobile UI/UX", "App Store Deployment"]
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Full-Stack Development",
      description: "End-to-end web solutions with modern frontend and robust backend with PostgreSQL database.",
      features: ["PostgreSQL", "REST APIs", "Tailwind CSS", "TypeScript"]
    },
  ];

  const stats = [
    { icon: <Clock className="h-4 w-4" />, label: "5+ Years", value: "Experience" },
    { icon: <Users className="h-4 w-4" />, label: "100+", value: "Happy Clients" },
    { icon: <CheckCircle className="h-4 w-4" />, label: "200+", value: "Projects Completed" },
    { icon: <Star className="h-4 w-4" />, label: "4.9/5", value: "Average Rating" },
  ];

  const fiverrServices = [
    {
      title: "React Web Development",
      price: "From $80",
      description: "Modern React applications with TypeScript, Vite, and Tailwind CSS",
      features: ["React 18", "TypeScript", "Vite Build", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "React Native Mobile Apps",
      price: "From $120",
      description: "Cross-platform mobile applications for iOS and Android",
      features: ["React Native", "TypeScript", "Native Modules", "App Store Ready", "Performance Optimized"]
    },
    {
      title: "Full-Stack Development",
      price: "From $150",
      description: "Complete web applications with frontend and PostgreSQL backend",
      features: ["React Frontend", "PostgreSQL Database", "REST APIs", "TypeScript", "Deployment"]
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "Top Rated Seller",
      description: "Consistently delivering high-quality work with excellent client satisfaction"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "100% Response Rate",
      description: "Always available to communicate and provide updates on project progress"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality and attention to detail"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure & Reliable",
      description: "Building secure, scalable solutions that protect your business and data"
    }
  ];

  const trustedBy = [
    {
      name: "TechStart Inc.",
      type: "Startup",
      logo: "🚀",
      description: "React Native mobile app for their fitness platform"
    },
    {
      name: "Digital Solutions Co.",
      type: "Agency",
      logo: "💼",
      description: "Full-stack e-commerce platform with PostgreSQL"
    },
    {
      name: "Innovate Labs",
      type: "SaaS",
      logo: "🔬",
      description: "React dashboard with real-time data visualization"
    },
    {
      name: "Global Retail",
      type: "Enterprise",
      logo: "🏢",
      description: "Cross-platform mobile app for retail management"
    },
    {
      name: "Creative Studios",
      type: "Design Agency",
      logo: "🎨",
      description: "Portfolio website with modern React architecture"
    },
    {
      name: "HealthTech Pro",
      type: "Healthcare",
      logo: "🏥",
      description: "React Native app for patient management system"
    }
  ];

  return (
    <section
      id="about"
      className="relative py-16 bg-gradient-to-b from-background via-background/95 to-background/90"
    >
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            About SM Supports
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            React Developer &
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Full-Stack Expert
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a skilled React developer with over 5 years of experience building modern web and mobile applications. 
            I specialize in React, React Native, TypeScript, and full-stack development with PostgreSQL databases.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-background/50 border border-border/30 rounded-2xl">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">What Clients Say</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from satisfied clients who trusted me with their React and full-stack development projects
            </p>
          </div>
          
          {/* Moving Reviews Section */}
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll" style={{ width: 'fit-content' }}>
              {/* First set of reviews */}
              <div className="flex items-start gap-8 px-8 flex-shrink-0">
                <div className="w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">Product Manager, TechFlow</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "Working with this developer was an absolute pleasure. They delivered our React mobile app on time with perfect functionality. The TypeScript implementation was clean and maintainable. Communication was excellent throughout the project, and they went above and beyond to ensure we were satisfied with the final product."
                  </blockquote>
                </div>
                
                <div className="w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Michael Chen" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">Michael Chen</div>
                      <div className="text-sm text-muted-foreground">CTO, EcommercePro</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "Outstanding work on our e-commerce platform. The TypeScript implementation was flawless, and the React components were beautifully structured. The developer's attention to detail and understanding of modern web development best practices made our project a huge success. Highly recommend for any React development needs."
                  </blockquote>
                </div>
                
                <div className="w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt="Emily Rodriguez" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">Emily Rodriguez</div>
                      <div className="text-sm text-muted-foreground">Founder, StartupHub</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "Professional, responsive, and delivered exactly what we needed. The developer's expertise in React Native helped us launch our mobile app successfully. They were always available for questions and provided excellent technical guidance. The code quality and documentation were top-notch."
                  </blockquote>
                </div>
                
                <div className="w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face" alt="David Thompson" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">David Thompson</div>
                      <div className="text-sm text-muted-foreground">CEO, MobileFirst</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "Amazing React Native developer who transformed our vision into reality. Our app is now live on both iOS and Android stores, and users absolutely love it. The performance optimization and clean architecture made all the difference. This developer truly understands mobile development best practices."
                  </blockquote>
                </div>
                
                <div className="w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" alt="Lisa Wang" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">Lisa Wang</div>
                      <div className="text-sm text-muted-foreground">Technical Lead, DataCorp</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "Perfect full-stack solution with PostgreSQL backend and React frontend. The developer exceeded all expectations with their comprehensive understanding of modern web technologies. The database design was robust, and the API integration was seamless. Our project was delivered on time and under budget."
                  </blockquote>
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-start gap-8 px-8 flex-shrink-0">
                <div className="w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">Product Manager, TechFlow</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "Working with this developer was an absolute pleasure. They delivered our React mobile app on time with perfect functionality. The TypeScript implementation was clean and maintainable. Communication was excellent throughout the project, and they went above and beyond to ensure we were satisfied with the final product."
                  </blockquote>
                </div>
                
                <div className="w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Michael Chen" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">Michael Chen</div>
                      <div className="text-sm text-muted-foreground">CTO, EcommercePro</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "Outstanding work on our e-commerce platform. The TypeScript implementation was flawless, and the React components were beautifully structured. The developer's attention to detail and understanding of modern web development best practices made our project a huge success. Highly recommend for any React development needs."
                  </blockquote>
                </div>
                
                <div className="w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt="Emily Rodriguez" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">Emily Rodriguez</div>
                      <div className="text-sm text-muted-foreground">Founder, StartupHub</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "Professional, responsive, and delivered exactly what we needed. The developer's expertise in React Native helped us launch our mobile app successfully. They were always available for questions and provided excellent technical guidance. The code quality and documentation were top-notch."
                  </blockquote>
                </div>
                
                <div className="w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face" alt="David Thompson" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">David Thompson</div>
                      <div className="text-sm text-muted-foreground">CEO, MobileFirst</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "Amazing React Native developer who transformed our vision into reality. Our app is now live on both iOS and Android stores, and users absolutely love it. The performance optimization and clean architecture made all the difference. This developer truly understands mobile development best practices."
                  </blockquote>
                </div>
                
                <div className="w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" alt="Lisa Wang" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground">Lisa Wang</div>
                      <div className="text-sm text-muted-foreground">Technical Lead, DataCorp</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "Perfect full-stack solution with PostgreSQL backend and React frontend. The developer exceeded all expectations with their comprehensive understanding of modern web technologies. The database design was robust, and the API integration was seamless. Our project was delivered on time and under budget."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fiverr Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">My Fiverr Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional React and full-stack development services with modern technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {fiverrServices.map((service, index) => (
              <Card key={index} className="p-6 bg-background/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg text-foreground">{service.title}</h4>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose Me</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven track record of delivering exceptional results and building lasting client relationships
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-background/50 border border-border/30 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    {achievement.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Services */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What I Do</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 bg-background/50 border border-border/30 hover:border-primary/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-primary/10 p-3 text-primary flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground mb-2">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image and CTA */}
          <div className="space-y-8">
            {/* Image Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl transform rotate-2" />
              <div className="relative bg-background/50 border border-border/50 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1170&auto=format&fit=crop"
                  alt="SM Supports - Web Development Services"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full" />
                  <div className="relative w-full h-full bg-background/50 border border-border/50 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-bold text-xl text-foreground">5+</div>
                      <div className="text-xs text-muted-foreground">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl">
                <h4 className="text-xl font-semibold text-foreground mb-3">Ready to Work Together?</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I'm available for freelance projects and ready to help bring your ideas to life. 
                  Let's discuss your project and create something amazing together.
                </p>
                <Button
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  onClick={() => window.open("https://www.fiverr.com/sajjatmohammed?public_mode=true", "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  View My Fiverr Profile
                </Button>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background/50 border border-border/30 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="p-4 bg-background/50 border border-border/30 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
