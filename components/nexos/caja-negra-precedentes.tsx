const precedentes = [
  {
    ref: "PRE-001",
    name: "Housegage Investors & Properties S.L.",
    description:
      "Analisis forense del cese de operaciones tras su inclusion en la lista de entidades no autorizadas de la CNMV (Octubre 2017). El caso se estudia como precedente jurisprudencial de riesgo normativo por operar como plataforma de inversion inmobiliaria participativa sin registro PFP, dejando a sus inversores fuera de la cobertura del FOGAIN. Este modelo sirve como patron para identificar esquemas actuales similares.",
  },
  {
    ref: "PRE-002",
    name: "Caso Madeira Invest Club (MIC)",
    description:
      "Analisis forense del reciente colapso de la plataforma (Septiembre 2024) tras su inclusion en la lista de entidades no autorizadas de la CNMV. El caso se estudia como el precedente jurisprudencial mas grave de riesgo normativo en la captacion de capital para activos tangibles sin registro oficial, culminando en el cese abrupto de operaciones, la desproteccion total de los inversores frente al FOGAIN y la intervencion de la Audiencia Nacional.",
  },
]

export function CajaNegraPrecedentes() {
  return (
    <section className="border-b border-[#d1d5db] bg-[#f9fafb] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
          Seccion III
        </p>
        <h2 className="mb-2 text-xl font-bold uppercase tracking-tight text-[#1a365d] md:text-2xl">
          Precedentes Documentados
        </h2>
        <div className="mb-10 h-px w-full bg-[#d1d5db]" />

        <div className="grid gap-6 md:grid-cols-2">
          {precedentes.map((p) => (
            <article
              key={p.ref}
              className="border border-[#d1d5db] bg-white p-6 md:p-8"
            >
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
                  Precedente / CNMV
                </p>
                <p className="text-[10px] font-medium tracking-[0.15em] text-[#9ca3af]">
                  Ref. {p.ref}
                </p>
              </div>
              <h3 className="mb-3 text-sm font-bold uppercase text-[#1a365d] md:text-base">
                {p.name}
              </h3>
              <div className="mb-3 h-px w-10 bg-[#d1d5db]" />
              <p className="text-xs leading-relaxed text-[#4b5563] md:text-sm">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
