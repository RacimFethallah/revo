import React from "react";
import circle from "@/assets/circle.svg";
import Image from "next/image";



export default function HeroSeparator() {
  return (
    <div className="flex items-center justify-center gap-10 flex-row w-full mt-8 h-[59px] bg-[#212121] rotate-[-4deg]">
      <p className="text-xl font-medium leading-8 text-left">
        Printing Services
      </p>
      <Image src={circle} alt="circle" width={30} height={30} />
      <p className="text-xl font-medium leading-8 text-left">3D Prints</p>
      <Image src={circle} alt="circle" width={30} height={30} />
      <p className="text-xl font-medium leading-8 text-left">3D Models</p>
      <Image src={circle} alt="circle" width={30} height={30} />
      <p className="text-xl font-medium leading-8 text-left">Collaboration</p>
      <Image src={circle} alt="circle" width={30} height={30} />
      <p className="text-xl font-medium leading-8 text-left">Freelance</p>
      <Image src={circle} alt="circle" width={30} height={30} />
      <p className="text-xl font-medium leading-8 text-left">High Quality</p>
    </div>
  );
}
