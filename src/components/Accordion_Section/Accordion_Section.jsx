"use client";
import React from "react";
import Broward_Accordion from "../Broward_Accordion/Broward_Accordion";
import Miami_Accordion from "../Miami_Accordion/Miami_Accordion";
import Monroe_Accordion from "../Monroe_Accordion/Monroe_Accordion";
import { useState } from "react";

const Accordion_Section = () => {
  const [activeState, setActiveState] = useState(1);
  return (
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
  );
};

export default Accordion_Section;
