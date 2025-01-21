import { Logos } from "@/consts/Partners";
import React from "react";
import Marquee from "../ui/marquee";
import { BrandLogo } from "../ui/brand/logo";

const Partners: React.FC = () => {
  const partnersData = [
    { id: 1, logoSrc: "/speaker.png" },
    { id: 2, logoSrc: "/speaker.png" },
    { id: 3, logoSrc: "/speaker.png" },
    { id: 4, logoSrc: "/speaker.png" },
    { id: 5, logoSrc: "/speaker.png" },
    { id: 6, logoSrc: "/speaker.png" },
  ];
  const arr = [Logos.tailwindcss, Logos.framer, Logos.nextjs, Logos.aws];
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
        {[0,1,2,3,4,5,6,7,8,9].map((_, index) => (
          <BrandLogo key={index} className="w-40"/>
        ))}
      </Marquee>
    </section>
  );
};

export default Partners;
