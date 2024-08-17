import React from "react";

const IconBox = ({img, text, backgroundColor}) => {
  return (
    <div className={` bg-${backgroundColor} rounded-full content-center inline-block`}>
      <div className="flex justify-center items-center gap-2.5 px-4 py-2">
        <img src={img} alt="ForkKnife" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default IconBox;
