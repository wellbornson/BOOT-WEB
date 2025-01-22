


import Image from 'next/image'
import men from "/public/men.png"
import SHOES from '../components/shoes/page'
import React from 'react'
import Link from "next/link"
import Hero from '../components/Hero'

const products = () => {
  return (
    <div className=''> 


      <div className='px-4 flex'>
      <ul className="font-semibold ">
<li> <h1 className="font-semibold text-2xl py-8 ">NEW (500) </h1></li>
          <li className="py-2">Shoes</li>
          <li className="py-2">Sports Baras</li>
          <li className="py-2">Tops & T Shirts</li>
          <li className="py-2">Hoodies & Sweatshirts</li>
          <li className="py-2">Jackets</li>
          <li className="py-2">Trousers & Tights</li>
          <li className="py-2">Shorts</li>
          <li className="py-2">Tracksuits</li>
          <li className="py-2">Jumpsuits</li>
          <li className="py-2">Jumsuits & Rompers</li>
          <li className="py-2">Skirts & Dresses</li>
          <li className="py-2">Socks</li>
          <li className="py-2">Accessories <br/> & Equipment</li>
        </ul>


      </div>

      
      <SHOES/>
     
 



  <SHOES/>
    </div>
  )
}

export default products





