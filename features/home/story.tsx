'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function StorySection() {
  const storyImages = [
    {
      src: '/album/IMG_3494.webp',
      mobile: 'col-span-2 row-span-2',
      pc: 'md:col-span-2 md:row-span-2',
      pcOrder: 'md:order-1',
      delay: 0,
    },
    {
      src: '/album/_BQH9035.JPG',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-2',
      delay: 0.1,
    },
    {
      src: '/album/IMG_3373.webp',
      mobile: 'col-span-1 row-span-1',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-11',
      delay: 0.2,
    },
    {
      src: '/album/IMG_3482.webp',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-5',
      delay: 0.3,
    },
    {
      src: '/album/_BQH8338.jpg',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-2 md:row-span-2',
      pcOrder: 'md:order-4',
      delay: 0.4,
    },
    {
      src: '/album/IMG_3476.webp',
      mobile: 'col-span-1 row-span-1',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-6',
      delay: 0.5,
    },
    {
      src: '/album/IMG_3493.webp',
      mobile: 'col-span-1 row-span-1',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-7',
      delay: 0.6,
    },
    {
      src: '/album/IMG_3489.webp',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-8',
      delay: 0.7,
    },
    {
      src: '/album/IMG_3255.webp',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-3',
      pcOrder: 'md:order-9',
      delay: 0.8,
    },
    {
      src: '/album/IMG_3504.webp',
      mobile: 'col-span-1 row-span-1',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-10',
      delay: 0.8,
    },
    {
      src: '/album/IMG_3199.webp',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-3',
      pcOrder: 'md:order-3',
      delay: 0.8,
    },
    {
      src: '/album/IMG_3372.webp',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-12',
      delay: 0.8,
    },
    {
      src: '/album/IMG_3486.webp',
      mobile: 'col-span-2 row-span-1',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-13',
      delay: 0.8,
    },
    {
      src: '/album/_BQH8815.JPG',
      mobile: 'hidden',
      pc: 'md:block md:col-span-1 md:row-span-1',
      pcOrder: 'md:order-14',
      delay: 0.8,
    },
  ]

  return (
    <section id="story" className="bg-sage-mist/5 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center"
        >
          <span className="label text-sage-mist">Album</span>
          <h2 className="font-heading text-4xl italic md:text-5xl">
            Khoảnh khắc của chúng mình
          </h2>
        </motion.div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[250px] md:grid-cols-3 md:gap-6">
          {storyImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: image.delay }}
              className={cn(
                'group relative overflow-hidden rounded-3xl border border-sage-mist/10 shadow-sm',
                image.mobile,
                image.pc,
                image.pcOrder
              )}
            >
              <Image
                src={image.src}
                alt={`Story ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
