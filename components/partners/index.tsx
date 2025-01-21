import { partners } from "@/consts/Partners";
import React from "react";
import Marquee from "../ui/marquee";
import { BrandLogo } from "../ui/brand/logo";
import Image from "next/image";

const Partners: React.FC = () => {

  return (
    <section
      id="partners"
      className="relative
      py-16 px-8 bg-cover bg-center bg-no-repeat"
      // bg-gradient-to-b from-[#121212] to-[#1a1a1a]
      // style={{ backgroundImage: "url('/BackgroundEffects.png')" }}
    >
      <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-text-gradient mb-12">
        Our Partners
      </h2>

      <Marquee
        pauseOnHover
        className="[--duration:20s] [--gap:60px] w-full mt-6 grayscale hover:grayscale-0  "
      >
        {partners.map((partner, index) => (
          <Image key={index} src={partner.src} title={partner.title} alt={partner.title} width={100} height={100}/>
        ))}
      </Marquee>
    </section>
  );
};

export default Partners;
