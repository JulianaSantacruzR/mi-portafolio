import Badge from "../ui/badge"

const skillGroups = [
  {
    category:
      "Data Science",

    skills: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
    ],
  },

  {
    category:
      "Data Analytics",

    skills: [
      "Power BI",
      "SQL",
      "Data Visualization",
      "EDA",
      "Statistics",
    ],
  },

  {
    category:
      "Cloud & Big Data",

    skills: [
      "Docker",
      "BigQuery",
      "PySpark",
      "MongoDB",
      "PostgreSQL",
    ],
  },

  {
    category:
      "Development",

    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Git",
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-spacing"
    >
      <div className="container-width">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Technologies & Tools
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-[32px] p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/30"
            >
              <h3 className="text-2xl font-black">
                {group.category}
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {group.skills.map(
                  (skill) => (
                    <Badge key={skill}>
                      {skill}
                    </Badge>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}