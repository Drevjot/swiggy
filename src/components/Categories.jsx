import React, { useEffect, useState } from 'react';
import { FaArrowRight , FaArrowLeft } from "react-icons/fa";


export default function Categories() {
    const [Categories , setcategory]=useState([]);
    const fetchcategory =async() => {
const response = await fetch("http://localhost:6000/categories");
const data = await response.json();
setcategory(data);
    }
    useEffect(
        ()=>{
            fetchcategory();
        },[]
    )
    return(
    
        <div className='max-w-[1200px] mx-auto  items-center'>
            <div className='flex items-center justify-between'>    
        <div className='text-[25px] font-bold'>  What's on your mind? </div>
        <div className='flex'> 
            <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>
            <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
    </div>
    </div>
    </div>
  
  )
}
