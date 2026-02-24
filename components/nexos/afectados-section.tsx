export function AfectadosSection() {
  return (
    <section id="contacto" className="border-b border-[#d1d5db] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6b7280]">
          Seccion IV
        </p>
        <h2 className="mb-2 text-xl font-bold uppercase tracking-tight text-[#1a365d] md:text-2xl">
          Llamamiento a Fuentes
        </h2>
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#6b7280]">
          (Call for Sources)
        </p>
        <div className="mb-8 h-px w-full bg-[#d1d5db]" />

        <p className="mb-10 text-sm leading-relaxed text-[#374151] md:text-base">
          Si posee documentacion interna, contratos, correos electronicos o
          pruebas sobre el modus operandi y las practicas de estas entidades,
          puede aportarlos a esta investigacion de forma estrictamente
          confidencial. Buscamos hechos documentables.
        </p>

        {/* Whistleblower box */}
        <div className="border border-[#d1d5db] bg-[#f9fafb] p-8 md:p-10">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1a365d]">
            Buzon de Filtraciones
          </p>
          <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-[#6b7280]">
            (Whistleblower Drop)
          </p>

          {/* Point 1 */}
          <div className="mb-6">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1a365d]">
              1. Finalidad
            </p>
            <p className="text-xs leading-relaxed text-[#4b5563] md:text-sm">
              Toda documentacion sera verificada y podra ser difundida en medios
              nacionales o internacionales con fines estrictamente periodisticos
              y de interes publico (no comerciales).
            </p>
          </div>

          {/* Point 2 */}
          <div className="mb-8">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1a365d]">
              2. Protocolo de Anonimato
            </p>
            <p className="mb-3 text-xs leading-relaxed text-[#4b5563] md:text-sm">
              Para garantizar su seguridad, cree una cuenta gratuita en{" "}
              <span className="font-bold text-[#1a365d]">ProtonMail</span> y
              escribanos desde ella. No necesitamos su nombre real; los
              documentos hablan por si solos.
            </p>
            <div className="border border-[#d1d5db] bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase text-[#374151]">
                AVISO: No use equipos ni WiFi de su empresa.
              </p>
            </div>
          </div>

          <div className="mb-6 h-px w-full bg-[#d1d5db]" />

          {/* Secure channels */}
          <div className="flex flex-col items-center gap-4">
            <div className="border border-[#d1d5db] bg-white px-6 py-4">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6b7280]">
                Canal seguro (ProtonMail)
              </p>
              <a
                href="mailto:cvr.buzonseguro@proton.me"
                className="text-sm font-bold text-[#1a365d] underline underline-offset-2 md:text-base"
              >
                cvr.buzonseguro@proton.me
              </a>
            </div>

            <div className="border border-[#d1d5db] bg-white px-6 py-4 opacity-50">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6b7280]">
                Canal seguro (Signal)
              </p>
              <p className="text-sm text-[#6b7280]">
                Proximamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
