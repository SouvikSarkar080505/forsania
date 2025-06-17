import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';

interface AudioPlayerProps {
  playOnMount?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ playOnMount = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play/pause music
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    // Initialize audio element for 'A Thousand Years' by Christina Perri (local file)
    const audio = new Audio('/audio/a-thousand-years.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audio.muted = false;
    audioRef.current = audio;

    if (playOnMount) {
      audio.play().catch(() => {
        // Most browsers block autoplay with sound, so we start paused
      });
      setIsPlaying(true);
    }

    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [playOnMount]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center">
      <button
        onClick={togglePlay}
        className="bg-princess-pink-500 hover:bg-princess-pink-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        aria-label={isPlaying ? 'Stop music' : 'Play music'}
        title={isPlaying ? 'Stop music' : 'Play music'}
      >
        <Music size={20} />
      </button>
      {isPlaying && (
        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.pause();
              setIsPlaying(false);
            }
          }}
          className="ml-2 bg-princess-pink-400 hover:bg-princess-pink-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          aria-label="Pause music"
          title="Pause music"
        >
          <Pause size={20} />
        </button>
      )}
      {/* <span className="ml-2 text-xs text-pink-700 bg-white/70 px-2 py-1 rounded shadow">
        Now playing: Christina Perri - A Thousand Years
      </span> */}
    </div>
  );
};

export default AudioPlayer;