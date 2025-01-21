import React from 'react';

const Partners: React.FC = () => {
  const partnersData = [
    { id: 1, logoSrc: '/speaker.png' },
    { id: 2, logoSrc: '/speaker.png' },
    { id: 3, logoSrc:'/speaker.png' },
    { id: 4, logoSrc: '/speaker.png' },
    { id: 5, logoSrc:'/speaker.png' },
    { id: 6, logoSrc:'/speaker.png' },
  ];

  return (
    <section
      id="partners"
      className="relative
      py-16 px-8 bg-cover bg-center bg-no-repeat"
      // bg-gradient-to-b from-[#121212] to-[#1a1a1a] 
      // style={{ backgroundImage: "url('/BackgroundEffects.png')" }}
    >

      <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 mb-12">
        Our Partners
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
        {partnersData.map((partner) => (
          <div
            key={partner.id}
            className="bg-white/10 backdrop-blur-lg rounded-md p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex justify-center items-center h-40"
          >
            <img
              src={partner.logoSrc}
              alt={`Partner ${partner.id}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button className="bg-purple-500 text-white rounded-full p-3 shadow-lg hover:bg-purple-600">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button className="bg-purple-500 text-white rounded-full p-3 shadow-lg hover:bg-purple-600">
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Partners;
