import type { Metadata } from "next"
import { Header } from "@/components/nexos/header"
import { CajaNegraHero } from "@/components/nexos/caja-negra-hero"
import { CajaNegraOrigin } from "@/components/nexos/caja-negra-origin"
import { CajaNegraInvestigations } from "@/components/nexos/caja-negra-investigations"
import { CajaNegraPrecedentes } from "@/components/nexos/caja-negra-precedentes"
import { AfectadosSection } from "@/components/nexos/afectados-section"
import { Footer } from "@/components/nexos/footer"

export const metadata: Metadata = {
  title: "La Caja Negra | CVR - Investigacion & Compliance",
  description:
    "Proyecto de investigacion y analisis de compliance enfocado en documentar la opacidad corporativa, las zonas grises regulatorias y los riesgos estructurales en el sector de la inversion inmobiliaria privada.",
}

export default function LaCajaNegraPage() {
  return (
    <main>
      <Header />
      <CajaNegraHero />
      <CajaNegraOrigin />
      <CajaNegraInvestigations />
      <CajaNegraPrecedentes />
      <AfectadosSection />
      <Footer />
    </main>
  )
}
