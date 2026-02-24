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
    <section className="border-b border-border bg-card px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p
          className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Seccion III / Archivo
        </p>
        <h2
          className="mb-6 text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Precedentes documentados
        </h2>
        <div className="mb-10 h-px w-full bg-border" />

        <div className="grid gap-px md:grid-cols-2">
          {precedentes.map((inv) => (
            <article
              key={inv.ref}
              className="border border-border bg-background p-6 md:p-8"
            >
              <p
                className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground"
                style={{ fontFamily: "var(--font-dossier)" }}
              >
                Ref. {inv.ref} / Precedente CNMV
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
