
import connectMongoDB from "@/libs/mongoDB";
import Topic from "@/models/topics";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  console.log({ title, description });
  await connectMongoDB();
  await Topic.create({ title, description });
  
  // const path='/api/topics';
  // revalidatePath(path)
  return NextResponse.json({ok: true ,message: "Topic Created", status: 201});
}

export async function GET(request) {
  await connectMongoDB();
  const topics = await Topic.find();
 
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({status: 200, message: "Topic deleted" });
}