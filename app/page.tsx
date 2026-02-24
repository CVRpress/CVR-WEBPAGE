import { Header } from "@/components/nexos/header"
import { HomeHero } from "@/components/nexos/home-hero"
import { AboutCVR } from "@/components/nexos/about-cvr"
import { ProjectsGrid } from "@/components/nexos/projects-grid"
import { Footer } from "@/components/nexos/footer"

export default function Page() {
  return (
    <main>
      <Header />
      <HomeHero />
      <AboutCVR />
      <ProjectsGrid />
      <Footer />
    </main>
  )
}
