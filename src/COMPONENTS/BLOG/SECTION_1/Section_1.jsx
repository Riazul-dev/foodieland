import React from "react";
import Main from "../Main";
import Sidebar from "../../RECIPES/SECTION_2/Sidebar/";

const Section_1 = () => {
  return (
    <div className="xl:grid grid-cols-3 gap-10 py-12 lg:mx-10">
      <div className="col-span-2">
        <Main />
      </div>
      <div className="col-span-1 px-4 pt-8 xl:pt-0">
        <Sidebar title="Tasty Recipes" />
      </div>
    </div>
  );
};

export default Section_1;
