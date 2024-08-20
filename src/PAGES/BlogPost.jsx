import React from "react";
import Header from "../COMPONENTS/BLOG_POST/Header";
import Left_section from "../COMPONENTS/BLOG_POST/Left_section";
import Right_section from "../COMPONENTS/BLOG_POST/Right_section";
import Section_7 from "../COMPONENTS/HOME/SECTION_7/Section_7";
import CheckOutRecipes from "../COMPONENTS/CheckOutRecipes";

function BlogPost() {
  return (
    <div>
      <Header />
      <img className="rounded-[30px]" src="./IMAGES/image29.png" alt="image" />

      <main className="grid grid-cols-4">
        <Left_section />

        <Right_section />
      </main>

      <Section_7 />

      <CheckOutRecipes title="Check out the delicious recipe" />
    </div>
  );
}

export default BlogPost;
