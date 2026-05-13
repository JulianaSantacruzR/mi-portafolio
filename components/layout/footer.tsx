import Link from "next/link"

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-white/10">
      <div className="container-width flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <h3 className="text-xl font-black">
            Juliana Santacruz R.
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400">
            Systems Engineer & Data Scientist
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/JulianaSantacruzR?tab=repositories"
            target="_blank"
          >
            <FaGithub className="text-xl transition hover:text-primary" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/juliana-santacruz-restrepo-13060a196/"
            target="_blank"
          >
            <FaLinkedin className="text-xl transition hover:text-primary" />
          </Link>
        </div>

        <p className="text-sm text-slate-600 dark:text-zinc-400">
          © 2026 Juliana Santacruz Restrepo
        </p>
      </div>
    </footer>
  )
}