import React from "react";
import ItemCategories from "./ItemCategories";
import TitleSection from "../../TitleSection";

const Categories = () => {
  return (
    <div className="px-4 py-10  lg:py-[120px] space-y-10 md:space-y-20 lg:px-10">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
        <TitleSection>Categories</TitleSection>
        <button className="text-base font-semibold px-3.5 py-2.5 bg-[#E7FAFE] rounded-2xl">
          View All Categories
        </button>
      </div>

      <ItemCategories />
    </div>
  );
};

export default Categories;
