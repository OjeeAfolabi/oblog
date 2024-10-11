"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogItem = ({ title, category, description, image, subcategory }) => {
  return (
    <div className=" w-[200px] md:w-[280px] lg:w-[280px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] mb-[1rem] rounded-2xl">
      <Image
        className="inherit h-[200px] border border-black rounded-2xl"
        src={image}
        alt=""
      />
      <p className="bg-black text-white inline-block ml-5 mt-5 px-1 text-base">
        {category}
      </p>
      <div className="px-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <h6 className="font-medium text-[15px] underline">{subcategory}</h6>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <div className="flex items-center gap-1 font-semibold mb-2">
          Read More{" "}
          <Image className="w-[20px] mt-1" src={assets.rightarrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
