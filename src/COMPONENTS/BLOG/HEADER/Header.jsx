import React from "react";
import TitleSection from "../../../COMPONENTS/TitleSection";
import Button from "../../BUTTON/Button";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div className="text-center space-y-6">
        <TitleSection>Blog & Article</TitleSection>
        <p className="text-black/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-[700px] p-2.5 rounded-3xl overflow-hidden bg-white border"
      >
        <input
          className="w-full outline-none border-none px-5"
          type="email"
          placeholder="Search article, news or recipe..."
        />
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default Header;
