export interface ProfileTrait {
  name: string;
  emoji: string;
  description: string;
}

export interface ProfileInterest {
  name: string;
  emoji: string;
}

export interface Gift {
  id: number;
  name: string;
  emoji: string;
  description: string;
  animation?: string;
}

export interface PhotoItem {
  id: number;
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

// Profile data
export const profileData = {
  name: "Dipannita Chowdhury",
  nicknames: ["Penguin 🐧", "SunFlower 🌻"],
  birthday: "28th April 2005",
  traits: [
 
    { name: "Animal Lover", emoji: "🐶", description: "Cares deeply for all creatures" },
    { name: "Kind", emoji: "💓", description: "Has a heart full of compassion" },
    { name: "Sensitive", emoji: "🥹", description: "Feels deeply and empathetically" },
    { name: "Cute", emoji: "😍", description: "Adorably charming in every way" },
    { name: "Caring", emoji: "🤗", description: "Always looking out for others" }
   
  ],
  interests: [
    { name: "Ice Cream", emoji: "🍦" },
    { name: "Drawing", emoji: "🎨" },
    { name: "Dancing", emoji: "💃" },
    { name: "Travelling", emoji: "✈️" },
    { name: "Sunflowers", emoji: "🌻" },
    { name: "Good Food", emoji: "🍱" }
  ]
};

// Gift ideas
export const giftData: Gift[] = [
  {
    id: 1,
    name: "Sunflower Garden",
    emoji: "🌻",
    description: "A field of endless sunflowers, just for you to wander through and enjoy their beauty.",
    animation: "sunflower-grow"
  },
  {
    id: 2,
    name: "Ice Cream Land",
    emoji: "🍦",
    description: "A magical world where your favorite ice cream flavors come to life in a sweet paradise.",
    animation: "ice-cream-pop"
  },
  {
    id: 3,
    name: "Jar of Happy Memories",
    emoji: "✨",
    description: "A collection of wonderful moments and memories that will make you smile whenever you need it.",
    animation: "memory-float"
  },
  {
    id: 4,
    name: "World Explorer Ticket",
    emoji: "🌍",
    description: "A golden ticket to explore all the beautiful destinations you've dreamed of visiting.",
    animation: "ticket-shine"
  },
  {
    id: 5,
    name: "Magical Sketchpad",
    emoji: "🎨",
    description: "A sketchpad where your imagination comes to life, turning your drawings into reality.",
    animation: "sketch-draw"
  }
];

// Placeholder photos - in a real implementation, these would be actual photos of Dipannita
export const photoGallery: PhotoItem[] = [
  { 
    id: 1, 
    src: "https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=800", 
    alt: "Sunflower field", 
    caption: "Surrounded by favorite flowers",
    tag: "Nature Lover"
  },
  { 
    id: 2, 
    src: "https://images.pexels.com/photos/1405761/pexels-photo-1405761.jpeg?auto=compress&cs=tinysrgb&w=800", 
    alt: "Girl with ice cream", 
    caption: "Sweet tooth moments",
    tag: "Foodie"
  },
  { 
    id: 3, 
    src: "https://images.pexels.com/photos/1470165/pexels-photo-1470165.jpeg?auto=compress&cs=tinysrgb&w=800", 
    alt: "Art supplies", 
    caption: "Creating masterpieces",
    tag: "Artist"
  },
  { 
    id: 4, 
    src: "https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&cs=tinysrgb&w=800", 
    alt: "Dancing silhouette", 
    caption: "Dancing queen",
    tag: "Dancer"
  },
  { 
    id: 5, 
    src: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800", 
    alt: "Travel destination", 
    caption: "Adventure awaits",
    tag: "Explorer"
  },
  { 
    id: 6, 
    src: "https://images.pexels.com/photos/2773227/pexels-photo-2773227.jpeg?auto=compress&cs=tinysrgb&w=800", 
    alt: "Study materials", 
    caption: "Academic excellence",
    tag: "Scholar"
  }
];

// Birthday letter content
export const letterContent = `
To My Penguin 🐧,

You are the sunflower in a garden of roses —
the one who brightens everything without even trying.

Your smile makes my day, your kindness moves the world.
This birthday, I want nothing but to see you happy,
successful, and glowing like the queen you are.

May your life be filled with joy, travels, food, and infinite art.

— Someone who truly admires you 💘
`;