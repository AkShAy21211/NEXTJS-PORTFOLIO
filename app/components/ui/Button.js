import React from "react";
import Link from "next/link";
const Button = ({ link, label }) => {
  return (
    <Link
      href={link}
      className="mt-4 px-4 py-3 text-sm text-nowrap md:text-lg border-2 border-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-200"
    >
      {label}
    </Link>
  );
};

export default Button;
