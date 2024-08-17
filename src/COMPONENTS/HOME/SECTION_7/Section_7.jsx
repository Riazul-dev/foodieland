import React from "react";
import TitleSection from "../../TitleSection";
import Button from "../../BUTTON/Button";

const Section_7 = () => {
  return (
    <div className="lg:mx-10 bg-[#E7F9FD] rounded-[60px] overflow-hidden py-20 mb-28 relative">
      <div className="w-[620px] mx-auto  flex flex-col justify-between items-center gap-16">
        <div className="flex flex-col justify-center items-center gap-6">
          <TitleSection>Deliciousness to your inbox</TitleSection>
          <p className="text-base text-center">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <div className="flex w-[480px] p-2.5 rounded-3xl overflow-hidden bg-white">
          <input className="w-full outline-none border-none px-5" type="email" placeholder="Your email address..." />
          <Button>Subscribe</Button>
        </div>
      </div>

      <img className="absolute bottom-0 right-0" src="./IMAGES/Photo.png" alt="image" />
      <img className="absolute bottom-0 left-0" src="./IMAGES/salad.png" alt="image" />
    </div>
  );
};

export default Section_7;
