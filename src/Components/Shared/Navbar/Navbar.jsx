import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGoogle,
  FaPinterest,
  FaMailBulk,
  FaMobile,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a className="group hover:text-yellow-500 hover:underline">Home</a>
      </li>
      <li>
        <a className="group hover:text-yellow-500 hover:underline">About Us</a>
      </li>
      <li>
        <a className="group hover:text-yellow-500 hover:underline">Services</a>
      </li>
      <li>
        <a className="group hover:text-yellow-500 hover:underline">Pricing</a>
      </li>
      <li>
        <a className="group hover:text-yellow-500 hover:underline">Blog</a>
      </li>
      <li>
        <a className="group hover:text-yellow-500 hover:underline">Contact</a>
      </li>
    </>
  );
  return (
    <>
      {/* Contact part black*/}
      <div className="flex flex-col md:flex-row justify-between bg-black text-white py-5 md:items-center">
        <div className="flex gap-5 md:order-2 md:ml-auto">
          <FaTwitter />
          <FaLinkedin />
          <FaGoogle />
          <FaPinterest />
        </div>
        <div className="mt-4 md:mt-0 md:flex md:items-center md:ml-4">
          <p className="inline-flex items-center">
            <FaMailBulk className="mr-2" />
            info.pix@gmail.com
          </p>
          <h1 className="inline-flex items-center mt-2 md:mt-0 md:ml-4">
            <FaMobile className="mr-2" />
            (209) 555-0104
          </h1>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 cursor-pointer"
            >
              {navItems}
            </ul>
          </div>
          <a>
            <img
              className="w-3/4"
              src="https://i.ibb.co/q0MDRzp/Logo.png"
              alt="Company-logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 cursor-pointer">{navItems}</ul>
        </div>

        <div className="navbar-end">
          <a className="border cursor-pointer p-2 border-black inline-flex  items-center">
            Free Consultation <FaArrowRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
