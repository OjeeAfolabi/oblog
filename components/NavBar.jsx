'use client'
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={40}
          alt=""
          className="w-[30px] md:w-[50px] lg:w-[60px]"
        />
        <button className="flex items-center rounded shadow-[-7px_7px_0px_#000000] gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black">
          Get started{" "}
          <Image
            src={assets.rightarrow}
            alt="right-arrow"
            className="w-[30px]"
          />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="font-medium text-3xl sm:text-5xl">OBLOG</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          See Latest Blogs . . . 
        </p>
        <form
          className="flex border rounded border-solid border-black justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 shadow-[-7px_7px_0px_#000000] "
          action=""
        >
          <input
            className="pl-4 outline-none"
            type="email"
            placeholder="enter your email"
          />
          <button
            type="submit"
            className="flex gap-2 items-center border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe <CiMail size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
