import React from 'react';
import { timelineEvents } from '@/consts/TimelineEvents';

const Timeline = () => {
  return (
    <div 
    id="workshop"
    className="relative flex flex-col items-center w-full py-16 bg-gray-900">
     
      <h2 className="text-5xl font-bold leading-tight text-center mb-12">
        <span className="text-white">Our</span>{" "}
        <span className="text-transparent bg-clip-text bg-text-gradient">
          Timeline
        </span>
      </h2>

      
      <div className="absolute h-full w-1 bg-gray-700"></div>

      
      <div className="flex flex-col items-center space-y-16">
        {timelineEvents.map((event, index) => (
          <div
            key={event.id}
            className={`relative flex items-center w-full max-w-lg ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            } group`}
          >
            
            <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg animate-pulse">
              <div className="absolute w-full h-full bg-white rounded-full opacity-40 animate-ping"></div>
              <div className="relative z-20 font-bold text-black">{index + 1}</div>
            </div>

           
            {index < timelineEvents.length - 1 && (
              <div className="absolute top-12 left-[22px] w-1 h-20 bg-gray-700"></div>
            )}

           
            <div
              className={`absolute w-64 p-4 bg-gray-800 text-white rounded-lg shadow-lg transform transition-all ${
                index % 2 === 0 ? '-translate-x-16 text-right' : 'translate-x-16'
              }`}
            >
              <h4 className="text-lg font-bold">{event.title}</h4>
              <p className="mt-2 text-sm opacity-60">{event.time}</p>
              <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
