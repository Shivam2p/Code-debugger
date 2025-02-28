import React from "react";

const LanguageSelector = ({ language, setLanguage }) => {
  const languages = ["javascript", "python", "java", "c", "cpp"];

  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Select Language:</label>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 border rounded bg-gray-800 text-white"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
