import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Gallery3DImageProps {
  src: string;
  alt: string;
  index: number;
}

/**
 * A single 3D-animated gallery image with hover and click effects.
 */
const Gallery3DImage: React.FC<Gallery3DImageProps> = ({ src, alt, index }) => {
  // Random initial rotation for scattered look
  const initialRotate = Math.random() * 40 - 20; // -20deg to +20deg
  const motionRotate = useMotionValue(initialRotate);
  const springRotate = useSpring(motionRotate, { stiffness: 100, damping: 12 });

  const handleMouseEnter = () => {
    motionRotate.set(initialRotate + (Math.random() * 10 - 5));
  };
  const handleMouseLeave = () => {
    motionRotate.set(initialRotate);
  };
  const handleClick = () => {
    motionRotate.set(initialRotate + (Math.random() * 80 - 40));
    setTimeout(() => motionRotate.set(initialRotate), 800);
  };

  return (
    <motion.div
      className="gallery-3d-image shadow-xl rounded-lg overflow-hidden cursor-pointer bg-white"
      style={{
        rotate: springRotate,
        zIndex: 50 - index,
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
      }}
      whileHover={{ scale: 1.09, boxShadow: '0 12px 32px 8px #ffb6e6' }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover select-none pointer-events-none"
        draggable={false}
        loading="lazy"
      />
    </motion.div>
  );
};

export default Gallery3DImage;
