import { Mail, Shield, MessageCircle } from "lucide-react"

export function AfectadosSection() {
  return (
    <section
      id="contacto"
      className="border-t border-nexos-sapphire/40 bg-nexos-midnight px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <div className="mb-6 flex justify-center">
          <Shield className="h-8 w-8 text-nexos-bronze" strokeWidth={1.5} />
        </div>
        <h2 className="mb-2 text-center font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          LLAMAMIENTO A FUENTES
        </h2>
        <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-nexos-slate/60">
          (Call for Sources)
        </p>
        <div className="mx-auto mb-8 h-px w-16 bg-nexos-bronze/40" />
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-nexos-slate md:text-base">
          Si posee documentaci&oacute;n interna, contratos, correos electr&oacute;nicos
          o pruebas sobre el modus operandi y las pr&aacute;cticas de estas
          entidades, puede aportarlos a esta investigaci&oacute;n de forma
          estrictamente confidencial. Buscamos hechos documentables.
        </p>

        {/* Whistleblower box */}
        <div className="rounded border border-nexos-bronze/20 bg-nexos-sapphire/30 p-8 md:p-12">
          <h3 className="mb-2 text-center font-mono text-sm font-bold uppercase tracking-[0.2em] text-nexos-bronze">
            BUZ&Oacute;N DE FILTRACIONES
          </h3>
          <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-nexos-slate/50">
            (Whistleblower Drop)
          </p>

          {/* Point 1 */}
          <div className="mx-auto mb-8 max-w-xl">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-nexos-bronze">
              1. Finalidad
            </p>
            <p className="text-sm leading-relaxed text-nexos-slate">
              Toda documentaci&oacute;n ser&aacute; verificada y podr&aacute; ser
              difundida en medios nacionales o internacionales con fines
              estrictamente period&iacute;sticos y de inter&eacute;s p&uacute;blico
              (no comerciales).
            </p>
          </div>

          {/* Point 2 */}
          <div className="mx-auto mb-10 max-w-xl">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-nexos-bronze">
              2. Protocolo de Anonimato
            </p>
            <p className="mb-3 text-sm leading-relaxed text-nexos-slate">
              Para garantizar su seguridad, cree una cuenta gratuita en{" "}
              <span className="font-semibold text-foreground">ProtonMail</span>{" "}
              y escr&iacute;banos desde ella. No necesitamos su nombre real; los
              documentos hablan por s&iacute; solos.
            </p>
            <div className="rounded border border-red-500/30 bg-red-500/5 px-4 py-3">
              <p className="text-sm text-red-400">
                <span className="mr-1.5 font-bold">&#9888;&#65039; NO use equipos ni WiFi de su empresa.</span>
              </p>
            </div>
          </div>

          <div className="mx-auto mb-4 h-px w-24 bg-nexos-sapphire/40" />

          {/* Secure channels */}
          <div className="flex flex-col items-center gap-4">
            {/* ProtonMail */}
            <a
              href="mailto:cvr.buzonseguro@proton.me"
              className="group inline-flex items-center gap-3 rounded border border-nexos-bronze/30 bg-nexos-midnight/50 px-8 py-4 transition-all hover:border-nexos-bronze/60 hover:bg-nexos-midnight/80 hover:shadow-lg hover:shadow-nexos-bronze/10"
            >
              <Mail
                className="h-5 w-5 text-nexos-bronze transition-transform group-hover:scale-110"
                strokeWidth={1.5}
              />
              <span className="font-mono text-base font-bold tracking-wider text-nexos-bronze md:text-lg">
                cvr.buzonseguro@proton.me
              </span>
            </a>

            {/* Signal -- placeholder */}
            <div className="inline-flex items-center gap-3 rounded border border-nexos-slate/20 bg-nexos-midnight/30 px-8 py-4 opacity-60">
              <MessageCircle
                className="h-5 w-5 text-nexos-slate/50"
                strokeWidth={1.5}
              />
              <span className="font-mono text-base tracking-wider text-nexos-slate/50 md:text-lg">
                Signal: pr&oacute;ximamente
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
