import React from 'react';

interface SpeakerCardProps {
  name: string;
  description: string;
  imageSrc: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, description, imageSrc }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-md p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col items-start">

      <div className="w-full h-40 bg-gray-800 rounded-md mb-4 overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-white text-lg font-semibold">{name}</h3>
      <p className="text-gray-300 text-sm mt-2">{description}</p>

      <button className="absolute bottom-4 right-4 bg-purple-500 text-white rounded-full p-2 hover:bg-purple-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

const Speakers: React.FC = () => {
  const speakersData = [
    { name: 'Speaker 1', description: 'Lorem ipsum dolor sit amet consectetur.', imageSrc: '/speaker.png' },
    { name: 'Speaker 2', description: 'Libero mattis ut posuere a.', imageSrc: '/speaker.png' },
    { name: 'Speaker 3', description: 'Velit id tellus enim mattis sed elit sapien.', imageSrc: '/speaker.png' },
    { name: 'Speaker 4', description: 'Consectetur adipiscing elit.', imageSrc: '/speaker.png' },
    { name: 'Speaker 5', description: 'Aenean commodo ligula eget dolor.', imageSrc: '/speaker.png' },
    { name: 'Speaker 6', description: 'Donec quam felis ultricies nec.', imageSrc: '/speaker.png' },
  ];

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
        {speakersData.map((speaker, index) => (
          <SpeakerCard
            key={index}
            name={speaker.name}
            description={speaker.description}
            imageSrc={speaker.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Speakers;
