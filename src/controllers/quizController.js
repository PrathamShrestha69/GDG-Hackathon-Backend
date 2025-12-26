import QuizResult from "../models/QuizResult.js";
import Question from "../models/Question.js";

export const submitQuiz = async (req, res) => {
  try {
    const { categoryId, answers } = req.body;
    const userId = req.userId;

    if (!categoryId || !answers || !Array.isArray(answers)) {
      return res.status(400).json({
        success: false,
        message: "Category ID and answers array are required",
      });
    }

    let score = 0;
    const gradedAnswers = [];

    for (const answer of answers) {
      const question = await Question.findById(answer.questionId);

      if (question) {
        const correctOption = question.options.find((opt) => opt.isCorrect);
        const isCorrect = correctOption.text === answer.selectedOption;

        if (isCorrect) score++;

        gradedAnswers.push({
          question: answer.questionId,
          selectedOption: answer.selectedOption,
          isCorrect,
        });
      }
    }

    const totalQuestions = answers.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    const quizResult = await QuizResult.create({
      user: userId,
      category: categoryId,
      answers: gradedAnswers,
      score,
      totalQuestions,
      percentage,
    });

    res.status(201).json({
      success: true,
      message: "Quiz submitted successfully",
      result: {
        score,
        totalQuestions,
        percentage: parseFloat(percentage),
        passed: percentage >= 70,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserStats = async (req, res) => {
  try {
    const userId = req.userId;

    const results = await QuizResult.find({ user: userId })
      .populate("category", "name icon")
      .sort({ completedAt: -1 });

    const totalQuizzes = results.length;
    const totalScore = results.reduce((sum, result) => sum + result.score, 0);
    const totalQuestions = results.reduce(
      (sum, result) => sum + result.totalQuestions,
      0
    );
    const averagePercentage =
      totalQuizzes > 0
        ? (
            results.reduce((sum, result) => sum + result.percentage, 0) /
            totalQuizzes
          ).toFixed(2)
        : 0;

    const categoryStats = {};
    results.forEach((result) => {
      const catName = result.category.name;
      if (!categoryStats[catName]) {
        categoryStats[catName] = {
          attempts: 0,
          bestScore: 0,
          averagePercentage: 0,
          totalPercentage: 0,
        };
      }
      categoryStats[catName].attempts++;
      categoryStats[catName].bestScore = Math.max(
        categoryStats[catName].bestScore,
        result.percentage
      );
      categoryStats[catName].totalPercentage += result.percentage;
    });

    Object.keys(categoryStats).forEach((cat) => {
      categoryStats[cat].averagePercentage = (
        categoryStats[cat].totalPercentage / categoryStats[cat].attempts
      ).toFixed(2);
      delete categoryStats[cat].totalPercentage;
    });

    res.status(200).json({
      success: true,
      stats: {
        totalQuizzes,
        totalScore,
        totalQuestions,
        averagePercentage: parseFloat(averagePercentage),
        categoryStats,
        recentResults: results.slice(0, 5),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
