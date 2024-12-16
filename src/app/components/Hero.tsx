import React from 'react'
import Heropic from "/public/Hero.png"
import Image from 'next/image'
const Hero = () => {
  return (
    <div><Image src={Heropic} alt="hero pic"/>
<div className='justify-items-center h-full py-19'>
    <h1 className='font-semibold my-4'>First Look</h1>
    <h1 className='font-semibold text-2xl md:txt-3xl lg:text-4xl my-6'>NIKE AIR MAX PULSE</h1>
    <p>Extreme comfort. Hyper durable. Max volume.Introducing the Air Max pulse
        <br/>
        -designed to push you past your limits and help you go to the Max.
    </p>
   
</div>

<div className="justify-items-center justify-center flex py-6 ">
<button className="bg-black text-white border rounded-full px-4 py-2 ">Notify Me</button>
<button className="bg-black text-white border rounded-full px-4 py-2">Shop Air Max</button>
</div>



<div><h1 className='font-semibold text-2xl px-4'>Best Of Air Max</h1></div>

    </div>
  )
}

export default Hero