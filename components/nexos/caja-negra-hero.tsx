export function CajaNegraHero() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center border-b border-border px-6 pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <p
          className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Expediente de investigacion / CVR
        </p>

        <div className="mx-auto mb-8 h-px w-32 bg-border" />

        <h1
          className="mb-6 text-4xl font-bold uppercase tracking-wide text-foreground md:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          La Caja Negra
        </h1>

        <div className="mx-auto mb-8 h-px w-32 bg-border" />

        <p
          className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Clasificacion: Acceso restringido
        </p>

        <div className="mx-auto mb-10 h-px w-16 bg-border" />

        <p
          className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Investigacion y analisis de compliance enfocado en documentar la
          opacidad corporativa, las zonas grises regulatorias y los riesgos
          estructurales en el sector de la inversion inmobiliaria privada en
          Espana. Cuando las empresas apagan la grabadora, alguien tiene que
          encenderla.
        </p>
      </div>
    </section>
  )
}
