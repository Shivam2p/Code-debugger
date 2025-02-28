import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode, language }) => {
  return (
    <div className="w-full max-w-4xl border border-gray-700 rounded-md overflow-hidden">
      <Editor   height="500px"
        width="150%"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(newCode) => setCode(newCode)}/>
    </div>
  );
};

export default CodeEditor;
