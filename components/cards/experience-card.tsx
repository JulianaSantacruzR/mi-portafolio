import Badge from "../ui/badge"

interface Props {
  item: any
}

export default function ExperienceCard({
  item,
}: Props) {
  return (
    <div className="glass-card rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/30">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">
            {item.role}
          </h3>

          <p className="mt-2 text-primary">
            {item.company}
          </p>
        </div>

        <Badge>
          {item.period}
        </Badge>
      </div>

      <p className="mt-6 leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {item.technologies.map((tech: string) => (
          <Badge key={tech}>
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}