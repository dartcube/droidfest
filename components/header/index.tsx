import React from "react";
import { BrandLogo } from "@/components/ui/brand/logo";
import Link from "next/link";
import { HamburgerMenu } from "./hamburger";
import { Button } from "../ui/button";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-end absolute top-0 left-0 w-full px-6 md:px-10 py-4 z-50">
      {/* <Link href="/" className="sm:py-4 sm:px-6 sm:bg-black sm:rounded-full">
        <BrandLogo className="h-8 justify-start" />
      </Link> */}
      <nav className="hidden lg:flex items-center gap-10">
        <ul className="flex items-center gap-10">
          <li>
            <Button asChild variant={"link"}>

            <Link href="#about-us" >
              About Us
            </Link>
            </Button>
          </li>
          {/* <li>
            <Button asChild variant={"link"}>

            <Link href="#team" >
              Team
            </Link>
            </Button>
          </li> */}
          <li>
            <Button asChild variant={"link"}>

            <Link href="#workshop" >
              Timeline
            </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"link"}>

            <Link href="#partners" >
              Our Partners
            </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"link"}>

            <Link href="#speakers" >
               Speakers
            </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"secondary"}>
{/* 
            <Link href="#" className="btn-primary hover:bg-black">
              Get Tickets
            </Link> */}
            </Button>
          </li>
        </ul>
      </nav>

      
      <HamburgerMenu />
    </header>
  );
};
