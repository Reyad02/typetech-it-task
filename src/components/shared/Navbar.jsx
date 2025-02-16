"use client";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
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
        className={`navbar absolute top-0 left-0 right-0 z-10 bg-transparent max-w-7xl mx-auto `}
      >
        <div className="navbar-start w-full justify-between pr-4 flex-row-reverse ">
          <div className="flex items-center">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <RxHamburgerMenu className="text-2xl" />
              </div>
              <ul
                tabIndex={0}
                className="menu text-white menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLink}
              </ul>
            </div>
            <select
              className={`pl-2 pr-1 py-2 text-white rounded-md bg-transparent border border-[#FF5A3C] lg:hidden appearance-none text-xl font-normal hover:cursor-pointer `}
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
          <a className={`btn btn-ghost text-xl text-white`}>REYAD</a>
        </div>
        <div className="navbar-end hidden lg:flex lg:w-full">
          <ul className={`menu menu-horizontal px-1 text-white`}>{navLink}</ul>
          <select
            className={`pl-2 pr-0 py-3 text-white rounded-md bg-[#FF5A3C]   border-none outline-none text-sm font-normal hover:cursor-pointer `}
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
