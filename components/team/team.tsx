
import React from 'react'
import TeamCard from './team-card'
import { team } from '@/consts/Team'
export default function Team() {
  return (
    <section
      id="speakers"
      className="relative 
    py-16 px-8 bg-cover bg-center bg-no-repeat">
      <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-text-gradient mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <TeamCard
            key={index}
            firstName={member.firstName}
            lastName={member.lastName}
            role={member.role} />
        ))
        }
      </div>
    </section>
  )
}
