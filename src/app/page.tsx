import Image from "next/image";
import Nike from "./components/Nike";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import frame4 from "/public/frame4.png"
import frame5 from "/public/frame5.png"
import frame6 from "/public/frame6.png"
import men from "/public/men.png"
import image1 from "/public/image1.png"
import image2 from "/public/image2.png"
import image3 from "/public/image3.png"
import image4 from "/public/image4.png"
import image8 from "/public/image8.png"
import image9 from "/public/image9.png"
import image10 from "/public/image10.png"
import image11 from "/public/image11.png"
import Catageries from "./components/Catageries";

export default function Home() {
  return (
    <div>

<Nike/>
<Hero/>

<div className="flex gape-4 h-full">


<div><Image src={frame4} alt="frame4 pic"/>
<div className="flex justify-between">
  <div>Nike Air Max Pulse</div>
  <div>price</div>
</div>
<div>Women's Shoes</div>
</div>
<div><Image src={frame5} alt="frame4 pic"/>
<div className=" flex justify-between">
  <div>Nike Air Max Pulse</div>
  <div>price</div>
</div>
<div>Women's Shoes</div>
</div>
<div><Image src={frame6} alt="frame4 pic"/>
<div className=" flex justify-between">
  <div>Nike Air Max Pulse</div>
  <div>price</div>
</div>
<div>Women's Shoes</div>
</div>



</div>


<div className="h-16"><h1 className="font-semibold text-2xl px-3 py-8">Featured</h1></div>

<Image src={men} alt="men pic"/>
<div className="h-12 w-full py-24 px-6 justify-items-center">
<h1 className="font-semibold text-5xl">STEP INTO WHAT FEELS GOOD</h1>
<p className="pt-5">cause everyone should know the feelling of running in that perfect pair</p>
</div>

<div className="justify-items-center justify-center flex py-5">
<button className="bg-black text-white border rounded-full px-4 py-2">Find Your Shop</button>
</div>

<h3 className="mb-6 mx-6 font-semibold text-2xl">Gear Up</h3>
<div className="flex gap-6 justify-around">
<div><Image src={image1} alt="image1 pic"/> 
<h1 className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra
₹ 3 895
<br/>
</h1>
<h3>Men's Short-Sleeve
  <br/> Running Top</h3>
</div>
<div><Image src={image2} alt="image2 pic"/>
<h1 className="font-semibold">Nike Dri-FIT Challenger ₹ 2495</h1>
  
Men's 18cm (approx.) 2-
<br/>in-1 Versatile Shorts
</div>
<div><Image src={image3} alt="image3 pic"/>
<h1 className="font-semibold">Nike Dri-FIT ADV Run Division
₹ 5 295</h1>
<h2>
Women's Long-Sleeve
<br/>
 Running Top</h2>
</div>
<div><Image src={image4} alt="image4 pic"/>
<h1 className="font-semibold">Nike Fast
₹ 3 795</h1>

<h2>Women's Mid-Rise 7/8 Running <br/>Leggings with Pockets</h2>
</div>
</div>
<div className="pt-20 pb-4 font-semibold text-1.5xl">Don't Miss</div>
<div className="flex ">
<Image src={image8} alt="image8 pic"/>
</div>

<div className="justify-items-center">
  <h1 className="font-semibold text-5xl ">FLIGHT ESSENTIALS</h1>
  <p className="py-8">your built-to-last, all week wears-but with style only jorden brand can deliver</p>

  <div className="justify-items-center ">
    <button className="bg-black text-white border rounded-full px-4 py-2">Shop</button></div>
</div>


<div className="font-bold text-2xl py-4">The Essentials</div>
<div className="flex">
<Image src={image9} alt="image9 pic"/>
<Image src={image10} alt="image10 pic"/>
<Image src={image11} alt="image11 pic"/>


</div>
<Catageries/>  
    </div>
  );
}
