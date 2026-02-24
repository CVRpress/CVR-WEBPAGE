const activeInvestigations = [
  {
    ref: "INV-001",
    name: "Bafre Inmobiliaria",
    description:
      "Compra masiva de viviendas okupadas y activos distressed. Gestiona liberacion y destina los inmuebles a flipping o alquiler turistico con inversores privados. Muy similar en la estrategia de activos ocupados con descuento.",
  },
  {
    ref: "INV-002",
    name: "Nestar - Azora Gestion",
    description:
      "Auditoria documental de las practicas contractuales del tercer mayor tenedor de vivienda en Espana. Seguimiento periodistico de las recientes resoluciones judiciales sobre la imposicion sistematica de clausulas abusivas y la gestion opaca de contingencias estructurales en sus inmuebles.",
  },
  {
    ref: "INV-003",
    name: "Domoblock",
    description:
      "Plataforma de house flipping con captacion de inversores minoristas desde importes bajos. Promueve TIR elevadas en proyectos de compra-reforma-venta rapida, con vehiculos societarios de bajo capital.",
  },
  {
    ref: "INV-004",
    name: "Homent Capital | LV Investors 2022 S.L.",
    description:
      "Analisis profundo del entramado societario dirigido por Daniel Lobato Vicente. La investigacion documenta la totalidad de su red de vehiculos de inversion, su modus operandi en la captacion agresiva de activos inmobiliarios y la deteccion de posibles vulnerabilidades legales en sus protocolos de compliance corporativo.",
  },
  {
    ref: "INV-005",
    name: "Inmoversia",
    description:
      "Inversion inmobiliaria desde 500 EUR en proyectos de corta duracion (flipping y reforma). Promesas de TIR 15-25% y modelo de co-inversion privada con inversores retail.",
  },
  {
    ref: "INV-006",
    name: "Elansora Group S.L. (Elanso Capital)",
    description:
      "Rastreo de la estructura de captacion de capital y activos. La investigacion examina el reciente cese de su actividad digital (cierre del dominio corporativo) y audita posibles incompatibilidades normativas y conflictos de interes derivados del perfil publico y profesional de sus administradores.",
  },
  {
    ref: "INV-007",
    name: "Retsinnal Group / Tradeando",
    description:
      "Captacion agresiva de inversores particulares a traves de cursos y clubes VIP con promesas de alta rentabilidad en proyectos inmobiliarios de flipping y reforma. Multiples quejas en foros por opacidad y estructuras de captacion privada.",
  },
  {
    ref: "INV-008",
    name: "Testa Residencial (Grupo Blackstone)",
    description:
      "Evaluacion de riesgos regulatorios en la filial espanola del fondo de inversion internacional. Documentacion exhaustiva sobre la alteracion de condiciones en inmuebles de proteccion publica y la aplicacion de tacticas de presion financiera para el vaciado de edificios residenciales.",
  },
  {
    ref: "INV-009",
    name: "Hausera",
    description:
      "Especializada en inversion colectiva en flipping inmobiliario. Anuncia rentabilidades superiores al 20% anual y capta capital privado para activos en reforma, con fuerte presencia en redes y eventos.",
  },
  {
    ref: "INV-010",
    name: "Equalice",
    description:
      "Captacion de inversores particulares para proyectos de flipping y reforma desde importes accesibles. Enfocada en rentabilidades altas y marketing directo a particulares con perfil inversor pasivo.",
  },
]

export function CajaNegraInvestigations() {
  return (
    <section id="investigaciones" className="border-b border-border bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p
          className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Seccion II
        </p>
        <h2
          className="mb-6 text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Investigaciones en curso
        </h2>
        <div className="mb-10 h-px w-full bg-border" />

        <div className="grid gap-px md:grid-cols-2">
          {activeInvestigations.map((inv) => (
            <article
              key={inv.ref}
              className="border border-border bg-card p-6 md:p-8"
            >
              <p
                className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground"
                style={{ fontFamily: "var(--font-dossier)" }}
              >
                Ref. {inv.ref} / Investigacion activa
              </p>
              <h3
                className="mb-4 text-sm font-bold uppercase text-foreground md:text-base"
                style={{ fontFamily: "var(--font-dossier)" }}
              >
                {inv.name}
              </h3>
              <div className="mb-4 h-px w-full bg-border" />
              <p
                className="text-xs leading-relaxed text-muted-foreground md:text-sm"
                style={{ fontFamily: "var(--font-dossier)" }}
              >
                {inv.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
