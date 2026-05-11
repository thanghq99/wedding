import { Section } from '@/components/section'
import { TypographyH2 } from '@/components/ui/typography'

export function InfoSection() {
  return (
    <div className="sticky top-0">
      <Section className="bg-emerald-200/20">
        <TypographyH2>info</TypographyH2>
      </Section>
    </div>
  )
}
