import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Tomás Lekerman — Fundador & Emprendedor'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0A0A0A',
          color: '#F5F5F5',
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: '#E8D5A3',
            marginBottom: 24,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          lekerman.com
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Tomás Lekerman
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#888888',
            lineHeight: 1.4,
          }}
        >
          Fundador de Kokora Matcha · Emprendedor · Builder
        </div>
      </div>
    ),
    { ...size }
  )
}
