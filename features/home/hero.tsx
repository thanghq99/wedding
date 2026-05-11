'use client'

import { ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import HeroImage from '@/public/hero.webp'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -120])
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.85])

  return (
    <section
      ref={containerRef}
      className="relative flex h-svh w-full flex-col justify-between overflow-hidden"
    >
      <Image
        src={HeroImage}
        alt="Hero Image"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      <div className="flex-1" />
      <div className="relative z-10 flex flex-2 items-start px-12">
        <motion.div
          style={{ opacity, y, scale }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="font-heading text-5xl leading-tight text-background text-shadow-lg md:text-7xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="block"
            >
              thangws
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-block"
            >
              ahngle
            </motion.span>
          </h2>
        </motion.div>
      </div>
      <div className="relative z-10 flex h-[60px] w-full items-center justify-center bg-background text-foreground">
        <p className="font-medium uppercase tracking-widest">2026 May 23, 24</p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -top-16 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="block text-lg font-medium tracking-widest text-background italic text-shadow-lg"
          >
            <ChevronDown />
          </motion.span>
        </motion.p>
      </div>
    </section>
  )
}
