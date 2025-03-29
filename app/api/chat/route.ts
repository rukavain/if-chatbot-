import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    const data = await geminiRes.json();
    console.log("Gemini response:", data); // 🔍 Log the full response

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No reply";
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini error:", error);
    return NextResponse.json({ reply: "Error occurred" }, { status: 500 });
  }
}
