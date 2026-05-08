import ExperienceCard from "../cards/experience-card"

import { experience } from "@/lib/data/experience"

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
            Professional Journey
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((item) => (
            <ExperienceCard
              key={item.company}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}