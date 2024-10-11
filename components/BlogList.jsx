import { blog_data } from "@/Assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Health")}
          className={
            menu === "Health" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Health
        </button>
        <button
          onClick={() => setMenu("Tech")}
          className={
            menu === "Tech" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Tech
        </button>
        <button
          onClick={() => setMenu("Art and 3D")}
          className={
            menu === "Art and 3D"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Art & 3D
        </button>
        <button
          onClick={() => setMenu("Sport")}
          className={
            menu === "Sport" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Sports
        </button>
        <button
          onClick={() => setMenu("Travel and Culture")}
          className={
            menu === "Travel and Culture"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Travel and Culture
        </button>
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
