import React from "react";

const CardOtherRecipes = (item) => {
  const { image, title, madeBy } = item;
  return (
    <div className="flex items-center gap-6">
      <div className="w-[180px] h-[120px] rounded-[20px] overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="image" />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm font-medium text-black/60">{madeBy}</p>
      </div>
    </div>
  );
};

export default CardOtherRecipes;
