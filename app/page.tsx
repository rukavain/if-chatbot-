"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );

  useEffect(() => {
    const saved = localStorage.getItem("chatMessages");
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          { sender: "user", text: input },
          { sender: "bot", text: data.reply || "No reply" },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "user", text: input },
          { sender: "bot", text: "No reply" },
        ]);
        console.error("Backend error:", data);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
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
    <div className="p-6 overflow-hidden max-w-3xl m-0 max-lg:p-0.5 min-w-2xl max-lg:min-w-0 mx-auto flex flex-col justify-center h-svh">
      <div className="flex m-0 flex-col justify-between p-12 max-xl:p-4 rounded-lg h-full border border-gray-200">
        <div className="space-y-2 mb-4 max-h-96 overflow-y-auto rounded min-h-6/7">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 ">
              <div>
                <div className="block max-lg:hidden">
                  <Image
                    src="/icons/bot.png"
                    alt="Chatbot"
                    width={100}
                    height={100}
                  ></Image>
                </div>
                <div className="hidden max-lg:block">
                  <Image
                    src="/icons/bot.png"
                    alt="Chatbot"
                    width={50}
                    height={50}
                  ></Image>
                </div>
              </div>
              <h1 className="text-4xl max-lg:text-2xl font-bold text-center">
                Welcome to if(chatbot)!
              </h1>
              <h2 className="text-lg max-lg:text-sm text-gray-500">
                Type a message to start a conversation.
              </h2>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={msg.sender === "user" ? "text-right" : "text-left"}
                >
                  <p
                    className={`p-2 inline-block rounded text-sm ${
                      msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2 p-4 rounded-xl shadow-xl w-full justify-self-end">
          <input
            className="p-2 flex-1 rounded outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer"
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
