import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "../components/Search";
import UserMenuButton from "../components/UserMenuButton";
import UserMenuDropDown from "../components/UserMenuDropDown";
import Notification from "../components/Notification";
import Nav from "./Nav/Nav";
import MobileNav from "./MobileNav/MobileNav";
import MobileMenuButton from "../components/MobileMenuButton";

const Header = () => {
  return (
    <div class="bg-gray-100">
      <div class="mx-auto  px-2 sm:px-4 lg:divide-y lg:divide-gray-500 lg:px-8">
        <div class="relative flex h-14 justify-between">
          <div class="relative z-10 flex px-2 lg:px-0">
            <div class="flex flex-shrink-0 items-center">ASSEGAI</div>
          </div>
          <Search></Search>
          <div class="relative z-10 flex items-center lg:hidden">
            <MobileMenuButton></MobileMenuButton>
          </div>
          {/* <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            <Notification></Notification>
            <div class="relative ml-4 flex-shrink-0">
              <UserMenuButton></UserMenuButton>
              <UserMenuDropDown></UserMenuDropDown>
            </div>
          </div> */}
        </div>
        {/* <Nav></Nav> */}
      </div>

      {/* <MobileNav></MobileNav> */}
    </div>
  );
};

export default Header;
