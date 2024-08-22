import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Right_section = () => {
  return (
    <div className="flex lg:flex-col justify-center items-center gap-8 pt-10">
      <p className="text-nowrap">SHARE THIS ON:</p>

      {/* Social media icons */}
      <div className="flex xl:flex-col gap-10">
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
    </div>
  );
};

export default Right_section;
