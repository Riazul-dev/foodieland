import React from "react";
import TitleSection from "../../TitleSection";
import { FiPrinter, FiShare } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-y-10 lg:mx-14 my-10">
      <div className="space-y-12 text-center lg:text-start">
        <TitleSection>Health Japanese Fried Rice</TitleSection>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
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

          {/* border div */}
          <div className="w-12 h-px lg:w-px lg:h-12 bg-black/10"></div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <div className="rounded-full overflow-hidden">
              <img
                className="object-cover"
                src="../IMAGES/Timer.png"
                alt="image"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-bold">PREP TIME</p>
              <p className="text-sm font-medium">15 Minutes</p>
            </div>
          </div>

          {/* border div */}
          <div className="w-12 h-px lg:w-px lg:h-12 bg-black/10"></div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <div className="rounded-full overflow-hidden">
              <img
                className="object-cover"
                src="../IMAGES/Timer.png"
                alt="image"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-bold">COOK TIME</p>
              <p className="text-sm font-medium">15 Minutes</p>
            </div>
          </div>

          {/* border div */}
          <div className="w-12 h-px lg:w-px lg:h-12 bg-black/10"></div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <div className="rounded-full overflow-hidden">
              <img
                className="object-cover"
                src="../IMAGES/ForkKnife.png"
                alt="image"
              />
            </div>
            <div>
              <p className="text-sm">Chicken</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-col xl:flex-row justify-around w-full lg:w-auto lg:justify-normal gap-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-[#E7FAFE] rounded-full w-20 h-20 flex justify-center items-center">
            <FiPrinter size={24} />
          </div>
          <p>PRINT</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-[#E7FAFE] rounded-full w-20 h-20 flex justify-center items-center">
            <FiShare size={24} />
          </div>
          <p>SHARE</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
