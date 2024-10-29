import { FaBlog } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <FaBlog className="text-white size-6"/>
        <p className='text-white text-sm'>
            All Rights Reserved. Copyright&copy; Oblog
        </p>
        <div className="flex gap-x-2">
        <FaFacebook className="text-[#4267b2] size-[1.1rem]"/>
        <FaXTwitter className="text-white "/>
        <FaGooglePlus className="text-[#db3236] size-[1.1rem]" />
        <RiInstagramFill className="bg-gradient-to-l from-[#f94081] via-[#f56096] to-[#ed8cab] size-[1.1rem] rounded"/>
        </div>
    </div>
  )
}

export default Footer