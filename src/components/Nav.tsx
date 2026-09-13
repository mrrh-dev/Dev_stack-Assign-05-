import { useState } from 'react';
import Logo from '../assets/logo-text.png';
const Nav = () => {
  const [ismenuopen, setismenuopen] = useState(false);
  return (
    <nav className="sticky top-0 bg-white z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="logo img" className="w-32 md:w-40"></img>
          </div>

          <div className="hidden md:block">
            <ul className="text-lg flex gap-6 text-gray-500 font-semibold">
              <li className="text-pink-500 cursor-pointer">Home</li>
              <li className="cursor-pointer">Technologies</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="flex items-center">
            <button className="btn btn-ghost text-gray-500 text-lg">
              Sign in
            </button>
            <button className="btn btn-secondary rounded-2xl">Sign up</button>
          </div>

          <button
            onClick={() => setismenuopen(!ismenuopen)}
            className="md:hidden text-3xl text-gray-600 ml-2"
            aria-label="Toggle menu"
          >
            {ismenuopen ? '✕' : '☰'}
          </button>
        </div>

        {ismenuopen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4">
            <ul className="flex flex-col gap-4 text-lg text-gray-500 font-semibold">
              <li className="text-pink-500 cursor-pointer">Home</li>
              <li className="cursor-pointer">Technologies</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
