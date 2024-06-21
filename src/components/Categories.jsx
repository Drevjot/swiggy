import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Categories()
 {
    const [slide,setslide]=useState(0);
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await fetch("./data/category.json");
        const data = await response.json();
        setCategories(data);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const nextslide() => {
        setslide(slide + 3);

    }
    const prevslide() => {
        setslide(slide-3);
    }

    return (
        <div className='max-w-[1200px] mx-auto items-center'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2  onClick={prevslide}'>
                        <FaArrowLeft />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2  onClick={nextslide}'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className=' flex border border-red-600  overflow-hidden'>
                {
                    categories.map(

                        (cat,index)=>{
                            return(
                                <div style={{
                                    transform : `translateX(-${slide * 100}%)`
                                }} className='w-[150px] shrink-0  duration-500'>
                                    <img src={"./images/"+cat.image} alt="" />
                                </div>
                            )
                        }
                    )
                }

            </div>
        </div>
    );
}
