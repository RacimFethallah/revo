import React from "react";
import email from "@/assets/email.svg";
import phone from "@/assets/phone.svg";
import gps from "@/assets/gps.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex flex-col justify-center w-full px-48 mt-40">
      <div className="flex flex-col">
        <div className=" w-max">
          <h1 className="font-bold text-6xl tracking-wide">
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#EBA235] to-[#E763F3]">
              touch
            </span>
          </h1>
          <p className="mt-5 font-semibold text-base text-left">
            Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
        </div>

        <div className="flex flex-row mt-20 items-start gap-3">
          <Image src={email} alt="email" width={50} height={50} />
          <div className="  flex flex-col">
            <em className=" font-normal text-2xl">Email us</em>
            <a href="" className=" text-gray-400">
              support@brainwave.io
            </a>
            <a href="" className=" text-gray-400">
              contact@brainwave.io
            </a>
          </div>
        </div>

        <div className="flex flex-row items-start gap-3 mt-14">
          <Image src={phone} alt="phone" width={50} height={50} />
          <div className=" flex flex-col">
            <em className=" font-normal text-2xl">Call us</em>
            <a href="" className=" text-gray-400">
              +1-940-394-2948
            </a>
            <a href="" className=" text-gray-400">
              +1-389-385-3807
            </a>
          </div>
        </div>

        <div className="flex flex-row items-start gap-3 mt-14">
          <Image src={gps} alt="gps" width={50} height={50} />
          <div className=" flex flex-col">
            <em className=" font-normal text-2xl">Visit us</em>
            <a href="" className=" text-gray-400">
              34 Madison Street,
            </a>
            <a href="" className=" text-gray-400">
              NY, USA 10005
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
