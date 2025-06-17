import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import ParticleEffect from '../ui/ParticleEffect';
import { profileData } from '../../utils/data';

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="section bg-princess-pink-100 relative py-20">
      <ParticleEffect type="sparkles" count={15} />
      
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-dancing text-center text-princess-pink-600 mb-16"
        >
          Meet the Birthday Princess
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-2/5 flex justify-center"
          >
            <div className="relative" style={{ perspective: 800 }}>
              <motion.div
                initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
                whileHover={{ rotateX: 15, rotateY: 15, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-royal-purple-300 to-princess-pink-300 shadow-xl flex items-center justify-center preserve-3d transform"
              >
                <img
                  src="/gallery/her5.jpg"
                  alt="Princess Dipannita"
                  className="w-full h-full object-cover select-none"
                  style={{ objectPosition: '-10% 0%' }}
                  draggable={false}
                />
              </motion.div>
            </div>
          </motion.div>
          
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left mb-8"
            >
              <h3 className="text-3xl font-playfair text-royal-purple-700 mb-2">{profileData.name}</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-2">
                {profileData.nicknames.map((nickname, index) => (
                  <span key={index} className="inline-block bg-princess-pink-200 px-3 py-1 rounded-full text-princess-pink-700">
                    {nickname}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-medium">Birthday:</span> {profileData.birthday}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xl font-dancing text-princess-pink-600 mb-4">Wonderful Traits</h4>
                <div className="space-y-3">
                  {profileData.traits.map((trait, index) => (
                    <Card key={index} delay={index * 0.1} className="flex items-center">
                      <span className="text-2xl mr-3">{trait.emoji}</span>
                      <div>
                        <h5 className="font-medium text-gray-800">{trait.name}</h5>
                        <p className="text-sm text-gray-600">{trait.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-dancing text-princess-pink-600 mb-4 mt-6 md:mt-0">Favorite Things</h4>
                <div className="grid grid-cols-2 gap-3">
                  {profileData.interests.map((interest, index) => (
                    <Card key={index} delay={index * 0.1} className="text-center p-4">
                      <div className="text-3xl mb-2">{interest.emoji}</div>
                      <div className="font-medium text-gray-800">{interest.name}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;