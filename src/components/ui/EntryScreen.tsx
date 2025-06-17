import React from 'react';

interface EntryScreenProps {
  onEnter: () => void;
}

const EntryScreen: React.FC<EntryScreenProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-pink-200 to-yellow-100 relative">
      {/* Sunflower motif */}
      <div className="absolute top-8 left-8 text-7xl animate-float">🌻</div>
      <div className="absolute bottom-8 right-8 text-7xl animate-float-slow">🌻</div>
      <h1 className="text-5xl font-dancing text-pink-500 mb-8 drop-shadow-lg text-center">Welcome to Sania's Birthday!</h1>
      <p className="text-xl text-pink-700 mb-12 text-center max-w-xl">
        A surprise awaits you. Click below to enter!
      </p>
      <button
        onClick={onEnter}
        className="bg-gradient-to-r from-princess-pink-500 to-royal-purple-500 text-white px-12 py-5 rounded-full shadow-xl text-2xl font-bold tracking-wide hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-pink-300"
      >
        🌻 Click Here 🌻
      </button>
    </div>
  );
};

export default EntryScreen;
