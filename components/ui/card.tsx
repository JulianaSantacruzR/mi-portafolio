interface Props {
  children: React.ReactNode

  className?: string
}

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={`glass-card rounded-3xl p-8 ${className}`}
    >
      {children}
    </div>
  )
}