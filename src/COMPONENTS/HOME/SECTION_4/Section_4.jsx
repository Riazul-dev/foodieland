import React from "react";
import TitleSection from "../../TitleSection";
import Button from "../../BUTTON/Button";

const Section_4 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-y-10 lg:px-10">
      <div className="space-y-10 md:space-y-[72px] px-10 lg:px-0">
        <div className="space-y-6">
          <TitleSection>
            <p className="flex flex-col">
              <span>Everyone can be a </span>
              <span>chef in their own kitchen</span>
            </p>
          </TitleSection>
          <p className="lg:max-w-lg">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <Button>Learn More</Button>
      </div>
      <div className="mx-4">
        <img src="./IMAGES/image4.png" alt="image" />
      </div>
    </div>
  );
};

export default Section_4;
