import React from "react";

const CardRecipes = (item) => {
  const { image, title, icons } = item;
  const { timer, titleOfTimer, forkKnife, titleOfForkKnife } = icons;
  return (
    <>
      {!title ? (
        <div className="w-[400px] h-[434px]">
          <img className="object-cover" src={image} alt="image" />
        </div>
      ) : (
        <div className="bg-gradient-to-b from-[#fff] to-[#E7F9FD] rounded-[30px] p-4">
          <div className="flex flex-col gap-6">
            <div className="">
              <img className="rounded-[20px]" src={image} alt="image" />
            </div>
            <div>
              <p className="text-2xl font-semibold w-[368px]">{title}</p>
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
