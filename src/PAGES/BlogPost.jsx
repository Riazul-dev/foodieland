import React from "react";
import Header from "../COMPONENTS/BLOG_POST/Header";
import Left_section from "../COMPONENTS/BLOG_POST/Left_section";
import Right_section from "../COMPONENTS/BLOG_POST/Right_section";
import Section_7 from "../COMPONENTS/HOME/SECTION_7/Section_7";
import CheckOutRecipes from "../COMPONENTS/CheckOutRecipes";

function BlogPost() {
  return (
    <div className="lg:px-0">
      <Header />
      <div className="flex justify-center items-center px-4">
        <img
          className="rounded-[30px] my-10"
          src="./IMAGES/image29.png"
          alt="image"
        />
      </div>

      <main className="grid xl:grid-cols-4 xl:place-items-start gap-12 pb-10 px-4">
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
