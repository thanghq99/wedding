export function InfoSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center bg-card px-6">
      <div className="grid w-full max-w-2xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-6 border-stone-gray border-l pl-8">
          <h2 className="italic">The Venue</h2>
          <p className="text-foreground/80">
            Nestled within a hidden estate, where wild jasmine climbs ancient
            stone walls and the air smells of moss and rain.
          </p>
        </div>
        <div className="space-y-6 border-stone-gray border-l pl-8">
          <h2 className="italic">The Dress Code</h2>
          <p className="text-foreground/80">
            Editorial Garden Attire. Think structured silks, organic textures,
            and a palette of muted earth tones.
          </p>
        </div>
      </div>
    </section>
  )
}
