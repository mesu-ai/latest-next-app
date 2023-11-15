import connectMongoDB from "@/libs/mongoDB";
import Post from "@/models/post";

import {  NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const myMongoDBUri= process.env.MONGODB_URI;

export async function POST(request) {
  
  const body = await request.json();
  const token = await getToken({req:request})
  await connectMongoDB(myMongoDBUri);

  console.log(token);
  await Post.create({...body, authorId:token.userId});

  return NextResponse.json({ok: true, message: "Post Created", status: 200});


}