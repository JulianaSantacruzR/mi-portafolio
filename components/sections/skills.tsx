import SkillCard from "../cards/skill-card"

import { skills } from "@/lib/data/skills"

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
            Technical Expertise
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <SkillCard
            title="AI & Machine Learning"
            items={skills.ai}
          />

          <SkillCard
            title="Cloud & Big Data"
            items={skills.cloud}
          />

          <SkillCard
            title="Programming"
            items={skills.programming}
          />

          <SkillCard
            title="Visualization"
            items={skills.visualization}
          />
        </div>
      </div>
    </section>
  )
}