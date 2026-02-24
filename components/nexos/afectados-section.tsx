export function AfectadosSection() {
  return (
    <section
      id="contacto"
      className="border-b border-border bg-background px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <p
          className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Seccion IV / Confidencial
        </p>
        <h2
          className="mb-2 text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Llamamiento a fuentes
        </h2>
        <p
          className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          (Call for Sources)
        </p>
        <div className="mb-8 h-px w-full bg-border" />

        <p
          className="mb-12 text-sm leading-relaxed text-muted-foreground md:text-base"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Si posee documentacion interna, contratos, correos electronicos o
          pruebas sobre el modus operandi y las practicas de estas entidades,
          puede aportarlos a esta investigacion de forma estrictamente
          confidencial. Buscamos hechos documentables.
        </p>

        {/* Whistleblower box */}
        <div className="border border-border bg-card p-8 md:p-12">
          <h3
            className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-foreground"
            style={{ fontFamily: "var(--font-dossier)" }}
          >
            Buzon de filtraciones
          </h3>
          <p
            className="mb-10 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground"
            style={{ fontFamily: "var(--font-dossier)" }}
          >
            (Whistleblower Drop)
          </p>

          {/* Point 1 */}
          <div className="mb-8">
            <p
              className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-foreground"
              style={{ fontFamily: "var(--font-dossier)" }}
            >
              1. Finalidad
            </p>
            <p
              className="text-sm leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-dossier)" }}
            >
              Toda documentacion sera verificada y podra ser difundida en medios
              nacionales o internacionales con fines estrictamente periodisticos
              y de interes publico (no comerciales).
            </p>
          </div>

          {/* Point 2 */}
          <div className="mb-10">
            <p
              className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-foreground"
              style={{ fontFamily: "var(--font-dossier)" }}
            >
              2. Protocolo de anonimato
            </p>
            <p
              className="mb-3 text-sm leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-dossier)" }}
            >
              Para garantizar su seguridad, cree una cuenta gratuita en{" "}
              <span className="font-bold text-foreground">ProtonMail</span> y
              escribanos desde ella. No necesitamos su nombre real; los
              documentos hablan por si solos.
            </p>
            <div className="border border-border bg-background px-4 py-3">
              <p
                className="text-xs font-bold uppercase text-foreground"
                style={{ fontFamily: "var(--font-dossier)" }}
              >
                AVISO: No use equipos ni WiFi de su empresa.
              </p>
            </div>
          </div>

          <div className="mb-8 h-px w-full bg-border" />

          {/* Secure channels */}
          <div className="flex flex-col items-start gap-4">
            <a
              href="mailto:cvr.buzonseguro@proton.me"
              className="border border-border bg-background px-6 py-4 transition-colors hover:bg-card"
              style={{ fontFamily: "var(--font-dossier)" }}
            >
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Canal seguro / ProtonMail
              </p>
              <p className="text-sm font-bold tracking-wider text-foreground md:text-base">
                cvr.buzonseguro@proton.me
              </p>
            </a>

            <div
              className="border border-border bg-card px-6 py-4 opacity-50"
              style={{ fontFamily: "var(--font-dossier)" }}
            >
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Canal seguro / Signal
              </p>
              <p className="text-sm tracking-wider text-muted-foreground md:text-base">
                Proximamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
