import mongoose from "mongoose";

const connectMongoDB = async (uri) => {
  try {
    await mongoose.connect(uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Connected to MongoDB.");

  } catch (error) {
    console.log('Error connecting MongoDB', error);
    return NextResponse.json({ ok: false, message: "Failed to connect to MongoDB", status: 500 });
  }
};

export default connectMongoDB;