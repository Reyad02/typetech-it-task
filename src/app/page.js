"use client";
import Hero from "@/components/Hero/Hero";
import Miami_Accordion from "@/components/Miami_Accordion/Miami_Accordion";
import Broward_Accordion from "@/components/Broward_Accordion/Broward_Accordion";
import { useState } from "react";
import Monroe_Accordion from "@/components/Monroe_Accordion/Monroe_Accordion";

export default function Home() {
  const [activeState, setActiveState] = useState(1);

  return (
    <main className="bg-white">
      <Hero></Hero>
      <section className="max-w-7xl mx-auto py-20 flex flex-col gap-6">
        <Broward_Accordion
          activeState={activeState}
          onClick={() => setActiveState(1)}
          heading={"Broward County"}
        />
        <Miami_Accordion
          activeState={activeState}
          onClick={() => setActiveState(0)}
          heading={"Miami Dade County"}
        />
        <Monroe_Accordion
          activeState={activeState}
          onClick={() => setActiveState(2)}
          heading={"Monroe County"}
        />
      </section>
    </main>
  );
}
