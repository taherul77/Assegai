import React from "react";
import Introduction from "./HomeComponent/Introduction";
import Blog from "./HomeComponent/Blog";
import Latest from "./HomeComponent/Latest";
import Category from "./HomeComponent/Category";

const HomePage = () => {
  return (
    <div>
      <Latest></Latest>
      <Category></Category>
      <Introduction></Introduction>
      <Blog></Blog>
    </div>
  );
};

export default HomePage;
