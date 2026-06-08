import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  reason: z.enum(['inversor', 'socio', 'prensa', 'otro']),
  message: z.string().min(20),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'sitio@lekerman.com',
      to: 'tomas@lekerman.com',
      subject: `[lekerman.com] Nuevo mensaje: ${data.reason} — ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Motivo:</strong> ${data.reason}</p>
          <hr />
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
      replyTo: data.email,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
