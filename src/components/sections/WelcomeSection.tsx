import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
 
import AudioPlayer from '../ui/AudioPlayer';
import ScrollDownIndicator from '../ui/ScrollDownIndicator';
import ParticleEffect from '../ui/ParticleEffect';

const fairytaleLines = [
  "Once upon a time, in a kingdom kissed by sunlight... ",
  "A princess was born on 28th April 2005 ",
  "Her name was Dipannita.",
  "She had eyes that could speak to butterflies...",
  "And a heart that loved every living creature. ",
  "This is her magical world — and today is her day. "
];

const WelcomeSection: React.FC = () => {
  const [sunflowerBloom, setSunflowerBloom] = useState(false);
  const [sparkle, setSparkle] = useState(false);
  const [butterflyActive, setButterflyActive] = useState(false);
  const [princessWink, setPrincessWink] = useState(false);

  // Bonus interactions
  const handleButterflyClick = useCallback(() => {
    setButterflyActive(true);
    setTimeout(() => setButterflyActive(false), 5000);
  }, []);

  const handlePrincessHover = useCallback(() => setSparkle(true), []);
  
  const handleGlassesClick = useCallback(() => {
    setPrincessWink(true);
    setTimeout(() => setPrincessWink(false), 1200);
  }, []);

  // Sunflower blooms as user scrolls
  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) setSunflowerBloom(true);
      else setSunflowerBloom(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-fairy-tale-gradient">
    
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        {fairytaleLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.7, duration: 0.8 }}
            className="overflow-hidden"
          >
            <span className="text-2xl md:text-4xl font-dancing text-pink drop-shadow-lg animate-glow-underline sparkle-text">
              {line}
            </span>
          </motion.div>
        ))}
      </div>
      <ParticleEffect type="both" count={40} />
      <AudioPlayer />
      <ScrollDownIndicator />
    </section>
  );
};

export default WelcomeSection;