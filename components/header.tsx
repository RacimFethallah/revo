"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Header() {
  return (
    <header className="z-[999] relative flex justify-between items-center w-full py-10 bg-transparent">
      <div className="absolute top-0 left-0 w-20 py-5 px-5 hidden sm:block">
        <Image src={logo} alt="Revo Printing" />
      </div>
      <nav className="flex justify-center w-full">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-[#999999] sm:flex-nowrap sm:gap-[5.0rem] gap-10">
          <li className="nav-link">
            <Link href="#">Home</Link>
          </li>
          <li className="nav-link">
            <Link href="#">Our Services</Link>
          </li>
          <li className="nav-link">
            <Link href="#">Our Features</Link>
          </li>
          <li className="nav-link">
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


//sticky header
{/* <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full py-10 bg-transparent"> */}
