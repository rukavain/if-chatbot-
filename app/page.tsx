import React from "react";
import Content from "./components/Content";
import { defaultMetadata } from "./lib/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "if(chatbot)",
  ...defaultMetadata,
};

export default function Home() {
  return (
    <main>
      <Content />
    </main>
  );
}
