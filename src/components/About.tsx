import { Button } from "@/components/ui/button";
import { Code, Globe, Server, ArrowUpRight, ExternalLink, Star, Users, Clock, CheckCircle, Award, MessageSquare, Zap, Shield, Building2, Briefcase, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const reviews = [
  {
    "username": "cole0530",
    "country": "United States",
    "rating": 5,
    "review": "He worked very hard to ensure his illustrations were the best they can be for my book, very good job. Thanks, Mike",
    "price": "$50-$100",
    "dp": ""
  },
  {
    "username": "maubayuelo",
    "country": "Canada",
    "rating": 4.7,
    "review": "It helped me to get the project done fast.",
    "price": "$100-$200",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/67747a83f6b34137937c49bd705b56da-1709931614125/efc259f3-51e1-4a18-812e-8a29adb02c37.jpg"
  },
  {
    "username": "daniarashid2021",
    "country": "Canada",
    "rating": 4.7,
    "review": "Good work. Will assign more work in future",
    "price": "Up to $50",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_large/v1/attachments/delivery/asset/9905712dea26557917f9af96c70ee8dd-1686599517/cover%20image%20%28ebook%29.jpg"
  },
  {
    "username": "aevinhoagland",
    "country": "Belgium",
    "rating": 5,
    "review": "Very nice person who goes the extra mile! Highly recommend this seller. Fluent communication and excellent work.",
    "price": "Up to $50",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_large/v1/attachments/delivery/asset/bc769cefeaa091ae206198aaa05be6eb-1686503802/tractor.png"
  },
  {
    "username": "cole0530",
    "country": "United States",
    "rating": 5,
    "review": "This was defintiely a process but this seller kept working and listening to changes that helped make my book the best it can be. I appreciate all of the patients and work without question. I recommend however you must be involved and you will be happy at the end. Again, thanks for everything.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_large/v1/attachments/delivery/asset/a0a97c4261ff5e47f5056252a14e73c8-1684616889/Manuscript%20%28Ebook%29%20%284%29.pdf"
  },
  {
    "username": "markwatson519",
    "country": "United States",
    "rating": 5,
    "review": "Great Great thanks",
    "price": "",
    "dp": ""
  },
  {
    "username": "travelossip",
    "country": "Canada",
    "rating": 5,
    "review": "Perfect. Thank you",
    "price": "",
    "dp": ""
  },
  {
    "username": "travelossip",
    "country": "Canada",
    "rating": 4.7,
    "review": "Amazing work.",
    "price": "",
    "dp": ""
  },
  {
    "username": "abovepromotions",
    "country": "United States",
    "rating": 5,
    "review": "We've ordered numerous times from Sajjat and have not been disappointed yet.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/575413/original/ap_photo.jpg"
  },
  {
    "username": "phireworx",
    "country": "United States",
    "rating": 5,
    "review": "Superb and Accurate!",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/35285697/original/1465417873250_facebook20160608-31963-vc9j3n.jpg"
  },
  {
    "username": "abovepromotions",
    "country": "United States",
    "rating": 5,
    "review": "Sajjat completed another assignment for us and we are pleased with the results.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/575413/original/ap_photo.jpg"
  },
  {
    "username": "abovepromotions",
    "country": "United States",
    "rating": 5,
    "review": "We've used Sajjat numerous times to complete research projects for us. He always delivers on time and provides the information in a format most useful to us. We consider him a part of our team's go-to partner for research.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/575413/original/ap_photo.jpg"
  },
  {
    "username": "phireworx",
    "country": "United States",
    "rating": 5,
    "review": "This guy is magical!",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/35285697/original/1465417873250_facebook20160608-31963-vc9j3n.jpg"
  },
  {
    "username": "dujotabi",
    "country": "Canada",
    "rating": 5,
    "review": "Excellent communication from the start of the project and delivered exactly the correct type of leads. It's hard to find an outstanding lead service, but this is one of them. Quick to respond and find pretty complicated/well-qualified leads. I would highly recommend working with them over the other lead generation offers here on Fiverr.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_large/v1/attachments/delivery/asset/33d35fcf8b93996f30b4e1ac482026f1-1638511331/Screenshot%202021-12-03%20115755.jpg"
  },
  {
    "username": "markjob747",
    "country": "United States",
    "rating": 5,
    "review": "This was quick and accurate. Never expected such a quick turnaround. The domain wasn't widespread, and yet Sajjat did it accurately. He's very thorough with his requirements gathering and makes sure the requirements are met. I would definitely recommend him for any B2B Lead Generation work.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e3eca93aac762ed45f222ba9687dbbae-1630513545746/0270aba0-1a7b-4e42-9999-bbc6a83ffcd1.jpg"
  },
  {
    "username": "sowrav777",
    "country": "Bangladesh",
    "rating": 5,
    "review": "It took Sajjatmohammed and I a few back and first communications, but our communication improved and I was 100% satisfied with the work he provided. I will use him in the future... for data input and data scraping... things like that are added to an excel doc. Thank you",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/da1ad3e4345c7473573319ba89f4513b-1751071374383/ff3d9924-bd6d-41b2-adda-0b141bb6d2db.png"
  },
  {
    "username": "edward_ortiz1",
    "country": "United States",
    "rating": 5,
    "review": "The leads the seller provides did not have any invalid email addresses and were good target leads! I have been in the industry for some time now and I have struggled to get direct information for Directors, CEO's and Finance directors. Sajjat was very friendly and keen to assist me with speedy and quality...",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/19b6276f9bbc26785fdb5178a0ba958a-1629527197300/6661ad4c-acdb-4ff9-8523-8b8c4a13ec6d.jpg"
  },
  {
    "username": "kituzu",
    "country": "United States",
    "rating": 5,
    "review": "The job was understood immediately and the seller took to explain the entire process. I needed over 15,000 pages scraped. Communication was beyond quick and the job was done ahead of schedule. Thanks mate!",
    "price": "",
    "dp": ""
  },
  {
    "username": "jose_w_nemeth",
    "country": "United States",
    "rating": 5,
    "review": "Perfect seller! Communication is great. He took the time to discuss the project and have a good understanding of what was needed. I will use his service again.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/cc9982012bbd016fba0839685704a194-1630399100706/1f3923cf-3189-4f83-a406-b2195a86c04e.jpeg"
  },
  {
    "username": "fernanrf",
    "country": "Canada",
    "rating": 5,
    "review": "I needed leads from yellowpages. He delivered in a few hours. I got emails, phone numbers, websites and many more. The turnaround was excellent. I checked a lot of data scrapers here, he has the best price, trust me! HIGHLY recommend this guy 👍",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_smartwm/t_delivery_large/v1/attachments/delivery/asset/a4a07e33b5d44b5bb8ebb8367dd2c31f-1629737717/Screenshot%20%28157%29.png"
  },
  {
    "username": "abovepromotions",
    "country": "United States",
    "rating": 5,
    "review": "It's great being able to trust your research to Sajjat.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/575413/original/ap_photo.jpg"
  },
  {
    "username": "carlsingleton",
    "country": "South Africa",
    "rating": 4.3,
    "review": "A few revisions required but done without question to expected level of service. Project delivered on time. Great communicator. Thank you",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/36093833/original/1466104162595_facebook20160616-12032-1ilp7vz.jpg"
  },
  {
    "username": "abovepromotions",
    "country": "United States",
    "rating": 5,
    "review": "Will definitely use Sajjat again for our other upcoming research projects.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/575413/original/ap_photo.jpg"
  },
  {
    "username": "abovepromotions",
    "country": "United States",
    "rating": 5,
    "review": "The seller understood the request and completed the task on time.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/575413/original/ap_photo.jpg"
  },
  {
    "username": "guyh3004",
    "country": "Israel",
    "rating": 5,
    "review": "Sajjat works very efficiently, Used his services for data scrapping and I received my delivery before the estimated hour, very articulate and has done a great job. Quick answers and great ROI, will use his services again and recommend to anyone :)",
    "price": "",
    "dp": ""
  },
  {
    "username": "car33f",
    "country": "United States",
    "rating": 5,
    "review": "The work was quick and without any error. I loved the way he communicates. Highly recommend this guy.",
    "price": "",
    "dp": ""
  },
  {
    "username": "vincentrynolds",
    "country": "United States",
    "rating": 5,
    "review": "Very responsive and the final work were fabulous. My experience was great.",
    "price": "",
    "dp": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/af317dd819f3bdbe3ed3b01d3303a0bf-1624201367084/8a57c646-ced2-4757-9c30-b3eec983ab8a.jpeg"
  }
];

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
      features: ["React 18", "TypeScript", "Vite Build", "Tailwind CSS", "Responsive Design"],
      fiverrLink: "https://www.fiverr.com/sajjatmohammed?public_mode=true"
    },
    {
      title: "React Native Mobile Apps",
      price: "From $120",
      description: "Cross-platform mobile applications for iOS and Android",
      features: ["React Native", "TypeScript", "Native Modules", "App Store Ready", "Performance Optimized"],
      fiverrLink: "https://www.fiverr.com/sajjatmohammed?public_mode=true"
    },
    {
      title: "Wordpress/Wix website",
      price: "From $80",
      description: "Fully Customized Single-Page Wix Studio Website",
      features: ["Wix", "Wordpress", "Shopify", "Webflow", "Deployment"],
      fiverrLink: "https://www.fiverr.com/s/8zE679p"
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
              Real feedback from satisfied clients who trusted me with their projects
            </p>
          </div>
          
          {/* Moving Reviews Section */}
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll mobile-scroll-container" style={{ width: 'fit-content', minWidth: 'max-content' }}>
              {/* First set of reviews */}
              <div className="flex items-start gap-6 px-6 flex-shrink-0">
                {reviews.map((review, index) => (
                  <div key={index} className="w-80 sm:w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0 min-h-[280px] flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={review.dp || "/uploads/placeholder_dp.png"} 
                        alt={review.username} 
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground">{review.username}</div>
                        <div className="text-sm text-muted-foreground">{review.country}</div>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400' : 'fill-gray-300'} text-yellow-400 flex-shrink-0`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
                      "{review.review}"
                    </blockquote>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-start gap-6 px-6 flex-shrink-0">
                {reviews.map((review, index) => (
                  <div key={`duplicate-${index}`} className="w-80 sm:w-96 bg-gradient-to-br from-background/80 to-background/40 border border-border/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm flex-shrink-0 min-h-[280px] flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={review.dp || "/uploads/placeholder_dp.png"} 
                        alt={review.username} 
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground">{review.username}</div>
                        <div className="text-sm text-muted-foreground">{review.country}</div>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400' : 'fill-gray-300'} text-yellow-400 flex-shrink-0`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
                      "{review.review}"
                    </blockquote>
                  </div>
                ))}
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
              <Card 
                key={index} 
                className="p-6 bg-background/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg cursor-pointer group hover:scale-105 transform"
                onClick={() => window.open(service.fiverrLink, "_blank")}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{service.title}</h4>
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
                <div className="mt-4 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Click to view on Fiverr</span>
                    <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
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
