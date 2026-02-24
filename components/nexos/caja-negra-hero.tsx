export function CajaNegraHero() {
  return (
    <section className="border-b border-[#d1d5db] px-6 pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-3xl">
        {/* Dossier header block */}
        <div className="mb-8 border border-[#d1d5db] px-6 py-4">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
              CVR | Unidad de Investigacion
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b7280]">
              Expediente abierto &mdash; Clasificacion: Restringido
            </p>
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-bold uppercase tracking-tight text-[#1a365d] md:text-4xl lg:text-5xl">
          La Caja Negra
        </h1>

        <div className="mb-6 h-px w-full bg-[#d1d5db]" />

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
          Objeto del expediente
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-[#374151] md:text-base">
          Investigacion y analisis de compliance enfocado en documentar la
          opacidad corporativa, las zonas grises regulatorias y los riesgos
          estructurales en el sector de la inversion inmobiliaria privada en
          Espana. Porque cuando las empresas apagan la grabadora, alguien tiene
          que encenderla.
        </p>
      </div>
    </section>
  )
}
