import React from "react";

const CardRecipes_2 = (item) => {
  const { image, title, icons } = item;
  const { timer, titleOfTimer, forkKnife, titleOfForkKnife } = icons;
  return (
    <div className="w-[290px] h-[316px] flex flex-col justify-center xl:justify-between items-center gap-y-4">
      <div className="w-[290px] h-[200px]">
        <img
          className="object-cover rounded-[20px] mx-auto"
          src={image}
          alt="imag"
        />
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
