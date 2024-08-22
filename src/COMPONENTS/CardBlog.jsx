import React from "react";
import { Link } from "react-router-dom";

const CardBlog = (item) => {
  const { id, image, title, desc, ellipse } = item;
  const { ellipseImage, name, date } = ellipse;

  return (
    <div className="flex flex-col md:flex-row items-center md:gap-10 py-4 px-4 lg:px-0 xl:p-0 border-b md:border-none">
      <div className="">
        <Link to={`/blogPost/${id - 1}`}>
          <img
            className="rounded-[20px] w-[340px] md:w-[500px] lg:w-auto"
            src={image}
            alt="image"
          />
        </Link>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
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
