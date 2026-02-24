import { BookOpen } from "lucide-react"

export function CajaNegraOrigin() {
  return (
    <section className="border-t border-nexos-sapphire/40 bg-nexos-sapphire px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex justify-center">
          <BookOpen
            className="h-8 w-8 text-nexos-bronze"
            strokeWidth={1.5}
          />
        </div>
        <h2 className="mb-6 text-center font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          EL PROYECTO LA CAJA NEGRA
        </h2>
        <div className="mx-auto mb-12 h-px w-16 bg-nexos-bronze/40" />

        <div className="space-y-6 text-base leading-relaxed text-nexos-slate md:text-lg">
          <p>
            La Caja Negra es el proyecto insignia de CVR y nace de una
            experiencia directa y cercana con las pr&aacute;cticas del sector de
            la inversi&oacute;n inmobiliaria privada en Espa&ntilde;a.
          </p>
          <p>
            Lo que comenz&oacute; como el seguimiento detallado de un caso
            concreto termin&oacute; revelando un patr&oacute;n sist&eacute;mico
            mucho m&aacute;s amplio: empresas que captan capital de inversores
            particulares con promesas de altas rentabilidades mientras operan en
            una zona gris regulatoria, utilizando veh&iacute;culos societarios
            de capital m&iacute;nimo y estrategias agresivas sobre activos
            ocupados o{" "}
            <span className="italic">distressed</span>.
          </p>
          <p>
            La Caja Negra surge precisamente de esa constataci&oacute;n. No es
            la historia de un solo inmueble ni de una sola familia. Es un
            proyecto de periodismo de investigaci&oacute;n dedicado a
            documentar, verificar y sacar a la luz c&oacute;mo funcionan
            realmente estos modelos de negocio: qui&eacute;n pone el dinero,
            qu&eacute; riesgos se ocultan a los inversores y qu&eacute; precio
            pagan las personas que se encuentran en medio del proceso.
          </p>
          <p>
            Porque cuando las empresas deciden apagar la grabadora y borrar sus
            huellas, alguien tiene que encenderla y preservar la verdad.
          </p>
          <div className="rounded border border-nexos-bronze/20 bg-nexos-midnight/40 px-6 py-5">
            <p className="text-sm font-semibold text-foreground md:text-base">
              <span className="text-nexos-bronze">
                Misi&oacute;n de La Caja Negra:
              </span>{" "}
              Servir como registro permanente e independiente de las
              pr&aacute;cticas que afectan al inter&eacute;s p&uacute;blico en
              el sector de la inversi&oacute;n inmobiliaria privada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
