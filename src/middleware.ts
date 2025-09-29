import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });
    const { pathname } = request.nextUrl;


    const authRoutes = ['/auth/login', '/auth/register'];
    const protectedRoutes = ['/cart', '/checkout', 'profile'];
    if (token && authRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    if (!token && protectedRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/cart"],
}