"use client";

import Link from "next/link";
import type { Project } from "@/lib/types";
import { SectionHeader } from "./section-header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useRef } from "react";

//icons
import { FaReact,FaDocker,FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript ,BiLogoPostgresql} from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";

import { Terminal } from "lucide-react";

function getTechIcon(techName: string) {
  const normalized = techName.toLowerCase().trim();

  switch (normalized) {
    case "next.js":
    case "nextjs":
      return (
        <SiNextdotjs className="h-4 w-4" />
      );
    case "react":
    case "react.js":
    case "reactjs":
      return (
        <FaReact className="h-4 w-4" />
      );
    case "typescript":
    case "ts":
      return (
        <BiLogoTypescript className="h-4 w-4" />
      );
    case "tailwind css":
    case "tailwindcss":
    case "tailwind":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.7 1 2.5 1.8.8.85 1.6 1.7 3.3 1.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.4-1.7-.9-.8-1.7-1.8-3.4-1.8zm-6 6.4c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.4 1.7.9.8 1.7 1.8 3.4 1.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-1-.25-1.7-1-2.5-1.8-.8-.85-1.6-1.7-3.3-1.7z" />
        </svg>
      );
    case "entity framework core":
    case "entity framework":
    case "ef core":
    case "ef":
      return (
        <TbBrandCSharp className="h-4 w-4" />
      );
    case "jwt":
      return (
        <p className="text-[10px] font-bold ">JWT</p>
      );
    case "python":
      return (
        <FaPython className="h-4 w-4" />
      );

    case "postgresql":
    case "postgres":
      return (
        <BiLogoPostgresql className="h-4 w-4" />
      );
    case "docker":
      return (
        <FaDocker className="h-4 w-4" />
      );
    default:
      return <Terminal className="h-4 w-4" />;
  }
}

function ProjectCard({ project }: { project: Project }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      timerRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1,
        );
      }, 2000);
    } else {
      if (timerRef.current){
        clearInterval(timerRef.current);
      }
      setCurrentImageIndex(0);
    }

    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, [isHovered, project.images.length]);
  return (
    <Link
      ref={ref as any}
      href={`/projetos/${project.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-50 group relative flex flex-col rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      {project.images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        >
          
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}
   
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
        {project.images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-300 ${
              i === currentImageIndex ? "w-4 bg-primary" : "w-1 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>

      <div className="relative z-10 flex flex-col flex-1 p-6">
        <div className="transform transition-transform duration-500 group-hover:translate-y-15">
          <h3 className="text-lg font-bold text-foreground transition-colors duration-500 group-hover:text-white line-clamp-2">
            {project.nome}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3 transition-colors duration-500 group-hover:text-gray-300">
            {project.descricaoCurta}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 transition-all duration-500 opacity-100 group-hover:opacity-0 pointer-events-auto group-hover:pointer-events-none">
          {project.tecnologias.slice(0, 5).map((tech) => (
            <div
              key={tech}
              title={tech}
              className="group/tech relative flex items-center justify-center rounded-lg bg-primary/5 p-2 text-primary border border-primary/10 transition-all duration-300 hover:bg-primary/15 hover:border-primary/30 hover:scale-110"
            >
              {getTechIcon(tech)}
            </div>
          ))}
          {project.tecnologias.length > 5 && (
            <span
              title={project.tecnologias.slice(5).join(", ")}
              className="rounded-lg bg-muted px-2 py-1 text-xs font-semibold text-muted-foreground border border-border transition-all duration-300"
            >
              +{project.tecnologias.length - 5}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Projetos" subtitle="Alguns dos meus trabalhos" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
