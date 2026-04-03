export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {"Fellype Kenned. Todos os direitos reservados."}
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          {"Feito com Next.js, React & Tailwind CSS"}
        </p>
      </div>
    </footer>
  )
}
