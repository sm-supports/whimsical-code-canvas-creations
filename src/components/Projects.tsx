import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectNavCard from "./ProjectNavCard";
import { Code, Globe } from "lucide-react";

// Project data
const projectsData = [
	{
		id: 1,
		title: "React E-Commerce Platform",
		description: "A modern e-commerce platform built with React, TypeScript, and Vite for optimal performance and developer experience.",
		year: "2024",
		technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "PostgreSQL"],
		imageUrl:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/example/project",
	},
	{
		id: 2,
		title: "React Native Task Manager",
		description: "Cross-platform mobile app for task management with React Native, featuring offline sync and cloud storage.",
		year: "2024",
		technologies: ["React Native", "TypeScript", "PostgreSQL", "REST API"],
		imageUrl:
			"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop",
		liveUrl: undefined,
		githubUrl: "https://github.com/example/task-app",
	},
	{
		id: 3,
		title: "React Dashboard with Charts",
		description: "Interactive data visualization dashboard built with React, TypeScript, and modern charting libraries.",
		year: "2023",
		technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "D3.js"],
		imageUrl:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
		liveUrl: undefined,
		githubUrl: "https://github.com/example/dashboard",
	},
	{
		id: 4,
		title: "Full-Stack Blog Platform",
		description: "Complete blog platform with React frontend, PostgreSQL backend, and real-time features.",
		year: "2023",
		technologies: ["React", "TypeScript", "PostgreSQL", "REST API", "Tailwind CSS"],
		imageUrl:
			"https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop",
		liveUrl: undefined,
		githubUrl: "https://github.com/example/blog-platform",
	},
	{
		id: 5,
		title: "React Native Fitness App",
		description: "Mobile fitness tracking application with React Native, featuring workout plans and progress tracking.",
		year: "2024",
		technologies: ["React Native", "TypeScript", "PostgreSQL", "Native Modules"],
		imageUrl:
			"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop",
		liveUrl: undefined,
		githubUrl: "https://github.com/example/fitness-app",
	},
	{
		id: 6,
		title: "React Portfolio Website",
		description: "Modern portfolio website built with React, TypeScript, and Tailwind CSS for optimal performance.",
		year: "2024",
		technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
		imageUrl:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
		liveUrl: undefined,
		githubUrl: "https://github.com/example/portfolio",
	},
];

const Projects = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const categories = [
		"All",
		"React Development",
		"React Native",
		"Full Stack Development",
		"TypeScript",
		"PostgreSQL",
	];

	const filteredProjects =
		selectedCategory === "All"
			? projectsData
			: projectsData.filter((project) => {
					if (selectedCategory === "React Development") return project.technologies.includes("React") && !project.technologies.includes("React Native");
					if (selectedCategory === "React Native") return project.technologies.includes("React Native");
					if (selectedCategory === "Full Stack Development") return project.technologies.includes("PostgreSQL") || project.technologies.includes("REST API");
					if (selectedCategory === "TypeScript") return project.technologies.includes("TypeScript");
					if (selectedCategory === "PostgreSQL") return project.technologies.includes("PostgreSQL");
					return false;
			  });

	return (
		<section
			id="projects"
			className="relative py-12 pb-16 bg-gradient-to-b from-background via-background/95 to-background/90 overflow-hidden"
		>
			{/* Background Elements - Optimized for performance */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full opacity-70" />
				<div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full opacity-70" />
				<div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
			</div>

			<div className="container relative z-10 mx-auto px-4">
				<div className="text-center mb-8">
					<p className="text-primary font-semibold uppercase tracking-wider mb-2">
						My Work
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
						Featured Projects
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						Explore my latest works showcasing a blend of creativity, technical
						expertise, and attention to detail.
					</p>
				</div>

				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-2 mb-8">
					{categories.map((category) => (
						<Button
							key={category}
							variant={selectedCategory === category ? "default" : "outline"}
							onClick={() => setSelectedCategory(category)}
							className={`rounded-xl px-6 py-2 ${selectedCategory === category ? "bg-primary text-primary-foreground" : "border-border/50"}`}
						>
							{category}
						</Button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							year={project.year}
							technologies={project.technologies}
							imageUrl={project.imageUrl}
							liveUrl={project.liveUrl}
							githubUrl={project.githubUrl}
						/>
					))}
				</div>

				{/* Navigation to Project Pages */}
				<div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center">
					<ProjectNavCard
						title="React Development Projects"
						description="Modern React apps, component architecture, state management, and performance. Explore our React work."
						icon={<Code className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />}
						to="/projects/react-development"
						gradient="from-primary to-primary/90"
						className="mx-auto"
					/>
					<ProjectNavCard
						title="Web Development Projects"
						description="Full-stack, Next.js, and web platforms. See my web development portfolio with beautiful, scalable solutions."
						icon={<Globe className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />}
						to="/projects/web-development"
						gradient="from-primary to-primary/90"
						className="mx-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default Projects;
