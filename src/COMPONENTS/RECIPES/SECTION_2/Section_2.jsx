import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Section_2 = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-10 pt-12 mx-4 lg:mx-10">
      <div className="lg:col-span-2">
        <Main />
      </div>

      <div className="lg:col-span-1">
        <Sidebar title="Other Recipe" />
      </div>
    </div>
  );
};

export default Section_2;
