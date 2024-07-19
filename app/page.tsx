import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
    <div className="flex flex-col justify-center items-center w-full h-screen bg-white">
      <h1 className="mt-10 text-6xl font-extrabold text-black font-serif">Get Start With Our AI Models</h1>
      <br />
      <br />
      <p className="font-mono text-black">This Application Was Developed and Hosted By Sriram And Arfan From  Muthu Thevar Mukkulathore HR.Sec School in Thirunagar,Madurai</p>
      <br />
      <br />
      <div>
        <Link href={"/dashboard"}>
       <Button className="p-6" variant={"destructive"}>GET START</Button>
       </Link>
      </div>
    

    </div>
   
   </>
  );
}
