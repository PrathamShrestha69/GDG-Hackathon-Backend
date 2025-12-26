import express from "express";
import { submitQuiz, getUserStats } from "../controllers/quizController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/submit", protect, submitQuiz);
router.get("/stats", protect, getUserStats);

export default router;
