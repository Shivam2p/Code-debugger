import React from "react";

const DebuggerButton = ({ handleRun }) => {
  return (
    <button
      onClick={handleRun}
      className="mt-4 px-4 py-2 font-bold  text-3xl rounded-2xl hover:bg-violet-900 w-64 bg-violet-500"
    >
      Run(Debug)
    </button>
  );
};

export default DebuggerButton;
