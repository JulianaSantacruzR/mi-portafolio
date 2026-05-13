import { getDictionary } from "@/lib/dictionaries"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Education from "@/components/sections/education"
import Contact from "@/components/sections/contact"
import Achievements from "@/components/sections/achievements"

export default async function Home({
  params,
}: {
  params: Promise<{
    lang: "en" | "es"
  }>
}) {

  const { lang } = await params

  const dictionary = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar dictionary={dictionary} />

      <Hero dictionary={dictionary} />

      <About dictionary={dictionary} />

      <Experience dictionary={dictionary} />

      <Projects dictionary={dictionary} />

      <Skills dictionary={dictionary} />

      <Education dictionary={dictionary} />

      <Achievements dictionary={dictionary} />

      <Contact dictionary={dictionary} />

      <Footer />
    </main>
  )
}