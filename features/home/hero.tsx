'use client'

import { ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import { TextAnimate } from '@/components/ui/text-animate'

const HeroPCImage = '/IMG_3494.JPG'
const HeroImage = '/IMG_3198.JPG'

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
      <div className="block md:hidden">
        <Image
          src={HeroImage}
          alt="Hero Image"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="hidden md:block">
        <Image
          src={HeroPCImage}
          alt="Hero Image"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="flex-1 md:flex-[2.5]" />
      <div className="relative z-10 flex w-full flex-2 flex-col items-start pr-4 pl-12 md:mx-auto md:max-w-[1250px] md:px-12">
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          delay={0}
          duration={0.8}
          className="font-heading text-5xl text-shadow-lg text-white italic leading-tight md:text-8xl"
          style={{ opacity, y, scale }}
        >
          Le Mariage
        </TextAnimate>
        <div className="flex w-full flex-col md:flex-row md:items-end md:justify-between">
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            delay={0.6}
            duration={0.8}
            className="mt-4 font-heading text-2xl text-shadow-md text-white md:text-4xl"
            segmentClassName="leading-tight"
            style={{ opacity, y, scale }}
          >
            Quốc Thắng
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            delay={1.2}
            duration={0.8}
            className="mt-1 font-heading text-2xl text-shadow-md text-white md:mt-0 md:text-right md:text-4xl"
            segmentClassName="leading-tight"
            style={{ opacity, y, scale }}
          >
            Ngọc Anh
          </TextAnimate>
        </div>
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
            className="block font-medium text-background text-lg text-shadow-lg italic tracking-widest"
          >
            <ChevronDown />
          </motion.span>
        </motion.p>
      </div>
    </section>
  )
}
