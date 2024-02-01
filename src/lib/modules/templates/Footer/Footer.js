import React from "react";
import LogoAndDic from "./FooterComponents/LogoAndDic";
import FooterMenu from "./FooterComponents/FooterMenu";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-black text-white">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <LogoAndDic />
        <FooterMenu />
      </div>
      <div className="py-6 text-sm text-center ">
        © Copyright ASSEGAI. 2024 Designed and Developed by SK TAHERUL ISLAM TAZ.
      </div>
    </footer>
  );
};

export default Footer;
