import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import MenuItem from "../../components/MenuItem";

const Nav = () => {
  return (
    <nav
      className="hidden lg:flex items-center lg:space-x-2 py-1"
      aria-label="Global"
    >
      <button className="hover:bg-black/20 transition-all rounded-full p-1 text-gray-500">
        <HiOutlineMenu size={28} />
        {/* ) : (
          <HiOutlineMenuAlt2 size={32} />
        )} */}
      </button>
      <MenuItem></MenuItem>
    </nav>
  );
};

export default Nav;
