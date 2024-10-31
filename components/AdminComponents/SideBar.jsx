import Image from "next/image";
import { IoAddCircleOutline } from "react-icons/io5";
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdOutlineContactMail } from "react-icons/md";
import React from "react";
import { assets } from "@/Assets/assets";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3  border border-b-1 border-black w-[300px]">
        <Image src={assets.logo} width={40} alt="" />
      </div>
      <div className="sm-w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[20%] sm:w-[80%] absolute right-0">
          <Link
            href={"/admin/addProduct"}
            className="flex items-center  border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px] "
          >
            <IoAddCircleOutline className="size-5" /> <p>Add Blogs</p>
          </Link>
          <Link
            href={"/admin/blogList"}
            className="flex items-center mt-4  border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px] "
          >
            <PiNotePencilDuotone className="size-5" /> <p>Blog lists</p>
          </Link>
          <Link
            href={"/admin/subscriptions"}
            className="flex items-center mt-4 border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px] "
          >
            <MdOutlineContactMail className="size-5" /> <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
