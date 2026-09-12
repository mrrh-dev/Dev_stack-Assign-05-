import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="space-y-3 space-x-3 mb-6">
        <h1 className="text-5xl font-bold">
          Build Your Ideal <br></br>{' '}
          <span className=" tracking-tight bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-6 text-gray-500">
          Explore frontend, backend, database, and tooling options,<br></br>
          compare them side by side, and put together the stack that fits your
          <br></br>
          next project.
        </p>
        <div className="flex gap-4 mt-10">
          <button className="px-5 py-1 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 transition-opacity hover:opacity-95 shadow-sm">
            Explore Technologies
          </button>
          <button className="hover:bg-gray-200 px-10 py-1.5 bg-white border-3 rounded-2xl border-gray-100 text-gray-400 text-lg">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src="/src/assets/banner-stack.png"></img>
      </div>
    </div>
  );
};

export default Banner;
