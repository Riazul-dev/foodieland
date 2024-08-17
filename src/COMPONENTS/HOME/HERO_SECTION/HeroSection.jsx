import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  return (
    <section className="bg-[#e7fafe] flex flex-col md:flex-row rounded-3xl overflow-hidden lg:mx-10 my-10">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default HeroSection;
