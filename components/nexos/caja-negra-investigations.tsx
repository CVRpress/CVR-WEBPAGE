const dossiers = [
  {
    ref: "DOS-001",
    name: "Bafre Inmobiliaria",
    description:
      "Compra masiva de viviendas okupadas y activos distressed. Gestiona liberacion y destina los inmuebles a flipping o alquiler turistico con inversores privados. Muy similar en la estrategia de \u00abactivos ocupados con descuento\u00bb.",
  },
  {
    ref: "DOS-002",
    name: "Nestar - Azora Gestion",
    description:
      "Auditoria documental de las practicas contractuales del tercer mayor tenedor de vivienda en Espana. Seguimiento periodistico de las recientes resoluciones judiciales sobre la imposicion sistematica de clausulas abusivas y la gestion opaca de contingencias estructurales en sus inmuebles.",
  },
  {
    ref: "DOS-003",
    name: "Domoblock",
    description:
      "Plataforma de house flipping con captacion de inversores minoristas desde importes bajos. Promueve TIR elevadas en proyectos de compra-reforma-venta rapida, con vehiculos societarios de bajo capital.",
  },
  {
    ref: "DOS-004",
    name: "Homent Capital | LV Investors 2022 S.L.",
    description:
      "Analisis profundo del entramado societario de su CEO y fundador. La investigacion documenta la totalidad de su red de vehiculos de inversion, su modus operandi en la captacion agresiva de activos inmobiliarios y la deteccion de posibles vulnerabilidades legales en sus protocolos de compliance corporativo.",
  },
  {
    ref: "DOS-005",
    name: "Inmoversia",
    description:
      "Inversion inmobiliaria desde 500 EUR en proyectos de corta duracion (flipping y reforma). Promesas de TIR 15-25% y modelo de co-inversion privada con inversores retail.",
  },
  {
    ref: "DOS-006",
    name: "Elansora Group S.L. (Elanso Capital)",
    description:
      "Rastreo de la estructura de captacion de capital y activos. La investigacion examina el reciente cese de su actividad digital (cierre del dominio corporativo) y audita posibles incompatibilidades normativas y conflictos de interes derivados del perfil publico y profesional de sus administradores.",
  },
  {
    ref: "DOS-007",
    name: "Retsinnal Group / Tradeando",
    description:
      "Captacion agresiva de inversores particulares a traves de cursos y \u00abclubes VIP\u00bb con promesas de alta rentabilidad en proyectos inmobiliarios de flipping y reforma. Multiples quejas en foros por opacidad y estructuras de captacion privada.",
  },
  {
    ref: "DOS-008",
    name: "Testa Residencial (Grupo Blackstone)",
    description:
      "Evaluacion de riesgos regulatorios en la filial espanola del fondo de inversion internacional. Documentacion exhaustiva sobre la alteracion de condiciones en inmuebles de proteccion publica y la aplicacion de tacticas de presion financiera para el vaciado de edificios residenciales.",
  },
  {
    ref: "DOS-009",
    name: "Hausera",
    description:
      "Especializada en inversion colectiva en flipping inmobiliario. Anuncia rentabilidades superiores al 20% anual y capta capital privado para activos en reforma, con fuerte presencia en redes y eventos.",
  },
  {
    ref: "DOS-010",
    name: "Equalice",
    description:
      "Captacion de inversores particulares para proyectos de flipping y reforma desde importes accesibles. Enfocada en rentabilidades altas y marketing directo a particulares con perfil \u00abinversor pasivo\u00bb.",
  },
]

export function CajaNegraInvestigations() {
  return (
    <section id="investigaciones" className="border-b border-[#d1d5db] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
          Seccion II
        </p>
        <h2 className="mb-2 text-xl font-bold uppercase tracking-tight text-[#1a365d] md:text-2xl">
          Dossiers
        </h2>
        <div className="mb-10 h-px w-full bg-[#d1d5db]" />

        <div className="grid gap-px border border-[#d1d5db] bg-[#d1d5db] md:grid-cols-2">
          {dossiers.map((d) => (
            <article
              key={d.ref}
              className="bg-white p-6 md:p-8"
            >
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
                  Dossier activo
                </p>
                <p className="text-[10px] font-medium tracking-[0.15em] text-[#9ca3af]">
                  Ref. {d.ref}
                </p>
              </div>
              <h3 className="mb-3 text-sm font-bold uppercase text-[#1a365d] md:text-base">
                {d.name}
              </h3>
              <div className="mb-3 h-px w-10 bg-[#d1d5db]" />
              <p className="text-xs leading-relaxed text-[#4b5563] md:text-sm">
                {d.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
