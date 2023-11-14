import connectMongoDB from "@/libs/mongoDB";
import Post from "@/models/post";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { useReducer } from "react";
import { getToken } from "next-auth/jwt";

const myMongoDBUri= process.env.MONGODB_URI;

export async function POST(request) {
  
  const body = await request.json();
  await connectMongoDB(myMongoDBUri);
  const token= await getToken({req:NextRequest})
  // const {user} = await getServerSession({req:NextRequest, res:NextResponse, authOptions})
  console.log(token);
  await Post.create(body);

  return NextResponse.json({ok: true, message: "Post Created", status: 200});


}