import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Card = ({ image, title }) => {
  return (
    <div className="card bg-[#F3F3F34D] ">
      <figure className="px-10 pt-10 h-full ">
        <img 
          src={image}
          alt={title}
          className="rounded-xl h-full object-cover"
        />
      </figure>
      <div className="card-body flex-row items-center justify-between text-center">
        <h2 className="card-title">{title}</h2>
        <div className="btn bg-[#F3F3F3] hover:bg-[#FF5A3C] text-black hover:text-white  outline-none border-none"><MdArrowOutward className=" text-xl"/></div>
      </div>
    </div>
  );
};

export default Card;
