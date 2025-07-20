import { useState, useEffect } from "react";
import { Bubbles } from "lucide-react";
import  TextTranslate, {fetchLanguages } from "./text-translator";

const TextTranslateComponent = () => {
  const [text, setText] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    const loadLanguages = async () => {
      const response = await fetchLanguages();
      if (response) {
        setLanguages(response); 
      }
    };
    loadLanguages();
  }, []);

  const handleTranslate = async () => {
    if (!text.trim() || !targetLang) return;
    setLoading(true);
    const result = await TextTranslate(text, targetLang);
    setTranslatedText(result);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg  max-w-md max-h-md mx-auto shadow-lg space-y-4">
      <h2 className="text-black text-2xl text-center font-sans">Text Translator</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
      />

      <div className="flex flex-col space-y-4">
        <label htmlFor="language" className="text-2xl">Translate To:</label>
        <select
          name="language"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          className="max-w-full p-3 border-2 rounded-md text-md"
        >
          <option value="">Select a language</option>
          {Object.entries(languages).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleTranslate}
        disabled={loading}
        className={`flex items-center justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-md transition ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
        }`}
      >
        {loading ? (
          <>
            <Bubbles className="animate-spin inline-block mr-2" />
          </>
        ) : (
          "Translate"
        )}
      </button>

      <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-800">
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TextTranslateComponent;