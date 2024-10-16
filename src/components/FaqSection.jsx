import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center text-white hover:text-blue-300 transition-colors duration-300"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-300 pb-4"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is EthAi?",
      answer: "EthAi is an AI-powered platform for blockchain analysis and trading insights."
    },
    {
      question: "How can EthAi help me as a Trader?",
      answer: "EthAi provides real-time market analysis and trading signals to inform your decisions."
    },
    {
      question: "Who can use EthAi?",
      answer: "EthAi is designed for both novice and experienced cryptocurrency traders and investors."
    },
    {
      question: "How does EthAi track smart money flow?",
      answer: "EthAi uses advanced algorithms to analyze blockchain transactions and identify patterns of large investors."
    },
    {
      question: "How does EthAi ensure data security?",
      answer: "EthAi employs state-of-the-art encryption and follows strict data protection protocols to safeguard user information."
    }
  ];

  return (
    <div className="min-h-screen bg-[#00161D] flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          Frequently Asked Questions
        </motion.h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;