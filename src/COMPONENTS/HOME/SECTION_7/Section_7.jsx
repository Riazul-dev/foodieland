import React from "react";
import TitleSection from "../../TitleSection";
import Button from "../../BUTTON/Button";

const Section_7 = () => {
  return (
    <div className="lg:mx-10 bg-[#E7F9FD] rounded-3xl md:rounded-[60px] overflow-hidden py-20 mb-28 relative">
      <div className="md:w-[620px] pb-40 mx-auto  flex flex-col items-center gap-16">
        <div className="flex flex-col justify-center items-center gap-y-6 text-center">
          <TitleSection>Deliciousness to your inbox</TitleSection>
          <p className="text-base text-center px-3 md:px-0">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-8 w-full md:w-[480px] p-2.5 md:rounded-3xl overflow-hidden md:bg-white">
          <input className="w-full outline-none border-none py-4 rounded-2xl px-5" type="email" placeholder="Your email address..." />
          <Button>Subscribe</Button>
        </div>
      </div>

      <img className="absolute bottom-0 right-0" src="../IMAGES/Photo.png" alt="image" />
      <img className="absolute bottom-0 left-0 hidden md:block" src="../IMAGES/salad.png" alt="image" />
    </div>
  );
};

export default Section_7;
