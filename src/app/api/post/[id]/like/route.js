import { verifyJwtToken } from "@/libs/jwt";
import connectMongoDB from "@/libs/mongoDB";
import Post from "@/models/post";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const myMongoDBUri = process.env.MONGODB_URI;


export async function POST(request) {
  const authorizationHeader = request.headers.get('authorization');
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer')) {
    return NextResponse.json({ ok: false, message: 'Unauthorized', status: 401 })
  }

  const bearerToken = authorizationHeader.split(' ')[1];
  // console.log({ bearerToken });

  const authorized = verifyJwtToken(bearerToken);
  // console.log({ authorized });

  if (bearerToken === undefined || !authorized) {
    return NextResponse.json({ ok: false, message: 'Unauthorized', status: 401 })
  }

  try {
    const body = await request.json();
    // console.log({ body });
    const token = await getToken({ req: request })
    // console.log({ token });

    if (!token) {
      return NextResponse.json({ ok: false, message: "Unauthorized", status: 401 })
    }

    await connectMongoDB(myMongoDBUri);

    const post = await Post.findById(body?.postId);
    const hasLike = post.likes.includes(token?.userId)

    if (hasLike) {
      post.likes = post.likes.filter(like => like.toString() !== token?.userId);

      await post.save();
      return NextResponse.json({ ok: true, message: "Post UnLiked", status: 200 });

    } else if (!hasLike) {
      post.likes.push(token?.userId)

      await post.save();
      return NextResponse.json({ ok: true, message: "Post Liked", status: 200 });
    }

  } catch (error) {

    console.log({ error });

    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false, message: "Validation error", status: 400 });
    } else if (error instanceof SomeOtherError) {
      return NextResponse.json({ ok: false, message: "Some other specific error", status: 500 });
    } else {
      return NextResponse.json({ ok: false, message: "Something went wrong", status: 500 });
    }


  }


}