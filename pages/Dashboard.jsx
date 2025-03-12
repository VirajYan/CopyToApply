import { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";

const Dashboard = () => {
  // Default questions
  const defaultQuestions = [
    "Full Name",
    "Email",
    "Phone Number",
    "LinkedIn Profile",
    "GitHub Profile",
    "Education",
    "Work Experience",
    "Skills",
  ];

  // Load saved answers from localStorage (if any)
  const [answers, setAnswers] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("jobAppData"));
    return savedData || defaultQuestions.map((q) => ({ question: q, answer: "" }));
  });

  const [newQuestion, setNewQuestion] = useState("");

  // Save to localStorage whenever answers change
  useEffect(() => {
    localStorage.setItem("jobAppData", JSON.stringify(answers));
  }, [answers]);

  // Handle answer updates
  const handleAnswerChange = (index, newAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].answer = newAnswer;
    setAnswers(updatedAnswers);
  };

  // Add a new question
  const handleAddQuestion = () => {
    if (newQuestion.trim() !== "") {
      setAnswers([...answers, { question: newQuestion, answer: "" }]);
      setNewQuestion("");
    }
  };

  // Remove a question
  const handleRemoveQuestion = (index) => {
    const updatedAnswers = answers.filter((_, i) => i !== index);
    setAnswers(updatedAnswers);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-xl bg-white/80 backdrop-blur-md dark:bg-gray-900">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white ml-30"> CopyToApply - Save time, apply faster.</h1>
      
      {/* Add New Question */}
      <div className="flex items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Enter new question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 shadow-sm dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={handleAddQuestion}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-80 transition-all"
        >
          Add
        </button>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {answers.map((item, index) => (
          <QuestionCard
            key={index}
            question={item.question}
            answer={item.answer}
            onAnswerChange={(newAnswer) => handleAnswerChange(index, newAnswer)}
            onRemove={() => handleRemoveQuestion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
