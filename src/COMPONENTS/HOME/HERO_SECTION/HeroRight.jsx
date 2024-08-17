import React from "react";

const HeroRight = () => {
  return (
    <div className="relative">
      <img
        className="h-full w-full object-cover"
        src="./IMAGES/chicken-wings-plate.png"
        alt="image"
      />
      <img
        className="absolute bottom-4 md:top-8 left-4 md:-left-8 w-20 md:w-28"
        src="./IMAGES/Badge.png"
        alt="image"
      />
    </div>
  );
};

export default HeroRight;
