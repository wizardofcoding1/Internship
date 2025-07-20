// backend/index.js
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/translate", async (req, res) => {
  const { text, targetLang } = req.body;

  const options = {
    method: "POST",
    url: "https://google-translate113.p.rapidapi.com/api/v1/translator/json",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "44d7ee7d97msh62a296ae80ce4cdp1ac0a1jsna3284d7befc9",
      "X-RapidAPI-Host": "google-translate113.p.rapidapi.com"
    },
    data: {
      from: "en",
      to: targetLang,
      json: {
        text: text
      }
    }
  };

  try {
    const response = await axios.request(options);
    const translatedText = response.data.translated_text;
    res.json({ translatedText });
  } catch (error) {
    console.error("❌ API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Translation failed." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});