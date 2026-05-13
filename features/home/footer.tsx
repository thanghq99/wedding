'use client'

import { Cat, Heart, Info, Landmark } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

export function FooterSection() {
  return (
    <footer className="relative w-full bg-background px-6 py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-24">
        {/* Registry */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 rounded-3xl border border-stone-gray/10 bg-card p-8"
          >
            <div className="flex items-center gap-4">
              <Landmark className="h-6 w-6 text-sage-mist" />
              <h2 className="font-heading text-2xl">Mừng cưới</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="space-y-4 text-center">
                <p className="label text-sage-mist text-xs">Nhà Trai</p>
                <div className="mx-auto flex aspect-square w-full max-w-[160px] items-center justify-center overflow-hidden rounded-2xl border border-stone-gray/20 bg-white">
                  <Image
                    src="/t.webp"
                    alt="QR Nhà Trai"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Hà Văn Moè</p>
                </div>
              </div>

              <div className="space-y-4 text-center">
                <p className="label text-sage-mist text-xs">Nhà Gái</p>
                <div className="mx-auto flex aspect-square w-full max-w-[160px] items-center justify-center overflow-hidden rounded-2xl border border-stone-gray/20 bg-white">
                  <Image
                    src="/a.webp"
                    alt="QR Nhà Gái"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Lê Ngọc Anh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 p-8"
          >
            <div className="flex items-center gap-4">
              <Info className="h-6 w-6 text-sage-mist" />
              <h2 className="font-heading text-2xl">Lưu ý nhỏ</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              <li className="flex gap-3">
                <span className="text-sage-mist">•</span>
                <span>
                  Bữa tiệc có chỗ đỗ xe rộng rãi ngay trong khuôn viên nhà
                  khách.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage-mist">•</span>
                <span>
                  Bạn cứ thoải mái sử dụng điện thoại để ghi lại những kỷ niệm
                  đáng nhớ và chia sẻ niềm vui cùng tụi mình nhé.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage-mist">•</span>
                <span>
                  Và cuối cùng, chúng mình chỉ mong bạn mang theo một "tâm hồn
                  đẹp" để chung vui.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Closing */}
        <div className="space-y-6 text-center">
          <div className="mx-auto h-px w-24 bg-stone-gray/20" />
          <p className="font-heading text-3xl text-foreground/50 italic">
            Hẹn gặp bạn tại buổi lễ
          </p>
          <div className="flex items-center justify-center gap-2 text-sage-mist">
            <span className="label">Quốc Thắng & Ngọc Anh & </span>
            <Cat className="h-4 w-4 fill-black" />
            <Heart className="h-4 w-4 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  )
}
