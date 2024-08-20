import React from "react";

const CardBlog = (item) => {
  const { image, title, desc, ellipse } = item;
  const { ellipseImage, name, date } = ellipse;
  return (
    <div className="flex items-center gap-10">
      <img className="rounded-[20px]" src={image} alt="image" />

      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold">{title}</h4>
          <p className="text-black/60 pr-10">{desc}</p>
        </div>

        {/* Ellipse section */}
        <div className="flex items-center">
          <div className="flex justify-center items-center">
            <img src={ellipseImage} alt="ellipse" />
            <p>{name}</p>
          </div>
          {/* border div */}
          <div className="bg-black/10 w-px h-10 mx-6"></div>

          <div>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
