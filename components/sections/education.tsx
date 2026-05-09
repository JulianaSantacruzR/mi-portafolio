const education = [
  {
    degree:
      "Master in Data Science",

    institution:
      "CEUPE",

    period:
      "2024 - 2025",
  },

  {
    degree:
      "Systems Engineering",

    institution:
      "University Degree",

    period:
      "Completed",
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="section-spacing"
    >
      <div className="container-width">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Education
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Academic Background
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="glass-card rounded-[32px] p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/30"
            >
              <h3 className="text-3xl font-black leading-tight">
                {item.degree}
              </h3>

              <p className="mt-4 text-primary">
                {item.institution}
              </p>

              <p className="mt-6 text-muted-foreground">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}