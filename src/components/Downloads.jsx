import React from 'react'

const Downloads = () => {
  return (
    <div className='w-full mx-auto bg-[#F0F0F5] p-3 flex items-center justify-evenly'>
        <h3 className='text-[25px] font-bold ml-[8rem]'>
            For better experience,download<br/> the Swiggy app now
        </h3>
        <div className='flex items-center gap-3'>
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" rel="nofollow noopener" target="_blank" class="sc-gEkIjz gNWhBb"><img className="h-[64px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Download Android App"/></a>
            <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" rel="nofollow noopener" target="_blank" class="sc-gEkIjz gNWhBb"><img className="h-[64px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="Download iOS App"/></a>
        </div>
    </div>
  )
}

export default Downloads