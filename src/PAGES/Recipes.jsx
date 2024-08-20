import React from "react";
import Header from "../COMPONENTS/RECIPES/HEADER/Header";
import Section_1 from "../COMPONENTS/RECIPES/SECTION_1/Section_1";
import Section_2 from "../COMPONENTS/RECIPES/SECTION_2/Section_2";
import Section_3 from "../COMPONENTS/RECIPES/SECTION_3/Section_3";
import Section_4 from "../COMPONENTS/RECIPES/SECTION_4/Section_4";

function Recipes() {
  return (
    <div>
      <Header />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
    </div>
  );
}

export default Recipes;
