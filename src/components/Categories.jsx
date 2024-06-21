import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await fetch("./data/category.json");
        const data = await response.json();
        setCategories(data);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto items-center'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                        <FaArrowLeft />
                    </div>
                    <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-4'>
                {categories.map((category, index) => (
                    <div key={index} className='text-center'>
                        <img src={category.image} alt={category.path} className='w-full h-auto' />
                        <p>{category.path.replace(/-/g, ' ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
