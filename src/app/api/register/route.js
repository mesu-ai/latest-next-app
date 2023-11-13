import connectMongoDB from "@/libs/mongoDB";
import User from "@/models/users";
import bcrypt from 'bcrypt';
// const bcrypt = require('bcrypt');

const myMongoDBUri= process.env.MONGODB_URI;
const saltRounds = 10;

export async function POST(request) {
  
  try {

    
    const { name, email, password: pass } = await request.json();
    console.log({ name, email, pass })

    await connectMongoDB(myMongoDBUri);

    const isExisting = await User.findOne({ email });

    if (isExisting) {
      // return {status: 400, message: "User already exists"};
      throw new Error('User already exists');
    }

    
    const hassedPassword = await bcrypt.hash(pass, saltRounds);
    const newUser = await User.create({ name, email, password: hassedPassword });

    const { password, ...user } = newUser._doc;

    return new Response(JSON.stringify(user), { status: 200 });

  } catch (error) {

    console.log({ error });
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });

  }

}