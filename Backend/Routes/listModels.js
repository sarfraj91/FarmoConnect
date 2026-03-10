const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/list-models", async (req, res) => {
  try {
    const response = await axios.get(
      "https://generativelanguage.googleapis.com/v1beta/models",
      {
        params: {
          key: process.env.GEMINI_API_KEY,
        },
      }
    );

    return res.json(response.data);

  } catch (err) {
    console.log(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to list models" });
  }
});

module.exports = router;
