import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Service</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
      <li>
        <Link to="/">About Us</Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-gray-300 px-20">
      <div class="navbar-start">
        <h1 className=" text-xl font-semibold title-style"> Ed Tech Company</h1>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0 font-medium gap-4">{navMenu}</ul>
      </div>
      <div class="navbar-end flex lg:hidden">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-1"
          >
            {navMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;