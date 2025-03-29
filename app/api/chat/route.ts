import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    const message = body.message;
    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { reply: "Please type a message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const openRouterRes = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo", // You can change to other supported models
          messages: [{ role: "user", content: message }],
        }),
      }
    );

    const data = await openRouterRes.json();
    console.log("OpenRouter response:", data);

    const reply = data?.choices?.[0]?.message?.content ?? "No reply";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenRouter error:", error);
    return NextResponse.json({ reply: "Error occurred" }, { status: 500 });
  }
}
