import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

const OPENROUTER_API_KEY =
  "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";

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());

app.post("/api/ask-gpt", async (req, res) => {
  const { question } = req.body;
  console.log("📨 Incoming question:", question);

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`, // ✅ Make sure this is set correctly above
          "Content-Type": "application/json",
          "HTTP-Referer": "https://flowgenixai.com", // Optional, but helps with key attribution
          "X-Title": "FlowGenixAI Chatbot",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful AI assistant for the FlowGenixAI website. Answer questions about AI, automation, GPT, workflows, and AI consulting clearly and helpfully.",
            },
            {
              role: "user",
              content: question,
            },
          ],
        }),
      },
    );

    console.log("🔄 API status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ OpenRouter API error:", response.status, errorText);
      return res.status(500).json({ reply: `API Error (${response.status})` });
    }

    const data = await response.json();
    console.log("✅ Response from OpenRouter:", JSON.stringify(data, null, 2));

    const reply =
      data.choices?.[0]?.message?.content ||
      "⚠️ No meaningful reply generated.";
    console.log("💬 Final reply to frontend:", reply); // ← ADD THIS LINE

    res.json({ reply });
  } catch (error) {
    console.error("🔥 Server Error:", error.message || error);
    res.status(500).json({ reply: "Server error, please try again later." });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server listening on http://localhost:${port}`);
});
