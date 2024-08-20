import React from "react";
import TitleSection from "../../TitleSection";
import Button from "../../BUTTON/Button";
import { FaInstagram } from "react-icons/fa";

const Section_5 = () => {
  return (
    <div className="bg-gradient-to-b from-[#fff] to-[#E7F9FD] flex flex-col justify-center gap-20 py-20">
      <div className="flex flex-col justify-center items-center gap-6 px-4 xl:w-[840px] mx-auto text-center">
        <TitleSection>Check out @foodieland on Instagram</TitleSection>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>

      {/* images */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <img className="w-[290px] h-[445px] border" src="./IMAGES/Post.png" alt="image" />
        <img className="w-[290px] h-[445px] border" src="./IMAGES/Post-1.png" alt="image" />
        <img className="w-[290px] h-[445px] border" src="./IMAGES/Post-2.png" alt="image" />
        <img className="w-[290px] h-[445px] border" src="./IMAGES/Post-3.png" alt="image" />
      </div>

      <div className="flex justify-center items-center">
        <Button>
          Visit Our Instagram
          <span>
            <FaInstagram className="w-[22px]" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Section_5;
