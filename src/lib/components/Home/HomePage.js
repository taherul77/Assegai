import React from "react";
import Introduction from "./HomeComponent/Introduction";
import Blog from "./HomeComponent/Blog";
import Latest from "./HomeComponent/Latest";
import Category from "./HomeComponent/Category";
import SlideBar from "@/lib/modules/templates/Slider/Slider";
import Team from "./HomeComponent/Team";
import Stats from "./HomeComponent/Stats";

const HomePage = () => {
  return (
    <div className="pt-24">
      <SlideBar></SlideBar>
      {/* <Introduction></Introduction> */}
      
      <Latest></Latest>
      <Category></Category>
      <Blog></Blog>
      <Team></Team>
      <Stats></Stats>
    </div>
  );
};

export default HomePage;
