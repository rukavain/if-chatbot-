import React from "react";
import Content from "./components/Content";
import { defaultMetadata } from "./lib/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MabsrenCode",
  ...defaultMetadata,
};
export const page = () => {
  return (
    <main>
      <Content />
    </main>
  );
};
export default page;
