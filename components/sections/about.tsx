import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing"
    >
      <div className="container-width grid items-center gap-20 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 blur-3xl" />

          <Image
            src="/profile.png"
            alt="Juliana Santacruz"
            width={600}
            height={700}
            className="relative rounded-[40px] border border-white/10 object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight">
            Transforming data into intelligent solutions.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Systems Engineer and Data Scientist specialized in AI-driven solutions, Machine Learning and cloud-based analytics.
            </p>

            <p>
              Passionate about predictive systems, cybersecurity in connected vehicles and scalable modern architectures.
            </p>

            <p>
              Focused on creating impactful technological solutions that combine business intelligence, data and artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}