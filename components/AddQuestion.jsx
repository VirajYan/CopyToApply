import { useState } from "react";

const AddQuestion = ({ onAdd }) => {
  const [newQuestion, setNewQuestion] = useState("");

  const handleAdd = () => {
    if (newQuestion.trim() === "") return; // Prevent empty questions
    onAdd(newQuestion); // Send to parent component
    setNewQuestion(""); // Clear input
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        placeholder="Enter new question"
        className="border p-2 flex-grow rounded-md"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add
      </button>
    </div>
  );
};

export default AddQuestion;
