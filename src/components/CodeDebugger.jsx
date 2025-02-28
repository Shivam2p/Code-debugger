import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import DebuggerButton from "./DebuggerButton";
import OutputConsole from "./OutputConsole";
import LanguageSelector from "./LanguageSelector";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const CodeDebugger = () => {
  const [code, setCode] = useState("console.log('Hello World');");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("javascript");

  const handleRun = async () => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Debug this ${language} code: ${code} give only code and Highlight the error part of the code by adding comments if the code is corrected then give code output.` }] }]
          }),
        }
      );
   const data = await response.json();
      // console.log(data)
      // Extract the code
      const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No output";
      setOutput(responseText);
    } catch (error) {
      setOutput("Error: Unable to process code");
    }
  };
  
  return (<div className="flex flex-col items-center p-4 bg-gray-900 min-h-screen text-white w-full sticky md:fixed">
   
    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-transparent 
        bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 
        drop-shadow-lg tracking-wide uppercase animate-pulse text-center">
      🚀 Code Debugger 🔥
    </h1>
  
   
    <div className="flex flex-col md:flex-row w-full h-full md:h-screen">
      
     
      <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
        <LanguageSelector language={language} setLanguage={setLanguage} />
        <div className="w-full max-h-[60vh] md:max-h-full overflow-auto">
          <CodeEditor code={code} setCode={setCode} language={language} />
        </div>
      </div>
  
      <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
        <DebuggerButton handleRun={handleRun} />
        <div className="w-full max-h-[60vh] md:max-h-full overflow-y-hidden">
          <OutputConsole output={output} />
        </div>
      </div>
      
    </div>
  </div>
  
  );
};

export default CodeDebugger;
