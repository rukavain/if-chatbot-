"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    setLoading(true);
    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        setMessages([
          ...messages,
          { sender: "user", text: input },
          { sender: "bot", text: data.reply },
        ]);
      } else {
        setMessages([
          ...messages,
          { sender: "user", text: input },
          { sender: "bot", text: "No reply" },
        ]);
        console.error("Backend error:", data);
      }
    } catch (error) {
      setMessages([
        ...messages,
        { sender: "user", text: input },
        { sender: "bot", text: "Error occurred" },
      ]);
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="p-6 min-w-2xl max-w-2xl  mx-auto flex flex-col justify-evenly h-screen">
      <div className="flex flex-col bg-white p-12 border-2 border-gray-400 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">if(chatbot)</h1>
        <div className="space-y-2 mb-4 max-h-96 overflow-y-auto p-2 rounded">
          {messages.length === 0 ? (
            <h1 className="text-center text-gray-500">Start chatting :DDD</h1>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.sender === "user" ? "text-right" : "text-left"}
              >
                <p
                  className={`p-2 inline-block rounded ${
                    msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))
          )}
        </div>
        <div className="flex gap-2">
          <input
            className="border p-2 flex-1 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
