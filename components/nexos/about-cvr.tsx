import { Compass } from "lucide-react"

export function AboutCVR() {
  return (
    <section
      id="sobre-cvr"
      className="border-t border-nexos-sapphire/40 bg-nexos-sapphire px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 flex justify-center">
          <Compass className="h-8 w-8 text-nexos-bronze" strokeWidth={1.5} />
        </div>
        <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          SOBRE CVR
        </h2>
        <div className="mx-auto mb-10 h-px w-16 bg-nexos-bronze/40" />

        <div className="space-y-5 text-base leading-relaxed text-nexos-slate md:text-lg">
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
            <span className="font-semibold text-nexos-bronze">Criterio</span>,{" "}
            <span className="font-semibold text-nexos-bronze">
              Verificaci&oacute;n
            </span>{" "}
            y{" "}
            <span className="font-semibold text-nexos-bronze">Rigor</span>{" "}
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
