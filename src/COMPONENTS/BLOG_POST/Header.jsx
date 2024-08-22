import React from "react";
import TitleSection from "../TitleSection";

const Header = ({ blogList }) => {
  const { title, desc, ellipse } = blogList;
  const { ellipseImage, name, date } = ellipse;
  return (
    <div className="flex flex-col justify-center items-center gap-8 text-center">
      <TitleSection>{title}</TitleSection>

      {/* Ellipse section */}
      <div className="flex flex-col md:flex-row items-center space-y-2">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <img src={ellipseImage} alt="ellipse" />
          <p>{name}</p>
        </div>
        {/* border div */}
        <div className="hidden md:block bg-black/10 w-px h-10 mx-6"></div>

        <div>
          <p>{date}</p>
        </div>
      </div>

      <div>
        <p className="text-justify md:text-center px-4 lg:px-0">{desc}</p>
      </div>
    </div>
  );
};

export default Header;
