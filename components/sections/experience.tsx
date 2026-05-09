const experiences = [
  {
    role:
      "Data Analyst",

    company:
      "Independent Projects",

    period:
      "2023 - Present",

    description:
      "Development of data analytics, machine learning and business intelligence solutions using Python, SQL and visualization tools.",
  },

  {
    role:
      "AI & Cybersecurity Research",

    company:
      "Master Research Project",

    period:
      "2025 - Present",

    description:
      "Research focused on cyberattack detection in connected vehicles using CAN Bus datasets and machine learning models.",
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-spacing"
    >
      <div className="container-width">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((item) => (
            <div
              key={item.role}
              className="glass-card rounded-[32px] p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/30"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h3 className="text-3xl font-black">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-primary">
                    {item.company}
                  </p>
                </div>

                <div className="rounded-full border border-white/10 px-5 py-2 text-sm">
                  {item.period}
                </div>
              </div>

              <p className="mt-8 max-w-4xl leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}