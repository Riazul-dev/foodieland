import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaIcon = () => {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link to="https://www.facebook.com/" target="_blank">
        <FaFacebookF className="w-2.5" />
      </Link>
      <Link to="https://x.com/" target="_blank">
        <FaTwitter className="w-[22px]" />
      </Link>
      <Link to="https://www.instagram.com/" target="_blank">
        <FaInstagram className="w-[22px]" />
      </Link>
    </div>
  );
};

export default SocialMediaIcon;
