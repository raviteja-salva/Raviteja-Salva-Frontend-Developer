import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, className }) => (
  <motion.div 
    className={`bg-teal-900/20 p-4 rounded-xl ${className} hover:bg-teal-900/40 transition-all duration-300`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-lg font-semibold ml-3 text-white">{title}</h3>
    </div>
    <p className="text-xs text-gray-400">{description}</p>
  </motion.div>
);

const FeaturesPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold mb-6 text-gray-400">Featured Assignment</h2>
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       
          <FeatureCard
            title="Trade Optimizer"
            description="Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity."
            icon={<div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>}
          />
          
        
          <FeatureCard
            title="Market Insight"
            description="Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers."
            icon={<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>}
          />

   
          <FeatureCard
            title="Risk Guard"
            description="Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything."
            icon={<div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>}
          />

      <FeatureCard
            title="Portfolio Sync"
            description="Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed."
            icon={<div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>}
          />
          
        
          <FeatureCard
            title="Opportunity Scout"
            description="Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing."
            icon={<div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
