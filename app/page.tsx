import About from "@/components/servicesSection/services";
import Header from "@/components/header";
import Hero from "@/components/heroSection/hero";
import HeroSeparator from "@/components/heroSection/heroSeparator";
import Image from "next/image";
import ServicesSeparator from "@/components/servicesSection/servicesSeparator";

export default function Home() {
  return (
    <>
      <Header />

      <main className="">
        <Hero />
        <HeroSeparator />
        <About />
        <ServicesSeparator />
        <section className=" h-[1500px]"></section>
      </main>
    </>
  );
}
