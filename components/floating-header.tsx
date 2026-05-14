'use client'

import { Menu, Pause, Play, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function FloatingHeader() {
  const [isFloating, setIsFloating] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('/hapi_cat.mp3')
    audio.loop = true
    audioRef.current = audio

    const handleFirstInteraction = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
      window.removeEventListener('pointerdown', handleFirstInteraction)
    }

    window.addEventListener('pointerdown', handleFirstInteraction)

    return () => {
      audio.pause()
      window.removeEventListener('pointerdown', handleFirstInteraction)
    }
  }, [])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying])

  const navLinks = [
    { name: 'Lời ngỏ', href: '#invitation' },
    { name: 'Lịch trình', href: '#ceremony' },
    { name: 'Album', href: '#story' },
    { name: 'Xác nhận', href: '#rsvp' },
  ]

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
    <>
      <header className="pointer-events-none fixed top-0 left-0 z-50 flex w-full flex-col items-center p-4 md:p-6">
        <motion.div
          initial={false}
          transition={{
            type: 'spring',
            stiffness: 250,
            damping: 28,
            mass: 1,
          }}
          animate={
            isFloating
              ? {
                  width: 'calc(100% - 48px)',
                  maxWidth: '400px',
                  backgroundColor: 'oklch(from var(--background) l c h / 0.8)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '9999px',
                  padding: '10px 24px',
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
                  padding: '8px 24px',
                  y: 0,
                  border: '1px solid transparent',
                  boxShadow: 'none',
                }
          }
          className={cn(
            'pointer-events-auto flex items-center justify-between overflow-hidden will-change-transform',
            !isFloating && 'w-full'
          )}
          style={{ transform: 'translateZ(0)' }}
        >
          <motion.h2
            animate={{
              opacity: isFloating ? 1 : 0,
              width: isFloating ? 'auto' : 0,
              marginRight: isFloating ? 24 : 0,
            }}
            className="overflow-hidden whitespace-nowrap font-heading text-xl"
          >
            t & a
          </motion.h2>

          <div className="ml-auto flex flex-shrink-0 items-center gap-2 whitespace-nowrap">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="group relative p-2 outline-none focus:ring-0"
            >
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div
                    key="pause"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <Pause
                      className={cn(
                        'h-6 w-6',
                        isFloating
                          ? 'text-foreground/60'
                          : 'text-background/80 drop-shadow'
                      )}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="play"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <Play
                      className={cn(
                        'h-6 w-6',
                        isFloating
                          ? 'text-foreground/60'
                          : 'text-background/80 drop-shadow'
                      )}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 outline-none focus:ring-0"
            >
              {isOpen ? (
                <X className="h-8 w-8 text-foreground" />
              ) : (
                <Menu
                  className={cn(
                    'h-8 w-8 cursor-pointer transition-colors',
                    isFloating
                      ? 'text-foreground'
                      : 'text-background drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
                  )}
                />
              )}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.4, y: 4 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 text-center"
            >
              <p className="font-medium text-[10px] text-foreground uppercase italic tracking-[0.2em]">
                Now Playing: Hapi Cat
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-45 flex flex-col items-center justify-center bg-background/90 p-12 backdrop-blur-md"
          >
            <nav className="flex flex-col items-center gap-12 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-heading text-4xl text-foreground italic transition-colors hover:text-sage-mist"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 space-y-4 text-center"
            >
              <div className="mx-auto h-px w-12 bg-stone-gray/20" />
              <p className="label text-muted-foreground">
                Quốc Thắng & Ngọc Anh • 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
