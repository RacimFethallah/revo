import Image from "next/image";
import React from "react";
import feature from "@/assets/feature.svg";
import featureReversed from "@/assets/featureReversed.svg";
import { Exo } from "next/font/google";

const exo = Exo({ subsets: ["latin"] });

export default function Features() {
  return (
    <section className="flex flex-col justify-center items-center w-full px-28 mt-40">
      <h1 className="font-bold text-6xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#E763F3] to-[#EBA235]">
        Our Features
      </h1>
      <p className="mt-5 font-semibold text-base text-center">
        Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod
        tempor
      </p>
      <div className="flex mt-28">
        <div className="flex flex-col items-center font-extrabold text-6xl gap-5">
          <h2 className=" font-bold text-2xl text-center">
            Location based search
          </h2>
          <p className="-mb-16 font-semibold text-base text-center w-48">
            Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
          <Image src={featureReversed} alt="feature" width={500} height={500} />
          <span className={`-mt-14 ${exo.className}`}> 01 </span>
        </div>
        <div className="flex flex-col items-center font-extrabold text-6xl gap-5">
          <span className={`-mb-14 ${exo.className}`}> 02 </span>
          <Image src={feature} alt="feature" width={500} height={500} />
          <h2 className="-mt-16 font-bold text-2xl text-center">
            User rating & reviews
          </h2>
          <p className=" font-semibold text-base text-center w-48">
            Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="flex flex-col items-center font-extrabold text-6xl gap-5">
          <h2 className=" font-bold text-2xl text-center">Advice & guides</h2>
          <p className="-mb-16 font-semibold text-base text-center w-48">
            Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
          <Image src={featureReversed} alt="feature" width={500} height={500} />
          <span className={`-mt-14 ${exo.className}`}> 03 </span>
        </div>
        <div className="flex flex-col items-center font-extrabold text-6xl gap-5">
          <span className={`-mb-14 ${exo.className}`}> 04 </span>
          <Image src={feature} alt="feature" width={500} height={500} />
          <h2 className="-mt-16 font-bold text-2xl text-center">
            opportunities
          </h2>
          <p className=" font-semibold text-base text-center w-48">
            Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </section>
  );
}
