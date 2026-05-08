import { education } from "@/lib/data/education"

import Badge from "../ui/badge"

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

        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="glass-card rounded-3xl p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-primary">
                    {item.institution}
                  </p>
                </div>

                <Badge>
                  {item.period}
                </Badge>
              </div>

              <p className="mt-6 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}