"use client"

import Link from "next/link"
import { ArrowRight, Lock, FileSearch, Clock } from "lucide-react"

export function ProjectsGrid() {
  return (
    <section
      id="proyectos"
      className="border-t border-nexos-sapphire/40 bg-nexos-navy px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          PROYECTOS ACTIVOS
        </h2>
        <div className="mx-auto mb-16 h-px w-16 bg-nexos-bronze/40" />

        <div className="grid gap-8 md:grid-cols-2">
          {/* La Caja Negra */}
          <Link
            href="/la-caja-negra"
            className="group relative flex flex-col overflow-hidden rounded border border-nexos-sapphire/60 bg-nexos-midnight/80 p-10 backdrop-blur-sm transition-all duration-500 hover:border-nexos-bronze/40 hover:bg-nexos-midnight/95 hover:shadow-2xl hover:shadow-nexos-bronze/5 md:p-12"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(199,178,153,0.04) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-3">
                <FileSearch className="h-7 w-7 text-nexos-bronze" strokeWidth={1.5} />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-nexos-bronze/70">
                  Investigaci&oacute;n activa
                </span>
              </div>

              <h3 className="mb-4 font-serif text-2xl font-bold text-foreground transition-colors group-hover:text-nexos-bronze md:text-3xl">
                La Caja Negra
              </h3>

              <div className="mb-6 h-px w-16 bg-nexos-bronze/30 transition-all duration-500 group-hover:w-24 group-hover:bg-nexos-bronze/50" />

              <p className="mb-8 text-sm leading-relaxed text-nexos-slate md:text-base">
                Proyecto de investigaci&oacute;n y an&aacute;lisis de compliance
                enfocado en documentar la opacidad corporativa, las zonas grises
                regulatorias y los riesgos estructurales en el sector de la
                inversi&oacute;n inmobiliaria privada.
              </p>

              {/* Expedientes en curso */}
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-nexos-bronze/50">
                Expedientes en curso
              </p>
              <p className="mb-8 text-sm leading-relaxed text-nexos-bronze/60">
                Nestar (Azora) &middot; Testa Residencial &middot; Homent
                Capital &middot; Retsinnal Group &middot; Domoblock &middot;
                Bafre Inmobiliaria
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-nexos-bronze transition-all group-hover:gap-3">
                <span>Acceder</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Proyecto Vertice */}
          <div className="group relative flex flex-col overflow-hidden rounded border border-nexos-slate/20 bg-nexos-midnight/50 p-10 backdrop-blur-sm md:p-12">
            {/* Locked overlay */}
            <div className="pointer-events-none absolute inset-0 bg-nexos-midnight/30" />

            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-3">
                <Lock className="h-6 w-6 text-nexos-slate/40" strokeWidth={1.5} />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-nexos-slate/40">
                  Pr&oacute;ximamente
                </span>
              </div>

              <h3 className="mb-4 font-serif text-2xl font-bold text-nexos-slate/50 md:text-3xl">
                Proyecto V&eacute;rtice
              </h3>

              <div className="mb-6 h-px w-16 bg-nexos-slate/20" />

              <p className="mb-8 text-sm leading-relaxed text-nexos-slate/40 md:text-base">
                An&aacute;lisis de opacidad corporativa. Un nuevo proyecto
                de investigaci&oacute;n en fase de documentaci&oacute;n
                preliminar.
              </p>

              <div className="flex items-center gap-2 text-sm text-nexos-slate/30">
                <Clock className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  En preparaci&oacute;n
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
