import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto flex justify-between items-center ">
      <div className="space-y-3 space-x-3 mb-6">
        <h1 className="text-4xl font-bold">
          Build Your Ideal <br></br> Development Stack
        </h1>
        <p className="">
          Explore frontend, backend, database, and tooling options,<br></br>
          compare them side by side, and put together the stack that fits your
          <br></br>
          next project.
        </p>
        <div className="flex gap-4">
          <button className="btn btn-secondary rounded-2xl">
            Explore Technologies
          </button>
          <button className="btn rounded-xl">Learn More</button>
        </div>
      </div>
      <div>
        <img src="/src/assets/banner-stack.png"></img>
      </div>
    </div>
  );
};

export default Banner;
