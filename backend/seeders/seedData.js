const Project = require('../models/Project');

const seedData = async () => {
  try {
    // Clear existing data
    await Project.deleteMany({});

    // General projects
    const generalProjects = [
      {
        title: "Children's Book Illustration",
        description: "Whimsical illustrations for a children's book, bringing stories to life with vibrant colors and playful characters.",
        year: "2023",
        technologies: ["Procreate", "Photoshop"],
        imageUrl: "https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1074&auto=format&fit=crop",
        liveUrl: null,
        githubUrl: null,
        category: "general"
      },
      {
        title: "E-Commerce Website",
        description: "A modern e-commerce platform with product filtering, cart, and secure checkout.",
        year: "2024",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/project",
        category: "general"
      },
      {
        title: "Brand Identity Design",
        description: "Developed a cohesive brand identity for a startup, including logo, color palette, and typography.",
        year: "2022",
        technologies: ["Illustrator", "Figma"],
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1064&auto=format&fit=crop",
        liveUrl: null,
        githubUrl: null,
        category: "general"
      },
      {
        title: "Task Management App",
        description: "A productivity app for managing daily tasks with drag-and-drop and reminders.",
        year: "2023",
        technologies: ["React", "Redux", "Firebase"],
        imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop",
        liveUrl: null,
        githubUrl: "https://github.com/example/task-app",
        category: "general"
      },
      {
        title: "Interactive Dashboard",
        description: "A data visualization dashboard with real-time updates and interactive charts.",
        year: "2024",
        technologies: ["React", "D3.js", "Node.js"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
        liveUrl: null,
        githubUrl: "https://github.com/example/dashboard",
        category: "general"
      },
      {
        title: "Story Book Cover Design",
        description: "Designed a captivating cover for a children's story book, blending illustration and typography.",
        year: "2022",
        technologies: ["Photoshop", "Illustrator"],
        imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1176&auto=format&fit=crop",
        liveUrl: null,
        githubUrl: null,
        category: "general"
      }
    ];

    // Web development projects
    const webDevelopmentProjects = [
      {
        title: "E-Commerce Website",
        description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process. Built with modern web technologies and best practices for performance and user experience.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
        year: "2024",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/project",
        category: "web-development"
      },
      {
        title: "Corporate Portfolio",
        description: "A modern, responsive website for a corporate client showcasing their services and case studies. Features dynamic content management and optimized performance metrics.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
        year: "2023",
        technologies: ["React", "Gatsby", "GraphQL", "Contentful", "Netlify"],
        liveUrl: "https://example.com",
        githubUrl: null,
        category: "web-development"
      },
      {
        title: "Blog Platform",
        description: "A custom blog platform with content management system, search functionality and newsletter integration. Built with performance and SEO in mind.",
        imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop",
        year: "2022",
        technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
        liveUrl: null,
        githubUrl: "https://github.com/example/project",
        category: "web-development"
      }
    ];

    // React development projects
    const reactProjects = [
      {
        title: "Task Management App",
        description: "A feature-rich task management application with drag-and-drop functionality, filtering, and task analytics. Built with modern React patterns and real-time updates.",
        imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop",
        year: "2024",
        technologies: ["React", "TypeScript", "Redux Toolkit", "TailwindCSS", "Firebase"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/project",
        category: "react-development"
      },
      {
        title: "Social Media Dashboard",
        description: "A comprehensive dashboard displaying social media analytics with interactive charts and real-time data updates. Features dark mode and responsive design.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
        year: "2023",
        technologies: ["React", "Context API", "Chart.js", "CSS Modules", "Socket.io"],
        liveUrl: "https://example.com",
        githubUrl: null,
        category: "react-development"
      },
      {
        title: "E-Learning Platform",
        description: "An interactive learning platform with course progress tracking, quizzes, and video content integration. Built with accessibility and user experience in mind.",
        imageUrl: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1170&auto=format&fit=crop",
        year: "2022",
        technologies: ["React", "Firebase", "Material UI", "React Router", "Jest"],
        liveUrl: null,
        githubUrl: "https://github.com/example/project",
        category: "react-development"
      }
    ];

    // Insert all projects
    await Project.insertMany([...generalProjects, ...webDevelopmentProjects, ...reactProjects]);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedData; 