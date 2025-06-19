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
		category: "Illustration",
		imageUrl:
			"https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1074&auto=format&fit=crop",
		link: "/projects/illustration",
	},
	{
		id: 2,
		title: "E-Commerce Website",
		category: "Web Development",
		imageUrl:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
		link: "/projects/web-development",
	},
	{
		id: 3,
		title: "Brand Identity Design",
		category: "Graphic Design",
		imageUrl:
			"https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1064&auto=format&fit=crop",
		link: "/projects/graphic-design",
	},
	{
		id: 4,
		title: "Task Management App",
		category: "React Development",
		imageUrl:
			"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop",
		link: "/projects/react-development",
	},
	{
		id: 5,
		title: "Interactive Dashboard",
		category: "Full Stack Development",
		imageUrl:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
		link: "/projects/full-stack",
	},
	{
		id: 6,
		title: "Story Book Cover Design",
		category: "Illustration",
		imageUrl:
			"https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1176&auto=format&fit=crop",
		link: "/projects/illustration",
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
			: projectsData.filter(
					(project) => project.category === selectedCategory
			  );

	return (
		<section
			id="projects"
			className="relative py-24 bg-gradient-to-b from-background via-background/95 to-background/90"
		>
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
				<div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
				<div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
			</div>

			<div className="container relative z-10 mx-auto px-4">
				<div className="text-center mb-16">
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
				<div className="flex flex-wrap justify-center gap-3 mb-16">
					{categories.map((category) => (
						<Button
							key={category}
							variant={
								selectedCategory === category ? "default" : "outline"
							}
							onClick={() => setSelectedCategory(category)}
							className={`rounded-xl px-6 py-2 transition-all duration-500 ${
								selectedCategory === category
									? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
									: "border-border/50 hover:bg-background/80 hover:border-primary/50"
							}`}
						>
							{category}
						</Button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project) => (
						<Link
							key={project.id}
							to={project.link}
							className="group relative block overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
						>
							{/* Image Container */}
							<div className="relative aspect-[4/3] overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								<img
									src={project.imageUrl}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
								/>
							</div>

							{/* Content */}
							<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
								<div className="relative">
									<div className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									<div className="relative">
										<p className="text-primary font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
											{project.category}
										</p>
										<h3 className="text-xl font-semibold text-foreground mb-4">
											{project.title}
										</h3>
										<Button
											variant="link"
											className="text-primary p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
										>
											View Project
											<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
										</Button>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
