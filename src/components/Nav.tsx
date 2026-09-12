import React from 'react';

const Nav = () => {
  return (
    <div className="container mx-auto my-6 flex justify-between items-center">
      <div>
        <img src="/src/assets/logo-text.png"></img>
      </div>
      <div>
        <ul className="text-lg flex justify-between gap-6 text-gray-500 font-semibold">
          <li className="text-pink-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className="btn btn-ghost text-gray-500 text-lg">Sign in</button>
        <button className="btn btn-secondary rounded-2xl">Sign up</button>
      </div>
    </div>
  );
};

export default Nav;
