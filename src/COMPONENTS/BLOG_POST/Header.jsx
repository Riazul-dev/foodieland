import React from "react";
import TitleSection from "../TitleSection";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 text-center">
      <TitleSection>Full Guide to Becoming a Professional Chef</TitleSection>

      {/* Ellipse section */}
      <div className="flex items-center">
        <div className="flex justify-center items-center">
          <img src="./IMAGES/Ellipse-2.png" alt="ellipse" />
          <p>John Smith</p>
        </div>
        {/* border div */}
        <div className="bg-black/10 w-px h-10 mx-6"></div>

        <div>
          <p>15 March 2022</p>
        </div>
      </div>

      <div>
        <p className="px-4 lg:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
      </div>
    </div>
  );
};

export default Header;
