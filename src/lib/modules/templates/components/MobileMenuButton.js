"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import Link from "next/link";

const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false); // Close the menu when the pathname changes
  }, [pathname]); // Listen for changes in pathname

  return (
    <div>
      <button
        type="button"
        onClick={toggleMenu}
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open menu</span>
        {/* <!-- Icon when menu is closed. Menu open: "hidden", Menu closed: "block" --> */}
        <svg
          className={isOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          className={isOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        
          <div className="absolute top-24 bg-white lg:hidden z-[99999] duration-500 w-full">
            <div className="flex flex-col p-4 border-t">
              <li className="flex">
                <Link href={`/solutions`}>solutions</Link>
              </li>
              <li className="flex mt-4">
                <Link href={`/expertise`}>expertise</Link>
              </li>
            </div>
          </div>
        
      )}
    </div>
  );
};

export default MobileMenuButton;
