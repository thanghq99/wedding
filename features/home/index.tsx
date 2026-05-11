'use client'

import { HeroSection } from './hero'
import { InfoSection } from './InfoSection'
import { TimeAndDateSection } from './TimeAndDateSection'

export function HomeView() {
  return (
    <main className="relative bg-background">
      <HeroSection />
      <InfoSection />
      <TimeAndDateSection />
    </main>
  )
}
