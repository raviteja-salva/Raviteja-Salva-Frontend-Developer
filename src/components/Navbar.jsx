import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <span className="font-bold text-xs">Eth</span>
          </div>
          <span className="font-bold text-xl">EthAI</span>
        </div>
        <ul className="hidden md:flex space-x-6">
          {['Features', 'Why Us', 'Tokenomics', 'Roadmap'].map((item) => (
            <li key={item} className="hover:text-blue-400 transition-colors cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
        <div className="space-x-4">
          <button className="px-4 py-2 rounded border border-white hover:bg-gray-700 transition-colors">
            Log in
          </button>
          <button className="px-4 py-2 rounded bg-blue-400 hover:bg-blue-300 transition-colors">
            Whitepaper
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  