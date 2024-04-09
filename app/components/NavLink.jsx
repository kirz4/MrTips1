import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#a6d232] sm:text-xl rounded md:p-0 hover:text-[#c8ff3d] font-bold"
    >
      {title}
    </Link>
  );
};

export default NavLink;