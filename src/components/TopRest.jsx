import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './Card';

const TopRest = () => {
    const [data,setData] = useState([]);
    const [slide,setSlide] = useState(0)
    const fetchTopRestaurants = async () => {
        const response = await fetch("./data/restaurantChains.json");
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(()=>{
        fetchTopRestaurants();
    },[])

     const nextslide = () => {
        // if(data.length - 1 === slide) return;
        setSlide(slide + 1);

    }
    const prevslide = () => {
        // if(slide === 0) return false;
        setSlide(slide-1);
    }
  return (
     <div className='max-w-[1200px] mx-auto items-center mb-[100px]'>
            <div className='flex items-center justify-between mt-3'>
                <div className='text-[25px] font-bold mb-3'>Top restaurant chains in Jodhpur</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2  onClick={prevslide}'>
                        <FaArrowLeft onClick={prevslide} />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2  onClick={nextslide}'>
                        <FaArrowRight onClick={nextslide}/>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 overflow-scroll" >
                {data.map((d,index) => <Card key={index} {...d} />)}

            </div>
                        <hr className='my-6 border-[1px]' />
    </div>
  )
}

export default TopRest