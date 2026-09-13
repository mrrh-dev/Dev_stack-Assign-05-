//import React from 'react';
import logo from '../assets/logo-text.png';
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex gap-5">
              <p className="text-sm font-medium text-gray-600 transition ">
                GitHub
              </p>
              <p className="text-sm font-medium text-gray-600 transition ">
                Twitter
              </p>
              <p className="text-sm font-medium text-gray-600 transition ">
                LinkedIn
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <p className="block text-sm text-gray-500 ">Home</p>
              <p className="block text-sm text-gray-500 ">Technologies</p>
              <p className="block text-sm text-gray-500 ">Projects</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide ">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <p className="block text-sm text-gray-500 ">About</p>
              <p className="block text-sm text-gray-500 ">Contact</p>
              <p className="block text-sm text-gray-500 ">Careers</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-gray-100 pt-6 text-sm text-gray-400 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
