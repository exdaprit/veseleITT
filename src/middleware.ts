import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginRoute = request.nextUrl.pathname === '/admin/login'

  if (isAdminRoute) {
    const session = request.cookies.get('admin_session')

    // If trying to access protected route without session
    if (!session && !isLoginRoute) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // If trying to access login page while already authenticated
    if (session && isLoginRoute) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
