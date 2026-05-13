interface Props {
  children: React.ReactNode
}

export default function Badge({
  children,
}: Props) {
  return (
    <div className="rounded-full border border-zinc-300 bg-white/70 px-4 py-1 text-sm text-zinc-700 backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300">
      {children}
    </div>
  )
}