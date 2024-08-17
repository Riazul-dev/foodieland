import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import SocialMediaIcon from "./SocialMediaIcon";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[30px] px-20 py-10 border-b-2">
      <Logo />

      <Navbar />

      <SocialMediaIcon />
    </div>
  );
};

export default Header;
