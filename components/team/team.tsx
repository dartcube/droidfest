import React from 'react';
import TeamCard from './team-card';
import { team } from '@/consts/Team';

export default function Team({
  isOrganiser,
  isEventOrganiser,
  isTeam,
}: {
  isOrganiser?: boolean;
  isEventOrganiser?: boolean;
  isTeam?: boolean;
}) {
  return (
    <section
      id="team"
      className="relative py-16 px-8 bg-cover bg-center bg-no-repeat"
    >
      <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-text-gradient mb-12 py-1">
        {isOrganiser && "Droidfest'25 Organisers"} {isTeam && 'Team'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {isTeam && team.filter(member => member.role != 'Organiser' && member.role != "Event Organiser").map((member, index) => (
          <TeamCard
            key={index}
            firstName={member.firstName}
            lastName={member.lastName}
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
            instagram={member.instagram}
            twitter={member.twitter}
            github={member.github}
            website={member.website}
          />
        ))}


        {isOrganiser && team.filter(member => member.role === 'Organiser' || member.role === 'Event Organiser').map((member, index) => (
          <TeamCard
            key={index}
            firstName={member.firstName}
            lastName={member.lastName}
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
            instagram={member.instagram}
            twitter={member.twitter}
            github={member.github}
            website={member.website}
          />
        ))}


      </div>
    </section>
  );
}