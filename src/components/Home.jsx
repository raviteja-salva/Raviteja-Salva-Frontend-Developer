import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen text-white p-8 relative overflow-hidden">
      
      <main className="text-center mt-20 relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          When Innovation
          <br />
          Meets <span className="text-blue-400">Investment</span>
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Empowering Trading Through Advanced Technology
        </motion.p>
        <motion.button 
          className="px-8 py-3 bg-pink-600 rounded-full text-lg font-semibold hover:bg-pink-500 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Open dApp
        </motion.button>
      </main>

     
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-yellow-500 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
    </div>
  );
};

export default Home;