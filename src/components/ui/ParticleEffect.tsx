import React, { useEffect, useRef } from 'react';
import { createSparkles, createButterflies } from '../../utils/animations';

interface ParticleEffectProps {
  type: 'sparkles' | 'butterflies' | 'both';
  count?: number;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ type, count = 20 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (type === 'sparkles' || type === 'both') {
        createSparkles(containerRef.current, count);
      }
      
      if (type === 'butterflies' || type === 'both') {
        createButterflies(containerRef.current, Math.min(count / 4, 10));
      }
    }
    
    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [type, count]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    ></div>
  );
};

export default ParticleEffect;