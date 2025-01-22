"use client"
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

export default function TeamCard() {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });
    return (
        <div className="relative flex flex-col items-center text-center w-38 h-[20rem] bg-zinc-500 backdrop-blur-sm bg-opacity-20 rounded-2xl border-[1px] shadow-md border-white/10 group overflow-hidden select-none">
            <motion.img
                src={"/team-test.png"}
                alt={"Temp "}
                className="object-cover h-full w-full filter grayscale"
                height={200}
                width={200}
                initial={{ filter: 'grayscale(100%)' }}
                animate={isInView ? { filter: 'none', transition: { duration: 3 } } : {}}
                whileHover={{ scale: 1.05, filter: 'none', transition: { duration: 0.5 } }}
                whileTap={{ scale: 1, filter: 'grayscale(100%)', transition: { duration: 0.5 } }}
            />
            <div className='absolute bottom-4 left-4 flex flex-col items-start  ' style={{
                textShadow:"1px 1px 2px #834EFD"
            }}>
                <p className="text-gray-600  text-center text-sm text-white/80" style={{
                    textShadow:""
                }}>WEB TEAM</p>
                <h3 className="text-3xl font-bold text-center leading-none">SUBINOY</h3>
                <h3 className="text-3xl font-bold text-center mb-2 leading-none">BISWAS</h3>
            </div>

            <div className="flex space-x-4">

            </div>
        </div>
    )
}
