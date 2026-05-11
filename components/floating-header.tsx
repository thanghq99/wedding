'use client'

import { Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function FloatingHeader() {
  const [isFloating, setIsFloating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.35) {
        setIsFloating(true)
      } else {
        setIsFloating(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 z-50 w-full p-4 md:p-6 flex justify-center pointer-events-none">
      <motion.div
        layout
        initial={false}
        animate={
          isFloating
            ? {
                width: 'calc(100% - 48px)',
                maxWidth: '360px',
                backgroundColor: 'oklch(from var(--background) l c h / 0.8)',
                backdropFilter: 'blur(12px)',
                borderRadius: '9999px',
                padding: '12px 24px',
                y: 0,
                border: '1px solid oklch(from var(--stone-gray) l c h / 0.2)',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
              }
            : {
                width: '100%',
                maxWidth: '100%',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(0px)',
                borderRadius: '0px',
                padding: '0px',
                y: 0,
                border: '1px solid transparent',
                boxShadow: 'none',
              }
        }
        className={cn(
          'flex items-center justify-between pointer-events-auto',
          !isFloating && 'w-full'
        )}
      >
        <AnimatePresence mode="wait">
          {isFloating && (
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-heading text-xl mr-8"
            >
              t & a
            </motion.h2>
          )}
        </AnimatePresence>

        <div className={cn('flex flex-1 justify-end', !isFloating && 'w-full')}>
          <Menu
            className={cn(
              'h-8 w-8 cursor-pointer transition-colors',
              isFloating
                ? 'text-foreground'
                : 'text-background drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
            )}
          />
        </div>
      </motion.div>
    </header>
  )
}
