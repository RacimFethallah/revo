import Image from "next/image";
import React from "react";
import heroImage from "@/assets/3dmachine.png";

export default function Hero() {
  return (
    <section className="flex flex-col items-center w-full mt-14">
      <div className="rounded-shape-left"></div>
      <div className="rounded-shape-right"></div>
      <h1 className="p-2 text-6xl font-bold leading-[72px] tracking-[0.2px] bg-clip-text text-transparent bg-gradient-to-r from-[#E763F3] to-[#EBA235]">
        Revo Printing
      </h1>
      <div className="flex flex-row justify-evenly items-center w-full mt-5">
        <div className="flex flex-col mr-4 w-[387px] gap-y-5">
          <div className="w-[288px] h-[159px] rounded-[40px] bg-gradient-to-r from-transparent to-[#616161b0] p-[1px]">
            <div className="h-full w-full bg-black rounded-[40px] flex flex-col justify-center items-start px-4">
              <p className="text-white font-semibold text-[35px] leading-[52.5px]">
                200+
              </p>
              <p className="text-[#3B3B3B] font-medium text-[25px] leading-[37.5px]">
                Partner
              </p>
            </div>
          </div>

          <div className="w-[288px] h-[159px] rounded-[40px]  bg-gradient-to-l from-transparent to-[#616161b0] p-[1px]">
            <div className=" h-full w-full bg-black rounded-[40px] ">
              <div className="h-full w-full bg-black rounded-[40px] flex flex-col justify-center items-start px-4">
                <p className="text-white font-semibold text-[35px] leading-[52.5px]">
                  80%
                </p>
                <p className="text-[#3B3B3B] font-medium text-[25px] leading-[37.5px]">
                  High quality prints
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <Image src={heroImage} alt="3D Machine" width={500} height={500} />
        </div>
        <div className="flex flex-col ml-4 w-[387px] gap-y-2">
          <p className="text-base font-semibold leading-[22.5px] text-left">
            Connects buyers and sellers of 3D models and printing services,
            making it easy to find and purchase high-quality designs or offer
            your own for sale. Join our community today and start exploring.
          </p>
          <button className="bg-white w-[372px] h-[59px] mt-4 rounded-[20px]">
            <span className="text-black text-2xl font-semibold leading-[37.5px] text-left">
              Get Started
            </span>
          </button>
        </div>
      </div>

    </section>
  );
}
