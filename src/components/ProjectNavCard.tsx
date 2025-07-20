import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ProjectNavCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
  gradient: string; // e.g. 'from-primary to-primary/90'
  className?: string;
}

const ProjectNavCard = ({
  title,
  description,
  icon,
  to,
  gradient,
  className = "",
}: ProjectNavCardProps) => {
  return (
    <Link
      to={to}
      className={cn(
        // Card container
        "group relative block w-full max-w-xs sm:max-w-sm md:w-[380px] min-h-[260px] sm:min-h-[320px] h-full flex flex-col rounded-3xl overflow-visible",
        "bg-white/60 dark:bg-[#232946]/70 border border-white/10 dark:border-white/5 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300",
        "hover:scale-[1.025] active:scale-100",
        className
      )}
      tabIndex={0}
      aria-label={title}
      style={{ perspective: "800px" }}
    >
      {/* 3D Floating Cube */}
      <div className="absolute -top-2 right-2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 z-10 pointer-events-none select-none animate-float-slow">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl shadow-xl backdrop-blur-sm border border-primary/10 transform rotate-12 group-hover:rotate-45 transition-transform duration-700" />
      </div>
      {/* Animated Icon - Bottom Left, visually integrated */}
      <div className="absolute bottom-3 left-3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 z-10 flex items-end">
        <div className="w-full h-full bg-white/40 dark:bg-white/10 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-md border border-white/10 transform rotate-6 group-hover:rotate-12 transition-transform duration-700">
          <span className="text-foreground text-lg sm:text-2xl md:text-3xl">{icon}</span>
        </div>
      </div>
      {/* Gradient Orb */}
      <div className="absolute bottom-1 left-1 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-xl opacity-50 animate-pulse-slow z-0" />
      {/* Glass orb for extra glassmorphism (subtle) */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-20 sm:h-20 bg-white/20 dark:bg-white/10 rounded-full blur-xl opacity-20 z-0" />
      {/* Card Content */}
      <div className="relative z-20 flex flex-col flex-1 justify-start px-4 sm:px-8 pt-6 sm:pt-10 pb-4 sm:pb-6 text-center sm:text-left">
        {/* Title with gradient text */}
        <h3 className={cn(
          "text-lg sm:text-2xl md:text-3xl font-extrabold mb-1 sm:mb-2 leading-tight bg-gradient-to-r bg-clip-text text-transparent",
          gradient
        )}>
          {title}
        </h3>
        {/* Description */}
        <p className="text-foreground/70 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-md font-normal">
          {description}
        </p>
        {/* Divider */}
        <div className="my-1 sm:my-2 h-[1.5px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
        {/* Actions Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-between gap-2 sm:gap-0 mt-auto w-full">
          {/* (Icon is now visually integrated at bottom left, see above) */}
          <div className="flex-1 hidden sm:block" />
          {/* CTA Button */}
          <span className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold text-sm sm:text-base shadow-md hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group-hover:scale-105">
            View Projects
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectNavCard; 