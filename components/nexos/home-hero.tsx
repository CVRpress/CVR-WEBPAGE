export function HomeHero() {
  return (
    <section className="flex min-h-screen items-center justify-center border-b border-border bg-background px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-3 font-serif text-7xl font-bold tracking-[0.2em] text-cvr-blue md:text-8xl lg:text-9xl">
          CVR
        </h1>

        <h2 className="mb-6 font-serif text-xl font-light tracking-wide text-cvr-gray md:text-2xl lg:text-3xl">
          Criterio &middot; Verificaci&oacute;n &middot; Rigor
        </h2>

        <div className="mx-auto mb-8 h-px w-24 bg-border" />

        <p className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Periodismo de investigaci&oacute;n aplicado al escrutinio corporativo.
          Documentaci&oacute;n de expedientes t&eacute;cnicos, auditor&iacute;a
          de buenas pr&aacute;cticas y fiscalizaci&oacute;n del sector
          alternativo.
        </p>

        <a
          href="#proyectos"
          className="inline-block border border-cvr-blue bg-cvr-blue px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-transparent hover:text-cvr-blue"
        >
          Ver Proyectos
        </a>
      </div>
    </section>
  )
}
