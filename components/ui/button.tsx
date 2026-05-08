import Link from "next/link"

interface Props {
  href?: string

  children: React.ReactNode

  className?: string
}

export default function Button({
  href,
  children,
  className,
}: Props) {
  if (href) {
    return (
      <Link
        href={href}
        className={`rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:scale-105 ${className}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={`rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:scale-105 ${className}`}
    >
      {children}
    </button>
  )
}