import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex gap-[60px]">
      <Link to="/">Home</Link>
      <Link to="recipes">Recipes</Link>
      <Link to="blog">Blog</Link>
      <Link to="contact">Contact</Link>
      <Link to="aboutUs">About us</Link>
    </nav>
  );
};

export default Navbar;
