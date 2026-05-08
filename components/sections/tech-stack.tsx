const technologies = [
  "Python",
  "TensorFlow",
  "Scikit-learn",
  "PySpark",
  "BigQuery",
  "Power BI",
  "Docker",
  "Next.js",
  "TypeScript",
  "SQL",
  "MongoDB",
  "PostgreSQL",
]

export default function TechStack() {
  return (
    <section className="px-6 py-16">
      <div className="container-width">
        <div className="glass-card overflow-hidden rounded-[40px] p-10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}