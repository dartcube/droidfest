import React from "react";
import { timelineEvents } from "@/consts/TimelineEvents";

const Timeline = () => {
  return (
    <div
      id="workshop"
      className="relative flex flex-col items-center w-full py-16 bg-gray-900"
    >
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-20">
        <span className="text-white">Our</span>{" "}
        <span className="text-transparent bg-clip-text bg-text-gradient">
          Agenda
        </span>
      </h2>

      <div className="absolute h-full w-1 bg-gray-700 hidden md:block"></div>

      <div className="flex flex-col items-center space-y-16 portrait:space-y-28 portrait:px-4 portrait:w-full">
        {timelineEvents.map((event, index) => (
          <div
            key={event.id}
            className={`relative flex items-center w-full max-w-lg ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } group`}
          >
            <div className="relative z-10 flex items-center justify-center w-8 md:w-10 h-8 md:h-10 bg-white rounded-full shadow-lg animate-pulse">
              <div className="absolute w-full h-full bg-white rounded-full opacity-40 animate-ping"></div>
              <div className="relative z-20 font-bold text-black text-sm md:text-base">
                {index + 1}
              </div>
            </div>

            {index < timelineEvents.length - 1 && (
              <div className="absolute top-12 left-[18px] md:left-[22px] w-1 h-20 bg-gray-700"></div>
            )}

            <div
              className={`absolute w-[calc(100%-4rem)] md:w-64 p-4 bg-transparent hover:bg-white/5 transition-all duration-300 text-white rounded-xl backdrop-blur-[2px] border ${
                index % 2 === 0
                  ? "md:-translate-x-16 md:text-right translate-x-16 text-left"
                  : "translate-x-16 text-left"
              }`}
            >
              {event.title === "Call For Speaker" ? (
                <a
                  href="https://forms.gle/Hn3DPX3eCgPhbYRy5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <h4 className="text-base md:text-lg font-bold">{event.title}</h4>
                </a>
              ) : (
                <h4 className="text-base md:text-lg font-bold">{event.title}</h4>
              )}
              <p className="mt-2 text-xs md:text-sm opacity-60">{event.time}</p>
              <p className="mt-2 text-xs md:text-sm opacity-40 group-hover:opacity-100 transition-opacity duration-300">
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
