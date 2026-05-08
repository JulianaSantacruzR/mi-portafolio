export default function BackgroundBlur() {
  return (
    <>
      <div className="fixed left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="fixed bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />
    </>
  )
}