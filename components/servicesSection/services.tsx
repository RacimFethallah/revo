import React from "react";
import bag from "@/assets/bag.svg";
import analytics from "@/assets/analytics.svg";
import process from "@/assets/process.svg";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-row justify-evenly items-center w-full gap-52 px-32 mt-40">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-5xl font-bold leading-[60px] tracking-wide text-left ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#EBA235]">
            Check our
          </span>
          {"   "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E763F3] to-[#EBA235]">
            professional
          </span>
          {"   "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#EBA235]">
            Services
          </span>
        </h1>
        <p className="text-xl font-semibold leading-8 text-left ">
          Revo Printing was established with the goal of simplifying the process
          of buying and selling designs and 3D printers for individuals and
          businesses alike.
        </p>
        <button className="w-[256px] h-[60px] rounded-3xl border border-white">
          Join Us Now
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-start gap-3">
          <Image src={bag} alt="bag" width={70} height={70} />
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl leading-9">
              Sell & Buy 3d prints & models
            </h2>
            <p className="text-[#3B3B3B] font-semibold text-xl leading-8">
              Revo Printing was established with the goal of simplifying the
              process of buying & selling the 3d prints and models.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start gap-3">
          <Image src={analytics} alt="bag" width={70} height={70} />
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl leading-9">
              Activities Tracking
            </h2>
            <p className="text-[#3B3B3B] font-semibold text-xl leading-8">
              Revo Printing let you track your activities (selling , benefits ,
              number of client , collaborators ... etc) as a partner to us.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start gap-3">
          <Image src={process} alt="bag" width={70} height={70} />
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl leading-9">
              Collaborate selling process
            </h2>
            <p className="text-[#3B3B3B] font-semibold text-xl leading-8">
              Revo Printing provide the service of collaborating your project
              with other people like 3d printer owner & a 3d modeler
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
