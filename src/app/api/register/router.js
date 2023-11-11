import connectMongoDB from "@/libs/mongoDB";
import User from "@/models/users";
const bcrypt = require('bcrypt');

export async function POST(request) {

  try {
    await connectMongoDB();

    const { userName, email, password: pass } = await request.json();

    const isExisting = await User.findOne({ email });

    if (isExisting) {
      // return {status: 400, message: "User already exists"};
      throw new Error('User already exists');
    }

    const hassedPassword = await bycript.hash(pass, 10);

    const newUser = await User.create({ userName, email, password: hassedPassword });

    const { password, ...user } = newUser._doc;

    return new Response(JSON.stringify(user), { status: 200 });

  } catch (error) {

    console.log({ error });
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });

  }

}