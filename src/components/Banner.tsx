//import React from 'react';
import Banner_img from '../assets/banner-stack.png';
const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build Your Ideal <br></br>
            <span className=" tracking-tight bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-[650px] mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
            <button className="px-6 py-3 text-sm font-semibold text-white rounded-2xl bg-linear-to-r from-orange-500 to-pink-600 transition-opacity hover:opacity-95 shadow-sm">
              Explore Technologies
            </button>
            <button className="px-8 py-2 bg-white border-2 rounded-2xl border-gray-100 text-gray-500 text-base hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Banner_img}
            alt="banner img"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
