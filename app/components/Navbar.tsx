"use client";
import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 shadow-sm">
      <div className="flex self-center gap-2">
        <Image
          src="/icons/bot.png"
          alt="Chatbot"
          width={30}
          height={30}
        ></Image>
        <h1 className="text-2xl text-center font-bold">if(chatbot)</h1>
      </div>
      <h1 className="text-gray-300 font-bold text-xs">ivan.dev</h1>
    </nav>
  );
};

export default Navbar;
