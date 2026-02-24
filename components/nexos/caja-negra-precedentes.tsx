import { Archive } from "lucide-react"

const precedentes = [
  {
    name: "Housegage Investors & Properties S.L.",
    description:
      "An\u00e1lisis forense del cese de operaciones tras su inclusi\u00f3n en la lista de entidades no autorizadas de la CNMV (Octubre 2017). El caso se estudia como precedente jurisprudencial de riesgo normativo por operar como plataforma de inversi\u00f3n inmobiliaria participativa sin registro PFP, dejando a sus inversores fuera de la cobertura del FOGAIN. Este modelo sirve como patr\u00f3n para identificar esquemas actuales similares.",
  },
  {
    name: "Caso Madeira Invest Club (MIC)",
    description:
      "An\u00e1lisis forense del reciente colapso de la plataforma (Septiembre 2024) tras su inclusi\u00f3n en la lista de entidades no autorizadas de la CNMV. El caso se estudia como el precedente jurisprudencial m\u00e1s grave de riesgo normativo en la captaci\u00f3n de capital para activos tangibles sin registro oficial, culminando en el cese abrupto de operaciones, la desprotecci\u00f3n total de los inversores frente al FOGAIN y la intervenci\u00f3n de la Audiencia Nacional.",
  },
]

export function CajaNegraPrecedentes() {
  return (
    <section className="border-t border-nexos-sapphire/40 bg-nexos-midnight px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Archive
            className="h-6 w-6 text-nexos-slate/50"
            strokeWidth={1.5}
          />
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-nexos-slate/60">
            Precedentes Documentados
          </h2>
        </div>
        <div className="mx-auto mb-12 h-px w-16 bg-nexos-slate/20" />

        <div className="grid gap-6 md:grid-cols-2">
          {precedentes.map((inv) => (
            <article
              key={inv.name}
              className="rounded border border-nexos-slate/20 bg-nexos-navy/60 p-8 backdrop-blur-sm"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-nexos-slate/50">
                Precedente Documentado / CNMV
              </p>
              <h3 className="mb-4 font-serif text-lg font-bold text-nexos-slate/80 md:text-xl">
                {inv.name}
              </h3>
              <div className="mb-4 h-px w-12 bg-nexos-slate/20" />
              <p className="text-sm leading-relaxed text-nexos-slate/60">
                {inv.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
