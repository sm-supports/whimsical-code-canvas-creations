import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Project data
const projectsData = [
	{
		id: 1,
		title: "Children's Book Illustration",
		description: "Whimsical illustrations for a children's book, bringing stories to life with vibrant colors and playful characters.",
		year: "2023",
		technologies: ["Procreate", "Photoshop"],
		imageUrl:
			"https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1074&auto=format&fit=crop",
		liveUrl: undefined,
		githubUrl: undefined,
	},
	{
		id: 2,
		title: "E-Commerce Website",
		description: "A modern e-commerce platform with product filtering, cart, and secure checkout.",
		year: "2024",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
		imageUrl:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/example/project",
	},
	{
		id: 3,
		title: "Brand Identity Design",
		description: "Developed a cohesive brand identity for a startup, including logo, color palette, and typography.",
		year: "2022",
		technologies: ["Illustrator", "Figma"],
		imageUrl:
			"https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1064&auto=format&fit=crop",
		liveUrl: undefined,
		githubUrl: undefined,
	},
	{
		id: 4,
		title: "Task Management App",
		description: "A productivity app for managing daily tasks with drag-and-drop and reminders.",
		year: "2023",
		technologies: ["React", "Redux", "Firebase"],
		imageUrl:
			"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop",
		liveUrl: undefined,
		githubUrl: "https://github.com/example/task-app",
	},
	{
		id: 5,
		title: "Interactive Dashboard",
		description: "A data visualization dashboard with real-time updates and interactive charts.",
		year: "2024",
		technologies: ["React", "D3.js", "Node.js"],
		imageUrl:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
		liveUrl: undefined,
		githubUrl: "https://github.com/example/dashboard",
	},
	{
		id: 6,
		title: "Story Book Cover Design",
		description: "Designed a captivating cover for a children's story book, blending illustration and typography.",
		year: "2022",
		technologies: ["Photoshop", "Illustrator"],
		imageUrl:
			"https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1176&auto=format&fit=crop",
		liveUrl: undefined,
		githubUrl: undefined,
	},
];

const Projects = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const categories = [
		"All",
		"Illustration",
		"Web Development",
		"Graphic Design",
		"React Development",
		"Full Stack Development",
	];

	const filteredProjects =
		selectedCategory === "All"
			? projectsData
			: projectsData.filter((project) => {
					if (selectedCategory === "Illustration") return project.technologies.includes("Procreate") || project.technologies.includes("Photoshop");
					if (selectedCategory === "Web Development") return project.technologies.includes("Next.js") || project.technologies.includes("Tailwind CSS");
					if (selectedCategory === "Graphic Design") return project.technologies.includes("Illustrator") && !project.technologies.includes("React");
					if (selectedCategory === "React Development") return project.technologies.includes("React") && !project.technologies.includes("Node.js");
					if (selectedCategory === "Full Stack Development") return project.technologies.includes("Node.js");
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
			</div>
		</section>
	);
};

export default Projects;
