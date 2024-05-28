import React,{useState}from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

export default function Header() {
    const[toggle,setToggle]=useState(false);
  return (
    <>
    <div className='bg-[#2699fb] p-6 text-2xl font-bold items-center'>
        <div className='flex justify-between'>
        <h1>Central Attendence System</h1>
        <ul className='hidden md:flex text-white gap-2 font-normal'> 
        {/* //less than md hidden  */}
            <li className='gap-'>
              <a href='/about'>About US</a>
              <a href='/carrer'>Carrer</a>
              <a href='/package'>Packages</a>
            </li>
           
        </ul>
        {
            !toggle?
<AiOutlineMenu onClick={()=>setToggle(!toggle)}className='text-white md:hidden'/>:
<AiOutlineClose onClick={()=>setToggle(!toggle)} className='md:hidden text-white 2xl'/>
        }
        
        </div>
        </div>
<div className={`duration-300 md:hidden text-white fixed bg-[#000000] m-0 ml-0 w-full h-screen
${toggle?'left-[0]':'left-[-100%]'}`}>
     
        <ul className='p-4 text-white text-3xl'>
        <li>About Us</li>
            <li>Our Packages</li>
            <li>Careers</li>
            <li>Contact</li>
        </ul>
        </div>
            
        
    

        {/* //above median device hidden */}
        
        
       
    </>
   
  )
}
