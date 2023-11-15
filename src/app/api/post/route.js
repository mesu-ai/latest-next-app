import connectMongoDB from "@/libs/mongoDB";
import Post from "@/models/post";

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { verifyJwtToken } from "@/libs/jwt";

const myMongoDBUri = process.env.MONGODB_URI;

export async function POST(request) {

  const bearerToken = request.headers.get('authorization').split(' ')[1];
  console.log({ bearerToken });

  const authorized = verifyJwtToken(bearerToken)
  console.log({ authorized });

  if (bearerToken === undefined || !authorized || !bearerToken) {
    return NextResponse.json({ ok: false, message: "Unauthorized", status: 401 })

  }

  try {
    const body = await request.json();
    const token = await getToken({ req: request })

    if(!token){
      return NextResponse.json({ ok: false, message: "Unauthorized", status: 401 })
    }

    await connectMongoDB(myMongoDBUri);

    // console.log(token);
    await Post.create({ ...body, authorId: token.userId });

    return NextResponse.json({ ok: true, message: "Post Created", status: 200 });

  } catch (error) {

    console.log({ error });
    return NextResponse.json({ ok: false, message: "Something went wrong", status: 500 })

  }
}