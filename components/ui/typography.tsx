import type React from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function TypographyH1({ className, children }: TypographyProps) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-balance text-center font-heading font-semibold text-4xl tracking-tight',
        className
      )}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ className, children }: TypographyProps) {
  return (
    <h2
      className={cn(
        'scroll-m-20 font-heading font-medium text-3xl tracking-tight',
        className
      )}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({ className, children }: TypographyProps) {
  return (
    <h3
      className={cn(
        'scroll-m-20 font-heading font-medium text-2xl tracking-tight',
        className
      )}
    >
      {children}
    </h3>
  )
}

export function TypographyH4({ className, children }: TypographyProps) {
  return (
    <h4
      className={cn(
        'scroll-m-20 font-heading font-medium text-xl tracking-tight',
        className
      )}
    >
      {children}
    </h4>
  )
}

export function TypographyP({ className, children }: TypographyProps) {
  return <p className={cn('not-first:mt-6 leading-7', className)}>{children}</p>
}

export function TypographyBlockquote({ className, children }: TypographyProps) {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>
      {children}
    </blockquote>
  )
}

export function TypographyLead({ className, children }: TypographyProps) {
  return (
    <p className={cn('text-muted-foreground text-xl', className)}>{children}</p>
  )
}

export function TypographyLarge({ className, children }: TypographyProps) {
  return (
    <div className={cn('font-semibold text-lg', className)}>{children}</div>
  )
}

export function TypographySmall({ className, children }: TypographyProps) {
  return (
    <small className={cn('font-medium text-sm leading-none', className)}>
      {children}
    </small>
  )
}

export function TypographyMuted({ className, children }: TypographyProps) {
  return (
    <p className={cn('text-muted-foreground text-sm', className)}>{children}</p>
  )
}
