import React from "react";
import Header from "../COMPONENTS/RECIPES/HEADER/Header";
import Section_1 from "../COMPONENTS/RECIPES/SECTION_1/Section_1";
import Section_2 from "../COMPONENTS/RECIPES/SECTION_2/Section_2";
import Section_4 from "../COMPONENTS/RECIPES/SECTION_4/Section_4";
import Section_7 from "../COMPONENTS/HOME/SECTION_7/Section_7";

function Recipes() {
  return (
    <div>
      <Header />
      <Section_1 />
      <Section_2 />
      <div className="px-3 md:px-10">
        <Section_7 />
      </div>
      <Section_4 />
    </div>
  );
}

export default Recipes;
