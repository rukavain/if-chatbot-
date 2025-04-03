import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  description:
    `if(chatbot) is an AI-powered conversational assistant designed to feel like it runs purely on if-else statements, but under the hood, it leverages the advanced DeepSeek AI model for natural, intelligent interactions. Whether you're looking for insightful answers, task automation, coding assistance, or engaging discussions, if(chatbot) adapts seamlessly to your needs. Built for versatility, it excels in customer support, content creation, research, and more, all while maintaining a structured, rule-based feel that keeps users wondering. With its powerful natural language processing and deep learning capabilities, if(chatbot) delivers human-like responses while keeping the illusion of a simple, logic-driven chatbot intact.`,
  keywords:
    "AI Chatbot, if-else Chatbot, Rule-Based AI, Conditional Logic Bot, Smart Chatbot",
  robots: "index, follow, max-image-preview:large",
  authors: [
    {
      name: "John Ivan A. Magtoto",
      url: "https://if-chatbot.vercel.app/",
    },
  ],
  openGraph: {
    title: "if(chatbot) | The AI That Feels Like an If-Else Machine",
    siteName: "if(chatbot)",
    url: "https://if-chatbot.vercel.app/",
    type: "website",
    locale: "en-US",
    images: [
      {
        url: "https://if-chatbot.vercel.app/image.png",
        alt: "if(chatbot) - The AI That Feels Like an If-Else Machine",
      },
    ],
    description:
      "if(chatbot) is a deceptively smart AI that pretends to run on if-else statements while using advanced AI models like DeepSeek. It delivers dynamic conversations, automation, and coding support—disguised as a simple rule-based bot."
  },
  twitter: {
    title: "if(chatbot) | AI That Feels Rule-Based",
    card: "summary_large_image",
    site: "@ifchatbot",
    description:
      "A chatbot that *looks* like it's built with if-else logic, but secretly runs on advanced AI. Trick your friends, automate tasks, and chat like never before.",
    images: [
      {
        url: "https://ifchatbot.com/og-image.png",
        alt: "if(chatbot) - The AI That Feels Like an If-Else Machine",
      },
    ],
  },
  icons: {
    icon: "/favicon-ifchatbot.png",
    shortcut: "/favicon-ifchatbot.png",
    apple: "/favicon-ifchatbot.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-ifchatbot.png",
        media: "(prefers-color-scheme: no-preference)",
      },
      {
        rel: "icon",
        url: "/favicon-ifchatbot.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        url: "/favicon-ifchatbot.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};