import { X } from 'lucide-react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function StorySection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const [exitingImg, setExitingImg] = useState<string | null>(null)

  const preloadImage = (src: string) => {
    if (typeof window !== 'undefined') {
      const img = new window.Image()
      img.src = src
    }
  }

  const storyImages = [
    {
      src: '/album/IMG_3494.JPG',
      mobile: 'col-span-2 row-span-2',
      pc: 'md:col-span-2 md:row-span-2',
      pcOrder: 'md:order-1',
      delay: 0,
    },
    {
      src: '/album/IMG_3508.JPG',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-2',
      delay: 0.1,
    },
    {
      src: '/album/IMG_3373.JPG',
      mobile: 'col-span-1 row-span-1',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-11',
      delay: 0.2,
    },
    {
      src: '/album/IMG_3482.JPG',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-5',
      delay: 0.3,
    },
    {
      src: '/album/_BQH8338.JPG',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-2 md:row-span-2',
      pcOrder: 'md:order-4',
      delay: 0.4,
    },
    {
      src: '/album/IMG_3388.JPG',
      mobile: 'col-span-1 row-span-1',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-6',
      delay: 0.5,
    },
    {
      src: '/album/IMG_3493.JPG',
      mobile: 'col-span-1 row-span-1',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-7',
      delay: 0.6,
    },
    {
      src: '/album/IMG_3489.JPG',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-8',
      delay: 0.7,
    },
    {
      src: '/album/IMG_3506.JPG',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-3',
      pcOrder: 'md:order-9',
      delay: 0.8,
    },
    {
      src: '/album/IMG_3504.JPG',
      mobile: 'col-span-1 row-span-1',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-10',
      delay: 0.8,
    },
    {
      src: '/album/IMG_3199.JPG',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-3',
      pcOrder: 'md:order-3',
      delay: 0.8,
    },
    {
      src: '/album/IMG_3372.JPG',
      mobile: 'col-span-1 row-span-2',
      pc: 'md:col-span-1 md:row-span-2',
      pcOrder: 'md:order-12',
      delay: 0.8,
    },
    {
      src: '/album/IMG_3486.JPG',
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

  const handleClose = () => {
    setExitingImg(selectedImg)
    setSelectedImg(null)
  }

  return (
    <LayoutGroup id="album">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: image.delay }}
                onMouseEnter={() => preloadImage(image.src)}
                className={cn(
                  'relative',
                  image.mobile,
                  image.pc,
                  image.pcOrder
                )}
                style={{
                  zIndex:
                    selectedImg === image.src || exitingImg === image.src
                      ? 50
                      : 0,
                }}
              >
                <motion.div
                  layoutId={`card-${image.src}`}
                  transition={{
                    type: 'spring',
                    damping: 28,
                    stiffness: 180,
                    mass: 1,
                  }}
                  className="group relative h-full w-full cursor-pointer overflow-hidden rounded-3xl border border-sage-mist/10 shadow-sm"
                  onClick={() => setSelectedImg(image.src)}
                >
                  <motion.div
                    layoutId={`img-${image.src}`}
                    transition={{
                      type: 'spring',
                      damping: 28,
                      stiffness: 180,
                      mass: 1,
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={image.src}
                      alt={`Story ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence onExitComplete={() => setExitingImg(null)}>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md md:p-10"
              onClick={handleClose}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 z-[110] rounded-full bg-white/10 p-2 text-white/70 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
                onClick={handleClose}
              >
                <X size={32} />
              </motion.button>

              <motion.div
                layoutId={`card-${selectedImg}`}
                transition={{
                  type: 'spring',
                  damping: 28,
                  stiffness: 180,
                  mass: 1,
                }}
                className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  layoutId={`img-${selectedImg}`}
                  transition={{
                    type: 'spring',
                    damping: 28,
                    stiffness: 180,
                    mass: 1,
                  }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={selectedImg}
                    alt="Selected"
                    fill
                    priority
                    quality={100}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  )
}
