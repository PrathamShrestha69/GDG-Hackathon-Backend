import Question from "../models/Question.js";

export const getQuestionsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const questions = await Question.find({ category: categoryId })
      .select("-options.isCorrect")
      .limit(10);

    if (!questions.length) {
      return res.status(404).json({
        success: false,
        message: "No questions found for this category",
      });
    }

    res.status(200).json({
      success: true,
      count: questions.length,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createQuestion = async (req, res) => {
  try {
    const { category, question, options, difficulty } = req.body;

    if (!category || !question || !options || options.length !== 4) {
      return res.status(400).json({
        success: false,
        message: "Category, question, and 4 options are required",
      });
    }

    const correctAnswers = options.filter((opt) => opt.isCorrect);
    if (correctAnswers.length !== 1) {
      return res.status(400).json({
        success: false,
        message: "Exactly one option must be marked as correct",
      });
    }

    const newQuestion = await Question.create({
      category,
      question,
      options,
      difficulty,
    });

    res.status(201).json({
      success: true,
      message: "Question created successfully",
      question: newQuestion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
