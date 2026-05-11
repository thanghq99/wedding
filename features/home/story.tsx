'use client'

import { motion } from 'motion/react'

export function StorySection() {
  const storyItems = [
    {
      id: 1,
      title: 'Lần đầu gặp gỡ',
      span: 'md:col-span-2 md:row-span-2',
      bg: 'bg-stone-gray/5',
    },
    {
      id: 2,
      title: 'Hẹn hò',
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-sage-mist/10',
    },
    {
      id: 3,
      title: 'Du lịch cùng nhau',
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-hydrangea/10',
    },
    {
      id: 4,
      title: 'Lời cầu hôn',
      span: 'md:col-span-2 md:row-span-1',
      bg: 'bg-stone-gray/10',
    },
  ]

  return (
    <section id="story" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="label text-sage-mist italic">Câu chuyện</span>
          <h2 className="mt-4 font-heading text-4xl text-foreground italic md:text-5xl">
            Our Story
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Hành trình từ người lạ thành người thương, được viết tiếp bởi những
            khoảnh khắc ngọt ngào.
          </p>
        </motion.div>

        <div className="grid h-auto grid-cols-1 gap-4 md:h-[700px] md:grid-cols-3 md:grid-rows-2">
          {storyItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.99 }}
              className={cn(
                'group relative flex items-center justify-center overflow-hidden rounded-[2rem] border border-stone-gray/10 transition-all duration-500 hover:border-sage-mist/30',
                item.bg,
                item.span
              )}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="font-heading text-stone-gray/30 text-xl uppercase italic tracking-widest">
                  No Image
                </span>
                <span className="font-medium text-[10px] text-stone-gray/40 uppercase tracking-[0.2em] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {item.title}
                </span>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-6 right-6 h-6 w-6 border-sage-mist/20 border-t border-r transition-all group-hover:border-sage-mist/50" />
              <div className="absolute bottom-6 left-6 h-6 w-6 border-sage-mist/20 border-b border-l transition-all group-hover:border-sage-mist/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { cn } from '@/lib/utils'
