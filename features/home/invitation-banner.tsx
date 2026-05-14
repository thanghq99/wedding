'use client'

import { useLenis } from 'lenis/react'
import { motion } from 'motion/react'
import Image from 'next/image'

import { RippleButton } from '@/components/ui/ripple-button'

export function InvitationBanner() {
  const lenis = useLenis()

  return (
    <section className="relative w-full overflow-hidden bg-card">
      <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center bg-[#B6CEB4] px-6 py-40 text-ivory-silk lg:flex-row lg:gap-16">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 2429 144"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-background"
          >
            <title>Torn paper edge</title>
            <g filter="url(#torn-filter-top)">
              <path
                d="M-100 -50 H2529 V100 Q1214 120 -100 100 Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <filter
                id="torn-filter-top"
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
                filterUnits="objectBoundingBox"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.012"
                  numOctaves="4"
                  seed="3267"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  scale="25"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative mb-8 h-[250px] w-[250px] lg:mb-0 lg:h-[350px] lg:w-[350px]"
        >
          <div className="flex h-full w-full items-center justify-center border-2 border-ivory-silk/20 bg-ivory-silk/5 shadow-xl backdrop-blur-sm">
            <Image
              src="/nhancuoitrentay.webp"
              alt="Invitation"
              width={300}
              height={300}
              className="h-auto w-full object-contain opacity-90 mix-blend-screen"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="z-10 max-w-xl space-y-10 text-center lg:text-left"
        >
          <div className="space-y-4">
            <h2 className="mb-8 font-heading text-5xl text-deep-forest italic md:text-7xl">
              Thân mời bạn
            </h2>
          </div>

          <p className="font-sans text-deep-forest text-xl leading-relaxed md:text-2xl">
            Tụi mình có chuẩn bị bữa cơm thân mật, trân trọng mời bạn cùng gia
            đình đến chung vui nhé. Nhớ dẫn theo cả &apos;người ấy&apos; và các
            &apos;tệp đính kèm&apos; siêu cấp đáng yêu để niềm vui thêm trọn vẹn
            nha!
          </p>

          <div className="flex justify-center lg:justify-start">
            <RippleButton onClick={() => lenis?.scrollTo('#ceremony')}>
              Xem chi tiết
            </RippleButton>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden leading-[0]">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 2429 144"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-card"
          >
            <title>Torn paper edge</title>
            <g filter="url(#torn-filter-bottom)">
              <path
                d="M-100 -50 H2529 V100 Q1214 120 -100 100 Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <filter
                id="torn-filter-bottom"
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
                filterUnits="objectBoundingBox"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.012"
                  numOctaves="4"
                  seed="5555"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  scale="25"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}
