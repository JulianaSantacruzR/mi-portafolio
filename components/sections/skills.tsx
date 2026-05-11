const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "SQL",
  "Power BI",
  "Docker",
  "Git",
  "GitHub",
  "Vercel",
  "Machine Learning",
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Skills
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Technical Stack
        </h2>

        <div className="mt-16 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}