'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Loader2 } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const rsvpSchema = z.object({
  name: z.string().min(2, 'Vui lòng nhập họ và tên của bạn'),
  phone: z
    .string()
    .min(10, 'Số điện thoại phải có ít nhất 10 số')
    .regex(/^[0-9]+$/, 'Số điện thoại chỉ được chứa số'),
  guests: z
    .string()
    .min(1, 'Vui lòng chọn số lượng người tham dự')
    .refine((val) => {
      const num = parseInt(val, 10)
      if (!Number.isNaN(num)) return num > 0
      return true
    }, 'Số người phải lớn hơn 0'),
  note: z.string().optional(),
})

type RSVPFormValues = z.infer<typeof rsvpSchema>

// Mock API function to simulate Google Sheets integration
const sendToGoogleSheets = async (_data: RSVPFormValues) => {
  // Simulate network delay
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

export function RSVPSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: '',
      phone: '',
      guests: '1',
      note: '',
    },
  })

  const onSubmit = async (data: RSVPFormValues) => {
    setIsSubmitting(true)
    try {
      await sendToGoogleSheets(data)
      setIsSuccess(true)

      reset()
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (_error) {
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="rsvp"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-card px-6 py-24"
    >
      <div className="w-full max-w-xl space-y-12">
        <div className="space-y-4 text-center">
          <span className="label text-sage-mist">Xác nhận tham dự</span>
          <h2 className="font-heading text-4xl text-foreground italic md:text-5xl">
            RSVP
          </h2>
          <p className="text-muted-foreground">
            Để buổi tiệc được chu đáo nhất, bạn vui lòng phản hồi trước ngày
            18/05/2026 nhé.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="ml-1 font-medium text-muted-foreground text-xs uppercase tracking-widest">
              Họ và Tên
            </p>
            <Input
              {...register('name')}
              placeholder="Nguyễn Văn A"
              className={cn(
                'h-auto rounded-2xl border-2 border-stone-gray/30 px-6 py-4 transition-all focus:border-sage-mist focus-visible:border-sage-mist focus-visible:ring-0',
                errors.name ? 'border-destructive' : ''
              )}
            />
            {errors.name && (
              <p className="ml-1 text-[10px] text-destructive uppercase tracking-wider">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
            <div className="space-y-2">
              <p className="ml-1 font-medium text-muted-foreground text-xs uppercase tracking-widest">
                Số điện thoại
              </p>
              <Input
                {...register('phone')}
                type="tel"
                placeholder="090..."
                className={cn(
                  'h-auto rounded-2xl border-2 border-stone-gray/30 px-6 py-4 transition-all focus:border-sage-mist focus-visible:border-sage-mist focus-visible:ring-0',
                  errors.phone ? 'border-destructive' : ''
                )}
              />
              {errors.phone && (
                <p className="ml-1 text-[10px] text-destructive uppercase tracking-wider">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="ml-1 font-medium text-muted-foreground text-xs uppercase tracking-widest">
                Số người
              </p>
              <div className="relative">
                <Input
                  {...register('guests')}
                  placeholder="1, 2, Cả gia đình..."
                  className={cn(
                    'h-auto rounded-2xl border-2 border-stone-gray/30 px-6 py-4 pr-28 transition-all focus:border-sage-mist focus-visible:border-sage-mist focus-visible:ring-0',
                    errors.guests ? 'border-destructive' : ''
                  )}
                />
                <div className="absolute top-1/2 right-2 flex -translate-y-1/2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setValue('guests', '1')}
                    className="rounded-lg border-2 border-stone-gray/40 bg-card px-4 py-1.5 font-bold text-foreground text-xs transition-all hover:border-sage-mist hover:bg-sage-mist hover:text-white"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('guests', '2')}
                    className="rounded-lg border-2 border-stone-gray/40 bg-card px-4 py-1.5 font-bold text-foreground text-xs transition-all hover:border-sage-mist hover:bg-sage-mist hover:text-white"
                  >
                    2
                  </button>
                </div>
              </div>
              {errors.guests && (
                <p className="ml-1 text-[10px] text-destructive uppercase tracking-wider">
                  {errors.guests.message}
                </p>
              )}
              {!Number.isNaN(parseInt(watch('guests') || '0', 10)) &&
                parseInt(watch('guests') || '0', 10) > 5 && (
                  <motion.p
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-1 font-medium text-[11px] text-amber-600 italic"
                  >
                    dude are you for real?
                  </motion.p>
                )}
            </div>
          </div>

          <div className="space-y-2">
            <p className="ml-1 font-medium text-muted-foreground text-xs uppercase tracking-widest">
              Lưu ý về ăn uống (dị ứng...)
            </p>
            <Textarea
              {...register('note')}
              placeholder="Ví dụ: Mình không ăn được hải sản..."
              className="h-32 rounded-2xl border-2 border-stone-gray/30 px-6 py-4 transition-all focus:border-sage-mist focus-visible:border-sage-mist focus-visible:ring-0"
            />
          </div>

          <div className="relative">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-auto w-full rounded-full bg-hydrangea py-5 font-heading text-white text-xl shadow-lg transition-all hover:scale-[1.02] hover:bg-hydrangea/90 active:scale-95 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Đang gửi...
                </>
              ) : (
                'Xác nhận tham dự'
              )}
            </Button>

            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-12 left-0 flex w-full items-center justify-center gap-2 text-sage-mist"
                >
                  <Check className="h-4 w-4" />
                  <span className="font-medium text-sm">
                    Cảm ơn bạn đã xác nhận tham dự!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
