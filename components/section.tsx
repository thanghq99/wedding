'use client'

import type React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn('relative h-screen bg-white')}>
      <div
        className={cn(
          'flex h-full w-full items-center justify-center px-6',
          className
        )}
      >
        {children}
      </div>
    </section>
  )
}
