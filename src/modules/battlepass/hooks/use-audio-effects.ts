import { useRef } from "react";

type AudioEffectOptions = {
  volume?: number; // Default: 1 (max)
  playbackRate?: number; // Optional speed control
};

const useAudioEffects = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playEffect = (src: string, options: AudioEffectOptions = {}) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(src);
    audio.volume = options.volume ?? 0.2;
    audio.playbackRate = options.playbackRate ?? 1;

    // Play & cleanup
    audio.play().catch((error) => {
      console.error("Audio play error:", error);
    });

    // Store reference to stop later if needed
    audioRef.current = audio;

    // Optional: Auto cleanup after ~1s
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    }, 2000); // Stops after 1s
  };

  return { playEffect };
};

export default useAudioEffects;
