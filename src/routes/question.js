import express from "express";
import {
  getQuestionsByCategory,
  createQuestion,
} from "../controllers/questionController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/category/:categoryId", getQuestionsByCategory);

export default router;
