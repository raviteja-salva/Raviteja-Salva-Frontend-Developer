import React from 'react';
import { motion } from 'framer-motion';

const ExploreDAppSection = () => {
  return (
    <div className="min-h-screen bg-[#00161D] flex items-center justify-center p-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-[#001E24] rounded-3xl p-10 relative overflow-hidden"
      >
       
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 blur-xl"></div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Explore Our <span className="text-cyan-400">dApp</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-cyan-100 text-lg mb-8 text-center"
          >
            EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. 
            By tracking smart money flows, monitoring key wallets, and providing real-time market 
            insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI 
            features for asset recommendations, market analysis, and personalized crypto Q&A, 
            making it the ultimate tool for both novice and experienced traders.
          </motion.p>
          <motion.div 
            className="flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0 0 0 0 rgba(79, 209, 197, 0.7)", "0 0 0 20px rgba(79, 209, 197, 0)"] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
            >
              Open dApp
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreDAppSection;