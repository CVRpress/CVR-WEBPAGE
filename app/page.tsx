import { Header } from "@/components/nexos/header"
import { Hero } from "@/components/nexos/hero"
import { ValueSection } from "@/components/nexos/value-section"
import { InvestigationsSection } from "@/components/nexos/investigations-section"
import { AfectadosSection } from "@/components/nexos/afectados-section"
import { Footer } from "@/components/nexos/footer"

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <ValueSection />
      <InvestigationsSection />
      <AfectadosSection />
      <Footer />
    </main>
  )
}
