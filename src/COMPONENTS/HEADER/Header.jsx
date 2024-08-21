import React, { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import SocialMediaIcon from "./SocialMediaIcon";
import MobileMenu from "./MobileMenu";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between items-center h-[30px] px-2 lg:px-20 py-10 border-b-2 relative">
      <Logo />

      <Navbar />

      <span
        onClick={() => setToggleMenu(!toggleMenu)}
        className="lg:hidden border border-gray-300 p-px rounded hover:bg-gray-300 duration-300 shadow-md"
      >
        {!toggleMenu ? <TiThMenu size={24} /> : <IoClose size={28} />}
      </span>

      <MobileMenu toggleMenu={toggleMenu} />

      <SocialMediaIcon />
    </div>
  );
};

export default Header;
