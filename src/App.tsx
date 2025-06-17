import React, { useState, useEffect } from 'react';
import WelcomeSection from './components/sections/WelcomeSection';
import ProfileSection from './components/sections/ProfileSection';
import CakeSection from './components/sections/CakeSection';
import GiftsSection from './components/sections/GiftsSection';
import LetterSection from './components/sections/LetterSection';
import GallerySection from './components/sections/GallerySection';
import ClosingSection from './components/sections/ClosingSection';
import Loader from './components/ui/Loader';
import AudioPlayer from './components/ui/AudioPlayer';
import EntryScreen from './components/ui/EntryScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!entered) {
    return <EntryScreen onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="relative overflow-x-hidden font-sans">
      <AudioPlayer playOnMount={true} />
      <WelcomeSection />
      <ProfileSection />
      <CakeSection />
      <GiftsSection />
      <LetterSection />
      <GallerySection />
      <ClosingSection />
    </div>
  );
}

export default App;