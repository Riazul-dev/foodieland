import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcon from "../HEADER/SocialMediaIcon";


const Footer = () => {
  return (
    <div className="lg:mx-20 my-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between items-center">
        <div className="space-y-4 text-center px-2">
          <Link className="font-Lobster text-2xl">
            Foodieland<span className="text-[#f07338]">.</span>
          </Link>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
        </div>

        <nav className="flex flex-col md:flex-row flex-wrap gap-3 lg:gap-x-8 xl:gap-x-[60px]">
          <Link to="/">Home</Link>
          <Link to="recipes">Recipes</Link>
          <Link to="blog">Blog</Link>
          <Link to="contact">Contact</Link>
          <Link to="aboutUs">About us</Link>
        </nav>
      </div>

      {/* border div */}
      <div className="bg-black/10 h-px my-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="hidden lg:block"></div>

        <p className="text-center">
        &copy; {new Date().getFullYear()} ... Powered By Me..
        </p>

        <div className="grid place-items-center lg:place-items-end">
            <SocialMediaIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
