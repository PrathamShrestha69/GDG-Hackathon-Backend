// Vercel serverless function entry wrapping the Express app
import dotenv from "dotenv";
import mongoose from "mongoose";
import serverless from "serverless-http";
import app from "../src/app.js";

dotenv.config();

let isConnected = false;

async function ensureDb() {
  if (isConnected) return;
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI missing");
  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
  });
  isConnected = true;
}

export default async function handler(req, res) {
  try {
    await ensureDb();
    const wrapped = serverless(app);
    return wrapped(req, res);
  } catch (err) {
    console.error("Serverless handler error:", err);
    res.statusCode = 500;
    res.end(
      JSON.stringify({ success: false, message: err.message || "Server error" })
    );
  }
}
