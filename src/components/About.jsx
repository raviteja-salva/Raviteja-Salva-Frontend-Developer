import React from 'react';
import { motion } from 'framer-motion';

const FeatureItem = ({ icon, title, description, highlighted }) => (
  <motion.div 
    className={`p-4 ${highlighted ? 'border border-yellow-400' : ''}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {icon}
    <h3 className="text-cyan-400 text-lg font-semibold mt-2">{title}</h3>
    <p className="text-gray-400 text-sm mt-1">{description}</p>
  </motion.div>
);

const AboutEthAi = () => {
  return (
    <div className="bg-[#0c1220] text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About EthAi
        </motion.h1>
        <motion.p 
          className="text-gray-400 text-center mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At EthAi, we're all about making crypto trading easier and more intuitive. We provide tools
          that help traders keep up with all new market trends, track top traders' movements.
        </motion.p>
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-900 px-6 py-2 rounded-full font-semibold transition duration-300">
            Read more
          </button>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-6">
          <FeatureItem 
            icon={<svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
            title="Stay Ahead"
            description="No more guesswork—get clear, trustable insights."
          />
          <FeatureItem 
            icon={<svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
            title="Know Your Assets"
            description="Always stay on top of how your investments are performing."
          />
          <FeatureItem 
            icon={<svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            title="Simple, Not Overwhelming"
            description="Our tools are designed to make complex market analysis easy to understand and act on."
          />
          <FeatureItem 
            icon={<svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            title="Future-Proof"
            description="We're constantly improving, adding new features to help you make the most informed decisions possible."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutEthAi;