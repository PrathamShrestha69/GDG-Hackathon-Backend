import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "../src/routes/auth.js";
import categoryRoutes from "../src/routes/category.js";
import questionRoutes from "../src/routes/question.js";
import quizRoutes from "../src/routes/quiz.js";

dotenv.config();

const app = express();

// CORS configuration
const allowedOrigins = [
  "https://gdg-hackathon-frontend.vercel.app",
  "http://localhost:3000",
  "http://localhost:5173",
  process.env.CORS_ORIGIN,
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "GDG Backend API" });
});

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/quiz", quizRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || "Server error",
  });
});

// MongoDB connection cache for serverless
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  const connection = await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
  });

  cachedDb = connection;
  return connection;
}

// Vercel serverless handler
export default async function handler(req, res) {
  try {
    await connectToDatabase();
    
    // Handle the request with Express
    return new Promise((resolve, reject) => {
      app(req, res);
      res.on('finish', resolve);
      res.on('error', reject);
    });
  } catch (error) {
    console.error("Serverless function error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
