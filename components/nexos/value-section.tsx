import { GraduationCap, Search, ShieldCheck } from "lucide-react"

export function ValueSection() {
  return (
    <section
      id="sobre-mi"
      className="bg-nexos-sapphire px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* About Me */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <GraduationCap className="h-8 w-8 text-nexos-bronze" strokeWidth={1.5} />
          </div>
          <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            SOBRE M&Iacute;
          </h2>
          <div className="mx-auto mb-8 h-px w-16 bg-nexos-bronze/40" />
          <p className="mb-4 leading-relaxed text-nexos-slate">
            Soy periodista graduada en la Universidad Complutense de Madrid,
            especializada en periodismo de investigaci&oacute;n y an&aacute;lisis de
            riesgos de compliance. Mi trabajo se centra en desentra&ntilde;ar
            estructuras corporativas opacas, identificar irregularidades
            financieras y sacar a la luz informaci&oacute;n que otros prefieren
            mantener oculta.
          </p>
          <p className="leading-relaxed text-nexos-slate">
            Combino t&eacute;cnicas avanzadas de OSINT, acceso a bases de datos
            especializadas y fuentes confidenciales para construir
            investigaciones con rigor period&iacute;stico y est&aacute;ndares legales
            que garantizan la solidez de cada hallazgo.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Search className="h-6 w-6 text-nexos-bronze" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl">
                INVESTIGACI&Oacute;N PROFUNDA
              </h3>
            </div>
            <div className="h-px w-16 bg-nexos-bronze/40" />
            <p className="leading-relaxed text-nexos-slate">
              Due diligence, investigaciones de fraude corporativo, an&aacute;lisis
              de redes societarias y rastreo de activos. Cada
              investigaci&oacute;n se documenta con precisi&oacute;n para
              garantizar su utilidad informativa y legal.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-nexos-bronze" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl">
                COMPLIANCE ESTRAT&Eacute;GICO
              </h3>
            </div>
            <div className="h-px w-16 bg-nexos-bronze/40" />
            <p className="leading-relaxed text-nexos-slate">
              An&aacute;lisis de riesgo regulatorio, auditor&iacute;as internas
              y protocolos de prevenci&oacute;n. Identifico brechas y
              vulnerabilidades antes de que se conviertan en crisis
              reputacionales o legales.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
