import Image from "next/image"
import Link from "next/link"
import { Mail, ExternalLink, ChevronRight, GraduationCap, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { 
  AnimatedSection, 
  AnimatedCard, 
  ParticleBackground, 
  AnimatedGradientBackground 
} from "@/components/client-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />
      <Navbar />
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Sobre Mí
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Soy **Data Analyst Junior** con formación en Ingeniería de Sistemas y Maestría en Ciencia de Datos. Mi enfoque principal es transformar datos brutos en decisiones estratégicas.
                </p>
                <div className="flex gap-4">
                   <Badge className="bg-purple-600">Python</Badge>
                   <Badge className="bg-blue-600">SQL</Badge>
                   <Badge className="bg-green-600">GCP</Badge>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Award className="text-purple-600" /> Experiencia Clave
                </h3>
                <ul className="space-y-4">
                  {[
                    "Análisis y Visualización (Pandas, Plotly)",
                    "Machine Learning Predictivo",
                    "Cloud Data (BigQuery, GCP)",
                    "Dashboards (Looker Studio, Power BI)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section - Optimizado para accesibilidad */}
      <section id="projects" className="py-20 px-4 relative bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Proyectos Destacados</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ejemplo de un proyecto con el componente Image corregido */}
            <AnimatedCard delay={0.2}>
              <Card className="overflow-hidden border-0 shadow-2xl bg-white dark:bg-gray-800">
                <div className="relative h-48 w-full bg-gray-200">
                  <Image 
                    src="/projects/earth-renewal.jpg" // Asegúrate de que esta ruta exista
                    alt="Vista previa del asistente agrícola EarthRenewal AI"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform hover:scale-105 duration-500"
                    priority={false}
                  />
                </div>
                <CardHeader>
                  <CardTitle>EarthRenewal AI</CardTitle>
                  <CardDescription>Chatbot de asistencia agrícola con IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Integración de NLP para recomendaciones multilingües en tiempo real para agricultores.
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">Python</Badge>
                </CardFooter>
              </Card>
            </AnimatedCard>

            {/* Agrega más proyectos siguiendo el mismo patrón */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Hablamos?</h2>
            <p className="text-gray-600 dark:text-gray-400">Estoy abierto a nuevas oportunidades en el mundo de los datos.</p>
          </div>
          <Card className="p-2 md:p-8 border-none shadow-2xl">
            <ContactForm />
          </Card>
        </div>
      </section>
    </div>
  )
}