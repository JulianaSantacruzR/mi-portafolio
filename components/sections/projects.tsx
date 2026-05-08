import ProjectCard from "../cards/project-card"

const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Modelo de machine learning para predecir abandono de clientes utilizando XGBoost y análisis exploratorio avanzado.",
    technologies: ["Python", "XGBoost", "Pandas", "Streamlit"],
  },
  {
    title: "Vehicle Cybersecurity Detection",
    description:
      "Análisis y detección de ataques en buses CAN utilizando datasets reales y modelos de clasificación.",
    technologies: ["TensorFlow", "Python", "ML", "Cybersecurity"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured Work
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}