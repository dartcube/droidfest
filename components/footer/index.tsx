import React from "react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/consts/SocialLinks";
import { BrandLogo } from "../ui/brand/logo";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-transparent  text-white py-6">
      <div className="container mx-auto text-center flex w-full flex-col items-center gap-3">
        {/* <BrandLogo className={"w-64"} /> */}
        {/* <Button className="border rounded-full">Contact Us</Button> */}
        <div className="h-0.5 w-full bg-white/20 my-4" />
        <div className="flex justify-around items-center w-full flex-col md:flex-row gap-4">
          <p className="text-sm">© Kotlin Kolkata User Group 2026. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link
              className="hover:text-white/70 transition-all duration-300"
              href={SOCIAL_LINKS.FACEBOOK}
            >
              <Facebook size={24} />
            </Link>
            <Link
              className="hover:text-white/70 transition-all duration-300"
              href={SOCIAL_LINKS.LINKEDIN}
            >
              <Linkedin size={24} />
            </Link>
            <Link
              className="hover:text-white/70 transition-all duration-300"
              href={SOCIAL_LINKS.TWITTER}
            >
              <Twitter size={24} />
            </Link>
            <Link
              className="hover:text-white/70 transition-all duration-300"
              href={SOCIAL_LINKS.INSTAGRAM}
            >
              <Instagram size={24} />
            </Link>
            <Link
              className="hover:text-white/70 transition-all duration-300"
              href={SOCIAL_LINKS.YOUTUBE}
            >
              <Youtube size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
