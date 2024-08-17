import React from "react";
import TitleSection from "../../TitleSection";
import CardRecipes from "../../CardRecipes";
import { SimpleRecipes } from "../../../DATA/Recipes";

const SimpleTastyRecipes = () => {
  return (
    <div className="my-16 lg:mx-10">
      <div className="flex flex-col justify-center items-center gap-6 px-4 my-12 xl:w-[706px] text-center mx-auto">
        <TitleSection>Simple and tasty recipes</TitleSection>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 py-6">
        {SimpleRecipes.map((item) => {
          return <CardRecipes key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default SimpleTastyRecipes;
