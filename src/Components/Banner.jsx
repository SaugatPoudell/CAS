import React from 'react'
import { ReactTyped } from 'react-typed';

export default function Banner() {
  return (
    <>
    <div className='bg-[orange] p-10'>
    <h2 className='md:hidden font-bold text-5xl text-center text-white p-3'>Central Attendence System</h2>
    <h2 className='hidden md:flex justify-center font-bold text-5xl text-black p-3'>Central Attendence System</h2>
    <h2 className='font-bold text-4xl text-center text-white'>
      <ReactTyped 
      strings={["All in One solution to the Centralized Attandence System"]}
      typeSpeed={40}
      loop={true}
      />
     </h2>
    <p className='text-2xl text-center'>CAS helps you to manage the attendence with one click throughout the campus and manages the hassle of carrying the 
      attendence sheet or trying to open the Excel file and manage the Attandence everyday .This is one Centralizedsolution of the hassle
      that you dont have to face in everyday teaching profession.
    </p>
    </div>
    </>
  )
}
