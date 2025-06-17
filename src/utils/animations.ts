import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animate elements on scroll
export const initScrollAnimations = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => el.classList.add('visible'),
      onLeaveBack: () => el.classList.remove('visible')
    });
  });
};

// Text reveal animation
export const textReveal = (element: string | Element, delay = 0) => {
  return gsap.from(element, {
    duration: 1.5,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    delay
  });
};

// Floating animation
export const floatAnimation = (element: string | Element, options = {}) => {
  const defaults = {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  };
  
  return gsap.to(element, { ...defaults, ...options });
};

// Create butterfly animations
export const createButterflies = (container: HTMLElement, count = 5) => {
  for (let i = 0; i < count; i++) {
    const butterfly = document.createElement('div');
    butterfly.classList.add('butterfly');
    
    // Random position and scale
    butterfly.style.left = `${Math.random() * 100}%`;
    butterfly.style.top = `${Math.random() * 100}%`;
    butterfly.style.transform = `scale(${0.5 + Math.random()})`;
    
    // Random animation duration and delay
    butterfly.style.animationDuration = `${15 + Math.random() * 10}s`;
    butterfly.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(butterfly);
    
    // Animate butterfly path
    gsap.to(butterfly, {
      bezier: {
        type: 'soft',
        values: [
          { x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 },
          { x: Math.random() * 400 - 200, y: Math.random() * 200 - 100 },
          { x: Math.random() * 200 - 100, y: Math.random() * 400 - 200 },
          { x: Math.random() * 400 - 200, y: Math.random() * 400 - 200 }
        ],
        autoRotate: true
      },
      duration: 20 + Math.random() * 10,
      repeat: -1,
      ease: 'power1.inOut'
    });
  }
};

// Create sparkles
export const createSparkles = (container: HTMLElement, count = 20) => {
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Random position, size and animation delay
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.width = `${3 + Math.random() * 4}px`;
    sparkle.style.height = sparkle.style.width;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    
    container.appendChild(sparkle);
  }
};

// Confetti explosion
export const triggerConfetti = () => {
  // This would be implemented with a confetti library
  // or custom particle system if needed
  console.log('Confetti triggered!');
};