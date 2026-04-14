import { useEffect, useRef, useState } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/wedding-song.mp3');
    audio.loop = true;
    audio.volume = 0.5; // Set volume to 50%
    audioRef.current = audio;

    // Function to start playing
    const startPlaying = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowPlayButton(false);
          })
          .catch(() => {
            // Autoplay blocked - show play button
            setShowPlayButton(true);
          });
      }
    };

    // Try to start playing immediately
    startPlaying();

    // Also try on first user interaction
    const playOnInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowPlayButton(false);
          })
          .catch(() => {});
      }
    };

    document.addEventListener('click', playOnInteraction, { once: true });
    document.addEventListener('touchstart', playOnInteraction, { once: true });
    document.addEventListener('scroll', playOnInteraction, { once: true });

    // Cleanup function - stops music when component unmounts or page closes
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
      document.removeEventListener('click', playOnInteraction);
      document.removeEventListener('touchstart', playOnInteraction);
      document.removeEventListener('scroll', playOnInteraction);
    };
  }, []);

  const handlePlayClick = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowPlayButton(false);
        })
        .catch((error) => {
          console.error('Failed to play audio:', error);
        });
    }
  };

  // Show elegant play button only if autoplay is blocked
  if (showPlayButton && !isPlaying) {
    return (
      <button
        onClick={handlePlayClick}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-maroon to-maroon/80 text-gold p-4 shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse"
        aria-label="Play Wedding Music"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        <span className="absolute -top-12 right-0 bg-maroon text-gold px-3 py-1 text-sm whitespace-nowrap">
          🎵 Tap to Play Music
        </span>
      </button>
    );
  }

  return null;
}
