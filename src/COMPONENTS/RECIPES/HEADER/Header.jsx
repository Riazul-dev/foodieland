import React from "react";
import TitleSection from "../../TitleSection";
import { FiPrinter, FiShare } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between items-center lg:mx-10 my-10">
      <div className="space-y-12">
        <TitleSection>Health Japanese Fried Rice</TitleSection>

        <div className="flex items-center gap-10">
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

          {/* border div */}
          <div className="w-px h-12 bg-black/10"></div>

          <div className="flex items-center justify-center gap-4">
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
          <div className="w-px h-12 bg-black/10"></div>

          <div className="flex items-center justify-center gap-4">
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
          <div className="w-px h-12 bg-black/10"></div>

          <div className="flex items-center justify-center gap-4">
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

      <div className="flex gap-8">
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
