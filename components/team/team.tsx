
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import TeamCard from './team-card'

export default function Team() {


    return (
        <section
            id="speakers"
            className="relative 
    py-16 px-8 bg-cover bg-center bg-no-repeat"
        // bg-gradient-to-b from-[#121212] to-[#1a1a1a]
        // style={{ backgroundImage: "url('/BackgroundEffects.png')" }}
        >
            <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-text-gradient mb-12">
                Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                <TeamCard />
                <TeamCard />
                <TeamCard />



            </div>
        </section>

    )
}
