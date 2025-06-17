import React, { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PresentationControls } from '@react-three/drei';
import { Candle, Cake } from '../3d/BirthdayCake';
import ParticleEffect from '../ui/ParticleEffect';

const CakeSection: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      
      // Trigger confetti after a short delay
      setTimeout(() => {
        setShowConfetti(true);
        
        // Show celebration message
        setTimeout(() => {
          setShowMessage(true);
        }, 1000);
      }, 500);
    }
  };

  return (
    <section id="cake" className="section bg-gradient-to-b from-royal-purple-100 to-princess-pink-100 relative">
      <ParticleEffect type="sparkles" count={25} />
      
      {/* Candles */}
      <div className="absolute top-10 left-10 text-6xl animate-pulse-soft">🕯️</div>
      <div className="absolute top-8 right-14 text-5xl animate-pulse-soft" style={{ animationDelay: "1s" }}>🕯️</div>
      <div className="absolute bottom-20 left-16 text-5xl animate-pulse-soft" style={{ animationDelay: "0.5s" }}>🕯️</div>
      <div className="absolute bottom-24 right-12 text-6xl animate-pulse-soft" style={{ animationDelay: "1.5s" }}>🕯️</div>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-dancing text-center text-princess-pink-600 mb-8"
      >
        The Magical Cake Celebration
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-md mx-auto text-center mb-8"
      >
        <p className="text-lg text-gray-700">
          Click on the cake to celebrate Dipannita's birthday with a special surprise!
        </p>
      </motion.div>
      
      <div className="relative w-full h-96 mb-8">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>  
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />
          
          <Suspense fallback={null}>
            <PresentationControls
              global
              snap
              rotation={[0, 0, 0]}
              polar={[0, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <group position={[0, -1, 0]} onClick={handleClick}>
                <Cake isClicked={isClicked} />
                {!isClicked && <Candle position={[0, 1.8, 0]} />}
              </group>
            </PresentationControls>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>
      
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                background: `hsl(${Math.random() * 360}, 100%, 50%)`,
                borderRadius: `${Math.random() > 0.5 ? '50%' : '0'}`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      )}
      
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8"
        >
          <h3 className="text-3xl md:text-4xl font-dancing text-princess-pink-600 mb-4">
            Happy Birthday Princess Dipannita!
          </h3>
          <p className="text-xl text-royal-purple-700">
            You deserve the world 💖
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default CakeSection;