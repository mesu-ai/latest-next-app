import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

const secret = process.env.NEXTAUTH_SECRET

export  async function GET(request) {

  // console.log("req", request, request.nextUrl.pathname)
  const token = await getToken({ req:request, secret, raw:true })
  console.log("JSON Web Token", token)
  return NextResponse.json({ token })
}