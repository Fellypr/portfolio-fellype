"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const fullName = "Fellype Kenned"
  const fullRole = "Desenvolvedor FullStack"
  const [nameText, setNameText] = useState("")
  const [roleText, setRoleText] = useState("")
  const [phase, setPhase] = useState<"name" | "role" | "done">("name")

  useEffect(() => {
    if (phase === "name") {
      if (nameText.length < fullName.length) {
        const timeout = setTimeout(() => {
          setNameText(fullName.slice(0, nameText.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setPhase("role"), 400)
        return () => clearTimeout(timeout)
      }
    }

    if (phase === "role") {
      if (roleText.length < fullRole.length) {
        const timeout = setTimeout(() => {
          setRoleText(fullRole.slice(0, roleText.length + 1))
        }, 60)
        return () => clearTimeout(timeout)
      } else {
        setPhase("done")
      }
    }
  }, [nameText, roleText, phase, fullName.length, fullRole.length])

  const handleScrollToProjects = () => {
    const el = document.querySelector("#projetos")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="inline-block min-h-[1.2em]">
            {nameText}
            {phase === "name" && (
              <span className="ml-0.5 inline-block h-[1em] w-[3px] animate-pulse bg-primary align-middle" />
            )}
          </span>
        </h1>
        <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
          <span className="inline-block min-h-[1.2em] font-mono">
            {roleText}
            {(phase === "role" || phase === "done") && (
              <span className="ml-0.5 inline-block h-[0.9em] w-[3px] animate-pulse bg-primary align-middle" />
            )}
          </span>
        </p>

        <button
          onClick={handleScrollToProjects}
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
        >
          Ver Projetos
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
