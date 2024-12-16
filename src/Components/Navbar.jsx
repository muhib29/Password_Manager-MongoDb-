import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800  text-white  ">
        <div className="mycontainer flex justify-between items-center px-4 h-14">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-green-500 "> &lt;</span>
        Pass
        <span className="text-green-500">OP/&gt;</span>
              </div>



      {/* <ul className="">
        <li className="flex gap-4">
          <a className="hover:font-bold" href="/">
            Home
          </a>
          <a className="hover:font-bold" href="/">
            About
          </a>
          <a className="hover:font-bold" href="/">
            Contact
          </a>
        </li>
      </ul> */}
      <button className="bg-green-700 text-white justify-between items-center flex font-bold rounded-full my-5 mx-2 ">
        <img className="invert w-10 p-1" src="icons/github.svg" alt="" />
        <a className="px-2 " href="https://github.com/login">GitHub</a>
      </button>
        </div>
    </nav>
  );
};

export default Navbar;
