"use client";
import Link from "next/link";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center space-y-2 ">
      {links.map((link, index) => (
        <li key={index} >
          <Link href={link.path} className="hover:bg-gradient-to-r hover:from-purple-600 hover:via-purple-500 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
