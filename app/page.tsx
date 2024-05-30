import Header from "@/components/header";
import Hero from "@/components/heroSection/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="">
        <Hero />
        <section className=" h-[1500px]"></section>
      </main>
    </>
  );
}
