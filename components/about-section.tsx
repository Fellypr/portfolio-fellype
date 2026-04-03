"use client";

import { User, Code, Database, Globe } from "lucide-react";
import { SectionHeader } from "./section-header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  { icon: Code, label: "Frontend", techs: "React, Next.js, TypeScript" },
  { icon: Database, label: "Backend", techs: "C#, ASP.NET Core, Entity Framework" },
  { icon: Globe, label: "DevOps", techs: "Docker, AWS, CI/CD" },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Sobre Mim"
          subtitle="Conheca um pouco da minha historia"
        />

        <div
          ref={ref}
          className={`grid gap-12 md:grid-cols-2 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="flex h-64 w-64 items-center justify-center rounded-2xl bg-secondary border border-border">
                <User className="h-24 w-24 text-primary" />
              </div>
              <div className="absolute -bottom-3 -right-3 h-64 w-64 rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed text-base">
              Desenvolvedor Full Stack com foco em ASP.NET Core e Next.js,
              unindo base acadêmica à prática de desenvolvimento de software
              orientado a resultados.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base">
              Desenvolvi e publiquei um sistema de
              gestão comercial atualmente em operação, responsável pelo controle
              de vendas e estoque. Experiência prática em arquitetura de APIs
              REST, autenticação com JWT, modelagem de dados e deploy de
              aplicaçõe
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base">
              Tenho interesse em construir sistemas escaláveis, bem estruturados e com código limpo, sempre buscando evolução técnica e colaboração em equipe para entregar soluções que gerem valor real.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="rounded-lg border border-border bg-secondary/50 p-4 text-center transition-colors duration-200 hover:border-primary/40"
                >
                  <skill.icon className="mx-auto h-6 w-6 text-primary mb-2" />
                  <h3 className="text-sm font-semibold text-foreground">
                    {skill.label}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {skill.techs}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
