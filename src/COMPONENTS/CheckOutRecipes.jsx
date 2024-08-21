import React from "react";
import { DeliciousRecipes } from "../DATA/Recipes";
import CardRecipes_2 from "../COMPONENTS/CardRecipes_2";

const CheckOutRecipes = ({title}) => {
  return (
    <>
      <div className="text-center">
        <h4 className="text-4xl font-semibold">
          {title}
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-y-20 py-20">
        {DeliciousRecipes.map((item) => {
          if (item.id <= 4) {
            return <CardRecipes_2 key={item.id} {...item} />;
          }
        })}
      </div>
    </>
  );
};

export default CheckOutRecipes;
