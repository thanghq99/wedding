'use client'

import { Clock, MapPin, Shirt } from 'lucide-react'
import { motion } from 'motion/react'

export function CeremonySection() {
  const schedule = [
    { time: '13:00 • Thứ 7', event: 'Lễ Ăn Hỏi', desc: 'Tại nhà gái' },
    {
      time: '14:00 • Thứ 7',
      event: 'Tiệc Nhà Gái',
      desc: 'Tại Nhà Khách Hương Giang Quân Đoàn',
    },
    {
      time: '08:30 • Chủ Nhật',
      event: 'Tiệc Nhà Trai',
      desc: 'Tại Nhà Khách Hương Giang Quân Đoàn',
    },
    {
      time: '09:30 • Chủ Nhật',
      event: 'Lễ Đón Dâu',
      desc: 'Từ nhà gái về nhà trai',
    },
    {
      time: '10:00 • Chủ Nhật',
      event: 'Lễ Thành Hôn',
      desc: 'Tại Nhà Khách Hương Giang Quân Đoàn',
    },
  ]
  const dressCode = [
    { color: 'bg-[#B4BCB0]', name: 'Sage Green' },
    { color: 'bg-[#8E918F]', name: 'Stone Gray' },
    { color: 'bg-[#F2F0E9]', name: 'Cream' },
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
                <div className="absolute -left-[37px] mt-1 h-4 w-4 rounded-full border-2 border-card bg-sage-mist" />
                <span className="label text-sage-mist text-xs">
                  {item.time}
                </span>
                <h3 className="font-medium text-xl">{item.event}</h3>
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
                  [Cập nhật địa chỉ nhà gái tại đây]
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg">Nhà Trai</h3>
                <p className="text-muted-foreground text-sm italic">
                  [Cập nhật địa chỉ nhà trai tại đây]
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-lg">
                  Nhà Khách Hương Giang Quân Đoàn
                </h3>
                <p className="text-muted-foreground text-sm">
                  Lạng Giang, Bắc Ninh
                </p>
                <div className="mt-4 flex h-40 w-full items-center justify-center rounded-2xl border border-stone-gray/20 bg-stone-gray/10">
                  <p className="muted text-xs">Google Maps Integration</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Shirt className="h-6 w-6 text-sage-mist" />
              <h2 className="font-heading text-3xl">Trang phục</h2>
            </div>
            <p className="text-muted-foreground">
              Để hòa mình vào không gian buổi lễ, Thắng & Anh gợi ý bạn lựa chọn
              trang phục theo tông màu sau:
            </p>
            <div className="flex gap-6">
              {dressCode.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest"
                >
                  <span
                    className={`h-10 w-10 rounded-full ${item.color} border border-stone-gray/20 shadow-sm transition-transform hover:scale-110`}
                  ></span>
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
