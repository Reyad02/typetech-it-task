import React from "react";

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
      <div className="navbar b fixed top-0 left-0 right-0 z-10 max-w-7xl mx-auto bg-transparent">
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
          <a className="btn btn-ghost text-xl text-white">daisyUI</a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 text-white">{navLink}</ul>
          <a className="btn bg-[#FF5A3C] text-white outline-none border-none">
            <select className="bg-transparent border-none outline-none">
              <option selected className="bg-[#FF5A3C]">
                ES
              </option>
              <option className="bg-[#FF5A3C]">BD</option>
              <option className="bg-[#FF5A3C]">IND</option>
            </select>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
