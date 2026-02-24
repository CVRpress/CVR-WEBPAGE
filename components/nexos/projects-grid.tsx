import Link from "next/link"

export function ProjectsGrid() {
  return (
    <section
      id="proyectos"
      className="border-b border-border bg-background px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Investigaciones
        </p>
        <h2 className="mb-6 text-center font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Proyectos Activos
        </h2>
        <div className="mx-auto mb-16 h-px w-16 bg-border" />

        <div className="grid gap-8 md:grid-cols-2">
          {/* La Caja Negra */}
          <Link
            href="/la-caja-negra"
            className="group flex flex-col border border-border bg-card p-10 transition-colors hover:border-cvr-blue/40 hover:bg-cvr-blue-light/30 md:p-12"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cvr-blue">
              Investigaci&oacute;n activa
            </p>

            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
              La Caja Negra
            </h3>

            <div className="mb-6 h-px w-16 bg-border transition-all group-hover:w-24 group-hover:bg-cvr-blue/40" />

            <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
              Proyecto de investigaci&oacute;n y an&aacute;lisis de compliance
              enfocado en documentar la opacidad corporativa, las zonas grises
              regulatorias y los riesgos estructurales en el sector de la
              inversi&oacute;n inmobiliaria privada.
            </p>

            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Expedientes en curso
            </p>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              Nestar (Azora) &middot; Testa Residencial &middot; Homent
              Capital &middot; Retsinnal Group &middot; Domoblock &middot;
              Bafre Inmobiliaria
            </p>

            <p className="mt-auto text-sm font-semibold uppercase tracking-widest text-cvr-blue transition-colors group-hover:text-cvr-navy">
              Acceder &rarr;
            </p>
          </Link>

          {/* Proyecto Vertice */}
          <div className="flex flex-col border border-border bg-card p-10 opacity-50 md:p-12">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
              Pr&oacute;ximamente
            </p>

            <h3 className="mb-4 font-serif text-2xl font-bold text-muted-foreground md:text-3xl">
              Proyecto V&eacute;rtice
            </h3>

            <div className="mb-6 h-px w-16 bg-border" />

            <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
              An&aacute;lisis de opacidad corporativa. Un nuevo proyecto de
              investigaci&oacute;n en fase de documentaci&oacute;n preliminar.
            </p>

            <p className="mt-auto text-xs uppercase tracking-wider text-muted-foreground">
              En preparaci&oacute;n
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
