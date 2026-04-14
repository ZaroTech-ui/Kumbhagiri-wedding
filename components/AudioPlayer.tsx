import { useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/wedding-song.mp3');
    audio.loop = true;
    audio.volume = 0.5; // Set volume to 50%
    audioRef.current = audio;

    // Function to start playing
    const startPlaying = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // If autoplay fails, try again on first user interaction
          const playOnInteraction = () => {
            audioRef.current?.play().catch(() => {});
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('keydown', playOnInteraction);
          };
          
          document.addEventListener('click', playOnInteraction, { once: true });
          document.addEventListener('touchstart', playOnInteraction, { once: true });
          document.addEventListener('keydown', playOnInteraction, { once: true });
        });
      }
    };

    // Start playing after a short delay
    const timer = setTimeout(startPlaying, 1000);

    // Cleanup function - stops music when component unmounts or page closes
    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, []);

  // No visible UI - music plays in background
  return null;
}
