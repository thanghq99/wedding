'use client'

import { motion } from 'motion/react'

export function InvitationSection() {
  return (
    <section
      id="invitation"
      className="relative flex min-h-[80vh] w-full flex-col items-center justify-center bg-background px-6 py-24 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl space-y-8"
      >
        <span className="label text-sage-mist">Lời Ngỏ</span>
        <h2 className="font-heading text-4xl text-foreground italic md:text-5xl">
          Gửi những người thương yêu
        </h2>
        <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
          <p>
            Trong không gian ấm cúng của buổi lễ, nơi những kỷ niệm đẹp đẽ được
            sẻ chia và tình yêu được tôn vinh dưới sự chứng kiến của những người
            thân thương nhất.
          </p>
          <p>
            Chúng mình mong muốn được cùng bạn sẻ chia khoảnh khắc khởi đầu cho
            một hành trình mới.
          </p>
          <p>
            Sự hiện diện của bạn chính là mảnh ghép hoàn hảo nhất cho ngày trọng
            đại của chúng mình.
          </p>
        </div>
        <div className="pt-8">
          <p className="font-heading text-2xl italic">
            — Quốc Thắng & Ngọc Anh
          </p>
        </div>
      </motion.div>
    </section>
  )
}
