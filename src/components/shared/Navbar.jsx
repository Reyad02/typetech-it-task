"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [background, setBackground] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setTextColor("text-black");
        setBackground("backdrop-blur-sm");
      } else {
        setBackground("bg-transparent backdrop-blur-none");
        setTextColor("text-white font-normal");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Properties</a>
      </li>
      <li>
        <a>Neighborhood</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="">
      <div
        className={`navbar fixed top-0 left-0 right-0 z-10 ${background} max-w-7xl mx-auto `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-white menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className={`btn btn-ghost text-xl ${textColor}`}>REYAD</a>
        </div>
        <div className="navbar-end">
          <ul className={`menu menu-horizontal px-1 ${textColor}`}>
            {navLink}
          </ul>
          <select
            className={`pl-2 pr-0 py-3 text-white rounded-md bg-[#FF5A3C] ${textColor}  border-none outline-none text-sm font-normal hover:cursor-pointer `}
          >
            <option value={"ES"} className="bg-[#F3F3F3] text-black">
              ES
            </option>
            <option value={"BD"} className="bg-[#F3F3F3] text-black">
              BD
            </option>
            <option value={"IND"} className="bg-[#F3F3F3] text-black">
              IND
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
