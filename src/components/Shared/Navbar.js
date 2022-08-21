import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Service</Link>
      </li>
      <li>
        <Link to="/reviewAdd">Dashboard</Link>
      </li>
      <li>
        <Link to="/contactUs">Contact</Link>
      </li>

      {user ? (
        <>
          {/* <li>
            <button className="">{user.displayName}</button>
          </li> */}
          <li>
            <button onClick={logout} className="">
              LogOut
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">LogIn</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar border-b-[1px] py-0 border-gray-400 px-8 md:px-20">
      <div className="navbar-start flex-1 ">
        <Link to="/">
          <h1 className=" text-xl font-semibold title-style w-60">
            Ed Tech Company
          </h1>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-medium gap-4">
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end flex lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-1"
          >
            {navMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
