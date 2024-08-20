import React from "react";
import CardBlog from "../CardBlog";
import { blogList } from "../../DATA/BLOG/BlogList";

const Main = () => {
  return (
    <div className="space-y-8">

        {blogList.map((item)=>{
            return <CardBlog key={item.id} {...item} />
        })}
    </div>
  );
};

export default Main;
