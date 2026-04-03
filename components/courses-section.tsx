"use client"

import Image from "next/image"
import { GraduationCap, ExternalLink } from "lucide-react"
import { SectionHeader } from "./section-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const courses = [
  {
    nome: "Desenvolvimento Web FullStack",
    instituicao: "Dio",
    cargaHoraria: "127 horas",
    certificado: "https://hermes.dio.me/certificates/AUWQRWYW.pdf",
    imagemCertificado: "/certificate/FullStack.png",
  },
  {
    nome: "Primeiros Passos com o Docker",
    instituicao: "Dio",
    cargaHoraria: "1 horas",
    certificado: "https://hermes.dio.me/certificates/9ABAVMIT.pdf",
    imagemCertificado: "/certificate/9ABAVMIT.png",
  },
  {
    nome: "Configuração e Deploy na nuvem Microsoft Azure Cloud",
    instituicao: "Dio",
    cargaHoraria: "2 horas",
    certificado: "https://hermes.dio.me/certificates/PACZABGA.pdf",
    imagemCertificado: "/certificate/DeployNuvem.png",
  },
  {
    nome: "Introdução Python",
    instituicao: "Udemy",
    cargaHoraria: "2 horas",
    certificado: "https://certificados.alfahelix.com.br/gerar/pdf",
    imagemCertificado: null,
  },
  {
    nome: "Construindo APIs com .NET C#",
    instituicao: "Dio",
    cargaHoraria: "16 horas",
    certificado: "https://hermes.dio.me/certificates/WVKPFYEX.pdf",
    imagemCertificado: "/certificate/ConstruindoApi.png",
  },
  {
    nome: "Banco de Dados",
    instituicao: "Dio",
    cargaHoraria: "12 horas",
    certificado: "https://hermes.dio.me/certificates/U6ZBHXXT.pdf",
    imagemCertificado: "/certificate/BancoDeDados.png",
  },
]

function CourseCard({ course }: { course: (typeof courses)[0] }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`rounded-lg border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative h-40 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden flex items-center justify-center">
        {course.imagemCertificado ? (
          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Image
              src={course.imagemCertificado}
              alt={course.nome}
              fill
              className="object-contain p-4"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-sm">{course.nome}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{course.instituicao}</p>
            <p className="mt-0.5 text-xs text-muted-foreground font-mono">
              {course.cargaHoraria}
            </p>
            {course.certificado && (
              <a
                href={course.certificado}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline transition-all hover:gap-2"
              >
                Ver Certificado
                <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CoursesSection() {
  return (
    <section id="cursos" className="py-24 px-6 bg-card/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Cursos"
          subtitle="Formacao e certificacoes"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.nome} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
