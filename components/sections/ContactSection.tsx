'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { socialLinks } from '@/data/social'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { CheckCircle, Mail } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  reason: z.enum(['inversor', 'socio', 'prensa', 'otro'], {
    required_error: 'Seleccioná un motivo',
  }),
  message: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

const reasons = [
  { value: 'inversor', label: 'Inversión' },
  { value: 'socio', label: 'Sociedad' },
  { value: 'prensa', label: 'Prensa / Media' },
  { value: 'otro', label: 'Otro' },
] as const

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('No se pudo enviar el mensaje. Escribime directo a tomas@lekerman.com')
      }
    } catch {
      setError('No se pudo enviar el mensaje. Escribime directo a tomas@lekerman.com')
    }
  }

  const inputClass = cn(
    'w-full px-4 py-3 rounded-xl text-sm font-body',
    'bg-surface border border-border',
    'text-text-primary placeholder:text-text-muted',
    'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50',
    'transition-all duration-200'
  )

  return (
    <section id="contacto" className="py-24 px-5 md:px-8" aria-labelledby="contact-heading">
      <div className="max-w-reading mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-3 block">
              Contacto
            </span>
            <h2
              id="contact-heading"
              className="font-display text-3xl md:text-4xl font-semibold mb-4"
            >
              Hablemos
            </h2>
            <p className="text-text-secondary text-pretty max-w-[46ch]">
              Estoy abierto a conversaciones sobre inversión, proyectos, colaboraciones o simplemente intercambiar ideas.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16 items-start">
          <AnimatedSection delay={100}>
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <CheckCircle size={40} strokeWidth={1.5} className="text-green-400" />
                <h3 className="font-display text-xl font-semibold">
                  ¡Mensaje recibido!
                </h3>
                <p className="text-text-secondary text-sm">
                  Te respondo en menos de 48 horas hábiles.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
                aria-label="Formulario de contacto"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      autoComplete="name"
                      className={cn(inputClass, errors.name && 'border-red-500/50')}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1.5" role="alert">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      autoComplete="email"
                      className={cn(inputClass, errors.email && 'border-red-500/50')}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5" role="alert">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="sr-only">Motivo</label>
                  <select
                    id="reason"
                    className={cn(inputClass, 'appearance-none cursor-pointer', errors.reason && 'border-red-500/50')}
                    {...register('reason')}
                    defaultValue=""
                  >
                    <option value="" disabled>Motivo del contacto</option>
                    {reasons.map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                  {errors.reason && (
                    <p className="text-red-400 text-xs mt-1.5" role="alert">{errors.reason.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Mensaje</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Contame en qué estás trabajando o qué tenés en mente..."
                    className={cn(inputClass, 'resize-none', errors.message && 'border-red-500/50')}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5" role="alert">{errors.message.message}</p>
                  )}
                </div>

                {error && (
                  <p className="text-red-400 text-sm" role="alert">{error}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  Enviar mensaje
                </Button>
              </form>
            )}
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <div>
                <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                  Email directo
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200 group"
                >
                  <Mail size={15} strokeWidth={1.5} className="group-hover:text-accent" />
                  {profile.email}
                </a>
              </div>

              <div>
                <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3">
                  Redes
                </p>
                <SocialLinks links={socialLinks} iconSize={17} />
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-text-muted leading-relaxed">
                  Respondo todos los mensajes. Si tenés algo concreto para discutir, mencionalo en el campo de motivo.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
