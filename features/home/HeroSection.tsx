import { Section } from '@/components/section'
import { TypographyH2, TypographyMuted } from '@/components/ui/typography'

export function HeroSection() {
  return (
    <div className="sticky top-0">
      <Section className="bg-emerald-100/20">
        <TypographyH2>hero</TypographyH2>
        <TypographyMuted className="absolute bottom-8 animate-bounce">
          scroll down for more
        </TypographyMuted>
      </Section>
    </div>
  )
}
