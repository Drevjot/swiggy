import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import TopRest from './TopRest';

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

    const nextslide = () => {
        if(categories.length - 8 === slide) return;
        setslide(slide + 3);

    }
    const prevslide = () => {
        if(slide === 0) return false;
        setslide(slide-3);
    }

    return (
        <div className='max-w-[1200px] mx-auto items-center'>
            <div className='flex items-center justify-between mt-3'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2  onClick={prevslide}'>
                        <FaArrowLeft onClick={prevslide} />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2  onClick={nextslide}'>
                        <FaArrowRight onClick={nextslide}/>
                    </div>
                </div>
            </div>
          
            <div className=' flex overflow-hidden'>
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
            <hr className='my-6 border-[1px]' />
            
        </div>
    );
}
