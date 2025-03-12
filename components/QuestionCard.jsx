import { useState } from "react";
import CopyButton from "./CopyButton";

const QuestionCard = ({ question, answer, onAnswerChange, onRemove }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex items-center space-x-2">
      <div className="w-full">
        <p className="font-semibold mb-1">{question}</p>
        <div className="flex">
          <input
            type="text"
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 shadow-sm dark:bg-gray-800 dark:text-white"
            placeholder="Enter your answer here..."
          />
          <CopyButton text={answer} />
          <button
          onClick={onRemove}
          className="bg-blue-500 text-white px-3 py-2 ml-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-80 transition-all"
        >
          ❌
        </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
