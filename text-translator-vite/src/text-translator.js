import axios from "axios";
import languages from "./language.json";

const HEADERS = {
  "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
  "x-rapidapi-host": "google-translate113.p.rapidapi.com",
  "Content-Type": "application/json"
};

const TextTranslate = async (inputText, selectValue) => {
  try {
    const options = {
      method: "POST",
      url: "https://google-translate113.p.rapidapi.com/api/v1/translator/json",
      headers: HEADERS,
      data: {
        from: "auto",
        to: `${selectValue}`,
        protected_paths: ["extra.last_comment.author"],
        common_protected_paths: ["image"],
        json: {
          text: `${inputText}`,
        },
      },
    };

    const response = await axios.request(options);
    console.log(response.data.trans?.text);

    return response.data.trans?.text || "Translation failed.";
  } catch (error) {
    console.error("Translation error:", error);
    return "Error during translation.";
  }
};

export default TextTranslate;

export const fetchLanguages = async () => {
  try {

    return languages; 
  } catch (error) {
    console.error("Error fetching static languages", error);
    return {};
  }
};
