import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollDownIndicator: React.FC = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={scrollDown}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="flex flex-col items-center"
      >
        <span className="text-princess-pink-600 text-sm mb-2 font-dancing">Scroll Down</span>
        <ChevronDown className="text-princess-pink-600" size={24} />
      </motion.div>
    </motion.div>
  );
};

export default ScrollDownIndicator;