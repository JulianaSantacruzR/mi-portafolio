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

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-5">

          <Link
            href="https://github.com/JulianaSantacruzR?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <FaGithub className="text-2xl text-slate-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/juliana-santacruz-restrepo-13060a196/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <FaLinkedin className="text-2xl text-slate-700 transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400" />
          </Link>

        </div>

        <p className="text-sm text-slate-600 dark:text-zinc-400">
          © 2026 Juliana Santacruz Restrepo
        </p>

      </div>
    </footer>
  )
}