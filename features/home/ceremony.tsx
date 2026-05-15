'use client'

import { Clock, MapPin } from 'lucide-react'
import { motion } from 'motion/react'

export function CeremonySection() {
  const schedule = [
    {
      time: '13:00 • Thứ 7 ngày 23/5',
      event: 'LỄ ĂN HỎI',
      desc: 'Tại tư gia nhà gái',
    },
    {
      time: '15:30 • Thứ 7 ngày 23/5',
      event: 'TIỆC NHÀ GÁI',
      desc: 'Tại Nhà Khách Hương Giang Quân Đoàn',
      isImportant: true,
    },
    {
      time: '08:30 • Chủ Nhật ngày 24/5',
      event: 'TIỆC NHÀ TRAI',
      desc: 'Tại Nhà Khách Hương Giang Quân Đoàn',
      isImportant: true,
    },
    {
      time: '09:00 • Chủ Nhật ngày 24/5',
      event: 'LỄ VU QUY',
      desc: 'Tại tư gia nhà gái',
    },
    {
      time: '10:00 • Chủ Nhật ngày 24/5',
      event: 'LỄ THÀNH HÔN',
      desc: 'Tại Nhà Khách Hương Giang Quân Đoàn',
      isImportant: true,
    },
  ]
  return (
    <section
      id="ceremony"
      className="relative flex min-h-screen w-full flex-col items-center bg-card px-6 py-24"
    >
      <div className="grid w-full max-w-5xl grid-cols-1 gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <Clock className="h-6 w-6 text-sage-mist" />
            <h2 className="font-heading text-3xl">Lịch trình</h2>
          </div>
          <div className="space-y-8 border-stone-gray/20 border-l pl-7">
            {schedule.map((item) => (
              <div key={item.event} className="relative space-y-1">
                <div className="absolute -left-[37px] mt-1 flex h-4 w-4 items-center justify-center">
                  {item.isImportant && (
                    <div
                      className="absolute h-full w-full animate-ping rounded-full bg-[#9AB17A]/40"
                      style={{ animationDuration: '3s' }}
                    />
                  )}
                  <div
                    className={`relative h-4 w-4 rounded-full border-2 border-card ${
                      item.isImportant
                        ? 'bg-[#9AB17A] shadow-sm'
                        : 'bg-sage-mist'
                    }`}
                  />
                </div>
                <span className="label text-sage-mist text-xs">
                  {item.time}
                </span>
                <h3 className="font-medium text-xl tracking-wide">
                  {item.event}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-sage-mist" />
              <h2 className="font-heading text-3xl">Địa điểm</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Nhà Gái</h3>
                <p className="text-muted-foreground text-sm italic">
                  Thôn Ổ Chương, xã Lạng Giang, tỉnh Bắc Ninh
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg">Nhà Trai</h3>
                <p className="text-muted-foreground text-sm italic">
                  Xã Mỹ Thái, tỉnh Bắc Ninh
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg">
                  Nhà Khách Hương Giang Quân Đoàn
                </h3>
                <p className="text-muted-foreground text-sm italic">
                  9766+2R6, Lạng Giang, Bắc Ninh
                </p>
                <div className="mt-4 flex h-80 w-full items-center justify-center rounded-2xl border border-stone-gray/20 bg-stone-gray/10">
                  <iframe
                    title="Bản đồ Lạng Giang"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5000.0!2d106.18243!3d21.36511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135694161ac41c1%3A0x584fb57fd5cbbf7c!2zOTc2NisycjYsIGzhuqFuZyBnaWFuZywgYuG6r2MgbmluaA!5e0!3m2!1svi!2svn!4v1715752000000!5m2!1svi!2svn"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
