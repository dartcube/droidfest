"use client";
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaGlobe } from 'react-icons/fa';

export default function TeamCard({
  firstName,
  lastName,
  role,
  image,
  linkedin,
  twitter,
  github,
  website,
}: {
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="relative flex flex-col items-center text-center w-38 h-[22rem] bg-zinc-500 backdrop-blur-sm bg-opacity-20 rounded-2xl border-[1px] shadow-md border-white/10 group overflow-hidden select-none"
    >
      <motion.img
        src={image}
        alt={`${firstName} ${lastName}`}
        className="object-cover h-full w-full filter grayscale"
        height={200}
        width={200}
        initial={{ filter: 'grayscale(100%)' }}
        animate={isInView ? { filter: 'none', transition: { duration: 3 } } : {}}
        whileHover={{ scale: 1.05, filter: 'none', transition: { duration: 0.5 } }}
        whileTap={{ scale: 1, filter: 'grayscale(100%)', transition: { duration: 0.5 } }}
      />

      <div
        className="absolute bottom-4 left-4 flex flex-col items-start"
        style={{ textShadow: '1px 1px 2px #834EFD' }}
      >
        <p className="text-gray-600 text-center text-sm text-white/80 uppercase">{role}</p>
        <h3 className="text-3xl font-bold text-center leading-none uppercase">
          {firstName}
        </h3>
        <h3 className="text-3xl font-bold text-center mb-2 leading-none uppercase">
          {lastName}
        </h3>
      </div>

      <div className="absolute bottom-4 right-4 flex space-x-4 text-white">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition duration-300"
          >
            <FaGlobe size={24} />
          </a>
        )}
      </div>
    </div>
  );
}