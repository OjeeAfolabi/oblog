/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (params.id * 1 === blog_data[i].id) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex items-center justify-center gap-2">
              <Image src={assets.logo} width={40} alt="" />
              <h1 className="text-[1.5rem] font-semibold">Oblog</h1>
            </div>
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started{" "}
            <Image src={assets.rightarrow} className="w-[30px]" alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <p className="font-semibold mx-auto">{data.subcategory}</p>
          <Image
            className="mx-auto mt-6 border border-black rounded "
            src={data.author_img}
            width={60}
            height={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="mx-auto w-[20rem] border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 mb-2 text-[26px] font-semibold">Introduction:</h1>
        <p className="mb-4">{data.description}</p>
        <p className="font-semibold">Share this article</p>
        <div className="flex gap-2">
          <FaFacebook className="text-[#4267b2] size-[1.1rem]" />
          <FaXTwitter className="text-black " />
          <RiInstagramFill className="bg-gradient-to-l from-[#f94081] via-[#f56096] to-[#ed8cab] size-[1.1rem] rounded" />
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
