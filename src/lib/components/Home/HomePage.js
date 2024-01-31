import React from "react";
import Introduction from "./HomeComponent/Introduction";
import Blog from "./HomeComponent/Blog";
import Latest from "./HomeComponent/Latest";

const HomePage = () => {
  return (
    <div>
      
      <Latest></Latest>
      <Introduction></Introduction>
      <Blog></Blog>
    </div>
  );
};

export default HomePage;
