import React from "react";
import TitleSection from "../../TitleSection";
import CardRecipes from "../../CardRecipes";
import { SimpleRecipes } from "../../../DATA/Recipes";

const SimpleTastyRecipes = () => {
  return (
    <div className="my-16 md:mx-10">
      <div className="flex flex-col justify-center items-center gap-6 px-2 md:px-4 my-12 text-center mx-auto">
        <TitleSection>Simple and tasty recipes</TitleSection>
        <p className="text-base max-w-2xl">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      {/* Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 py-6">
        {SimpleRecipes.map((item) => {
          return <CardRecipes key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default SimpleTastyRecipes;
