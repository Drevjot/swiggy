import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { GiHelp } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
export default function Header() {
    const [toggle,setToggle]= useState(false);
    const [loginMode,setLoginMode] = useState(true)
   const showsidemenu = (e) => {
    e.preventDefault();
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
        }} className='w-[500px] bg-white h-full p-5 absolute duration-[450ms]'  
        style={{
            right:toggle? '0%' : '-100%'
        }}>
            <p className='text-[1.5rem] text-slate-500 cursor-pointer' onClick={hidesidemenu}>&#10005;</p>
            <h2 className='text-2xl mt-[3.5rem] ml-4 font-bold'>{loginMode ? 'Login' : 'Sign Up'}</h2>
            <div className='ml-4'>
                <span className='text-sm'>or </span>
            <span className='text-sm text-[#fc8019] cursor-pointer' onClick={()=>setLoginMode(!loginMode)}>{loginMode ? 'create an account' : 'login to your account'}</span>
            <hr className='w-[40px] mt-4 mb-6 divide-black'/> 
            {loginMode ? (
                  <input type="number" className='p-5 border border-1 w-[80%]' placeholder='Phone Number' />
            ) : (
                <>
                <input type="number" className='p-5 border border-1 w-[80%]' placeholder='Phone Number' />
                <input type="text" className='p-5 border border-1 w-[80%]' placeholder='Name' />
                <input type="email" className='p-5 border border-1 w-[80%]' placeholder='Email' />
                </>
            )}
            <img src='./images/swiggymenu.avif' className='w-24 absolute top-[4rem] right-[8rem]'/>
            <div className='mt-5'>
                <button className='w-[80%] bg-[#fc8019] p-5 text-white font-bold'>{loginMode ? 'LOGIN' : 'CONTINUE'}</button>
                <p className='font-bold mt-2 text-[10px]'>
                    By clicking on Login, I accept the Terms & Conditions & Privacy Policy
                </p>
            </div>
            </div>
        </div>
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
                        return <a href={links.link} ><li key={index} onClick={links.name === 'Sign in' ? showsidemenu : ''} className='flex hover:text-[#fc8019] items-center gap-2  cursor-pointer'>
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
