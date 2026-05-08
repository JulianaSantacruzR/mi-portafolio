import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/20 p-2">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={600}
            height={700}
            className="rounded-3xl object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Passionate About Data & AI
          </h2>

          <p className="mt-8 leading-relaxed text-muted-foreground">
            Soy ingeniera de sistemas con experiencia en ciencia de datos,
            machine learning, análisis de información y visualización.
            Me apasiona crear soluciones inteligentes y construir productos
            modernos utilizando IA y tecnologías escalables.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Projects Built
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}