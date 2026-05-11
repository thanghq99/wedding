'use client'

import { Cat, Heart, Info, Landmark } from 'lucide-react'
import { motion } from 'motion/react'

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
                <div className="mx-auto flex aspect-square w-full max-w-[160px] items-center justify-center rounded-2xl border border-stone-gray/20 bg-stone-gray/10">
                  <span className="muted text-xs">QR Nhà Trai</span>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Hà Văn Moè</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    Ngân hàng ABC - 123456
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-center">
                <p className="label text-sage-mist text-xs">Nhà Gái</p>
                <div className="mx-auto flex aspect-square w-full max-w-[160px] items-center justify-center rounded-2xl border border-stone-gray/20 bg-stone-gray/10">
                  <span className="muted text-xs">QR Nhà Gái</span>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Lê THỊ Ngọc Anh</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    Ngân hàng XYZ - 789012
                  </p>
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
                  Bữa tiệc có chỗ đỗ xe rộng rãi ngay tại cổng chính của buổi
                  lễ.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-sage-mist">•</span>
                <span>
                  Đây là tiệc dành cho người lớn, hy vọng bạn thông cảm không
                  mang theo trẻ nhỏ để buổi lễ thêm phần tĩnh lặng.
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
