import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import ParticleEffect from '../ui/ParticleEffect';
import { giftData } from '../../utils/data';

const GiftsSection: React.FC = () => {
  const [openGift, setOpenGift] = useState<number | null>(null);

  const handleGiftClick = (id: number) => {
    if (openGift === id) {
      setOpenGift(null);
    } else {
      setOpenGift(id);
    }
  };

  return (
    <section id="gifts" className="section bg-royal-purple-100 relative">
      <ParticleEffect type="sparkles" count={25} />
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-dancing text-center text-princess-pink-600 mb-8"
      >
        The Gift Room
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-md mx-auto text-center mb-12"
      >
        <p className="text-lg text-gray-700">
          Click on the gifts to reveal magical presents made especially for you!
        </p>
      </motion.div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftData.map((gift, index) => (
            <Card 
              key={gift.id} 
              delay={index * 0.1} 
              className={`cursor-pointer h-64 relative overflow-hidden ${
                openGift === gift.id ? 'bg-gradient-to-br from-golden-100 to-golden-300' : ''
              }`}
              onClick={() => handleGiftClick(gift.id)}
            >
              <AnimatePresence mode="wait">
                {openGift === gift.id ? (
                  <motion.div
                    key="opened"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="text-6xl mb-4 animate-float">{gift.emoji}</div>
                    <h3 className="text-xl font-playfair text-royal-purple-700 mb-2">{gift.name}</h3>
                    <p className="text-gray-700 text-sm">{gift.description}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="unopened"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="text-6xl mb-4 transform transition-transform hover:scale-110">🎁</div>
                    <p className="text-lg font-dancing text-princess-pink-600">Click to unwrap</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Sparkles when open */}
              {openGift === gift.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-sparkle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 5 + 2}px`,
                        height: `${Math.random() * 5 + 2}px`,
                        background: 'white',
                        borderRadius: '50%',
                        boxShadow: '0 0 8px 2px rgba(255, 215, 0, 0.8)',
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${Math.random() * 2 + 1}s`
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;