import React from 'react'
import laptop from '../Components/laptop.png'


export const Customers = () => {
  return (
    <>
    <div className='bg-[skyblue] w-auto h-[200px]  grid grid-cols-3 m-10 mb-1 items-center pl-10'>
        <div className='col-span-1  w-[190px] p-2'>
          <img src={laptop}/>
        </div>
        <div className='col-span-2'> 
        <p className='p-10 font-bold '> 
            I dont know what should have been uploaded here so we will upload later on and 
            images will be uploaded later</p>      
         </div>
         
    </div>
     <div className='bg-[skyblue] w-auto h-[200px]  grid grid-cols-3 m-10 mt-0 items-center pl-10'>
     <div className='col-span-1 w-[190px] p-2'>
     <img src={laptop}/>
     </div>
     <div className='col-span-2'> 
     <p className='p-10 font-bold '> 
         I dont know what should have been uploaded here so we will upload later on and 
         images will be uploaded later</p>      
      </div>
      
 </div>
 </>
  )
}
