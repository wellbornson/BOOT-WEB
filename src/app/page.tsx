import Image from "next/image";
import Nike from "./components/Nike";
import Hero from "./components/Hero";
import men from "/public/men.png"
import Catageries from "./components/Catageries";
import SHOES from "@/app/SHOES/page"



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
