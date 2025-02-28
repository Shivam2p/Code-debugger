import React from "react";
import { motion } from "framer-motion";

const OutputConsole = ({ output }) => {
  return (
<motion.div
  className="mt-4 p-4 sm:p-6 w-full max-w-4xl bg-gradient-to-br from-purple-800 via-blue-900 to-black 
             backdrop-blur-lg border border-blue-600 shadow-2xl rounded-xl h-auto sm:h-[100%]"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-400 mb-3 font-mono flex items-center gap-2">
    ⚡ Output Console ⚡
  </h2>
  <pre
    className="whitespace-pre-wrap break-words text-white font-semibold font-mono text-base sm:text-lg 
               bg-black/50 p-3 sm:p-4 rounded-lg border border-gray-700 shadow-md overflow-y-scroll 
               max-h-64 sm:max-h-96"
    
  >
    {output || "🚀 No output yet..."}
  </pre>
</motion.div>

  
  );
};

export default OutputConsole;


