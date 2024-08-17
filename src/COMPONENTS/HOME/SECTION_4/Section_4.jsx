import React from "react";
import TitleSection from "../../TitleSection";
import Button from "../../BUTTON/Button";

const Section_4 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center lg:mx-10">
      <div className="space-y-[72px] md:w-[526px] px-4 lg:px-0">
        <div className="space-y-6">
          <TitleSection>
            <span>Everyone can be a</span>
            <span>chef in their own kitchen</span>
          </TitleSection>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <Button>Learn More</Button>
      </div>
      <div className="md:w-[710px]">
        <img className="object-cover" src="./IMAGES/image4.png" alt="image" />
      </div>
    </div>
  );
};

export default Section_4;
