import React from "react";

const Section_1 = () => {
  return (
    <div className="grid  lg:grid-cols-3 gap-10 mx-4 lg:mx-10">
      <div className="lg:col-span-2 w-full h-full xl:w-[840px] xl:h-[600px] grid place-items-center relative">
        <img className="object-cover rounded-[30px]" src="./IMAGES/recipes.png" alt="image" />
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-full -translate-y-1/2 xl:-translate-y-1/2"
          src="./IMAGES/play.png"
          alt="play"
        />
      </div>

      <div className="lg:col-span-1 bg-[#E7FAFE] rounded-[30px] p-8">
        <div className="flex flex-col justify-between">
          <h4 className="text-2xl font-semibold">Nutrition Information</h4>

          <div className="flex justify-between items-center border-b py-4">
            <span className="text-lg text-black/60 font-medium">Calories</span>
            <span className="text-lg text-black font-medium">219.9 kcal</span>
          </div>

          <div className="flex justify-between items-center border-b py-4">
            <span className="text-lg text-black/60 font-medium">Total Fat</span>
            <span className="text-lg text-black font-medium">10.7 g</span>
          </div>

          <div className="flex justify-between items-center border-b py-4">
            <span className="text-lg text-black/60 font-medium">Protein</span>
            <span className="text-lg text-black font-medium">7.9 g</span>
          </div>

          <div className="flex justify-between items-center border-b py-4">
            <span className="text-lg text-black/60 font-medium">
              Carbohydrate
            </span>
            <span className="text-lg text-black font-medium">22.3 g</span>
          </div>

          <div className="flex justify-between items-center border-b py-4">
            <span className="text-lg text-black/60 font-medium">
              Cholesterol
            </span>
            <span className="text-lg text-black font-medium">37.4 mg</span>
          </div>
        </div>

        <div>
          <p className="text-base text-black/60 text-center">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="lg:col-span-3 md:py-10">
        <p className="text-black/60 leading-7 text-justify md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Section_1;
