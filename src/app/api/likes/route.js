import { verifyJwtToken } from "@/libs/jwt";
import connectMongoDB from "@/libs/mongoDB";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const myMongoDBUri = process.env.MONGODB_URI;


export async function POST(request) {
  const authorizationHeader= request.headers.get('authorization');
  if(!authorizationHeader || !authorizationHeader.startsWith('Bearer')){
    return NextResponse.json({ok: false, message: 'Unauthorized', status: 401 })
  }

  const bearerToken = authorizationHeader.split(' ')[1];
  console.log({bearerToken});

  const authorized= verifyJwtToken(bearerToken);
  console.log({authorized});

  if(bearerToken === undefined || !authorized){
    return NextResponse.json({ok: false, message: 'Unauthorized', status: 401 })
  }

  try {
    const body= await request.json();
    console.log({body});
    const token = await getToken({ req: request })
    console.log({ token });

    if(!token){
      return NextResponse.json({ ok: false, message: "Unauthorized", status: 401 })
    }

    await connectMongoDB(myMongoDBUri);

    // console.log({posts});

    return NextResponse.json({ok: true, message: "Post Finded", status: 200});
    
  } catch (error) {

    
  }


}