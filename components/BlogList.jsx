import { blog_data } from "@/Assets/assets";
import React from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button className="bg-black text-white py-1 px-4 rounded-sm">
          All
        </button>
        <button>Health</button>
        <button>Tech</button>
        <button>Art & 3D</button>
        <button>Sports</button>
      </div>
      <div className="flex flex-wrap gap-x-3 justify-around px-4">
        {blog_data.map((item, index) => {
          return (
            <BlogItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              subcategory={item.subcategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
