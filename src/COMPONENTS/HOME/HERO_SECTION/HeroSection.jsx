import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  return (
    <section className="bg-[#e7fafe] flex flex-col md:flex-row md:rounded-3xl overflow-hidden mx-4 lg:mx-10 my-10">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default HeroSection;
