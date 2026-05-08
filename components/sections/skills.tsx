const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "Power BI",
  "Docker",
  "Next.js",
  "TensorFlow",
  "Pandas",
  "Scikit-learn",
  "PostgreSQL",
  "LangChain",
  "LLMs",
]

export default function Skills() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-border bg-card p-6 text-center transition hover:-translate-y-1 hover:border-primary"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}