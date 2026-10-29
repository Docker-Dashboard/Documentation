import React from "react";
import Image from "next/image";
import { getDictionary } from "./dictionaries";
import Navigation from "@/components/navigation";

export default async function Home() {
  const dict = await getDictionary();
  return (
    <div>
      <p>test</p>
    </div>
  );
}
