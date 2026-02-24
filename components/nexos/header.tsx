"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-base font-bold tracking-[0.2em] text-cvr-blue">
            CVR
          </span>
          <span className="hidden text-xs tracking-wide text-cvr-gray sm:inline">
            |&nbsp; Criterio &middot; Verificaci&oacute;n &middot; Rigor
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#sobre-cvr"
            className="text-sm text-cvr-gray transition-colors hover:text-cvr-blue"
          >
            Sobre CVR
          </Link>
          <Link
            href="/#proyectos"
            className="text-sm text-cvr-gray transition-colors hover:text-cvr-blue"
          >
            Proyectos
          </Link>
          <Link
            href="/la-caja-negra#contacto"
            className="border border-cvr-blue px-5 py-1.5 text-sm text-cvr-blue transition-colors hover:bg-cvr-blue hover:text-primary-foreground"
          >
            Canal Seguro
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-cvr-gray md:hidden"
          aria-label={mobileOpen ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background px-6 py-6 md:hidden">
          <Link
            href="/#sobre-cvr"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-cvr-gray transition-colors hover:text-cvr-blue"
          >
            Sobre CVR
          </Link>
          <Link
            href="/#proyectos"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-cvr-gray transition-colors hover:text-cvr-blue"
          >
            Proyectos
          </Link>
          <Link
            href="/la-caja-negra#contacto"
            onClick={() => setMobileOpen(false)}
            className="w-fit border border-cvr-blue px-5 py-1.5 text-sm text-cvr-blue transition-colors hover:bg-cvr-blue hover:text-primary-foreground"
          >
            Canal Seguro
          </Link>
        </nav>
      )}
    </header>
  )
}
