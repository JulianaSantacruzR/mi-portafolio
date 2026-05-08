import { getDictionary } from "@/lib/dictionaries"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import BackgroundBlur from "@/components/layout/background-blur"
import ScrollProgress from "@/components/layout/scroll-progress"

import TechStack from "@/components/sections/tech-stack"
import CallToAction from "@/components/sections/call-to-action"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Education from "@/components/sections/education"
import Certifications from "@/components/sections/certifications"
import Achievements from "@/components/sections/achievements"
import Contact from "@/components/sections/contact"
import Stats from "@/components/sections/stats"

export default async function Home({
  params,
}: {
  params: Promise<{
    lang: "en" | "es"
  }>
}) {
  const { lang } = await params

  const dictionary =
    await getDictionary(lang)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <ScrollProgress />
      <BackgroundBlur />
      <Navbar dictionary={dictionary} />
      <Hero dictionary={dictionary} />
      <Stats />
      <TechStack />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Achievements />
      <CallToAction />
      <Contact dictionary={dictionary} />
      <Footer />
    </main>
  )
}