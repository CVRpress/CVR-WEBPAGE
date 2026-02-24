export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Legal notice */}
        <div className="mb-12">
          <h3 className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Aviso Legal y Pol&iacute;tica de Privacidad
          </h3>
          <div className="mx-auto max-w-3xl space-y-4 text-[11px] leading-relaxed text-muted-foreground">
            <p>
              Este sitio web es un proyecto period&iacute;stico y de
              investigaci&oacute;n documental independiente, sin fines de lucro
              ni actividad econ&oacute;mica vinculada. En estricto cumplimiento
              del RGPD, informamos que esta p&aacute;gina no utiliza formularios
              de captaci&oacute;n de datos personales, no emplea herramientas
              anal&iacute;ticas de usuario ni utiliza cookies de rastreo de
              terceros. La infraestructura t&eacute;cnica proveedora del
              alojamiento web &uacute;nicamente procesa datos b&aacute;sicos de
              conexi&oacute;n (como la IP) de forma transitoria con el fin
              exclusivo de garantizar la seguridad del servidor y prevenir
              ataques, sin elaborar perfiles de los visitantes.
            </p>
            <p>
              Toda evidencia aportada a trav&eacute;s de nuestros canales
              seguros se entiende cedida libremente para fines de escrutinio
              p&uacute;blico. Los documentos filtrados, as&iacute; como los
              hallazgos resultantes de esta investigaci&oacute;n, podr&aacute;n
              ser cedidos, compartidos y difundidos a trav&eacute;s de medios de
              comunicaci&oacute;n y consorcios period&iacute;sticos de alcance
              local, nacional o internacional. Dicha cesi&oacute;n se
              realizar&aacute; amparada exclusivamente en su incuestionable
              valor period&iacute;stico y en el derecho fundamental a la
              informaci&oacute;n, garantizando en todo momento la estricta
              ausencia de &aacute;nimo de lucro y descartando cualquier tipo de
              comercializaci&oacute;n o contraprestaci&oacute;n econ&oacute;mica.
            </p>
            <p>
              La identidad de las fuentes y el material recibido est&aacute;n
              protegidos por el derecho constitucional al secreto profesional
              (Art. 20 de la Constituci&oacute;n Espa&ntilde;ola). La
              titularidad de esta investigaci&oacute;n corresponde a Camila
              Alejandra V&aacute;squez, periodista asociada a la FAPE (N&ordm;
              XXXX). Las menciones a entidades corporativas se realizan en el
              marco de la transparencia y el inter&eacute;s p&uacute;blico.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6">
          <p className="text-center text-xs tracking-wider text-muted-foreground">
            &copy; 2026 CVR | Investigaci&oacute;n &amp; Compliance. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
