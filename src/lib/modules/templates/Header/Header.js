"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Search from "../components/Search";
import UserMenuButton from "../components/UserMenuButton";
import UserMenuDropDown from "../components/UserMenuDropDown";
import Notification from "../components/Notification";
import Nav from "./Nav/Nav";
import MobileNav from "./MobileNav/MobileNav";
import MobileMenuButton from "../components/MobileMenuButton";
import "./style.css";
const Header = () => {
  return (
    <>
      <div className="navbar fixed z-10 bg-gray-100 w-full">
        <div className="mx-auto  px-2 sm:px-4 lg:divide-y lg:divide-gray-500 lg:px-8 ">
          <div className="relative flex h-14 justify-between">
            <div className="relative z-10 flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/"> ASSEGAI</Link>
              </div>
            </div>
            <Search></Search>
            <div className="relative z-10 flex items-center lg:hidden">
              <MobileMenuButton></MobileMenuButton>
            </div>
            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
              <Notification></Notification>
              <div className="relative ml-4 flex-shrink-0">
                <UserMenuButton></UserMenuButton>
              </div>
            </div>
          </div>
          <Nav></Nav>
        </div>
      </div>
    </>
  );
};

export default Header;
