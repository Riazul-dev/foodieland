import React from "react";
import Header from "../COMPONENTS/BLOG/HEADER/Header";
import Section_1 from "../COMPONENTS/BLOG/SECTION_1/Section_1";
import Section_7 from "../COMPONENTS/HOME/SECTION_7/Section_7";
import Pagination from "../COMPONENTS/BLOG/Pagination";

function Blog() {
  return (
    <div className="my-10 lg:mx-20">
      <Header />
      <Section_1 />
      <Pagination />

      <div className="px-3 ">
        <Section_7 />
      </div>
    </div>
  );
}

export default Blog;
