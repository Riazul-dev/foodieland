import React from "react";
import TitleSection from "../../../COMPONENTS/TitleSection";
import Button from "../../BUTTON/Button";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div className="text-center space-y-6 max-w-xl">
        <TitleSection>Blog & Article</TitleSection>
        <p className="text-black/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col md:flex-row w-full md:w-[700px] gap-y-6 p-2.5 rounded-3xl overflow-hidden md:bg-white md:border"
      >
        <input
          className="w-full outline-none border md:border-none rounded-2xl md:rounded-none px-5 py-3 md:py-0"
          type="email"
          placeholder="Search article, news or recipe..."
        />
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default Header;
