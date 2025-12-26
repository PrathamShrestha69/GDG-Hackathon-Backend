import express from "express";
import {
  getAllCategories,
  createCategory,
  getCategoryById,
} from "../controllers/categoryController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

export default router;
