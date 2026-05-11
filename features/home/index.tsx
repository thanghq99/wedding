'use client'
import { CeremonySection } from './ceremony'
import { FooterSection } from './footer'
import { HeroSection } from './hero'
import { InvitationSection } from './invitation'
import { RSVPSection } from './rsvp'
import { StorySection } from './story'
export function HomeView() {
  return (
    <main className="relative bg-background">
      <HeroSection />
      <InvitationSection />
      <CeremonySection />
      <StorySection />
      <RSVPSection />
      <FooterSection />
    </main>
  )
}
