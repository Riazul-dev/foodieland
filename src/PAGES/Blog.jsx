import React from "react";
import Header from "../COMPONENTS/BLOG/HEADER/Header";
import Section_1 from "../COMPONENTS/BLOG/SECTION_1/Section_1";
import Section_7 from "../COMPONENTS/HOME/SECTION_7/Section_7";
import Pagination from "../COMPONENTS/BLOG/Pagination";
import BlogPost from "./BlogPost";

function Blog() {
  return (
    <div className="my-20 lg:mx-20">

<BlogPost />


      {/* <Header />
      <Section_1 />
      <Pagination />
      <Section_7 /> */}
    </div>
  );
}

export default Blog;
