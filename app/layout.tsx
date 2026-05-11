import { Geist_Mono, Great_Vibes, Raleway } from 'next/font/google'

import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const greatVibesHeading = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
})

const raleway = Raleway({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'antialiased',
        fontMono.variable,
        'font-sans',
        raleway.variable,
        greatVibesHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
