import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedLinesProps {
  lines: string[];
  duration?: number; // seconds per line
}

const AnimatedLines: React.FC<AnimatedLinesProps> = ({ lines, duration = 2.5 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, duration * 1000);
    return () => clearTimeout(timeout);
  }, [index, lines.length, duration]);

  return (
    <div className="absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <AnimatePresence mode="wait">
        <motion.div
          key={lines[index]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-dancing text-golden-400 text-shadow drop-shadow-lg"
        >
          {lines[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedLines;
