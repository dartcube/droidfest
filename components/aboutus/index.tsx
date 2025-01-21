import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      id="about-us"
      className="relative flex items-center justify-center w-full py-20 px-8 relative"
      // style={{ backgroundImage: "url('/BackgroundEffects.png')" }}
    >
     

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/Group-15.png"
            alt="Abstract Shapes"
            className="w-full md:w-3/4 lg:w-2/3 drop-shadow-lg"
          />
        </div>

        <div className="text-white">
          <h2 className="text-5xl font-bold leading-tight">
            <span className="text-white">About</span>{" "}
            <span className="text-transparent bg-clip-text bg-text-gradient ">
              Us.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="mt-8 px-8 py-3 bg-purple-500 text-white font-semibold text-lg rounded-full hover:bg-purple-600">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
