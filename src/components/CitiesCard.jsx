import React from 'react'

const CitiesCard = ({title,content,colCount=4}) => {
  return (
    <div className='max-w-[1200px] mx-auto mt-5 mb-[4rem]'>
        <h2 className='text-[25px] font-bold mb-3'>{title}</h2>
        <div className={`grid grid-cols-${colCount} gap-3`}>

            {content.map((c,i) => <div className='border rounded-md p-4 text-center' key={i}>{c}</div>)}

        </div>
    </div>
  )
}

export default CitiesCard