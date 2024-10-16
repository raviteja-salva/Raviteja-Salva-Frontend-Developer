import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const socialLinks = [
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/ethai' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/ethai' },
    { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/ethai' },
    { icon: FaDiscord, label: 'Discord', href: 'https://discord.gg/ethai' },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#000000] to-[#1C1C1C] text-white p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">Eth</span>
              </div>
              <span className="text-xl font-bold">EthAi</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="hover:text-blue-400 transition-transform transform hover:scale-110 duration-300"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </motion.div>
        </div>
        
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center md:text-right mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            "Designed for traders of today, just like you."
          </h2>
        </motion.div>
        
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <input
            type="email"
            placeholder="What's your work email?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-auto px-4 py-2 rounded-full bg-[#002D3D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300"
          >
            Get Started
          </button>
        </motion.form>
      </div>
    </footer>
  );
};

export default Footer;
