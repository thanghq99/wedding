import type { Metadata } from 'next'
import { Geist_Mono, Raleway, Xanh_Mono } from 'next/font/google'
import './globals.css'
import { FloatingHeader } from '@/components/floating-header'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Quốc Thắng x Ngọc Anh',
  description: 'Wedding of Quốc Thắng and Ngọc Anh',
}


const fontHeading = Xanh_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
})
const raleway = Raleway({ subsets: ['latin'], variable: '--font-sans' })
const fontMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'antialiased',
        fontMono.variable,
        'font-sans',
        raleway.variable,
        fontHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <FloatingHeader />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
