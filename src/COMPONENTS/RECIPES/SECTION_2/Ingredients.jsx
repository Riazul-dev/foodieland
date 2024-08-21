import React from "react";
import CheckBoxFiled from "./CheckBoxFiled";

const Ingredients = () => {
  return (
    <div className="">
      <div className="pb-12">
        <h3 className="text-4xl font-semibold">Ingredients</h3>
      </div>

      <div>
        <div>
          <h4 className="text-2xl font-semibold pb-8">For main dish</h4>
          <CheckBoxFiled title="Lorem ipsum dolor sit amet" id={1} />
          <CheckBoxFiled title="Lorem ipsum dolor sit amet" id={2} />
          <CheckBoxFiled title="Lorem ipsum dolor sit amet" id={3} />
          <CheckBoxFiled title="Lorem ipsum dolor sit amet" id={4} />
          <CheckBoxFiled title="Lorem ipsum dolor sit amet" id={5} />
        </div>

        <div>
          <h4 className="text-2xl font-semibold pb-8">For the sauce</h4>
          <CheckBoxFiled title="Lorem ipsum dolor sit amet" id={6} />
          <CheckBoxFiled title="Lorem ipsum dolor sit amet" id={7} />
          <CheckBoxFiled title="Lorem ipsum dolor sit amet" id={8} />
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
