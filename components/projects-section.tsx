"use client";

import Link from "next/link";
import type { Project } from "@/lib/types";
import { SectionHeader } from "./section-header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useRef } from "react";

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

        <div className="mt-4 flex flex-wrap gap-2 transition-all duration-500 opacity-100 group-hover:opacity-0 pointer-events-auto group-hover:pointer-events-none">
          {project.tecnologias.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary/8 px-2.5 py-1 text-xs font-semibold text-primary border border-primary/20 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
          {project.tecnologias.length > 3 && (
            <span className="text-xs text-muted-foreground py-1">
              +{project.tecnologias.length - 3}
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
