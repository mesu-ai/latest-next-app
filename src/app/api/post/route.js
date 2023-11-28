import connectMongoDB from "@/libs/mongoDB";
import Post from "@/models/post";

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { verifyJwtToken } from "@/libs/jwt";

const myMongoDBUri = process.env.MONGODB_URI;
const secret = process.env.NEXTAUTH_SECRET;


export async function GET(request){

  const token = await getToken({ req: request })
  const authorizationHeader= request.headers.get('authorization');

  if(!authorizationHeader || !authorizationHeader.startsWith('Bearer')){
    console.log('no authorization header');
    return NextResponse.json({ok: false, message: 'Unauthorized', status: 401 })
  }

  const bearerToken = authorizationHeader.split(' ')[1];
  console.log({bearerToken});

  const authorized= verifyJwtToken(bearerToken);
  console.log({authorized});

  if(bearerToken === undefined || !authorized){
    console.log('no authorized');
    return NextResponse.json({ok: false, message: 'Unauthorized', status: 401 })
  }

  try {
    // const token = await getToken({ req: request })
    
    console.log({ token });

    // if(!token){
    //   return NextResponse.json({ ok: false, message: "Unauthorized", status: 401 })
    // }

    await connectMongoDB(myMongoDBUri);
    // const posts= await Post.find().populate(token?.userId);
    // const posts= await Post.find({authorId: authorized._id});
    const posts= await Post.find();
    // console.log({posts});

    return NextResponse.json({ok: true, message: "Post Finded", status: 200, data:posts});
    
  } catch (error) {

    
  }
}

export async function POST(request) {

  const authorizationHeader = request.headers.get('authorization');
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return NextResponse.json({ ok: false, message: "Unauthorized", status: 401 });
  }
  const bearerToken = authorizationHeader.split(' ')[1];
  console.log({ bearerToken });

  const authorized = verifyJwtToken(bearerToken)
  console.log({ authorized });

  if (bearerToken === undefined || !authorized) {
    return NextResponse.json({ ok: false, message: "Unauthorized", status: 401 })

  }

  try {
    const body = await request.json();
    const token = await getToken({ req: request })
    console.log({ token });

    if(!token){
      return NextResponse.json({ ok: false, message: "Unauthorized", status: 401 })
    }

    await connectMongoDB(myMongoDBUri);

    // console.log(token);
    await Post.create({ ...body, authorId: token.userId });

    return NextResponse.json({ ok: true, message: "Post Created", status: 200 });

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