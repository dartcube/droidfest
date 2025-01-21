import { partners } from "@/consts/Partners";
import React from "react";
import Marquee from "../ui/marquee";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <section
      id="partners"
      className="relative
      py-16 px-8 portrait:px-0 w-[-webkit-fill-available] max-w-7xl mx-auto"
      // bg-gradient-to-b from-[#121212] to-[#1a1a1a]
      // style={{ backgroundImage: "url('/BackgroundEffects.png')" }}
    >
      <h2 className="text-5xl  font-bold text-center text-transparent bg-clip-text bg-text-gradient mb-12">
        Our Partners
      </h2>
      <div className="relative">
        <Marquee
          pauseOnHover
          className="[--duration:20s] [--gap:60px] w-auto mt-6 relative grayscale hover:grayscale-0  portrait:grayscale-0"
        >
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.src}
              title={partner.title}
              alt={partner.title}
              width={100}
              height={100}
            />
          ))}
        </Marquee>
        <div className="absolute right-0 h-full bg-gradient-to-l from-black to-transparent top-0 bottom-0 w-32 portrait:w-8 z-50"></div>
        <div className="absolute left-0 h-full bg-gradient-to-r from-black to-transparent top-0 bottom-0 w-32 portrait:w-8 z-50"></div>
      </div>
    </section>
  );
};

export default Partners;
