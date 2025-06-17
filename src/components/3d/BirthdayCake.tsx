import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

interface CakeProps {
  isClicked: boolean;
}

interface CandleProps {
  position: [number, number, number];
}

export const Cake: React.FC<CakeProps> = ({ isClicked }) => {
  const cakeRef = useRef<THREE.Group>(null);
  
  // Animation for when the cake is clicked
  const { scale, position, rotation } = useSpring({
    scale: isClicked ? [1.2, 1, 1.2] : [1, 1, 1],
    position: isClicked ? [0, -0.5, 0] : [0, 0, 0],
    rotation: isClicked ? [0, Math.PI * 2, 0] : [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Gentle floating animation
  useFrame((state) => {
    if (cakeRef.current) {
      cakeRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      cakeRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <animated.group
      ref={cakeRef}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      {/* Bottom tier */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.7, 32]} />
        <meshStandardMaterial color="#FFB9D6" />
      </mesh>
      
      {/* Middle tier */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.5, 32]} />
        <meshStandardMaterial color="#FF9BC8" />
      </mesh>
      
      {/* Top tier */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
        <meshStandardMaterial color="#FF7CB7" />
      </mesh>
      
      {/* Decorations - little spheres */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 0.8,
              0.35,
              Math.sin(angle) * 0.8,
            ]}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#FFD700" />
          </mesh>
        );
      })}
      
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 0.55,
              0.95,
              Math.sin(angle) * 0.55,
            ]}
          >
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#FF1493" />
          </mesh>
        );
      })}
      
      {[...Array(4)].map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 0.3,
              1.4,
              Math.sin(angle) * 0.3,
            ]}
          >
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial color="#1E90FF" />
          </mesh>
        );
      })}
    </animated.group>
  );
};

export const Candle: React.FC<CandleProps> = ({ position }) => {
  const flameRef = useRef<THREE.PointLight>(null);
  
  // Animate the flame flickering
  useFrame((state) => {
    if (flameRef.current) {
      flameRef.current.intensity = 1 + Math.sin(state.clock.getElapsedTime() * 10) * 0.2;
    }
  });
  
  return (
    <group position={position}>
      {/* Candle stick */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      
      {/* Flame */}
      <mesh position={[0, 0.25, 0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial 
          color="#FFDD33" 
          emissive="#FF4500"
          emissiveIntensity={2}
        />
      </mesh>
      
      {/* Flame light */}
      <pointLight 
        ref={flameRef}
        position={[0, 0.25, 0]} 
        color="#FF7700" 
        intensity={1.5} 
        distance={3}
      />
    </group>
  );
};