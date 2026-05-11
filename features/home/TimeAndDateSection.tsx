export function TimeAndDateSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background px-6">
      <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 h-64 w-64 rounded-full bg-sage-mist/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <h2 className="text-primary">Save the Date</h2>
        <div className="flex items-baseline gap-4">
          <span className="font-heading text-8xl text-primary">24</span>
          <div className="flex flex-col border-stone-gray border-l pl-4">
            <span className="text-xl uppercase tracking-tighter">June</span>
            <span className="text-xl uppercase tracking-tighter">2026</span>
          </div>
        </div>
        <p className="muted max-w-xs text-center">
          Four o'clock in the afternoon <br />
          Followed by dinner and dancing under the stars
        </p>
      </div>
    </section>
  )
}
