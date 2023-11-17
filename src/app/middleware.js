import { NextResponse } from 'next/server'

export const config = {
  matcher: '/post',
}
 
export async function middleware(request) {
  // console.log({ request })

  const pathname= request.nextUrl.pathname;
  console.log({pathname})

  const token = await getToken({ req: request })
  console.log({ token });

  if (token?.accessToken) {
    return NextResponse.next()

  }

  return NextResponse.redirect(new URL('/login'))
}
 
// See "Matching Paths" below to learn more






// import { getToken } from 'next-auth/jwt';
// import { NextRequest, NextResponse } from 'next/server';

// export async function middleware(request) {

//   console.log({ request });

//   try {
//     // Get the pathname of the request (e.g. /, /protected)
//     const path = request.nextUrl.pathname;

//     console.log({ path });

//     // If it's the root path, just render it
//     if (path === '/') {
//       return NextResponse.next();
//     }

//     const session = await getToken({
//       req: request,
//       secret: process.env.NEXTAUTH_SECRET,
//     });

//     console.log({ session });

//     const isProtected = path.toLowerCase().includes('/dashboard');

//     if (!session && isProtected) {
//       return NextResponse.redirect(new URL('/login', request.url));
//     } else if (session && (path === '/login' || path === '/register')) {
//       return NextResponse.redirect(new URL('/dashboard', request.url));
//     }

//     return NextResponse.next();
//   } catch (error) {
//     console.error('Error in middleware:', error);

//     // Handle the error, you might want to redirect to an error page or do something else.
//     return NextResponse.error();
//   }
// }
