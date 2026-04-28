//Detecta el idioma del navegador del usuario y 
// lo redigirá automáticamente

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'es']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Verifica si la URL ya tiene el idioma (ej: /es/sobre-mi)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Si no tiene idioma, lo redirige al español por defecto
  const locale = 'es'
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Evita que el middleware afecte a imágenes o archivos internos
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}