import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import categoryRoutes from "./routes/category.js";
import questionRoutes from "./routes/question.js";
import quizRoutes from "./routes/quiz.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  process.env.CORS_ORIGIN,
  "http://localhost:3000",
  "https://gdg-hackathon-frontend.vercel.app",
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (!process.env.MONGODB_URI) {
  console.error("Missing MONGODB_URI in environment. Create a .env file with MONGODB_URI and JWT_SECRET.");
  process.exit(1);
}

// Define routes before starting the server; we'll start listening after DB connects.

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

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

start();
