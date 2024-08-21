import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-4 pb-10">
      {/* <button className="w-16 h-16 flex justify-center items-center text-lg rounded-2xl">
        <GrFormPrevious />
      </button> */}
      <button className="w-16 h-16 flex justify-center items-center bg-black text-white text-lg rounded-2xl">
        1
      </button>
      <button className="w-16 h-16 flex justify-center items-center text-lg rounded-2xl border">
        2
      </button>
      <button className="hidden w-16 h-16 md:flex justify-center items-center text-lg rounded-2xl border">
        3
      </button>
      <button className="hidden w-16 h-16 md:flex justify-center items-center text-lg rounded-2xl border">
        4
      </button>
      <button className="w-16 h-16 flex justify-center items-center text-lg rounded-2xl border">
        ...
      </button>
      <button className="w-16 h-16 flex justify-center items-center text-lg rounded-2xl border">
        <GrFormNext />
      </button>
    </div>
  );
};

export default Pagination;
