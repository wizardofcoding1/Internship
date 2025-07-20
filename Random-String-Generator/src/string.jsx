import React, { useCallback, useState, useEffect } from "react";
import randomStringGenerator from "./randomStringGenerator";



const RandomString = () => {
  const [length, setLength] = useState(8);
  const [randomString, setRandomString] = useState("");

  const generateString = useCallback(() => {
    return randomStringGenerator(length);
  }, [length]);

  useEffect(() => {
    setRandomString(generateString());
  }, [generateString]);

  const handleGenerates = () => {
    setRandomString(generateString());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
  <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6 space-y-6">
    <h2 className="text-2xl font-bold text-center text-indigo-600">🔤 Random String Generator</h2>

    <input
      type="number"
      value={length}
      min={1}
      max={100}
      placeholder="Enter length"
      onChange={(e) => setLength(Number(e.target.value))}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
    />

    <button
      onClick={handleGenerates}
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
    >
      Generate String
    </button>

    <p className="text-lg text-gray-800 text-center break-all">{randomString}</p>
  </div>
 </div>
  );
};

export default RandomString;