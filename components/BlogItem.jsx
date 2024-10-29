"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ title, category, description, image, subcategory, id }) => {
  return (
    <div className=" w-[200px] md:w-[250px] lg:w-[250px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] mb-[1rem] rounded-2xl">
      <Link href={`/blogs/${id}`}>
      <Image
        className="inherit h-[200px] border border-black rounded-2xl"
        src={image}
        alt=""
      />
      </Link>
      <p className="bg-black text-white inline-block ml-5 mt-5 px-1 text-base">
        {category}
      </p>
      <div className="px-5">
        <h5 className="mb-1 text-lg font-medium tracking-tight text-gray-900 mt-2">
          {title}
        </h5>
        <h6 className="font-medium text-[15px] underline">{subcategory}</h6>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <div className="flex items-center gap-1">
          <p className="text-[10px] font-medium">Read More 
          </p>
          <Link href={`/blogs/${id}`}>
          <Image
            src={assets.rightarrow}
            alt="right-arrow"
            className="w-[15px] mt-[1px]"
          /></Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
