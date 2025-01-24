"use client"

import React, { useState } from "react";
import PreviousYear from "../ui/Graphics/PreviousYear";
import { Button } from "../ui/button";
import { LinkPreview } from "../ui/link-preview";

const AboutUs: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section
      id="about-us"
      className="relative flex items-center justify-center w-full py-20 px-8 relative"
    >
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center items-center my-32 md:my-0">
          <PreviousYear />
        </div>

        <div className="text-white">
          <h2 className="text-5xl font-bold leading-tight">
            <span className="text-white">About</span>{" "}
            <span className="text-transparent bg-clip-text bg-text-gradient">
              Us.
            </span>
          </h2>

          <div className="mt-6 text-lg leading-relaxed">
            <span>DroidFest is the flagship event of the </span>
            <span>
              <LinkPreview
                url="https://www.meetup.com/Kotlin-Kolkata-UG"
                className="font-semibold text-magenta hover:underline"
              >
                Kotlin User Group, Kolkata
              </LinkPreview>
            </span>
            <span>
              , designed to celebrate and elevate the Android and Kotlin
              developer community. Since its inception, DroidFest has become a
              hub for innovation, learning, and collaboration, bringing together
              students, professionals, and tech enthusiasts to shape the future
              of mobile and backend development.
            </span>
          </div>
          
          {isExpanded && (
            <p className="mt-4 text-lg leading-relaxed">
              Our mission is to inspire and empower developers by providing a
              platform to explore cutting-edge technologies, share knowledge, and
              connect with industry leaders. At DroidFest 2025, we are committed
              to fostering a thriving ecosystem that drives creativity, expertise,
              and community engagement in the world of Kotlin and Android
              development.
            </p>
          )}
          
          <Button
            onClick={toggleReadMore}
            className="mt-8 p-6 bg-purple-500 text-white font-semibold text-lg rounded-full hover:bg-purple-600"
          >
            {isExpanded ? "Show less" : "Read more"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
