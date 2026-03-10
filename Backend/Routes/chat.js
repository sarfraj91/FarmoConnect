const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.json({ reply: "Please enter a message." });
    }

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }]
          }
        ]
      },
      {
        params: {
          key: process.env.GEMINI_API_KEY,
        },
        headers: {
          "Content-Type": "application/json",
        }
      }
    );

    const botReply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I didn't understand that. Please try again.";

    return res.json({ reply: botReply });

  } catch (error) {
    console.log("Gemini ERROR:", error.response?.data || error.message);

    return res.json({
      reply: "⚠️ Gemini server error. Please try again later.",
    });
  }
});

module.exports = router;
