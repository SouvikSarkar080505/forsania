import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-fairy-tale-gradient flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="mb-8"
      >
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-full h-full text-princess-pink-400" 
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 8c-3 4.5-4.5 6.75-4.5 10.5 0 3 1.5 4.5 4.5 4.5s4.5-1.5 4.5-4.5c0-3.75-1.5-6-4.5-10.5z"
                fill="currentColor"
              />
              <path
                d="M50 77c-3 4.5-4.5 6.75-4.5 10.5 0 3 1.5 4.5 4.5 4.5s4.5-1.5 4.5-4.5c0-3.75-1.5-6-4.5-10.5z"
                fill="currentColor"
              />
              <path
                d="M77 50c4.5-3 6.75-4.5 10.5-4.5 3 0 4.5 1.5 4.5 4.5s-1.5 4.5-4.5 4.5c-3.75 0-6-1.5-10.5-4.5z"
                fill="currentColor"
              />
              <path
                d="M8 50c-4.5-3-6.75-4.5-10.5-4.5-3 0-4.5 1.5-4.5 4.5s1.5 4.5 4.5 4.5c3.75 0 6-1.5 10.5-4.5z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden"
      >
        <div className="h-full bg-gradient-to-r from-princess-pink-400 to-royal-purple-500 rounded-full"></div>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xl font-dancing text-royal-purple-700"
      >
        Creating for Sania...
      </motion.p>
    </div>
  );
};

export default Loader;
