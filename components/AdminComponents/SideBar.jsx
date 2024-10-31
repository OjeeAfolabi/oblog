import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { assets } from "@/Assets/assets";


const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
              <Image src={assets.logo} width={40} alt="" />
            </div>
        </div>
  )
}

export default SideBar