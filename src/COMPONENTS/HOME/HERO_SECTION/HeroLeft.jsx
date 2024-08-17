import React from "react";
import IconBox from "./IconBox";
import Button from "../../BUTTON/Button";
import { FaCirclePlay } from "react-icons/fa6";

const HeroLeft = () => {
  return (
    <div className="px-5 md:px-[50px] py-10 space-y-8">
      <div>
        <IconBox
          img={"./IMAGES/image14.png"}
          text={"Hot Recipes"}
          backgroundColor={"white"}
        />
      </div>
      <div className="space-y-7">
        <h1 className="text-[44px] md:text-[64px] font-semibold flex flex-col text-nowrap">
           <span>Spicy delicious</span> <span>chicken wings</span> 
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
          <IconBox
            img={"./IMAGES/Timer.png"}
            text={"30 Minutes"}
            backgroundColor={"black/5"}
          />
          <IconBox
            img={"./IMAGES/ForkKnife.png"}
            text={"Chicken"}
            backgroundColor={"black/5"}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-between lg:items-center pt-[76px]">
          <div className="flex items-center justify-center gap-4">
            <div className="rounded-full overflow-hidden">
              <img
                className="w-[50px] h-[50px] object-cover"
                src="../IMAGES/Ellipse-2.png"
                alt="image"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-bold">John Smith</p>
              <p className="text-sm font-medium">15 March 2022</p>
            </div>
          </div>
          <Button icon={<FaCirclePlay />}>View Recipes</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
