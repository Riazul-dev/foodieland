import React from "react";
import Header from "../COMPONENTS/BLOG_POST/Header";
import Left_section from "../COMPONENTS/BLOG_POST/Left_section";
import Right_section from "../COMPONENTS/BLOG_POST/Right_section";
import Section_7 from "../COMPONENTS/HOME/SECTION_7/Section_7";
import CheckOutRecipes from "../COMPONENTS/CheckOutRecipes";
import { blogList } from "../DATA/BLOG/BlogList";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  const { image } = blogList[id];
  
  return (
    <div className="lg:px-0 lg:my-10">
      <Header blogList={blogList[id]} />
      <div className="px-4">
        <img
          className="rounded-[30px] my-10 mx-auto object-cover"
          src={image}
          alt="image"
        />
      </div>

      <main className="xl:grid grid-cols-4 place-items-start gap-12 pb-10 px-4">
        <Left_section />

        <Right_section />
      </main>
      <div className="px-3 md:px-10">
        <Section_7 />
      </div>

      <CheckOutRecipes title="Check out the delicious recipe" />
    </div>
  );
}

export default BlogPost;
