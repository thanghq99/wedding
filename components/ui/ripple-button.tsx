'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'

const RIPPLE_COLORS = [
  '#FFD6D6', // Rose
  '#FFF0B3', // Butter
  '#D4F5D4', // Mint
  '#D1E9FF', // Sky
  '#E8D1FF', // Lavender
  '#FFE5D1', // Peach
  '#E6FFFA', // Turquoise
  '#F0FFF4', // Honeydew
  '#FFF5F5', // Blossom
  '#F5F5DC', // Beige
  '#E0FFFF', // Cyan
  '#FFFACD', // Lemon
]

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tailwind class for the ripple fill color. Defaults to sage-mist. */
  rippleColor?: string
  variant?: 'primary' | 'outline' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
}

/**
 * A reusable button with a cursor-origin ripple effect on hover.
 */
export function RippleButton({
  children,
  className,
  rippleColor,
  variant = 'white',
  size = 'md',
  ...props
}: RippleButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleMouseEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current
    if (!btn) return

    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (e.type === 'mouseenter') {
      btn.style.setProperty('--ripple-enter-x', `${x}px`)
      btn.style.setProperty('--ripple-enter-y', `${y}px`)

      // Pick a random color from the set
      const randomColor =
        RIPPLE_COLORS[Math.floor(Math.random() * RIPPLE_COLORS.length)]
      btn.style.setProperty('--ripple-color', randomColor)
    } else {
      btn.style.setProperty('--ripple-leave-x', `${x}px`)
      btn.style.setProperty('--ripple-leave-y', `${y}px`)
    }
  }

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
      className={cn(
        // Base — layout, font, overflow
        'ripple-btn relative overflow-hidden',
        'inline-flex items-center justify-center gap-2',
        'font-medium tracking-wide transition-all duration-200',
        'cursor-pointer select-none active:scale-[0.98]',
        // Focus ring
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        // Disabled
        'disabled:pointer-events-none disabled:opacity-50',
        // Size variants
        size === 'sm' && 'rounded-xl px-5 py-2.5 text-sm',
        size === 'md' && 'rounded-2xl px-8 py-4 text-sm',
        size === 'lg' && 'rounded-2xl px-10 py-5 text-base',
        // Color variants
        variant === 'white' && 'border-0 bg-white text-deep-forest shadow-sm',
        variant === 'primary' && 'border-0 bg-deep-forest text-ivory-silk',
        variant === 'outline' &&
          'border-2 border-deep-forest/40 bg-transparent text-deep-forest hover:border-transparent',
        variant === 'ghost' && 'border-0 bg-transparent text-deep-forest',
        // Custom ripple color passed as class (if any)
        rippleColor,
        className
      )}
      style={
        {
          '--ripple-enter-x': '50%',
          '--ripple-enter-y': '50%',
          '--ripple-leave-x': '50%',
          '--ripple-leave-y': '50%',
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Label must sit above the ripple layer */}
      <span className="ripple-btn__label relative z-10">{children}</span>
    </button>
  )
}
