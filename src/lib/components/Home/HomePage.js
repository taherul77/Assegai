import React from "react";
import Introduction from "./HomeComponent/Introduction";
import Blog from "./HomeComponent/Blog";
import Latest from "./HomeComponent/Latest";
import Category from "./HomeComponent/Category";
import SlideBar from "@/lib/modules/templates/Slider/Slider";

const HomePage = () => {
  return (
    <div>
        <SlideBar></SlideBar>
      <Introduction></Introduction>
      <Blog></Blog>
      <Latest></Latest>
      <Category></Category>
    </div>
  );
};

export default HomePage;
