import React from "react";

const CardRecipes_2 = (item) => {
  const { image, title, icons } = item;
  const { timer, titleOfTimer, forkKnife, titleOfForkKnife } = icons;
  return (
    <div className="w-[290px] h-[316px] mx-auto flex flex-col justify-between">
      <div className="w-[290px] h-[200px] rounded-[20px] overflow-hidden">
        <img className="object-cover h-full" src={image} alt="imag" />
      </div>

      <div className="px-2">
        <p className="text-2xl font-semibold">{title}</p>
      </div>

      <div className="flex items-center gap-6 px-2">
        <div className="flex items-center gap-2.5">
          <img src={timer} alt="icon" />
          <p>{titleOfTimer}</p>
        </div>
        <div className="flex items-center gap-2.5">
          <img src={forkKnife} alt="icon" />
          <p>{titleOfForkKnife}</p>
        </div>
      </div>
    </div>
  );
};

export default CardRecipes_2;
