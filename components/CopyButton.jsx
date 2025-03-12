import { useState } from "react";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`px-4 py-2 rounded-r-lg ${copied ? "bg-green-500" : "bg-blue-500"} ml-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-80 transition-all`}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

export default CopyButton;
