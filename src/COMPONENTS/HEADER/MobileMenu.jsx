import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ toggleMenu }) => {
  return (
    <nav
      className={`flex flex-wrap justify-center items-center gap-2 md:gap-6 bg-gray-100 absolute top-full  w-full py-2 ${!toggleMenu ? "-left-full" : "left-0"
      } duration-500`}
    >
      <Link to="/">Home</Link>
      <div className="bg-white w-px h-6"></div>
      <Link to="recipes">Recipes</Link>
      <div className="bg-white w-px h-6"></div>
      <Link to="blog">Blog</Link>
      <div className="bg-white w-px h-6"></div>
      <Link to="contact">Contact</Link>
      <div className="bg-white w-px h-6"></div>
      <Link to="aboutUs">About us</Link>
    </nav>
  );
};

export default MobileMenu;
