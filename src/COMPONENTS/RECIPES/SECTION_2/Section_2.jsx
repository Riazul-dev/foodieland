import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Section_2 = () => {
  return (
    <div className="grid grid-cols-3 gap-10 pt-12 lg:mx-10">
      <div className="col-span-2">
        <Main />
      </div>

      <div className="col-span-1">
        <Sidebar title="Other Recipe" />
      </div>
    </div>
  );
};

export default Section_2;
