import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="mt-10 text-6xl font-extrabold">Get Start With Our AI Models</h1>
      <br />
      <br />
      <p className="font-mono">This Application Was Developed and Hosted By Sriram And Arfan From  Muthu Thevar Mukkulathore HR.Sec School in Thirunagar,Madurai</p>
      <br />
      <br />
      <div>
        <Link href={"/dashboard"}>
       <Button>GET START</Button>
       </Link>
      </div>
    

    </div>
   
   </>
  );
}
