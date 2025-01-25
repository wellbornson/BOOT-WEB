import React from 'react'
import Image from 'next/image'
import NIKE from "/public/nike.png"
import MAN from "/public/men.png"
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
   <header>
    
     <div className='bg-slate-200 h-8 w-full px-6 flex justify-between'>
     <div className='w-4'><Image src={MAN} alt="nike logo "/></div>
        <ul className='flex space-x-5 font-semibold'>
            <li>Find a store</li>
            <li>Help</li>
            <li>Join us</li>
        </ul>
     </div>
     <div className='bg-slate-50 h-6 w-full py-6 px-6 flex justify-between'> 
     <div className='w-6'><Image src={NIKE} alt="nike logo "/></div>
        <ul className='flex space-x-5 justify-center font-semibold'>
            <li>New & Featured</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>SNKRS</li>
        </ul>
        <div><Heart/></div>
     </div>
        
       
        
   </header>
    

        
    
  )
};

export default Navbar