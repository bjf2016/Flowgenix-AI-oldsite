// src/pages/api/ask-gpt.ts
import type { APIRoute } from "astro";

export const prerender = false;

const allowedKeywords = [
  "ai",
  "automation",
  "workflow",
  "openai",
  "chatbot",
  "gpt",
  "agent",
  "prompt",
  "consulting",
  "strategy",
  "custom gpt",
  "ai services",
  "integration",
  "flowgenix",
];

const offTopicReply =
  "I specialize in AI consulting topics related to FlowGenixAI. Would you like help with something in that area?";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => ({}) as any);
  const rawInput =
    body && typeof body === "object" ? (body.message ?? body.question) : "";

  if (typeof rawInput !== "string" || !rawInput.trim()) {
    return new Response(JSON.stringify({ error: "No message provided" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const userMessage = rawInput.toLowerCase();

  const isRelevant = allowedKeywords.some((keyword) =>
    userMessage.includes(keyword),
  );

  if (!isRelevant) {
    return new Response(JSON.stringify({ reply: offTopicReply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://flowgenixai.com",
      "X-Title": "FlowGenix AI Chat Widget",
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        {
          role: "system",
          content:
            "You are FlowGenixAI’s intelligent assistant. Only answer questions related to AI integration, workflow automation, AI strategy, and FlowGenixAI’s services. If the user asks something outside of that scope, politely say: 'I specialize in AI consulting topics related to FlowGenixAI. Would you like help with something in that area?'",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("🚨 OpenRouter API Error:", res.status, errorText);

    return new Response(
      JSON.stringify({
        error: `OpenRouter Error (${res.status}): ${errorText}`,
      }),
      { status: 500 },
    );
  }

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content || "";

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
