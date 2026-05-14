'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Loader2 } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { RippleButton } from '@/components/ui/ripple-button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const rsvpSchema = z
  .object({
    name: z.string().min(2, 'Vui lòng nhập tên của bạn'),
    side: z.enum(['groom', 'bride'], {
      required_error:
        'Chúng mình cần biết thêm thông tin này để chuẩn bị chu đáo hơn',
    }),
    attending: z.enum(['yes', 'no'], {
      required_error: 'Vui lòng xác nhận sự hiện diện của bạn',
    }),
    phone: z.string().optional(),
    guests: z.string().optional(),
    note: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.attending === 'yes') {
      if (data.phone && data.phone.length > 0) {
        if (!/^[0-9]+$/.test(data.phone)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Số điện thoại chỉ được chứa số',
            path: ['phone'],
          })
        } else if (data.phone.length !== 10) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Số điện thoại phải có đúng 10 số',
            path: ['phone'],
          })
        }
      }

      if (!data.guests || data.guests.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Vui lòng chọn số lượng người tham dự',
          path: ['guests'],
        })
      }
    }
  })

type RSVPFormValues = z.infer<typeof rsvpSchema>

const sendToGoogleSheets = async (_data: RSVPFormValues) => {
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
  } = useForm({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: '',
      side: undefined as unknown as 'groom' | 'bride',
      phone: '',
      guests: '1',
      attending: 'yes' as 'yes' | 'no',
      note: '',
    },
  })

  const onSubmit = async (data: RSVPFormValues) => {
    setIsSubmitting(true)
    try {
      await sendToGoogleSheets(data)
      setIsSuccess(true)

      reset()
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
            Để chúng mình chuẩn bị chu đáo nhất, bạn vui lòng phản hồi trước
            ngày 18/05/2026 nhé. Mong sớm gặp bạn!
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
              Tên của bạn là
            </p>
            <Input
              {...register('name')}
              className="h-auto rounded-2xl border-2 border-stone-gray/30 px-6 py-4 transition-all focus:border-sage-mist focus-visible:border-sage-mist focus-visible:ring-0"
            />
            {errors.name && (
              <p className="ml-1 text-[10px] text-destructive uppercase tracking-wider">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-3">
            <p className="ml-1 font-medium text-muted-foreground text-xs uppercase tracking-widest">
              Bạn là khách của
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setValue('side', 'groom')}
                className={cn(
                  'rounded-2xl border-2 py-4 font-medium transition-all',
                  watch('side') === 'groom'
                    ? 'border-sage-mist bg-sage-mist/5 text-sage-mist'
                    : 'border-stone-gray/30 text-muted-foreground hover:border-stone-gray/50'
                )}
              >
                Chú rể Thắng
              </button>
              <button
                type="button"
                onClick={() => setValue('side', 'bride')}
                className={cn(
                  'rounded-2xl border-2 py-4 font-medium transition-all',
                  watch('side') === 'bride'
                    ? 'border-sage-mist bg-sage-mist/5 text-sage-mist'
                    : 'border-stone-gray/30 text-muted-foreground hover:border-stone-gray/50'
                )}
              >
                Cô dâu Ngọc Anh
              </button>
            </div>
            {errors.side && (
              <p className="ml-1 text-[10px] text-destructive uppercase tracking-wider">
                {errors.side.message}
              </p>
            )}
          </div>

          <div className="space-y-3">
            <p className="ml-1 font-medium text-muted-foreground text-xs uppercase tracking-widest">
              Bạn sẽ tham dự chứ?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setValue('attending', 'yes')}
                className={cn(
                  'rounded-2xl border-2 py-4 font-medium transition-all',
                  watch('attending') === 'yes'
                    ? 'border-emerald-100 bg-emerald-50/40 text-emerald-600/80'
                    : 'border-stone-gray/20 text-muted-foreground/70 hover:border-stone-gray/40'
                )}
              >
                Chắc chắn rồi
              </button>
              <button
                type="button"
                onClick={() => setValue('attending', 'no')}
                className={cn(
                  'rounded-2xl border-2 py-4 font-medium transition-all',
                  watch('attending') === 'no'
                    ? 'border-orange-100 bg-orange-50/40 text-orange-600/80'
                    : 'border-stone-gray/20 text-muted-foreground/70 hover:border-stone-gray/40'
                )}
              >
                Sozziii...
              </button>
            </div>
            {errors.attending && (
              <p className="ml-1 text-[10px] text-destructive uppercase tracking-wider">
                {errors.attending.message}
              </p>
            )}
          </div>

          <AnimatePresence>
            {watch('attending') === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4"
              >
                <div className="space-y-2">
                  <p className="ml-1 font-medium text-muted-foreground text-xs uppercase tracking-widest">
                    Số điện thoại
                  </p>
                  <Input
                    {...register('phone')}
                    type="tel"
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
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2">
            <p className="ml-1 font-medium text-muted-foreground text-xs uppercase tracking-widest">
              Lời nhắn
            </p>
            <Textarea
              {...register('note')}
              className="h-32 rounded-2xl border-2 border-stone-gray/30 px-6 py-4 transition-all focus:border-sage-mist focus-visible:border-sage-mist focus-visible:ring-0"
            />
          </div>

          <div className="pt-4">
            <RippleButton
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang gửi...
                </>
              ) : (
                'Gửi lời xác nhận'
              )}
            </RippleButton>
          </div>

          <div className="relative h-12">
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 flex items-center justify-center gap-2 text-sage-mist"
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
