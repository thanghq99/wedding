'use client'

import { HeroSection } from './HeroSection'
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
