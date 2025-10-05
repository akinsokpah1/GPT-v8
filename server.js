import express from "express";
import fetch from "node-fetch";
const app = express();
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;
  // Example: forward to OpenAI
  const reply = `Echo: ${prompt}`;
  res.json({ reply });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
