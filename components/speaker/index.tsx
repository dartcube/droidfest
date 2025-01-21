import React from 'react';
import Image from 'next/image';
import { Github, Globe, Linkedin, Twitter } from 'lucide-react';
import speakers from '@/consts/Speakers';

interface Speaker {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
}



const SpeakerSection: React.FC = () => {
  return (
    <section
    id="speakers"
    className="relative 
    py-16 px-8 bg-cover bg-center bg-no-repeat"
    // bg-gradient-to-b from-[#121212] to-[#1a1a1a]
    // style={{ backgroundImage: "url('/BackgroundEffects.png')" }}
  >

    <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-text-gradient mb-12">
      Speakers
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {speakers.map((speaker, index) => (
        <div key={index} className="bg-stone-900 rounded-2xl shadow-md p-8">
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
            <p className="text-gray-600 mb-4">{speaker.position}</p>
            
            <div className="flex space-x-4">
              {speaker.linkedin && (
                <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="text-2xl text-blue-600" />
                </a>
              )}
              {speaker.twitter && (
                <a href={speaker.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="text-2xl text-blue-400" />
                </a>
              )}
              {speaker.github && (
                <a href={speaker.github} target="_blank" rel="noopzener noreferrer">
                  <Github className="text-2xl text-gray-800" />
                </a>
              )}
              {speaker.website && (
                <a href={speaker.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="text-2xl text-gray-600" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default SpeakerSection;