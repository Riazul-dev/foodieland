import React from "react";

const CardRecipes = (item) => {
  const { image, title, icons } = item;
  const { timer, titleOfTimer, forkKnife, titleOfForkKnife } = icons;
  return (
    <>
      {!title ? (
        <div className="w-[400px] h-[434px]">
          <img className="object-cover" src={image} alt="imag" />
        </div>
      ) : (
        <div className="bg-gradient-to-b from-[#fff] to-[#E7F9FD] w-[400px] h-[434px] rounded-[30px]">
          <div className="w-[368px] h-[400px] mx-auto flex flex-col justify-between">
            <div className="w-[368px] h-[250px] rounded-[20px] overflow-hidden">
              <img className="object-cover" src={image} alt="imag" />
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
        </div>
      )}
    </>
  );
};

export default CardRecipes;
