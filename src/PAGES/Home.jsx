import React from "react";
import HeroSection from "../COMPONENTS/HOME/HERO_SECTION/HeroSection";
import Categories from "../COMPONENTS/HOME/CATEGORIES_SECTION/Categories";
import SimpleTastyRecipes from "../COMPONENTS/HOME/SIMPLE_AND_TASTY_RECIPES_SECTION/SimpleTastyRecipes";
import Section_4 from "../COMPONENTS/HOME/SECTION_4/Section_4";
import Section_5 from "../COMPONENTS/HOME/SECTION_5/Section_5";
import Section_6 from "../COMPONENTS/HOME/SECTION_6/Section_6";
import Section_7 from "../COMPONENTS/HOME/SECTION_7/Section_7";

function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <SimpleTastyRecipes />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <div className="px-3 md:px-10">
        <Section_7 />
      </div>
    </div>
  );
}

export default Home;
