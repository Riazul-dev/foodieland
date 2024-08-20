import React from "react";
import CardOtherRecipes from "../../CardOtherRecipes";
import { OtherRecipes } from "../../../DATA/Recipes";

const Sidebar = ({title}) => {
  return (
    <div>
      <h4 className="text-[32px] font-semibold pb-8">{title}</h4>

      <div className="space-y-6">
        {OtherRecipes.map((item) => {
          return <CardOtherRecipes key={item.id} {...item} />;
        })}
      </div>

      <div className="my-20">
        <img src="./IMAGES/Ads.png" alt="image" />
      </div>
    </div>
  );
};

export default Sidebar;
