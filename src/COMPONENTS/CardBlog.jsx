import React from "react";

const CardBlog = (item) => {
  const { image, title, desc, ellipse } = item;
  const { ellipseImage, name, date } = ellipse;
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-10 px-4 py-8 border-b md:border-none">
      <img className="rounded-[20px] w-full md:w-auto" src={image} alt="image" />

      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold">{title}</h4>
          <p className="text-black/60 pr-10">{desc}</p>
        </div>

        {/* Ellipse section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-x-10">
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-y-2 gap-x-4">
            <img src={ellipseImage} alt="ellipse" />
            <p>{name}</p>
          </div>
          {/* border div */}
          <div className="hidden md:block bg-black/10 w-px h-8"></div>

          <div>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
