import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

if (!process.env.MONGODB_URI) {
  console.error(
    "Missing MONGODB_URI in environment. Create a .env file with MONGODB_URI and JWT_SECRET."
  );
  process.exit(1);
}
// Routes and middleware are in app.js; here we only handle DB and local listen.

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log("Connected to MongoDB");
    // Only listen locally in non-serverless environments
    if (!process.env.VERCEL) {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    }
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

start();
