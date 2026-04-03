"use client"

import { Briefcase } from "lucide-react"
import { SectionHeader } from "./section-header"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    cargo: "Desenvolvedor de Sistemas (Freelance)",
    empresa: "Fabiana Perfumaria",
    periodo: "2026 - Presente",
    descricao:
      "Atuação no desenvolvimento e manutenção de sistemas internos, garantindo estabilidade operacional e segurança da infraestrutura. Responsável pela implementação de microsserviços voltados à otimização de estoque e vendas, além da mitigação de vulnerabilidades críticas no ambiente da loja.",
  },
  {
    cargo: "Desenvolvedor FullStack (Freelance – Workana)",
    empresa: "Mova Impex",
    periodo: "2025 - 2026",
    descricao:
      "Responsável pelo desenvolvimento completo do site institucional (https://www.google.com/search?q=movaimpex.com.br), focando em performance e responsividade. Atuei desde a arquitetura da informação até a implementação final, garantindo uma interface moderna e otimizada para os objetivos de negócio da empresa.",
  },
  {
    cargo: "Assistente Administrativo / Apontador",
    empresa: "Engenharia Construção",
    periodo: "2024 - 2025",
    descricao:
      "Atuação na área administrativa, realizando controle e organização de dados em Excel, incluindo cálculo de materiais de obra e folha de pagamento de funcionários. Responsável pelo apontamento de horas trabalhadas, conferindo e registrando jornadas para controle interno e apoio ao setor financeiro. Suporte em rotinas administrativas e organização de informações operacionais.",
  },
  {
    cargo: "Assistente de Tecnologia",
    empresa: "Super Money",
    periodo: "2024",
    descricao:
      "Participação no desenvolvimento de sistema interno de disparo automático de mensagens para clientes, contribuindo para a automação da comunicação da empresa. Atuação em suporte técnico a computadores, manutenção básica e melhorias relacionadas à segurança dos sistemas internos. Organização, tratamento e estruturação de dados empresariais utilizando Excel para apoio operacional.",
  },
]

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 pb-12 last:pb-0 transition-all duration-600 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : index % 2 === 0
            ? "opacity-0 -translate-x-8"
            : "opacity-0 translate-x-8"
      }`}
    >
      
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
          <Briefcase className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1 w-px bg-border mt-2" />
      </div>

      
      <div className="flex-1 pb-2">
        <div className="rounded-lg border border-border bg-card p-5 transition-colors duration-200 hover:border-primary/30">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-semibold text-foreground">{experience.cargo}</h3>
            <span className="text-xs font-mono text-primary">{experience.periodo}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {experience.empresa}
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {experience.descricao}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ExperiencesSection() {
  return (
    <section id="experiencias" className="py-24 px-6 bg-card/30">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Experiencias"
          subtitle="Minha trajetoria profissional"
        />

        <div className="mt-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.empresa}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
