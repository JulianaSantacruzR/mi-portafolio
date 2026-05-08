const experience = [
  {
    company: "Company Name",
    role: "Data Analyst",
    period: "2023 - 2024",
    description:
      "Desarrollo de dashboards, automatización de procesos y análisis de datos empresariales.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Professional Journey
          </h2>
        </div>

        <div className="space-y-8 border-l border-border pl-8">
          {experience.map((item) => (
            <div key={item.company} className="relative">
              <div className="absolute -left-[42px] top-2 h-4 w-4 rounded-full bg-primary" />

              <h3 className="text-2xl font-semibold">{item.role}</h3>

              <p className="mt-1 text-primary">
                {item.company} · {item.period}
              </p>

              <p className="mt-4 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}