"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import MenuOverlay from "../ui/MenuOverlay";
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 backdrop-blur-md rounded-lg py-1 shadow-lg ">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
      
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <TiThMenuOutline className="h-5 w-5 " />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2  rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <RiCloseCircleLine className="h-5 w-5  " />
            </button>
          )}
        </div>
       
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <Link
                  className="text-sm font-bold hover:bg-gradient-to-r hover:from-purple-600 hover:via-purple-500 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text"
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
         <div className="social-icon  gap-3 flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
          <Link href={'https://www.linkedin.com/in/akshay-p-b45a8b214/'}>
          <FaLinkedin/>
          </Link>
          <Link href={'https://github.com/AkShAy21211'}>
          <FaGithub/>
          </Link>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
