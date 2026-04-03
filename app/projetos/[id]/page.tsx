import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle } from "lucide-react";
import type { Project } from "@/lib/types";
import projectsData from "@/public/data/projects.json";
import ImageSlider from "@/components/imagemSlider";

const projects: Project[] = projectsData;

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Projeto nao encontrado" };
  return {
    title: `${project.nome} | Fellype Kenned`,
    description: project.descricaoCurta,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar aos Projetos
        </Link>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          {project.nome}
        </h1>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tecnologias.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="w-100 bottom-3">  
          <ImageSlider images={project.images} />
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Sobre o Projeto
          </h2>
          <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
            {project.descricaoCompleta}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Funcionalidades
          </h2>
          <ul className="space-y-3 flex-1">
            {project.funcionalidades.map((func) => (
              <li key={func} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{func}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        </div>
      </div>
    </main>
  );
}
