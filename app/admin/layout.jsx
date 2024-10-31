import { assets } from "@/Assets/assets";
import SideBar from "@/components/AdminComponents/SideBar";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 px-12 max-h-[67px] border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image
              className="rounded-full"
              src={assets.admin}
              width={40}
              alt=""
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
