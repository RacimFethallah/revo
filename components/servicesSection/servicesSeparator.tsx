import React from "react";
import circle from "@/assets/circle.svg";
import Image from "next/image";

export default function ServicesSeparator() {
  return (
    <div className="flex items-center justify-center gap-x-10 py-2 flex-row w-full mt-32 h-[59px] bg-[#212121] rotate-[-4deg]">
      <p className="text-xl font-medium leading-8 text-left">Smooth Actions </p>
      <Image src={circle} alt="circle" width={30} height={30} />
      <p className="text-xl font-medium leading-8 text-left">24/7 support</p>
      <Image src={circle} alt="circle" width={30} height={30} />
      <p className="text-xl font-medium leading-8 text-left">Contacting</p>
      <Image src={circle} alt="circle" width={30} height={30} />
      <p className="text-xl font-medium leading-8 text-left">visualization</p>
      <Image src={circle} alt="circle" width={30} height={30} />
      <p className="text-xl font-medium leading-8 text-left">payment</p>
      <Image src={circle} alt="circle" width={30} height={30} />
      <p className="text-xl font-medium leading-8 text-left">
        Tracking dashboard
      </p>
    </div>
  );
}
