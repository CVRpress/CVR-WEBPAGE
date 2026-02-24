export function CajaNegraOrigin() {
  return (
    <section className="border-b border-border bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <p
          className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          Seccion I
        </p>
        <h2
          className="mb-6 text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          El Proyecto La Caja Negra
        </h2>
        <div className="mb-10 h-px w-full bg-border" />

        <div
          className="space-y-6 text-sm leading-relaxed text-foreground md:text-base"
          style={{ fontFamily: "var(--font-dossier)" }}
        >
          <p>
            La Caja Negra es el proyecto insignia de CVR y nace de una
            experiencia directa y cercana con las practicas del sector de la
            inversion inmobiliaria privada en Espana.
          </p>
          <p>
            Lo que comenzo como el seguimiento detallado de un caso concreto
            termino revelando un patron sistemico mucho mas amplio: empresas que
            captan capital de inversores particulares con promesas de altas
            rentabilidades mientras operan en una zona gris regulatoria,
            utilizando vehiculos societarios de capital minimo y estrategias
            agresivas sobre activos ocupados o{" "}
            <span className="italic">distressed</span>.
          </p>
          <p>
            La Caja Negra surge precisamente de esa constatacion. No es la
            historia de un solo inmueble ni de una sola familia. Es un proyecto
            de periodismo de investigacion dedicado a documentar, verificar y
            sacar a la luz como funcionan realmente estos modelos de negocio:
            quien pone el dinero, que riesgos se ocultan a los inversores y que
            precio pagan las personas que se encuentran en medio del proceso.
          </p>
          <p>
            Porque cuando las empresas deciden apagar la grabadora y borrar sus
            huellas, alguien tiene que encenderla y preservar la verdad.
          </p>

          <div className="border border-border bg-card px-6 py-5">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
              style={{ fontFamily: "var(--font-dossier)" }}
            >
              Mision declarada:
            </p>
            <p
              className="mt-2 text-sm leading-relaxed text-foreground"
              style={{ fontFamily: "var(--font-dossier)" }}
            >
              Servir como registro permanente e independiente de las practicas
              que afectan al interes publico en el sector de la inversion
              inmobiliaria privada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
