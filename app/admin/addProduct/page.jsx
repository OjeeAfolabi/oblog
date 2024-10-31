'use client'
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [image, setImage] = useState(false);
  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl:16">
        <p className="text-lg">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4 cursor-pointer"
            src={!image ? assets.upload_icon : URL.createObjectURL(image)}
            width={90}
            height={70}
            alt=""
          />
        </label>
        <input
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          type="file"
          id="image"
          hidden
          required
        />
      </form>
    </>
  );
};

export default Page;
