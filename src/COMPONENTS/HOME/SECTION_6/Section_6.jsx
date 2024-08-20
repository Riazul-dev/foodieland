import React from "react";
import TitleSection from "../../TitleSection";
import CardRecipes_2 from "../../CardRecipes_2";
import { DeliciousRecipes } from "../../../DATA/Recipes";

const Section_6 = () => {
  return (
    <div className="space-y-20 my-40 px-10">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
        <TitleSection>
          <p className="flex flex-wrap">
            <span>Try this delicious recipe</span>
            <span>to make your day</span>
          </p>
        </TitleSection>
        <p className="text-base md:px-10 text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="flex flex-wrap gap-10 py-6">
        {DeliciousRecipes.map((item) => {
          return <CardRecipes_2 key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Section_6;
