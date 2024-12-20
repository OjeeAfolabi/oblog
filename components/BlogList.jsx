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
          onClick={() => setMenu("Arts and 3D")}
          className={
            menu === "Arts and 3D"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Arts & 3D
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
          onClick={() => setMenu("Travel And Adventure")}
          className={
            menu === "Travel And Adventure"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Travel And Adventure
        </button>
      </div>
      <div className="flex flex-wrap px-2 gap-x-5 justify-center">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item.id}
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
