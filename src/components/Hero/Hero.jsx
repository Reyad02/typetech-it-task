import React from "react";
import { FaHome } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.postimg.cc/2j0n0XPg/Hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-4xl">
            <p className="flex justify-center items-center mb-1"><FaHome/>Real Estate Agency</p>
            <h1 className="mb-5 text-8xl font-bold">
              Miami Real Estate Specialists
            </h1>
            <p className="mb-5 text-base">
              your specialists in residential and commercial properties. From
              dream homes to prime business spaces, trust our unique expertise
              to guide you in Miami/South Florida's dynamic market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
