import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 md:px-8 text-center">
      <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
        Error 404
      </p>
      <h1 className="font-display text-5xl md:text-6xl font-semibold mb-4">
        Página no encontrada
      </h1>
      <p className="text-text-secondary max-w-[40ch] mb-10 text-pretty">
        La página que buscás no existe o fue movida. Volvé al inicio para explorar el sitio.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full bg-accent text-background hover:bg-accent-hover transition-all duration-200"
      >
        <ArrowLeft size={15} className="mr-2" strokeWidth={2} />
        Volver al inicio
      </Link>
    </div>
  )
}
