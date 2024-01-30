import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import MenuItem from '../../components/MenuItem';

const Nav = () => {
    return (
        <nav class="hidden lg:flex items-center lg:space-x-8 lg:py-2" aria-label="Global">
          
        <button
          
          className="hover:bg-black/20 transition-all rounded-full p-2 text-gray-500"
        >
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