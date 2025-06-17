import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedLines from '../ui/AnimatedLines';
import ParticleEffect from '../ui/ParticleEffect';

const ClosingSection: React.FC = () => {
  return (
    <section id="closing" className="section bg-night-sky-gradient text-white relative">
      <ParticleEffect type="sparkles" count={50} />
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-5xl font-dancing mb-8 text-golden-400 text-shadow-light">
              Happy Birthday, Dipannita
            </h2>
            
            <p className="text-2xl font-playfair text-princess-pink-200 italic mb-6">
              "The stars shine a little brighter today,
              <br />because it's your birthday 💫"
            </p>
            
            <p className="text-xl text-white/80 mb-12">
              Always keep shining, Dipannita.
              <br />You are loved. Forever.
            </p>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-princess-pink-500 to-royal-purple-500 px-8 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              href="#"
              download="/public/card/Princess_Dipannita_Birthday_Card.png"
            >
              💌 Download Royal Birthday Card
            </motion.a>
          </div>
          
          {/* Animated shooting star */}
          <div className="relative h-48 w-full overflow-hidden my-12">
            <motion.div
              initial={{ x: "-100%", y: "0%" }}
              animate={{ x: "200%", y: "100%" }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 7
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.7), 0 0 40px 20px rgba(255, 255, 255, 0.5)",
                filter: "blur(1px)"
              }}
            />
            
            {/* Animated romantic & thankful lines */}
            <AnimatedLines
              lines={[
                "Dipannita",
                "I am so grateful to have a friend like you.",
                "You are my comfort zone, my safe place.",
                "Every moment with you is special.",
                "You make my day, every day.",
                "And you are always my most beautiful memory.",
                "Happy Birthday, Dipannita!"
              ]}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 text-white/60 text-sm"
          >
            Made with 💖 for Dipannita's 20th Birthday
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;