import React from 'react';
import { motion } from 'framer-motion';
import Gallery3DImage from '../ui/Gallery3DImage';
import ParticleEffect from '../ui/ParticleEffect';

// Generate an array of image filenames: her1.jpg, her2.jpg, ..., her50.jpg
const imageFilenames = Array.from({ length: 50 }, (_, i) => `/gallery/her${i + 1}.jpg`);

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="relative min-h-screen w-full py-16 px-4 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-50 overflow-x-hidden">
      <ParticleEffect type="sparkles" count={32} />
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-dancing text-center text-pink-400 mb-10 drop-shadow-lg tracking-widest"
      >
        Magical Gallery of Dipannita
      </motion.h2>

      <div className="gallery-3d-grid flex flex-wrap justify-center gap-8 md:gap-12 max-w-7xl mx-auto">
        {imageFilenames.map((src, idx) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="animate-fade-in"
          >
            <Gallery3DImage
              src={src}
              alt={`Dipannita photo ${idx + 1}`}
              index={idx}
            />
          </motion.div>
        ))}
      </div>
      <div className="text-center text-pink-400 mt-8 text-lg font-dancing animate-fade-in">
        {imageFilenames.length === 0 && (
          <span>No images found. Please add images to <code>/public/gallery/her1.jpg</code> ... <code>her50.jpg</code>.</span>
        )}
      </div>
    </section>
  );
};

export default GallerySection;