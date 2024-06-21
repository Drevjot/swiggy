import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

const OnlineDelivery = () => {
    const [data,setData] = useState([]);
    const componentRef = useRef(null)
    const [isTop,setIsTop] = useState(false)

    const fetchTopRestaurants = async () => {
        const response = await fetch("./data/restaurantChains.json");
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(()=>{
        fetchTopRestaurants();
        const handleScroll = () => {
            if(componentRef.current){
                const rect = componentRef.current.getBoundingClientRect();
                setIsTop(rect.top <= 0)
            }
        };

        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
        
    },[])
  return (
    <div className='max-w-[1200px] mx-auto items-center' ref={componentRef}>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Restaurant with online delivery in Jodhpur</div>
            </div>
            <div className={isTop ? 'fixed top-0 z-[9999999] bg-white w-full left-0' : ''}>
                <div className='max-w-[1200px] mx-auto flex my-4 gap-3'>
                    <div className='p-3 rounded-md shadow'>Filter</div>
                    <div className='p-3 rounded-md shadow'>Sort By</div>

                </div>
            </div>
            <div className='grid grid-cols-4 gap-3'>
                {data.map((d,i) => {
                    return <Card {...d} />
                })}
            </div>
    </div>
  )
}

export default OnlineDelivery