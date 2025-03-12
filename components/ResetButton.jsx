const ResetButton = ({ onReset }) => {
    return (
      <button
        onClick={onReset}
        className="mt-6 px-5 py-2 bg-red-500 text-white rounded-md w-full"
      >
        Reset All Fields
      </button>
    );
  };
  
  export default ResetButton;
  