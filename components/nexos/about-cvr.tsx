export function AboutCVR() {
  return (
    <section
      id="sobre-cvr"
      className="border-b border-border bg-card px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Acerca de
        </p>
        <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Sobre CVR
        </h2>
        <div className="mx-auto mb-10 h-px w-16 bg-border" />

        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            <span className="font-semibold text-foreground">CVR</span> es un
            laboratorio de investigaci&oacute;n period&iacute;stica independiente
            fundado por{" "}
            <span className="font-semibold text-foreground">
              Camila V&aacute;squez Rogel
            </span>
            , periodista graduada en la Universidad Complutense de Madrid.
          </p>
          <p>
            Bajo tres principios &mdash;{" "}
            <span className="font-semibold text-cvr-blue">Criterio</span>,{" "}
            <span className="font-semibold text-cvr-blue">
              Verificaci&oacute;n
            </span>{" "}
            y{" "}
            <span className="font-semibold text-cvr-blue">Rigor</span>{" "}
            &mdash; CVR investiga hechos relevantes para el inter&eacute;s
            p&uacute;blico en cualquier sector, con especial foco en las zonas
            grises del entramado corporativo y financiero espa&ntilde;ol.
          </p>
          <p>
            Combinamos t&eacute;cnicas avanzadas de OSINT, acceso a bases de
            datos especializadas y fuentes confidenciales para construir
            investigaciones con est&aacute;ndares period&iacute;sticos y legales
            que garantizan la solidez de cada hallazgo.
          </p>
        </div>
      </div>
    </section>
  )
}
