import React, { act } from "react";
import Card from "../shared/Card";
import { FiArrowDownRight } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { LuArrowUpDown } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { cardsContents } from "@/Constant/CardInfo";

const Monroe_Accordion = ({ heading, activeState, onClick }) => {

  return (
    <div>
      <div className="collapse bg-white text-black">
        <input
          type="radio"
          name="my-accordion-1"
          onClick={onClick}
        />
        <div className="collapse-title text-2xl font-bold border-[#D6D6D6] border-b pb-5 pl-0 flex justify-between">
          {heading}
          {activeState == 2 ? (
            <div className="flex justify-center items-center gap-8">
              <IoSearch className=" text-xl"/>
              <LuArrowUpDown className=" text-xl"/>
              <FaArrowDownWideShort className=" text-xl"/>
              <div className="btn bg-[#F3F3F3] outline-none border-none">
                <MdArrowOutward className="text-black text-xl font-semibold" />
              </div>
            </div>
          ) : (
            <div className="btn bg-[#FF5A3C] outline-none border-none">
              <FiArrowDownRight className="text-white text-xl font-semibold " />
            </div>
          )}
        </div>
        <div className="collapse-content pt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {cardsContents.map((card, index) => (
              <Card key={index} image={card.image} title={card.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monroe_Accordion;
