import React from "react";
import linkedIn from "@/assets/linkedIn.svg";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#161C2D] flex flex-col items-center  mt-20 px-48">
      <div className="flex flex-row items-start justify-evenly mt-20 w-full">
        <div className="flex flex-col gap-5">
          <h1 className=" font-black text-base text-gray-400">Company</h1>
          <nav className="flex flex-col gap-3 text-base font-black">
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className=" font-black text-base text-gray-400">Product</h1>
          <nav className="flex flex-col gap-3 text-base font-black">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">News</a>
            <a href="#">Help desk</a>
            <a href="#">Support</a>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className=" font-black text-base text-gray-400">Services</h1>
          <nav className="flex flex-col gap-3 text-base font-black">
            <a href="#">Digital</a>
            <a href="#">Marketing</a>
            <a href="#">Content</a>
            <a href="#">Writing</a>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className=" font-black text-base text-gray-400">Legal</h1>
          <nav className="flex flex-col gap-3 text-base font-black">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className=" font-black text-base text-gray-400">Contact us</h1>
          <nav className="flex flex-col gap-3 text-base font-black">
            <a href="#">support@brainwave.io</a>
            <a href="#">+133-394-3439-1435</a>
          </nav>
        </div>
      </div>
      <hr className="w-full mt-24 border-gray-700 border" />
      <div className="flex flex-row justify-between items-center w-full py-6 ">
        <div className="font-black text-base text-gray-400">
          © 2024 Copyright, All Right Reserved
        </div>
        <div className="flex gap-5">
          <a href="">
            <Image src={twitter} alt="twitter" width={30} height={30} />
          </a>
          <a href="">
            <Image src={facebook} alt="facebook" width={30} height={30} />
          </a>
          <a href="">
            <Image src={instagram} alt="instagram" width={30} height={30} />
          </a>
          <a href="">
            <Image src={linkedIn} alt="linkedIn" width={30} height={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
