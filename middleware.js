import { NextRequest, NextResponse } from "next/server"

/**
 * 
 * @param {NextRequest} request 
 * @returns 
 */
export function middleware(request) {
    const { method, nextUrl } = request
    const pathname = nextUrl.pathname

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/favicon') ||
        pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico|css|js|map|woff2?)$/)
    ) {
        return NextResponse.next()
    }

    const log = `[${new Date().toISOString()}] ${method} ${pathname}${nextUrl.search}`;
    
    console.log(log);

    return NextResponse.next();
}