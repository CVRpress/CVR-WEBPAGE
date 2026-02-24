"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-nexos-sapphire/40 bg-nexos-midnight/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="font-serif text-xl font-bold tracking-[0.3em] text-foreground">
            CVR
          </span>
          <span className="hidden text-xs tracking-wider text-nexos-slate sm:inline">
            |&nbsp; Criterio &middot; Verificaci&oacute;n &middot; Rigor
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#sobre-cvr"
            className="text-sm tracking-wide text-nexos-slate transition-colors hover:text-foreground"
          >
            Sobre CVR
          </Link>
          <Link
            href="/#proyectos"
            className="text-sm tracking-wide text-nexos-slate transition-colors hover:text-foreground"
          >
            Proyectos
          </Link>
          <Link
            href="/la-caja-negra#contacto"
            className="rounded border border-nexos-bronze/60 px-5 py-2 text-sm tracking-wide text-nexos-bronze transition-colors hover:border-nexos-bronze hover:bg-nexos-bronze/10"
          >
            Canal Seguro
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-nexos-slate md:hidden"
          aria-label={mobileOpen ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-nexos-sapphire/40 bg-nexos-midnight px-6 py-6 md:hidden">
          <Link
            href="/#sobre-cvr"
            onClick={() => setMobileOpen(false)}
            className="text-sm tracking-wide text-nexos-slate transition-colors hover:text-foreground"
          >
            Sobre CVR
          </Link>
          <Link
            href="/#proyectos"
            onClick={() => setMobileOpen(false)}
            className="text-sm tracking-wide text-nexos-slate transition-colors hover:text-foreground"
          >
            Proyectos
          </Link>
          <Link
            href="/la-caja-negra#contacto"
            onClick={() => setMobileOpen(false)}
            className="w-fit rounded border border-nexos-bronze/60 px-5 py-2 text-sm tracking-wide text-nexos-bronze transition-colors hover:border-nexos-bronze hover:bg-nexos-bronze/10"
          >
            Canal Seguro
          </Link>
        </nav>
      )}
    </header>
  )
}
