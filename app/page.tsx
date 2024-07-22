import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-white animated-gradient">
        <h1 className="mt-10 text-6xl text-white font-bold m-3">
          Get Start With Our AI Models
        </h1>
        <br />
        <br />
        <p className="font-mono text-white font-extrabold m-7">
          This Application Was Developed and Hosted By Sriram And Arfan From Muthu
          Thevar Mukkulathore HR.Sec School in Thirunagar, Madurai
        </p>
        <br />
        <br />
        <div>
          <Link href={"/dashboard"}>
            <Button className="p-6">GET START</Button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient {
          background: linear-gradient(270deg, #5f92ff, #b91969, #886856);
          background-size: 800% 800%;
          animation: gradientAnimation 15s ease infinite;
        }
      `}</style>
    </>
  );
}
