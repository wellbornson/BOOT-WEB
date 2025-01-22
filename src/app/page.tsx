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
import SHOES from "./components/shoes/page";

export default function Home() {
  return (
    <div className="">


<Nike/>
<Hero/>
<SHOES/>


<div className="h-16"><h1 className="font-semibold text-2xl px-3 py-8">Featured</h1></div>

 <Image src={men} alt="men pic"/>
 <div className="h-12 w-full py-24 px-6 justify-items-center">
 <h1 className="font-semibold text-5xl">STEP INTO WHAT FEELS GOOD</h1>
 <p className="pt-5">cause everyone should know the feelling of running in that perfect pair</p>
</div>



<SHOES/>


<Catageries/>  
    </div>
  );
}
