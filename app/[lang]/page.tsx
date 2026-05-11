import { getDictionary } from "@/lib/dictionaries"

import Navbar from "@/components/layout/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Education from "@/components/sections/education"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"

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
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar dictionary={dictionary} />

      <Hero dictionary={dictionary} />

      <About />

      <Experience />

      <Projects />

      <Skills />

      <Education />

      <Contact dictionary={dictionary} />

      <Footer />
    </main>
  )
}