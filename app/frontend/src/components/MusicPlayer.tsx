import React, { useEffect, useRef, useState } from 'react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.4);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      
      // Try to play and handle autoplay restrictions
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsLoaded(true);
            // Fade in volume
            fadeInVolume();
          })
          .catch((error) => {
            console.log('Autoplay was prevented:', error);
            setIsLoaded(false);
          });
      }
    }
  }, []);

  useEffect(() => {
    if (audioRef.current && isLoaded) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Play error:', e));
        fadeInVolume();
      } else {
        fadeOutVolume();
      }
    }
  }, [isPlaying, isLoaded]);

  const fadeInVolume = () => {
    if (!audioRef.current) return;
    
    let currentVolume = 0;
    const fadeInterval = setInterval(() => {
      if (!audioRef.current) {
        clearInterval(fadeInterval);
        return;
      }
      
      if (currentVolume < volume) {
        currentVolume += 0.05;
        audioRef.current.volume = Math.min(currentVolume, volume);
      } else {
        clearInterval(fadeInterval);
      }
    }, 100);
  };

  const fadeOutVolume = () => {
    if (!audioRef.current) return;
    
    let currentVolume = audioRef.current.volume;
    const fadeInterval = setInterval(() => {
      if (!audioRef.current) {
        clearInterval(fadeInterval);
        return;
      }
      
      if (currentVolume > 0) {
        currentVolume -= 0.05;
        audioRef.current.volume = Math.max(currentVolume, 0);
      } else {
        audioRef.current.pause();
        clearInterval(fadeInterval);
      }
    }, 100);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={onToggle}
        className="bg-rosegold hover:bg-opacity-80 text-cream p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label={isPlaying ? 'Mute music' : 'Play music'}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        )}
      </button>

      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/media/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
