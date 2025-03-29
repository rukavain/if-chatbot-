// import { GoogleGenerativeAI } from "@google/generative-ai";

// export const runtime = "edge"; // optional: to run on the Edge Runtime

// export async function POST(req: Request) {
//   try {
//     const { text } = await req.json();

//     if (!text) {
//       return new Response(JSON.stringify({ error: "Message is required" }), {
//         status: 400,
//       });
//     }

//     const apiKey = process.env.GEMINI_API_KEY!;
//     const genAI = new GoogleGenerativeAI(apiKey);
//     const model = genAI.getGenerativeModel({
//       model: "models/gemini-2.0-flash",
//     });

//     const chat = model.startChat({
//       history: [],
//       generationConfig: {
//         temperature: 0.7,
//         maxOutputTokens: 2048,
//       },
//     });

//     const result = await chat.sendMessage(text);
//     const reply = result.response.text();

//     return new Response(JSON.stringify({ reply }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error: any) {
//     console.error("Gemini API error:", error.message);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Check for empty or whitespace-only message
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
