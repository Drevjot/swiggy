import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { GiHelp } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
export default function Header() {
    const [toggle,setToggle]= useState(false);
   const showsidemenu = () => {
    console.log('hi');
    setToggle(true);
   }
   const hidesidemenu=()=>{
    setToggle(false);
   }
   const links=[
    {
        icon :  <IoIosSearch />,
        name : "Search",
        link: 'http://google.com'
    
    },
    {
        icon :   <CiDiscount1  />,
        name : "Offers",
        super : "new",
        link: ''
    },
    {
        icon :  <GiHelp />,
        name : "Help",
        link: ''
    },
    {
        icon :  <IoPersonSharp />,
        name : "Sign in",
        link: ''
    },
    {
        icon : <FaCartShopping />,
        name : "Cart",
        link: ''
    }

    
   ]

  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500 ' onClick={hidesidemenu} style={{
        opacity : toggle ? 1: 0,
        visibility : toggle ?  "visible":"hidden",
        zIndex: 9999999999
    }}>

        <div onClick={(e)=>{
            e.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[450ms]'  
        style={{
            left:toggle? '0%' : '-100%'
        }}></div>
    </div>
<header className='p-[15px] shadow-xl sticky top-0 bg-white z-[99]'>
<div className='max-w-[1200px] mx-auto flex items-center'>
    <div className='w-[100px] '>
        <img src="images/logo.png" className='w-full' alt="" />
    </div>
     <div className=''>
     <span className='font-bold-[14px] border-b-[3px] border-[black]  '>Other</span>
     <RxCaretDown onClick={showsidemenu} fontSize={25} className='font-bold inline  text-[#fc8019] cursor-pointer' />
     </div>

 
        <nav className='flex list-none gap-5  ml-auto  font-[16px]-bold'>
            {
                links.map(
                    (links,index)=>{
                        return <a href={links.link}><li key={index} className='flex hover:text-[#fc8019] items-center gap-2  cursor-pointer'>
                            {links.icon}
                            {links.name}
                           <sup>{links.super}</sup> 
                        </li>
                        </a>
                    }
                )
            }
    
      </nav>
   

</div>
</header>
</>
  )
}
