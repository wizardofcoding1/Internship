import React from "react";
import TextTranslate from "./text-translator.jsx";
import "./App.css"; 

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <TextTranslate />
    </div>
  );
};

export default App;