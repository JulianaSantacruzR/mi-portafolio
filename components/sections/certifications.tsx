import Badge from "../ui/badge"

const certifications = [
  "Google Cloud Fundamentals",
  "Linux Essentials",
  "Machine Learning",
  "Big Data Analytics",
  "Data Visualization",
  "Prompt Engineering",
]

export default function Certifications() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Certifications
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Professional Certifications
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item) => (
            <div
              key={item}
              className="glass-card rounded-3xl p-8 transition duration-300 hover:-translate-y-2"
            >
              <Badge>
                Certified
              </Badge>

              <h3 className="mt-6 text-2xl font-bold leading-tight">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}