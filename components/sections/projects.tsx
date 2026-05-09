import Link from "next/link"

import {
  ArrowUpRight,
  FileText,
} from "lucide-react"

import Badge from "../ui/badge"

import { projects } from "@/lib/data/projects"

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing"
    >
      <div className="container-width">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Projects
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-[32px] p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/30"
            >
              <div className="flex flex-wrap gap-3">
                {project.technologies.map(
                  (tech) => (
                    <Badge key={tech}>
                      {tech}
                    </Badge>
                  )
                )}
              </div>

              <h3 className="mt-8 text-3xl font-black leading-tight">
                {project.title}
              </h3>

              <p className="mt-6 leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
              {/*  
                {project.pdf !== "#" && (
                  
                  <a
                    href={
                      typeof window !== "undefined"
                        ? `${window.location.origin}${project.pdf}`
                        : project.pdf
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    <FileText size={18} />

                    View PDF
                  </a>
                )}
*/}
                <Link
                  href="#contact"
                  className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold"
                >
                  Contact

                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}