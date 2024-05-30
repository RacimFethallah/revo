import React from "react";
import email from "@/assets/email.svg";
import phone from "@/assets/phone.svg";
import gps from "@/assets/gps.svg";
import Image from "next/image";
import upload from "@/assets/upload.svg";

export default function Contact() {
  return (
    <section className="flex flex-row justify-between w-full px-36 mt-40">
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
      <form className="flex flex-col gap-5" action="">
        <input type="text" placeholder="Contact Name" className="form-input" />
        <input type="text" placeholder="street" className=" form-input" />
        <div className="flex gap-3">
          <input
            placeholder="City"
            className="w-[357px] form-input"
            type="text"
          />
          <input
            placeholder="Post Code"
            type="text"
            className=" w-[167px] form-input"
          />
        </div>
        <input placeholder="Contact Phone" type="text" className="form-input" />
        <input placeholder="Email" type="text" className="form-input" />
        <input
          placeholder="Let's talk about your idea"
          type="text"
          className="form-input"
        />
        <div className="w-full">
          <label htmlFor="file-upload" className="custom-file-upload w-full">
            <div className="flex flex-row items-center justify-center gap-5">
              <Image src={upload} alt="upload" width={30} height={30} />
              Custom Upload
            </div>
          </label>
          <input id="file-upload" type="file" />
          <p className=" text-xs p-1 font-light">Attach file. File size of your documents should not exceed 10MB</p>
        </div>
        <div className="flex flex-row gap-3">
        <input type="checkbox"/>
        <p className=" text-sm">I want to protect my data by signing an NDA</p>
        </div>


        <button type="submit" className="bg-[#0982FE] text-white font-semibold rounded-lg py-4" >
            SUBMIT
        </button>
        
      </form>
    </section>
  );
}
