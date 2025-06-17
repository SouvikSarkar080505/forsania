import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ParticleEffect from '../ui/ParticleEffect';
import { letterContent } from '../../utils/data';

const LetterSection: React.FC = () => {
  const letterRef = useRef<HTMLDivElement>(null);

  return (
    <section id="letter" className="section bg-gradient-to-b from-princess-pink-100 to-white relative">
      <ParticleEffect type="butterflies" count={8} />
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-dancing text-center text-princess-pink-600 mb-16"
      >
        A Letter From the Heart
      </motion.h2>
      
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          ref={letterRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="bg-[url('https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center p-8 md:p-12 rounded-lg shadow-xl relative overflow-hidden"
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-white bg-opacity-60"></div>
          
          {/* Letter content */}
          <div className="relative z-10">
            <div className="text-xl md:text-2xl font-dancing text-gray-800 whitespace-pre-line leading-relaxed">
              {letterContent}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-4xl rotate-12 opacity-60">💌</div>
          <div className="absolute bottom-4 left-4 text-4xl -rotate-12 opacity-60">✨</div>
        </motion.div>
      </div>
    </section>
  );
};

export default LetterSection;