interface Props {
  children: React.ReactNode
}

export default function Badge({
  children,
}: Props) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur">
      {children}
    </span>
  )
}