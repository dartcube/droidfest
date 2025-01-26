import { partners } from "@/consts/Partners";
import React from "react";
import Marquee from "../ui/marquee";
import Image from "next/image";
import Link from "next/link";

const Partners: React.FC = () => {
  return (
    <section
      id="partners"
      className="relative py-16 px-8 portrait:px-0 w-[-webkit-fill-available] max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-text-gradient mb-12">
        Previous Partners
      </h2>
      <div className="relative">
        <Marquee
          pauseOnHover
          className="[--duration:20s] [--gap:60px] w-auto mt-6 relative grayscale hover:grayscale-0 portrait:grayscale-0"
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
      </div>

      <div className="flex flex-col items-center mt-12">
        <p className="text-center text-lg text-gray-700 mb-4">
          Wanna be a part of our journey? Help us in making it even better!
        </p>
        <Link href="https://docs.google.com/forms/d/13x3dER7VpNQh1idZY2yBl0FShrUO5-Y9e7ZSvIz_Tbg/viewform?edit_requested=true" legacyBehavior>
          <a
            className="mt-8 p-6 bg-purple-500 text-white font-semibold text-lg rounded-full hover:bg-purple-600"
          >
            Join Us
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Partners;
