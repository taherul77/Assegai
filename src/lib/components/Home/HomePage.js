import React from "react";
import Introduction from "./HomeComponent/Introduction";
import Blog from "./HomeComponent/Blog";
import Latest from "./HomeComponent/Latest";

const HomePage = () => {
  return (
    <div>
      <Introduction></Introduction>
      <Blog></Blog>
      <Latest></Latest>
    </div>
  );
};

export default HomePage;
