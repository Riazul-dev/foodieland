import React from "react";
import TitleSection from "../../TitleSection";
import CardRecipes_2 from "../../CardRecipes_2";
import { DeliciousRecipes } from "../../../DATA/Recipes";

const Section_6 = () => {
  return (
    <div className="space-y-20 my-40 lg:mx-10">
      <div className="flex justify-between items-center">
        <TitleSection>
          <span>Try this delicious recipe</span>
          <span>to make your day</span>
        </TitleSection>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-10 py-6">
        {DeliciousRecipes.map((item) => {
          return <CardRecipes_2 key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Section_6;
